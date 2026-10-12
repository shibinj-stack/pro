# Deploy this sample to Render and capture real evidence

## What this repository is
This is a newly generated minimal deployment demo, **not** the original ClinicDesk project or its full MEAN stack implementation. It must not be submitted as the original app unless your instructor accepts a fresh demonstration app.

## 1. Push to GitHub without using your laptop
1. Open GitHub and create a new repository, e.g. `clinicdesk-deployment-demo`.
2. Use **Add file → Upload files** and upload the extracted contents of this ZIP, keeping the folder structure. Commit to `main`.
   - Alternatively, upload the ZIP as a repository release is not sufficient; Render needs the extracted repository files.
3. In repository **Settings → Secrets and variables → Actions**, create secret `RENDER_DEPLOY_HOOK_URL` after making the Render service and copying its Deploy Hook URL.

## 2. Create Render service
1. Create a MongoDB database (e.g. MongoDB Atlas) and create a database user. Permit network access for Render according to your provider's current recommended setup.
2. Open Render Dashboard → New → Web Service → connect the repository.
3. Select **Docker** as runtime and set Dockerfile Path to `server/Dockerfile`.
4. Set service name and region; record actual values from your dashboard.
5. Add environment variables:
   - `MONGODB_URI` = database URI (secret; never commit)
   - `MONGODB_DB` = `clinicdesk`
   - `CORS_ORIGIN` = actual frontend origin, if hosted separately
   - `ALLOW_NO_DATABASE` = `true` only for a no-database smoke demo; for a real DB-backed deployment, omit or set `false`
6. Create the service and wait for the deploy to finish.
7. The health endpoint is `/health`. With a working database (or `ALLOW_NO_DATABASE=true` for demo-only mode) it should return HTTP 200; this is an expectation, not a recorded result.

## 3. Deploy the static demo UI (optional)
1. Create a Render Static Site from the same repository.
2. Set the publish directory to `web`; no build command is needed.
3. Open the static URL and enter the actual API URL to check health. Configure CORS if the browser reports a CORS error.

## 4. Capture genuine health response
From GitHub Actions, after the backend is live, manually run workflow **Remote build and health evidence** with:
- `backend_url`: actual Render URL (e.g. `https://<your-service>.onrender.com`; replace with your actual URL)
- `deployment_id`: actual Render deploy ID or deployed commit SHA

The workflow sends a real HTTP request and commits `evidence/health-check.txt` back to the repository. If the health endpoint does not return a 2xx, the workflow fails rather than fabricating success.

## 5. Fill submission record
Copy real service name, region, public URL, deploy ID/commit SHA, timestamp and Render event log details into `evidence/deployment.md`. Never include secret values. Keep `PENDING` where evidence has not yet been captured.
