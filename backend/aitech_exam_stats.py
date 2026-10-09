"""Anonymous usage-statistics and feedback backend for the 810-110 AITECH Exam Simulator.

Actions (passed via the `action` input, data via the `payload` dictionary input):
  - record_run       : aggregate one finished exam/practice run into shared counters
  - get_stats        : return aggregated usage statistics; optional payload `period` of
                       current_week | last_week | current_month | last_month | all_time
  - submit_feedback  : store one anonymous feedback entry
  - list_feedback    : return recent anonymous feedback + rating summary

No user identity is stored, so all metrics and feedback are anonymous.
Data is persisted in the task's DBaaS (MongoDB) instance.
"""
import re
from datetime import datetime, timedelta, timezone

from bdblib.exceptions import BDBTaskError

STATS_ID = "global"
PERIODS = ("current_week", "last_week", "current_month", "last_month", "all_time")
COUNTER_FIELDS = (
    "totalRuns", "totalExams", "totalPractice", "totalQuestionsAnswered", "totalCorrect",
    "scoreSum", "scoreCount", "examScoreSum", "examScoreCount", "examPassCount",
)
FEEDBACK_LIMIT_MAX = 100
ALLOWED_CONTEXTS = ("exam", "practice", "spontaneous")


def _now_iso():
    return datetime.now(timezone.utc).isoformat()


def _period_range(period, today):
    """Return [start, end) dates (UTC, weeks start Monday) or None for all_time."""
    if period == "current_week":
        start = today - timedelta(days=today.weekday())
        return start, start + timedelta(days=7)
    if period == "last_week":
        end = today - timedelta(days=today.weekday())
        return end - timedelta(days=7), end
    if period == "current_month":
        start = today.replace(day=1)
        return start, (start + timedelta(days=32)).replace(day=1)
    if period == "last_month":
        end = today.replace(day=1)
        return (end - timedelta(days=1)).replace(day=1), end
    return None


def _merge_daily(docs):
    merged = {"domains": {}}
    for doc in docs:
        for field in COUNTER_FIELDS:
            merged[field] = merged.get(field, 0) + _to_int(doc.get(field))
        for slug, entry in (doc.get("domains") or {}).items():
            entry = entry or {}
            target = merged["domains"].setdefault(
                slug, {"name": entry.get("name", slug), "correct": 0, "total": 0}
            )
            target["correct"] += _to_int(entry.get("correct"))
            target["total"] += _to_int(entry.get("total"))
        last = doc.get("lastUpdated")
        if last and last > (merged.get("lastUpdated") or ""):
            merged["lastUpdated"] = last
    return merged


def _slug(name):
    return re.sub(r"[^a-z0-9]+", "_", name.lower()).strip("_") or "unknown"


def _to_int(value, default=0):
    try:
        return int(value)
    except (TypeError, ValueError):
        return default


def _summarize(doc):
    doc = doc or {}
    domains = []
    for slug, entry in (doc.get("domains") or {}).items():
        entry = entry or {}
        total = _to_int(entry.get("total"))
        correct = _to_int(entry.get("correct"))
        domains.append({
            "domain": entry.get("name", slug),
            "correct": correct,
            "total": total,
            "percentage": round(correct / total * 100) if total else 0,
        })
    domains.sort(key=lambda item: item["domain"])

    score_count = _to_int(doc.get("scoreCount"))
    exam_count = _to_int(doc.get("examScoreCount"))
    return {
        "scope": "shared",
        "totalRuns": _to_int(doc.get("totalRuns")),
        "totalExams": _to_int(doc.get("totalExams")),
        "totalPractice": _to_int(doc.get("totalPractice")),
        "totalQuestionsAnswered": _to_int(doc.get("totalQuestionsAnswered")),
        "totalCorrect": _to_int(doc.get("totalCorrect")),
        "avgScore": round(_to_int(doc.get("scoreSum")) / score_count) if score_count else 0,
        "avgExamScore": round(_to_int(doc.get("examScoreSum")) / exam_count) if exam_count else 0,
        "passRate": round(_to_int(doc.get("examPassCount")) / exam_count * 100) if exam_count else 0,
        "domains": domains,
        "firstSeen": doc.get("firstSeen"),
        "lastUpdated": doc.get("lastUpdated"),
    }


def _record_run(db, payload):
    mode = "practice" if payload.get("mode") == "practice" else "exam"
    total = _to_int(payload.get("total"))
    correct = _to_int(payload.get("correct"))
    score = _to_int(payload.get("score"))
    passed = bool(payload.get("passed"))
    now = _now_iso()

    inc = {
        "totalRuns": 1,
        "totalQuestionsAnswered": total,
        "totalCorrect": correct,
        "scoreSum": score,
        "scoreCount": 1,
    }
    set_fields = {"lastUpdated": now}

    if mode == "practice":
        inc["totalPractice"] = 1
    else:
        inc["totalExams"] = 1
        inc["examScoreSum"] = score
        inc["examScoreCount"] = 1
        if passed:
            inc["examPassCount"] = 1

    domains = payload.get("domains")
    if isinstance(domains, list):
        for entry in domains:
            entry = entry or {}
            name = str(entry.get("domain") or "").strip()
            if not name:
                continue
            slug = _slug(name)
            inc[f"domains.{slug}.correct"] = _to_int(entry.get("correct"))
            inc[f"domains.{slug}.total"] = _to_int(entry.get("total"))
            set_fields[f"domains.{slug}.name"] = name

    db.stats.update_one(
        {"_id": STATS_ID},
        {"$inc": inc, "$set": set_fields, "$setOnInsert": {"firstSeen": now}},
        upsert=True,
    )
    db.stats_daily.update_one(
        {"_id": now[:10]},
        {"$inc": inc, "$set": set_fields},
        upsert=True,
    )
    return _summarize(db.stats.find_one({"_id": STATS_ID}))


def _get_stats(db, payload):
    period = payload.get("period") if payload.get("period") in PERIODS else "all_time"
    overall = db.stats.find_one({"_id": STATS_ID}) or {}
    bounds = _period_range(period, datetime.now(timezone.utc).date())

    if bounds is None:
        stats = _summarize(overall)
        period_start = period_end = None
    else:
        start, end = bounds
        docs = db.stats_daily.find({"_id": {"$gte": start.isoformat(), "$lt": end.isoformat()}})
        stats = _summarize(_merge_daily(list(docs)))
        period_start = start.isoformat()
        period_end = (end - timedelta(days=1)).isoformat()

    earliest = db.stats_daily.find_one({}, sort=[("_id", 1)])
    stats.update({
        "period": period,
        "periodStart": period_start,
        "periodEnd": period_end,
        "launchDate": overall.get("firstSeen"),
        "firstSeen": overall.get("firstSeen"),
        "trackingSince": earliest["_id"] if earliest else None,
    })
    return stats


def _submit_feedback(db, payload):
    rating = max(1, min(5, _to_int(payload.get("rating"))))
    score = payload.get("score")
    db.feedback.insert_one({
        "rating": rating,
        "comment": str(payload.get("comment") or "")[:1000],
        "context": payload.get("context") if payload.get("context") in ALLOWED_CONTEXTS else "spontaneous",
        "score": _to_int(score) if isinstance(score, (int, float)) else None,
        "ts": _now_iso(),
    })
    return {"ok": True, "scope": "shared"}


def _list_feedback(db, payload):
    limit = max(1, min(FEEDBACK_LIMIT_MAX, _to_int(payload.get("limit"), 25)))
    # Only surface entries that actually carry a comment so that newer
    # comment-less ratings never push older written feedback out of view.
    items = list(
        db.feedback.find({"comment": {"$regex": r"\S"}}, {"_id": 0})
        .sort("ts", -1)
        .limit(limit)
    )
    count = db.feedback.count_documents({})
    average = 0
    if count:
        aggregate = list(db.feedback.aggregate([{"$group": {"_id": None, "avg": {"$avg": "$rating"}}}]))
        if aggregate and aggregate[0].get("avg") is not None:
            average = round(aggregate[0]["avg"], 1)
    return {"scope": "shared", "count": int(count), "averageRating": average, "items": items}


def task(env, action, payload=None):
    payload = payload if isinstance(payload, dict) else {}
    db = env.create_mongo_client()

    if action == "record_run":
        return _record_run(db, payload)
    if action == "get_stats":
        return _get_stats(db, payload)
    if action == "submit_feedback":
        return _submit_feedback(db, payload)
    if action == "list_feedback":
        return _list_feedback(db, payload)

    raise BDBTaskError(f"Unknown action: {action}")
