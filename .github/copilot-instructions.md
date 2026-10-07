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