# Render deployment and evidence record

## Current verified service

This repo is currently a minimal API deployment demo, not the original full ClinicDesk MEAN stack application.

- Provider: Render
- Service type: Docker Web Service
- Service name: `clinicdesk-api-demo`
- Service ID: `srv-db698s8473hc73dkp5vg`
- Public URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Render Blueprint region: `oregon` (Oregon)
- Render deployed branch: `main`
- Live deployed commit SHA: `9c647ccf3fb6f443267f01b6e8f1505488bf70a8`
- Verified health-check timestamp in UTC: `2026-10-12T09:00:09Z`
- HTTP result at that check: `200`
- Latest successful live-verification workflow: https://github.com/shibinj-stack/pro/actions/runs/38226952649

See `evidence/health-check.txt`, `evidence/deployment.md` and `evidence/host-environment.md` for the exact response, commit identity and safe environment record.

## Environment values and secret handling

Committed in Render Blueprint:
- `ALLOW_NO_DATABASE=true`
- `MONGODB_DB=clinicdesk`

Not configured in the committed Blueprint:
- `MONGODB_URI`: not configured; confirmed by live health payload `database: "not_configured"`. Do not add credentials to source control.
- `CORS_ORIGIN`: not set in the committed Blueprint; an external dashboard override, if any, is not inferred here.

Render runtime metadata observed in the health payload includes service name, service ID, external URL, deployed branch and deployed commit SHA. The evidence files record this observed metadata and the actual check timestamp. Render's provider-specific deploy-event ID and exact deploy start/finish timestamps aren't returned by the application's public health endpoint; use the Render Events page if the task rubric requires those provider-specific fields.

## Repeatable verification workflow

`.github/workflows/ci.yml`:
1. Installs API dependencies and runs HTTP-level tests.
2. Builds the Docker image on a GitHub-hosted runner.
3. Requests the real `/health` URL and verifies HTTP 200, healthy status and Render service/commit metadata.
4. Retries temporarily unavailable endpoints during deployment convergence.
5. Writes the observed response and timestamp to `evidence/health-check.txt`, updates `evidence/deployment.md` and `evidence/host-environment.md`, and commits the evidence.
6. Fails the workflow if the live verification window ends without a valid success.

The Blueprint sets `ALLOW_NO_DATABASE=true` for a database-free smoke test. That validates API reachability but does not demonstrate MongoDB connectivity. To demonstrate database connectivity, configure `MONGODB_URI` securely in Render, disable demo mode, and verify `database: "connected"`.

Never fabricate deployment logs, IDs, timestamps or response bodies. Record the exact Render deploy event ID and deploy start/finish timestamps from the Render Events page only if required by the task rubric.

References:
- https://render.com/docs/blueprint-spec
- https://render.com/docs/environment-variables
