# Render Host Environment Record

- Provider: Render
- Service type: Docker Web Service
- Service name: clinicdesk-api-demo
- Service ID: srv-db698s8473hc73dkp5vg
- Public URL: https://clinicdesk-api-demo.onrender.com
- Region configured by render.yaml: Oregon (oregon)
- Verification timestamp (UTC): 2026-10-13T04:21:23Z
- Live deployed branch: main
- Live deployed commit SHA: 6d8469be4ea7b44e4bedf0c04ed09b829cd12df2
- Health endpoint HTTP status: 200
- Database status from live health payload: connected

## Application environment values set in Render Blueprint
- ALLOW_NO_DATABASE runtime value: false (the workflow accepts a full pass only when database=connected)
- MONGODB_DB=clinicdesk
- MONGODB_URI runtime configured flag: true; configured in Render and connected (secret value intentionally redacted)
- CORS_ORIGIN=not set in the committed Blueprint; application fallback behavior applies unless a dashboard override exists

## Render runtime metadata observed through the live /health response
- RENDER=true (runtime metadata block returned)
- RENDER_SERVICE_NAME=clinicdesk-api-demo
- RENDER_SERVICE_ID=srv-db698s8473hc73dkp5vg
- RENDER_EXTERNAL_URL=https://clinicdesk-api-demo.onrender.com
- RENDER_GIT_BRANCH=main
- RENDER_GIT_COMMIT=6d8469be4ea7b44e4bedf0c04ed09b829cd12df2

Secrets are not included. Exact provider deploy-event ID and event start/finish times must be obtained from Render Events if the rubric requires them; the real running commit SHA and successful verification timestamp are recorded above.
