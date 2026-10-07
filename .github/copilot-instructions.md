# Repository Workflow Notes

- The enterprise repository on `wwwin-github.cisco.com` is the source of truth. Its remote is typically `origin`, and pushes should use the `tantunes` account.
- The public GitHub repository at `github.com/holyfountain/Cisco-810-110-AITECH-Practitioner-Exam-Simulator` is a mirror only.
- Do not merge or rebase the public repository history into this workspace when syncing changes.
- If the public repository push is rejected because histories differ, prefer force-pushing the current branch to the public mirror after confirming the enterprise push succeeded.
- If a second remote is needed for the mirror, use a separate remote such as `public` that points to the `holyfountain` GitHub repository.

## BDB Production Deployments

- The live application is the BDB task `aitech_exam_simulator` at `https://scripts.cisco.com/app/aitech_exam_simulator`; pushing this enterprise repository alone does not update production.
- The task has its own Git mirror: `https://github.com/bdb-tasks/aitech_exam_simulator.git`, using its `master` branch. Verify the BDB dev code before syncing because it can differ from this workspace.
- For a production change, sync the required files to the BDB task dev version, run the task in dev, then use the BDB deploy operation without a commit SHA so it deploys the current task HEAD.
- After starting the deploy, check the BDB deployment status until it reaches a completed state. Do not report the app as deployed while its state is `START_DEPLOY`.
## Propagating BDB Changes to GitHub

- Any change made in or deployed to BDB must also reach both GitHub copies: the enterprise repo (`origin`) and the public mirror (`public`). Treat a BDB update as incomplete until both are pushed.
- Sync order: compare BDB code to the workspace, copy only the app files BDB shares (`app.js`, `index.html`, `styles.css`, `README.md`, `aitech-backend.js`, `questions-db.js`, `icons/`), commit, push `origin`, then push `public`. If BDB is stated to be the latest, BDB wins on conflicting files.
- Never copy BDB-only files to GitHub: `bdb.json`, `__init__.py`, `assets/booking/*`. The booking screenshots and `BookingExamInstructions/` are internal-only and must not reach the public mirror.
- To read BDB code locally, clone `https://github.com/bdb-tasks/aitech_exam_simulator.git` over HTTPS as `tantunes_cisco`; SSH authenticates as `tantunescisco`, which lacks access.
- The default `github.com` account `tantunes_cisco` cannot write to the public mirror. Push with the `holyfountain` token for that one command without switching accounts, e.g. `git -c credential.helper= -c "http.https://github.com/.extraheader=AUTHORIZATION: basic <base64 holyfountain:token>" push public main:main`.
- Verify both remotes with `git ls-remote` against the local `HEAD` SHA before reporting done.
