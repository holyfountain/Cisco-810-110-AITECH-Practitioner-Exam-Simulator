# 810-110 AITECH Exam Simulator

Local browser-based simulator for Cisco 810-110 AI Technical Practitioner study sessions.

## Current version

- Version: 1.1
- Author: Tiago Antunes

## Current functionality

- Exam mode with configurable question counts: `20`, `30`, `40`, `60`, `100`, or `ALL`
- Practice mode with immediate correctness feedback after each answer
- Practice flow setting with `Auto-advance` or `Manual Next` behavior after correct answers
- Configurable passing score: `60%`, `70%`, `80%`, `90%`, or `100%`
- Practice defaults to 20 questions, with optional larger sets up to the full bank
- Retry flow for missed practice questions from the results screen
- Results summary card includes `Retry Wrong Answers` and `Home` actions
- Saved practice-session persistence in local storage with Resume and Discard controls on the home screen
- Question progress carousel with left and right controls for fast navigation
- Per-session scoring and domain breakdown on the results screen
- Light and dark theme toggle
- About dialog with author, version, and README link
- Responsive layout tuned for desktop and mobile widths

## Main files

- `index.html`: application shell and UI structure
- `styles.css`: theme, layout, responsive behavior, modal styling, and component states
- `app.js`: session controller, persistence, scoring, and rendering logic
- `questions-db.js`: generated browser-ready question bank consumed by the UI
- `questions-source.txt`: canonical source for questions, answers, rationales, and domains
- `normalize-questions-source.mjs`: source normalizer and cleanup step
- `generate-questions-db.mjs`: generator for rebuilding `questions-db.js`
- `question-bank.js`: parser and domain classification helpers used during generation

## Running locally

Open `index.html` in a browser. The simulator is designed to run as a local static page.

## Question maintenance workflow

All question content lives in `questions-source.txt`.

Do not edit `questions-db.js` by hand. It is generated output.

Recommended workflow:

1. Edit `questions-source.txt`.
2. Run the generator:

```powershell
node .\generate-questions-db.mjs
```

This rebuild also runs the normalizer first, so a separate normalize step is usually unnecessary.

If you want to run the steps individually:

```powershell
node .\normalize-questions-source.mjs
node .\generate-questions-db.mjs
```

## Persistence details

- Theme preference is stored in local storage under `aitech-theme`
- Saved practice sessions are stored in local storage under `aitech-practice-state`

## Disclaimer

- This exam simulator was vibe coded, and the question set is still subject to verification.
- Please report any inaccuracy to the author for immediate correction.
- The author is exempt from any responsibility for the results of real exams taken by students using this simulator as a study aid.

## Notes

- `questions-db.js` is generated from `questions-source.txt`
- Practice persistence is explicit and user-controlled from the home screen
- Exam sessions are generated from the question bank with scaled domain coverage based on the selected count