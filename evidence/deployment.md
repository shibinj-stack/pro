# Render Deployment Record

**Result: LIVE ENDPOINT VERIFIED**

## Repository and verification
- Repository: https://github.com/shibinj-stack/pro
- Branch tested by GitHub Actions: main
- GitHub workflow commit: c8c26b6309a3f08ebae9bb11069fbdb298333e6c
- GitHub Actions run: https://github.com/shibinj-stack/pro/actions/runs/38227511993
- Live health check time (UTC): 2026-10-12T09:04:36Z
- HTTP status from /health: 200
- Verification note: HTTP 200; application reports healthy and supplies Render service/commit metadata.

## Actual Render metadata returned by the live service
- Render service name: clinicdesk-api-demo
- Render service ID: srv-db698s8473hc73dkp5vg
- Render public URL: https://clinicdesk-api-demo.onrender.com
- Render deployed branch: main
- Render deployed commit SHA: 9c647ccf3fb6f443267f01b6e8f1505488bf70a8
- Render region configured in render.yaml: Oregon (confirm in dashboard)
- Render deploy ID and exact start/finish timestamp: check the Render Events page; these are not exposed by the health endpoint.

## Exact health response
 ```json
{"status":"ok","service":"clinicdesk-api","database":"not_configured","timestamp":"2026-10-12T09:04:36.364Z","render":{"serviceName":"clinicdesk-api-demo","serviceId":"srv-db698s8473hc73dkp5vg","externalUrl":"https://clinicdesk-api-demo.onrender.com","gitBranch":"main","gitCommit":"9c647ccf3fb6f443267f01b6e8f1505488bf70a8"}}
 ```

Secrets are intentionally excluded.
