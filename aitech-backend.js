/**
 * Usage-stats and feedback backend abstraction.
 *
 * When the app is served from BDB (scripts.cisco.com) it calls the shared
 * `aitech_exam_stats` task so stats and feedback are aggregated across all
 * users. Everywhere else (GitHub Pages, local, offline) it transparently
 * falls back to per-browser localStorage so the UI keeps working.
 */
const AitechBackend = (() => {
  const TASK_NAME = "aitech_exam_stats";
  const LOCAL_STATS_KEY = "aitech-usage-stats";
  const LOCAL_FEEDBACK_KEY = "aitech-feedback";
  const FEEDBACK_LIST_LIMIT = 25;

  const isBdbHost = /(^|\.)scripts\.cisco\.com$/i.test(window.location.hostname);
  const isDev = window.location.pathname.includes("/app_dev/");

  function readLocalJson(key, fallback) {
    try {
      const raw = window.localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function writeLocalJson(key, value) {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      /* storage may be unavailable (private mode); ignore */
    }
  }

  function emptyAccumulator() {
    const now = new Date().toISOString();
    return {
      totalRuns: 0,
      totalExams: 0,
      totalPractice: 0,
      totalQuestionsAnswered: 0,
      totalCorrect: 0,
      scoreSum: 0,
      scoreCount: 0,
      examScoreSum: 0,
      examScoreCount: 0,
      examPassCount: 0,
      domains: {},
      firstSeen: now,
      lastUpdated: now
    };
  }

  function applyRunToAccumulator(accumulator, summary) {
    const mode = summary.mode === "practice" ? "practice" : "exam";
    const total = Number(summary.total) || 0;
    const correct = Number(summary.correct) || 0;
    const score = Number(summary.score) || 0;

    accumulator.totalRuns += 1;
    accumulator.totalQuestionsAnswered += total;
    accumulator.totalCorrect += correct;
    accumulator.scoreSum += score;
    accumulator.scoreCount += 1;

    if (mode === "practice") {
      accumulator.totalPractice += 1;
    } else {
      accumulator.totalExams += 1;
      accumulator.examScoreSum += score;
      accumulator.examScoreCount += 1;
      if (summary.passed) {
        accumulator.examPassCount += 1;
      }
    }

    if (Array.isArray(summary.domains)) {
      summary.domains.forEach((entry) => {
        if (!entry || !entry.domain) {
          return;
        }
        const current = accumulator.domains[entry.domain] || { correct: 0, total: 0 };
        current.correct += Number(entry.correct) || 0;
        current.total += Number(entry.total) || 0;
        accumulator.domains[entry.domain] = current;
      });
    }

    accumulator.lastUpdated = new Date().toISOString();
    return accumulator;
  }

  function summarizeAccumulator(accumulator, scope) {
    const source = accumulator || emptyAccumulator();
    const domains = Object.entries(source.domains || {})
      .map(([domain, entry]) => ({
        domain,
        correct: entry.correct || 0,
        total: entry.total || 0,
        percentage: entry.total ? Math.round((entry.correct / entry.total) * 100) : 0
      }))
      .sort((left, right) => left.domain.localeCompare(right.domain));

    return {
      scope,
      totalRuns: source.totalRuns || 0,
      totalExams: source.totalExams || 0,
      totalPractice: source.totalPractice || 0,
      totalQuestionsAnswered: source.totalQuestionsAnswered || 0,
      totalCorrect: source.totalCorrect || 0,
      avgScore: source.scoreCount ? Math.round(source.scoreSum / source.scoreCount) : 0,
      avgExamScore: source.examScoreCount ? Math.round(source.examScoreSum / source.examScoreCount) : 0,
      passRate: source.examScoreCount ? Math.round((source.examPassCount / source.examScoreCount) * 100) : 0,
      domains,
      firstSeen: source.firstSeen || null,
      lastUpdated: source.lastUpdated || null
    };
  }

  function extractTaskResult(responseJson) {
    if (!responseJson || typeof responseJson !== "object") {
      return null;
    }
    if (typeof responseJson.code === "number" && responseJson.code >= 400) {
      throw new Error(`Backend task returned code ${responseJson.code}`);
    }
    const data = responseJson.data || {};
    if (data.variables && typeof data.variables.result !== "undefined") {
      return data.variables.result;
    }
    return data.result || null;
  }

  async function callTask(action, payload) {
    const response = await fetch(`/api/v2/jobs/${TASK_NAME}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ dev: isDev, input: { action, payload: payload || {} } })
    });

    if (!response.ok) {
      throw new Error(`Backend responded ${response.status}`);
    }

    return extractTaskResult(await response.json());
  }

  function recordRunLocally(summary) {
    const accumulator = applyRunToAccumulator(readLocalJson(LOCAL_STATS_KEY, emptyAccumulator()), summary);
    writeLocalJson(LOCAL_STATS_KEY, accumulator);
    return summarizeAccumulator(accumulator, "local");
  }

  function getStatsLocally() {
    return summarizeAccumulator(readLocalJson(LOCAL_STATS_KEY, emptyAccumulator()), "local");
  }

  function submitFeedbackLocally(feedback) {
    const list = readLocalJson(LOCAL_FEEDBACK_KEY, []);
    list.unshift(feedback);
    writeLocalJson(LOCAL_FEEDBACK_KEY, list.slice(0, 200));
    return { ok: true, scope: "local" };
  }

  function listFeedbackLocally(limit) {
    const list = readLocalJson(LOCAL_FEEDBACK_KEY, []);
    return {
      scope: "local",
      count: list.length,
      averageRating: list.length
        ? Math.round((list.reduce((sum, item) => sum + (Number(item.rating) || 0), 0) / list.length) * 10) / 10
        : 0,
      items: list.slice(0, limit || FEEDBACK_LIST_LIMIT)
    };
  }

  function normalizeSummary(rawSummary) {
    return {
      mode: rawSummary.mode === "practice" ? "practice" : "exam",
      score: Number(rawSummary.score) || 0,
      correct: Number(rawSummary.correct) || 0,
      total: Number(rawSummary.total) || 0,
      passed: Boolean(rawSummary.passed),
      domains: Array.isArray(rawSummary.domains)
        ? rawSummary.domains.map((entry) => ({
            domain: String(entry.domain || ""),
            correct: Number(entry.correct) || 0,
            total: Number(entry.total) || 0
          }))
        : []
    };
  }

  function normalizeFeedback(rawFeedback) {
    const rating = Math.max(1, Math.min(5, Number(rawFeedback.rating) || 0));
    return {
      rating,
      comment: String(rawFeedback.comment || "").slice(0, 1000),
      context: ["exam", "practice", "spontaneous"].includes(rawFeedback.context) ? rawFeedback.context : "spontaneous",
      score: rawFeedback.score === null || typeof rawFeedback.score === "undefined" ? null : Number(rawFeedback.score),
      ts: new Date().toISOString()
    };
  }

  async function recordRun(rawSummary) {
    const summary = normalizeSummary(rawSummary);
    recordRunLocally(summary);
    if (!isBdbHost) {
      return getStatsLocally();
    }
    try {
      const remote = await callTask("record_run", summary);
      return remote && typeof remote === "object" ? { scope: "shared", ...remote } : getStatsLocally();
    } catch (error) {
      return getStatsLocally();
    }
  }

  async function getStats() {
    if (!isBdbHost) {
      return getStatsLocally();
    }
    try {
      const remote = await callTask("get_stats", {});
      return remote && typeof remote === "object" ? { scope: "shared", ...remote } : getStatsLocally();
    } catch (error) {
      return getStatsLocally();
    }
  }

  async function submitFeedback(rawFeedback) {
    const feedback = normalizeFeedback(rawFeedback);
    submitFeedbackLocally(feedback);
    if (!isBdbHost) {
      return { ok: true, scope: "local" };
    }
    try {
      const remote = await callTask("submit_feedback", feedback);
      return remote && typeof remote === "object" ? { ok: true, scope: "shared", ...remote } : { ok: true, scope: "shared" };
    } catch (error) {
      return { ok: true, scope: "local" };
    }
  }

  async function listFeedback(limit) {
    const requestedLimit = limit || FEEDBACK_LIST_LIMIT;
    if (!isBdbHost) {
      return listFeedbackLocally(requestedLimit);
    }
    try {
      const remote = await callTask("list_feedback", { limit: requestedLimit });
      return remote && typeof remote === "object" ? { scope: "shared", ...remote } : listFeedbackLocally(requestedLimit);
    } catch (error) {
      return listFeedbackLocally(requestedLimit);
    }
  }

  return {
    isShared: isBdbHost,
    recordRun,
    getStats,
    submitFeedback,
    listFeedback
  };
})();

window.AitechBackend = AitechBackend;
