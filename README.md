# ClinicDesk — Week 22 Task 03 deployment demo

This repository is a **minimal deployment demo** used to validate the cloud-deployment flow. It is not the original full ClinicDesk MEAN stack application.

## Render service
- Provider: Render Docker Web Service
- Service: `clinicdesk-api-demo`
- Service ID: `srv-db698s8473hc73dkp5vg`
- URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Blueprint region: Oregon (`oregon`)

## Build, push and evidence
The GitHub Actions workflow runs API HTTP tests, builds the Docker image, pushes a versioned image to GHCR, calls the live health endpoint, and generates stage-timestamped evidence under `MEAN/module-22-dockerization-production-cloud/task-03-deploy-to-the-cloud-and-commit-the/`.

The Render service is source/Blueprint managed and builds from `server/Dockerfile`; the GHCR image is a separate CI artifact and is not claimed to be the active Render image.

## MongoDB is still required for full verification
The most recent live check has reported `database: "not_configured"`. This does **not** prove MongoDB connectivity and is not a full pass. The Render Blueprint uses `sync: false` for `MONGODB_URI` and `ALLOW_NO_DATABASE`. Configure a real MongoDB Atlas URI and set `ALLOW_NO_DATABASE=false` in the Render Environment page. Do not commit the connection URI. The CI workflow requires the live health response to report `database: "connected"` before it accepts a full deployment pass.

Detailed steps: `docs/deployment.md`.
