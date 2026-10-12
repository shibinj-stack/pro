# Render Deployment Record

**Render status: NOT YET DEPLOYED / NOT VERIFIED.** The entries below distinguish completed GitHub CI verification from the cloud deployment that is still outstanding.

## Verified repository and CI
- Repository URL: https://github.com/shibinj-stack/pro
- Branch: `main`
- Verified CI commit SHA: `4dc590e97761b7bdcc07f75907d3f141abf34698`
- GitHub Actions workflow: `ClinicDesk deployment checks`
- Verified workflow run: [Run #4](https://github.com/shibinj-stack/pro/actions/runs/38216886767)
- CI run result: `success`
- API test result: `3 passed, 0 failed`
- Docker image build: `success`
- Workflow run time: started at `2026-10-12T07:17:09Z`, completed at `2026-10-12T07:17:34Z`

## Render deployment — fill only from actual service results
- Render service name: `PENDING`
- Render region: `PENDING`
- Runtime/build method: Docker, `server/Dockerfile` (configured in `render.yaml`)
- Render public URL: `PENDING`
- Render deploy ID: `PENDING`
- Deployment commit SHA: `PENDING`
- Deployment timestamp (include timezone): `PENDING`
- Render build/deploy result from Events: `PENDING`
- Environment configuration result (never include secret values): `PENDING`
- Health endpoint URL: `PENDING`
- HTTP status: `PENDING`
- Exact response body: `PENDING` (see `health-check.txt`)
- Workflow run that verified the live endpoint: `PENDING`
- Notes/errors and remediation: `PENDING`

## Secret handling
Do not commit `MONGODB_URI`, passwords, API tokens, or deploy-hook URLs. Store secrets only in service/environment settings.
