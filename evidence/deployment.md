# Render Deployment Record

**Result: LIVE ENDPOINT VERIFIED**

## Deployment and host identity
- Provider: Render
- Service type: Docker Web Service
- Render service name: `clinicdesk-api-demo`
- Render service ID: `srv-db698s8473hc73dkp5vg`
- Public service URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Blueprint-declared region: Oregon (`oregon`)
- Source repository: https://github.com/shibinj-stack/pro
- Source/deployed branch: `main`
- Actual deployed commit SHA returned by the live service: `9c647ccf3fb6f443267f01b6e8f1505488bf70a8`
- Render dashboard deploy row: commit `9c647cc`; the provided Deploys screenshot showed a duration of `30.2s`.
- Deployment identity: the full deployed Git commit SHA above, corroborated by Render runtime metadata.

## Verified live health check
- Verification result: `VERIFIED`
- Verification timestamp (UTC): `2026-10-12T09:00:09Z`
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38226952649
- HTTP status from `/health`: `200`
- Health payload status: `ok`
- Database state reported by the running service: `not_configured`
- Exact response is recorded in `evidence/health-check.txt`.

## Host application environment values
These values come from the committed Render Blueprint and the live health response; no secret values are included.

- `ALLOW_NO_DATABASE=true`: configured by Blueprint for the database-free smoke test. This permits HTTP 200 when MongoDB is not configured.
- `MONGODB_DB=clinicdesk`: configured by Blueprint.
- `MONGODB_URI`: not configured in the committed Blueprint; the actual live payload reports `database: "not_configured"`.
- `CORS_ORIGIN`: not set in the committed Blueprint; a separate dashboard override, if any, is not inferred.
- Render-injected runtime values observed live: `RENDER_SERVICE_NAME=clinicdesk-api-demo`, `RENDER_SERVICE_ID=srv-db698s8473hc73dkp5vg`, `RENDER_EXTERNAL_URL=https://clinicdesk-api-demo.onrender.com`, `RENDER_GIT_BRANCH=main`, `RENDER_GIT_COMMIT=9c647ccf3fb6f443267f01b6e8f1505488bf70a8`.

See `evidence/host-environment.md` for the host-environment record and `render.yaml` for the checked-in Blueprint configuration.

## Exact health response
```json
{"status":"ok","service":"clinicdesk-api","database":"not_configured","timestamp":"2026-10-12T09:00:09.164Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"9c647ccf3fb6f443267f01b6e8f1505488bf70a8"}}
```

## Provider-specific deploy event identifier
The publicly readable `/health` payload exposes the service identity and running Git commit, but not Render's opaque deploy-event ID or exact deploy-event start/finish timestamps. The confirmed deployment identity and timestamped live health check are documented above. If the assessor explicitly requires the provider's opaque event ID and event timestamps, copy those exact fields from the corresponding Render Deploys/Events detail; do not infer them from the health-check timestamp.

Secrets are intentionally excluded.
