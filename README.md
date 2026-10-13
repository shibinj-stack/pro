# ClinicDesk — Week 22 Task 03 deployment demo

This repository is a **minimal deployment demo** used to validate the cloud-deployment workflow. It is not the original full ClinicDesk MEAN stack application.

## Live Render deployment — MongoDB connected

The live health endpoint was checked by the user and returned the following values:
- `status: "ok"`
- `database: "connected"`
- `databaseUriConfigured: true`
- `allowNoDatabase: false`
- Render service: `clinicdesk-api-demo`
- Service ID: `srv-db698s8473hc73dkp5vg`
- Public URL: https://clinicdesk-api-demo.onrender.com
- Deployed source commit reported by Render: `6d8469be4ea7b44e4bedf0c04ed09b829cd12df2`
- Timestamp displayed in the user's health-check screenshot: `2026-10-13T04:18:41.515Z`

A new GitHub Actions run is triggered by this documentation commit to capture its own fresh health response, timestamps and deployment metadata into the task-folder evidence.

## Build, push and evidence

The GitHub Actions workflow runs API HTTP tests, builds a Docker image, pushes a versioned CI image to GHCR, calls the live health endpoint and generates stage-timestamped evidence under `MEAN/module-22-dockerization-production-cloud/task-03-deploy-to-the-cloud-and-commit-the/`.

The Render service is Blueprint-managed and builds from `server/Dockerfile`; the GHCR image is a separate CI artifact and is not claimed to be the active Render image.

## Automated verification

The full deployment gate requires the live health response to show all of:
- `database: "connected"`
- `databaseUriConfigured: true`
- `allowNoDatabase: false`

If the response no longer meets those conditions, the workflow records the actual response and fails the full deployment check rather than claiming success. Never commit MongoDB credentials; the URI belongs only in Render's secret environment settings.

Detailed database setup: `docs/mongodb-setup.md`.
