# Render Deployment Record

**Result: VERIFICATION FAILED**

## Repository and verification
- Repository: https://github.com/shibinj-stack/pro
- Branch tested by GitHub Actions: main
- GitHub workflow commit: 51f2fe559bef6d0a604c3c8cde0d26f0a7efb0e0
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38233103165
- Live health check time (UTC): 2026-10-12T09:56:47Z
- HTTP status from /health: 200
- Verification note: Render service responded with database=not_configured. Set MONGODB_URI as a Render secret and ALLOW_NO_DATABASE=false, then redeploy.
- MongoDB status from response: not_configured

## Actual Render metadata returned by the live service
- Render service name: clinicdesk-api-demo
- Render service ID: srv-db698s8473hc73dkp5vg
- Render public URL: https://clinicdesk-api-demo.onrender.com
- Render deployed branch: main
- Render deployed commit SHA: 31dfc29e6d3e4493c0c331b054cac9782cae7313
- Blueprint-declared Render region: Oregon (oregon)
- Deployment identity: full running Git commit SHA above, returned by the live Render service.
- Provider-specific Render deploy-event ID and exact event start/finish times are not returned by the public health endpoint. The timestamped live verification above records when the running revision was checked; use Render Events for provider-only event fields if specifically required.
- Render Deploys dashboard screenshot showed the running short commit 9c647cc and a 30.2s duration.

## Host environment values
- Provider: Render
- Service type: Docker Web Service
- ALLOW_NO_DATABASE runtime value: true (full deployment verification requires database=connected)
- MONGODB_DB=clinicdesk (Blueprint setting)
- MONGODB_URI runtime configured flag: NOT_RETURNED; connection state: not_configured; not configured in Render; add the actual connection string as the MONGODB_URI secret (no value committed)
- CORS_ORIGIN: not set in the committed Blueprint; separate dashboard overrides are not inferred
- Render-injected metadata verified live: service name, service ID, external URL, Git branch, and full deployed Git commit SHA

## Exact health response
 ```json
{"status":"ok","service":"clinicdesk-api","database":"not_configured","databaseUriConfigured":false,"allowNoDatabase":true,"timestamp":"2026-10-12T09:56:46.976Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"31dfc29e6d3e4493c0c331b054cac9782cae7313"}}
 ```

Secrets are intentionally excluded.
