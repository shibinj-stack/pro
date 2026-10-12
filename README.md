# ClinicDesk — Minimal MEAN deployment sample

This is a newly created, small demonstration app for the Week 22 cloud-deployment workflow. It is **not** the user's original ClinicDesk project and should not be represented as such. It provides a Node/Express API, MongoDB connectivity, a small Angular-free static UI, Docker configuration, and a GitHub Actions workflow intended to build/test and deploy to Render after the user configures credentials.

## Architecture
- API: Node.js + Express; `/health` returns a real response and reports MongoDB readiness.
- UI: static HTML/JS page that calls the API.
- Database: MongoDB URI supplied as a secret.
- Container: `Dockerfile` for Render Web Service.
- Remote CI: `.github/workflows/ci.yml` builds the Docker image locally on GitHub-hosted runner and runs a smoke test. It does **not** create a Render deployment by itself.
- Render deploy: Configure Render's GitHub auto-deploy on the backend service. To trigger Render Deploy Hook from GitHub Actions, add `RENDER_DEPLOY_HOOK_URL` as a GitHub Actions secret; then run the workflow manually or push to main.

## Important
This is a fresh sample app, not the full original ClinicDesk MEAN stack app. A Render URL/deployment ID/health status cannot exist until you connect this repository to GitHub/Render and successfully deploy it. No real deployment evidence is included.

## Deploy
See `docs/deployment.md`.
