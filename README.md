# ClinicDesk — Week 22 Task 03 deployment demo

This repository contains a **minimal Express API deployment demo** for validating the cloud-deployment workflow. It is not the user's original full ClinicDesk MEAN stack application.

## Live Render service — verified

- Provider: Render
- Service type: Docker Web Service
- Service name: `clinicdesk-api-demo`
- Service ID: `srv-db698s8473hc73dkp5vg`
- Public URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Blueprint region setting: `oregon` (Oregon)
- Deployed branch: `main`
- Deployed commit SHA (runtime metadata): `9c647ccf3fb6f443267f01b6e8f1505488bf70a8`
- Latest checked-at timestamp recorded in the evidence at last verification: `2026-10-12T09:00:09Z`
- Health result at that check: HTTP `200`

Source-of-truth evidence files:
- `evidence/health-check.txt`: exact URL, check timestamp, status code, full response body, service ID, deployed branch and deployed commit.
- `evidence/deployment.md`: verification summary and deployment identity.
- `evidence/host-environment.md`: provider/service metadata and documented application/host configuration values.

## Environment configuration

The committed Render Blueprint sets:
- `ALLOW_NO_DATABASE=true` for a database-free smoke deployment.
- `MONGODB_DB=clinicdesk`.

The live health payload reported `database: "not_configured"`, so **MongoDB connectivity has not been tested or demonstrated**. `MONGODB_URI` is not configured in the committed Blueprint; no secret value is included in the repository. `CORS_ORIGIN` is not set in the committed Blueprint unless separately overridden in the Render dashboard.

Render supplies runtime metadata used by the `/health` response, including service name, service ID, public URL, Git branch and deployed commit SHA.

## Verification

The GitHub Actions workflow `.github/workflows/ci.yml` runs API HTTP tests, builds the Docker image, probes the live Render endpoint, and records the real response and check time. The latest reviewed live-verification run is:
https://github.com/shibinj-stack/pro/actions/runs/38226952649

The health check proves API reachability in demo mode; it does not prove a working MongoDB connection or the correctness of the full application.

## Architecture
- API: Node.js + Express
- Database client: MongoDB driver
- UI: small static HTML/JS demo in `web/`
- Container: `server/Dockerfile`
- Deployment config: `render.yaml`
- Tests: `server/test/health.test.js`

See `docs/deployment.md` for deployment and evidence details.
