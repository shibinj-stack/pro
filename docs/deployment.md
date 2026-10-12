# Week 22 Task 03 — Cloud Deployment Runbook and Evidence

## Current service identity
- Provider: Render
- Service type: Docker Web Service
- Service: `clinicdesk-api-demo`
- Service ID: `srv-db698s8473hc73dkp5vg`
- Public URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Region declared in `render.yaml`: Oregon (`oregon`)
- Repository/branch: https://github.com/shibinj-stack/pro, `main`

## Ordered deployment process

1. **Build and test.** GitHub Actions installs the API dependencies from `server/package.json`, runs `npm test` in `server/`, and records the dependency/test start and completion times in the task-folder deployment log.
2. **Build the image.** GitHub Actions builds the Docker image from `server/Dockerfile` with `server/` as the Docker context and records separate build start/completion timestamps.
3. **Push the image.** GitHub Actions tags and pushes a versioned image to GHCR. The log records the exact image reference, registry digest, and separate push start/completion timestamps. This is a versioned CI artifact; the current Render Blueprint builds from the repository Dockerfile and is not claimed to pull the GHCR image.
4. **Provision the service.** Render Blueprint `render.yaml` defines a Docker Web Service with the service identity above. The task log records when the live endpoint exposed the service identity; that observation time is not misrepresented as the historical service-creation event time.
5. **Configure host environment.** `render.yaml` declares `MONGODB_URI` and `ALLOW_NO_DATABASE` as `sync: false` so their secret/runtime values are set in Render's Environment page and are not committed to Git. `MONGODB_DB=clinicdesk` is the configured database name. The health response reports the non-secret flags `databaseUriConfigured` and `allowNoDatabase`.
6. **Deploy.** Render auto-deploys the Git source revision according to the Blueprint. The running branch and full deployed commit SHA are read from Render runtime metadata at `/health`. The GHCR-published CI image is not misidentified as the active Render image.
7. **Verify and commit evidence.** GitHub Actions requests the live `/health` endpoint, records the actual status/body, timestamp, service ID, URL, branch and deployed commit. It also writes `deployment-run.log`, `capture-evidence.yml`, `evidence/host-environment.md`, and `evidence/image-push.md` in the exact AxReview task directory and commits the generated evidence.

The task-path log with per-stage UTC timestamps is at:
`MEAN/module-22-dockerization-production-cloud/task-03-deploy-to-the-cloud-and-commit-the/docs/deployment.md`.

## MongoDB prerequisite — required for a full pass

The currently observed live response reports `database: "not_configured"`. That is an API-only smoke deployment, not proof that MongoDB runs in the cloud. **Do not submit it as a complete API-plus-database deployment yet.**

To finish:
1. Create/choose a MongoDB Atlas cluster and create a database user with access to the `clinicdesk` database.
2. Configure the cluster's network access to permit the Render service to connect, following the minimum access policy appropriate for your account.
3. In the Atlas driver connection dialog, copy the real SRV connection URI and replace its username/password placeholders locally. Do not paste this URI in code or commit it.
4. In Render → `clinicdesk-api-demo` → **Environment**, add `MONGODB_URI` with that real URI and set `ALLOW_NO_DATABASE=false`. Keep `MONGODB_DB=clinicdesk`.
5. Save the settings and wait for the service to restart. Open `https://clinicdesk-api-demo.onrender.com/health`; it must report `database: "connected"`, `databaseUriConfigured: true`, and `allowNoDatabase: false`.
6. Push a new commit or rerun **ClinicDesk deployment checks**. The workflow accepts a full pass only when API health and MongoDB connectivity are both verified. It will record the real response and timestamps; if the database is still disconnected, it fails rather than fabricating success.

Never commit the connection URI or other secret values. Render provider event IDs and exact deploy start/finish times must be copied from the Render Deploys/Events detail if the rubric requires those specific provider fields; the public health endpoint does not expose them.

## Evidence
- `evidence/health-check.txt`: real request URL, UTC check time, HTTP status, exact JSON response.
- `evidence/deployment.md`: service identity, deployment outcome and exact health payload.
- `evidence/host-environment.md`: observed runtime flags and environment configuration status without secrets.
- `evidence/image-push.md`: image tag/digest and distinct build/push times.
- `deployment-run.log`: per-stage execution record.
- `capture-evidence.yml`: machine-readable service, image, stage timestamp, and health state metadata.

The code in this repository is a **minimal deployment demo**, not the original full ClinicDesk MEAN stack application. Use only if this is the intended scope for the task.
