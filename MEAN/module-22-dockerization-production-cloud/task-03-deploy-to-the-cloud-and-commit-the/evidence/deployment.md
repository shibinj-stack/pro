# Render Deployment Record

**Result: VERIFICATION FAILED**

## Repository and verification
- Repository: https://github.com/shibinj-stack/pro
- Branch tested by GitHub Actions: main
- GitHub workflow commit: 84d28346f304a449c8eb687cfaccd844c63d5a6d
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38232336503
- Live health check time (UTC): 2026-10-12T09:49:40Z
- HTTP status from /health: 200
- Verification note: The endpoint returned HTTP 200, but MongoDB state is 'not_configured'. A database-free smoke response is not accepted as a full deployment pass.
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
- ALLOW_NO_DATABASE=true (Blueprint setting for database-free smoke test; this does not prove MongoDB connectivity)
- MONGODB_DB=clinicdesk (Blueprint setting)
- MONGODB_URI is declared with sync: false. Runtime configured flag: NOT_RETURNED; connection state: not_configured; not configured in Render; add the actual connection string as the MONGODB_URI secret (no value committed)
- CORS_ORIGIN: not set in the committed Blueprint; separate dashboard overrides are not inferred
- Render-injected metadata verified live: service name, service ID, external URL, Git branch, and full deployed Git commit SHA

## Exact health response
 ```json
{"status":"ok","service":"clinicdesk-api","database":"not_configured","databaseUriConfigured":false,"allowNoDatabase":true,"timestamp":"2026-10-12T09:49:40.812Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"31dfc29e6d3e4493c0c331b054cac9782cae7313"}}
 ```

Secrets are intentionally excluded.
