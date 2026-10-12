# Deploy ClinicDesk demo to Render

## Scope
This repository is currently a minimal ClinicDesk deployment demo, not the original full MEAN stack application. The Render Blueprint below deploys only the Express API. Use this only if a demo API is acceptable for the Week 22 Task 03 rubric.

## Render configuration
The root `render.yaml` defines a Docker web service:
- Service name: `clinicdesk-api-demo`
- Region: Oregon (`oregon`)
- Dockerfile: `server/Dockerfile`
- Docker context: `server`
- Health-check path: `/health`
- Automatic deploy policy: `checksPass`, so Render should deploy linked branch commits after CI checks pass.

The configuration currently enables `ALLOW_NO_DATABASE=true` only for a database-free smoke deployment. This can make `/health` return HTTP 200 without proving MongoDB connectivity. For a database-backed deployment, configure a valid `MONGODB_URI` in the Render dashboard, set `MONGODB_DB=clinicdesk`, and remove or set `ALLOW_NO_DATABASE=false`.

## Create the live service
1. Open the Render Dashboard and choose **New → Blueprint**.
2. Connect the GitHub account that has access to `https://github.com/shibinj-stack/pro`, select branch `main`, and select the root `render.yaml`.
3. Review the service and region, then apply the Blueprint. If Render asks to authorize GitHub, grant access to this repository.
4. Wait for the first deployment to finish. Check the service's Events/Logs for the actual build and deploy result.
5. Copy the Render public URL from the service dashboard. Open `https://<actual-service-url>/health` and verify the actual HTTP status and JSON response.

Render docs: https://render.com/docs/blueprint-spec and https://render.com/docs/web-services

## Capture genuine evidence
After the service is deployed:
1. Open the repository's **Actions** tab and select **ClinicDesk deployment checks** → **Run workflow**.
2. Enter the real Render base URL in `backend_url` and the actual Render deployment ID or deployed commit SHA in `deployment_id`.
3. The workflow makes an HTTP request to `/health`. If the status is not 2xx, the job fails. On success, it writes the real request time, HTTP status, and response body to `evidence/health-check.txt` and commits that file.
4. Copy the actual Render service name, region, URL, deploy ID, timestamp, Events result, and successful GitHub Actions run URL into `evidence/deployment.md`.

Do not invent evidence or replace `PENDING` fields until the matching real event has been verified. Never commit database URIs, passwords, API tokens, or other secrets.
