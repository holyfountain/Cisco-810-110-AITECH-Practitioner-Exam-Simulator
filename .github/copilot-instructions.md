# Repository Workflow Notes

- The enterprise repository on `wwwin-github.cisco.com` is the source of truth. Its remote is typically `origin`, and pushes should use the `tantunes` account.
- The public GitHub repository at `github.com/holyfountain/Cisco-810-110-AITECH-Practitioner-Exam-Simulator` is a mirror only.
- Do not merge or rebase the public repository history into this workspace when syncing changes.
- If the public repository push is rejected because histories differ, prefer force-pushing the current branch to the public mirror after confirming the enterprise push succeeded.
- If a second remote is needed for the mirror, use a separate remote such as `public` that points to the `holyfountain` GitHub repository.