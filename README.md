# 810-110 AITECH Exam Simulator

Browser-based study simulator for Cisco 810-110 AI Technical Practitioner exam preparation.

## Student Access

- Cisco (primary, hosted on BDB): https://scripts.cisco.com/app/aitech_exam_simulator
- Public mirror: https://holyfountain.github.io/Cisco-810-110-AITECH-Practitioner-Exam-Simulator/

The former Cisco GitHub Pages URL (https://wwwin-github.cisco.com/pages/tantunes/Cisco-810-110-AITECH-Practitioner-Exam-Simulator/) automatically redirects to the BDB-hosted app.

## Current Version

- `1.3`

## Latest Update

- Corrected the answer key for Question `79` in the built-in question bank.
- Clarified the prompting terminology used in Question `59`.
- Refreshed the in-app release metadata and `Last Updated` timestamp.

## Maintenance

- A tracked pre-commit hook refreshes `APP_LAST_UPDATED` in `app.js` automatically before each commit.
- If hooks are not active in a fresh clone, run `git config core.hooksPath .githooks` from the repository root.

## Hosting

- The app is served as a BDB web app task: `aitech_exam_simulator` (`https://scripts.cisco.com/app/aitech_exam_simulator`).
- Shared anonymous usage stats and feedback are stored by the backend task `aitech_exam_stats` (DBaaS).
- `aitech-backend.js` calls the shared backend when served from `scripts.cisco.com`; on the public mirror it falls back to per-browser `localStorage`.
- To update the BDB app: edit files locally, upload them to the `aitech_exam_simulator` task (git push + `git-pull`, or `bdb task edit`), then deploy.

## Description

This simulator provides two study flows from the built-in question bank:

- Exam mode for scored simulation runs
- Practice mode for immediate answer feedback and targeted retry study

It is designed to help students rehearse question flow, review answers, and track performance by official exam domain.

## Features

- Configurable question counts: `20`, `30`, `40`, `60`, `100`, or `ALL`
- Configurable passing score: `60%`, `70%`, `80%`, `90%`, or `100%`
- Randomized question selection for each new run
- Randomized answer order while preserving correct-answer validation
- Practice mode with immediate correct or incorrect feedback
- Practice flow setting with `Auto-advance` or `Manual Next`
- Retry queue for missed practice questions
- Saved practice-session resume and discard controls
- Results summary with score, correct count, retry count or passing score, and performance by domain
- Question progress carousel for quick navigation during a session
- Light and dark theme toggle
- Responsive layout for desktop and mobile screens
- About dialog with author, version, README link, and disclaimer

## Disclaimer

- This exam simulator was vibe coded, and the question set is still subject to verification.
- Please report any inaccuracy to the author for immediate correction.
- The author is exempt from any responsibility for the results of real exams taken by students using this simulator as a study aid.