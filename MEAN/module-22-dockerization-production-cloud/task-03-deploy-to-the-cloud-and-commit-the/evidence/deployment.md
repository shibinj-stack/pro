# Render Deployment Record

**Result: LIVE ENDPOINT VERIFIED**

## Repository and verification
- Repository: https://github.com/shibinj-stack/pro
- Branch tested by GitHub Actions: main
- GitHub workflow commit: 759166c73db44a20468bdad6f0e8c006fa683626
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38346002453
- Live health check time (UTC): 2026-10-13T04:21:23Z
- HTTP status from /health: 200
- Verification note: HTTP 200; application reports healthy, MongoDB is connected, and Render service/commit metadata matches.
- MongoDB status from response: connected

## Actual Render metadata returned by the live service
- Render service name: clinicdesk-api-demo
- Render service ID: srv-db698s8473hc73dkp5vg
- Render public URL: https://clinicdesk-api-demo.onrender.com
- Render deployed branch: main
- Render deployed commit SHA: 6d8469be4ea7b44e4bedf0c04ed09b829cd12df2
- Blueprint-declared Render region: Oregon (oregon)
- Deployment identity: full running Git commit SHA above, returned by the live Render service.
- Provider-specific Render deploy-event ID and exact event start/finish times are not returned by the public health endpoint. The timestamped live verification above records when the running revision was checked; use Render Events for provider-only event fields if specifically required.
- Render Deploys dashboard screenshot showed the running short commit 9c647cc and a 30.2s duration.

## Host environment values
- Provider: Render
- Service type: Docker Web Service
- ALLOW_NO_DATABASE runtime value: false (full deployment verification requires database=connected)
- MONGODB_DB=clinicdesk (Blueprint setting)
- MONGODB_URI runtime configured flag: true; connection state: connected; configured in Render and connected (secret value intentionally redacted)
- CORS_ORIGIN: not set in the committed Blueprint; separate dashboard overrides are not inferred
- Render-injected metadata verified live: service name, service ID, external URL, Git branch, and full deployed Git commit SHA

## Exact health response
 ```json
{"status":"ok","service":"clinicdesk-api","database":"connected","databaseUriConfigured":true,"allowNoDatabase":false,"timestamp":"2026-10-13T04:21:23.844Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"6d8469be4ea7b44e4bedf0c04ed09b829cd12df2"}}
 ```

Secrets are intentionally excluded.
