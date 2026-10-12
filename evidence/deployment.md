# Render Deployment Record

**Cloud deployment status: NOT YET VERIFIED.** GitHub CI and Docker image build are passing, but the first Render service still needs to be created/synced and its real URL added as the repository variable `RENDER_SERVICE_URL`.

## Verified GitHub Actions
- Repository: https://github.com/shibinj-stack/pro
- Branch: `main`
- Workflow: `ClinicDesk deployment checks`
- Latest verified automation/code update run: https://github.com/shibinj-stack/pro/actions/runs/38218890241
- Latest run result: `success` for API tests and Docker image build.
- The live deployment verification step was skipped because `RENDER_SERVICE_URL` is not configured yet.
- API tests: `3 passed, 0 failed` in the verified CI run: https://github.com/shibinj-stack/pro/actions/runs/38216886767

## Render deployment — fill automatically after first service setup and real health response
- Render Blueprint: `render.yaml`
- Render service name: `PENDING`
- Render service ID: `PENDING`
- Render region: `PENDING` (Blueprint requests Oregon; confirm from service)
- Render public URL: `PENDING`
- Deployed branch: `PENDING`
- Deployed commit SHA: `PENDING`
- HTTP health-check status: `PENDING`
- Exact health response: `PENDING` (will be written to `health-check.txt`)
- Verification timestamp (UTC): `PENDING`
- Render deploy ID and exact start/finish time: `PENDING` (record from the Render Events page because these are not available from the app health response)
- Workflow run proving live verification: `PENDING`

## One-time setup required
1. Apply the repository's `render.yaml` using Render Dashboard → **New → Blueprint**, connect `shibinj-stack/pro`, branch `main`, and create the service.
2. Add a GitHub Actions repository **variable** named `RENDER_SERVICE_URL` using the actual base URL from Render (not a guessed URL).
3. After that, pushes to `main` will automatically run tests/build, check the live health endpoint with retries, and commit genuine evidence. Manual runs can also supply `backend_url`.

Do not replace pending fields manually with invented values. The current Blueprint has `ALLOW_NO_DATABASE=true` for a database-free smoke deployment, so a healthy endpoint proves API reachability, not MongoDB connectivity. For database validation, configure `MONGODB_URI` securely and disable demo mode.
