# Render Deployment Record

**Result: LIVE ENDPOINT VERIFIED**

## Repository and verification
- Repository: https://github.com/shibinj-stack/pro
- Branch tested by GitHub Actions: main
- GitHub workflow commit: 508db49da436fc96316a07e09466b7232f535080
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38228828982
- Live health check time (UTC): 2026-10-12T09:17:10Z
- HTTP status from /health: 200
- Verification note: HTTP 200; application reports healthy and supplies Render service/commit metadata.

## Actual Render metadata returned by the live service
- Render service name: clinicdesk-api-demo
- Render service ID: srv-db698s8473hc73dkp5vg
- Render public URL: https://clinicdesk-api-demo.onrender.com
- Render deployed branch: main
- Render deployed commit SHA: 9c647ccf3fb6f443267f01b6e8f1505488bf70a8
- Blueprint-declared Render region: Oregon (oregon)
- Deployment identity: full running Git commit SHA above, returned by the live Render service.
- Provider-specific Render deploy-event ID and exact event start/finish times are not returned by the public health endpoint. The timestamped live verification above records when the running revision was checked; use Render Events for provider-only event fields if specifically required.
- Render Deploys dashboard screenshot showed the running short commit 9c647cc and a 30.2s duration.

## Host environment values
- Provider: Render
- Service type: Docker Web Service
- ALLOW_NO_DATABASE=true (Blueprint setting for database-free smoke test; this does not prove MongoDB connectivity)
- MONGODB_DB=clinicdesk (Blueprint setting)
- MONGODB_URI: not configured in the committed Blueprint; live payload reports database not_configured
- CORS_ORIGIN: not set in the committed Blueprint; separate dashboard overrides are not inferred
- Render-injected metadata verified live: service name, service ID, external URL, Git branch, and full deployed Git commit SHA

## Exact health response
 ```json
{"status":"ok","service":"clinicdesk-api","database":"not_configured","timestamp":"2026-10-12T09:17:10.529Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"9c647ccf3fb6f443267f01b6e8f1505488bf70a8"}}
 ```

Secrets are intentionally excluded.
