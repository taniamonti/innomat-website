# Agent instructions

## Git and pull requests

- Follow all contribution rules in [`CONTRIBUTING.md`](CONTRIBUTING.md), especially the pull request body requirements.
- Never commit or push directly to `main`. Work on a dedicated branch and open a pull request.
- Before using `gh pr create` or `gh pr edit`, review the exact title and body for compliance with `CONTRIBUTING.md`.
- After creating a pull request, retrieve its author with `gh` and add that account as the assignee with `gh`. Do not assume that the authenticated account is the pull request author.
- After creating or updating a pull request, use `gh` to add every label from `bug`, `enhancement`, `documentation`, and `refactoring` that matches the contribution.
- When explicitly authorised to merge a pull request, use `gh pr merge --rebase` so that the commit history stays linear. Never merge a pull request without explicit user authorisation.
