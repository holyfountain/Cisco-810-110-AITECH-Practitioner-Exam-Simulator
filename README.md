# 810-110 AITECH Exam Simulator

This workspace contains a local exam simulator for the Cisco 810-110 AI Technical Practitioner material.

## Canonical source

All questions and explanations live in `questions-source.txt`.

Do not edit `questions-db.js` by hand. It is generated.

## Maintenance workflow

1. Edit `questions-source.txt`.
2. Run `node ./normalize-questions-source.mjs` to normalize question formatting, refresh generated explanation text where applicable, and align domain headers.
3. Run `node ./generate-questions-db.mjs` to rebuild `questions-db.js` for the simulator.

`generate-questions-db.mjs` already invokes the normalizer first, so in normal use this is enough:

```powershell
node ./generate-questions-db.mjs
```

## Main files

- `questions-source.txt`: single source of truth for all questions
- `normalize-questions-source.mjs`: canonical source normalizer and explanation/domain rewrite script
- `question-bank.js`: parser and domain classifier
- `generate-questions-db.mjs`: regenerates the browser database file
- `questions-db.js`: generated question bank used by the UI
- `app.js`, `index.html`, `styles.css`: simulator UI
