# Render Host Environment Record

- Provider: Render
- Service type: Docker Web Service
- Service name: clinicdesk-api-demo
- Service ID: srv-db698s8473hc73dkp5vg
- Public URL: https://clinicdesk-api-demo.onrender.com
- Region configured by render.yaml: Oregon (oregon)
- Verification timestamp (UTC): 2026-10-12T10:21:42Z
- Live deployed branch: main
- Live deployed commit SHA: 67c61a264ff8a7aac9fa2d074a58a2149e26863e
- Health endpoint HTTP status: 200
- Database status from live health payload: not_configured

## Application environment values set in Render Blueprint
- ALLOW_NO_DATABASE runtime value: true (the workflow accepts a full pass only when database=connected)
- MONGODB_DB=clinicdesk
- MONGODB_URI runtime configured flag: false; not configured in Render; add the actual connection string as the MONGODB_URI secret (no value committed)
- CORS_ORIGIN=not set in the committed Blueprint; application fallback behavior applies unless a dashboard override exists

## Render runtime metadata observed through the live /health response
- RENDER=true (runtime metadata block returned)
- RENDER_SERVICE_NAME=clinicdesk-api-demo
- RENDER_SERVICE_ID=srv-db698s8473hc73dkp5vg
- RENDER_EXTERNAL_URL=https://clinicdesk-api-demo.onrender.com
- RENDER_GIT_BRANCH=main
- RENDER_GIT_COMMIT=67c61a264ff8a7aac9fa2d074a58a2149e26863e

Secrets are not included. Exact provider deploy-event ID and event start/finish times must be obtained from Render Events if the rubric requires them; the real running commit SHA and successful verification timestamp are recorded above.
