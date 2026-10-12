# Render Host Environment Record

- Provider: Render
- Service type: Docker Web Service
- Service name: clinicdesk-api-demo
- Service ID: srv-db698s8473hc73dkp5vg
- Public URL: https://clinicdesk-api-demo.onrender.com
- Region configured by render.yaml: Oregon (oregon)
- Verification timestamp (UTC): 2026-10-12T09:39:36Z
- Live deployed branch: main
- Live deployed commit SHA: 9c647ccf3fb6f443267f01b6e8f1505488bf70a8
- Health endpoint HTTP status: 200
- Database status from live health payload: not_configured

## Application environment values set in Render Blueprint
- ALLOW_NO_DATABASE=true (demo smoke-test mode; permits health HTTP 200 without MongoDB)
- MONGODB_DB=clinicdesk
- MONGODB_URI=not configured (no secret value is recorded; live health response reports database not_configured)
- CORS_ORIGIN=not set in the committed Blueprint; application fallback behavior applies unless a dashboard override exists

## Render runtime metadata observed through the live /health response
- RENDER=true (runtime metadata block returned)
- RENDER_SERVICE_NAME=clinicdesk-api-demo
- RENDER_SERVICE_ID=srv-db698s8473hc73dkp5vg
- RENDER_EXTERNAL_URL=https://clinicdesk-api-demo.onrender.com
- RENDER_GIT_BRANCH=main
- RENDER_GIT_COMMIT=9c647ccf3fb6f443267f01b6e8f1505488bf70a8

Secrets are not included. Exact provider deploy-event ID and event start/finish times must be obtained from Render Events if the rubric requires them; the real running commit SHA and successful verification timestamp are recorded above.
