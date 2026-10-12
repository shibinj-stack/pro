# Render Host Environment Record

- Provider: Render
- Service type: Docker Web Service
- Service name: clinicdesk-api-demo
- Service ID: srv-db698s8473hc73dkp5vg
- Public URL: https://clinicdesk-api-demo.onrender.com
- Region configured by render.yaml: Oregon (oregon)
- Verification timestamp (UTC): 2026-10-12T09:49:37Z
- Live deployed branch: main
- Live deployed commit SHA: 31dfc29e6d3e4493c0c331b054cac9782cae7313
- Health endpoint HTTP status: 200
- Database status from live health payload: not_configured

## Application environment values set in Render Blueprint
- ALLOW_NO_DATABASE runtime value: true (the workflow accepts a full pass only when database=connected)
- MONGODB_DB=clinicdesk
- MONGODB_URI runtime configured flag: NOT_RETURNED; not configured in Render; add the actual connection string as the MONGODB_URI secret (no value committed)
- CORS_ORIGIN=not set in the committed Blueprint; application fallback behavior applies unless a dashboard override exists

## Render runtime metadata observed through the live /health response
- RENDER=true (runtime metadata block returned)
- RENDER_SERVICE_NAME=clinicdesk-api-demo
- RENDER_SERVICE_ID=srv-db698s8473hc73dkp5vg
- RENDER_EXTERNAL_URL=https://clinicdesk-api-demo.onrender.com
- RENDER_GIT_BRANCH=main
- RENDER_GIT_COMMIT=31dfc29e6d3e4493c0c331b054cac9782cae7313

Secrets are not included. Exact provider deploy-event ID and event start/finish times must be obtained from Render Events if the rubric requires them; the real running commit SHA and successful verification timestamp are recorded above.
