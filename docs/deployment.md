# Automated Render deployment and evidence

## What is automated
The root `render.yaml` defines a Render Docker Web Service for the API. Render deploys commits automatically, and the GitHub Actions workflow runs API tests, builds the Docker image, waits for the live health endpoint, records the actual response, and commits evidence after a service URL is configured.

This repository remains a minimal ClinicDesk deployment demo, not the full original MEAN stack application.

## One-time Render setup (required)
1. Open the Render Dashboard and choose **New → Blueprint**.
2. Connect GitHub account `shibinj-stack`, select repository `pro`, branch `main`, then apply the root `render.yaml` Blueprint.
3. Wait for the first deployment to finish. Render will generate the actual public URL; it must not be guessed.
4. In GitHub, open **Settings → Secrets and variables → Actions → Variables** and add:
   - Name: `RENDER_SERVICE_URL`
   - Value: the real Render base URL shown in the service dashboard, e.g. `https://<actual-service>.onrender.com` (replace with the actual value).
5. Push any relevant commit to `main`, or use **Actions → ClinicDesk deployment checks → Run workflow** and provide the real URL in `backend_url`.

## Automatic evidence after setup
On main-branch pushes, GitHub Actions runs tests and a Docker build, then retries the live `/health` endpoint for up to eight minutes. Success requires HTTP 200 and Render-injected metadata showing the actual service ID/name, public URL, branch, and deployed commit SHA. For app/config changes, the live commit must match the commit being checked.

On verification, the workflow writes the real response and UTC check timestamp to `evidence/health-check.txt`, updates `evidence/deployment.md`, and commits both files. Evidence-only commits are excluded from the pipeline triggers and Render build filters to prevent loops. If health verification fails, the actual last response and diagnostic status are recorded and the workflow fails rather than reporting a false pass.

## Database mode
The current Blueprint sets `ALLOW_NO_DATABASE=true` for a database-free deployment smoke test. This proves the API is reachable, not that MongoDB works. For real database validation, configure a valid `MONGODB_URI` in Render, then remove/set `ALLOW_NO_DATABASE=false` and confirm the health response reports `database: "connected"`.

## Limits of automated evidence
The app returns Render's real runtime service and Git commit metadata. Render's exact deploy event timestamp and deploy ID are not exposed by this app's HTTP endpoint; record those separately from the Render service's **Events** page if the course rubric explicitly requires them. Never fill such fields with guessed values.

References:
- Render Blueprint specification: https://render.com/docs/blueprint-spec
- Render runtime environment variables: https://render.com/docs/environment-variables
