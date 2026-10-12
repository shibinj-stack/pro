# MongoDB Atlas connectivity — one-time setup

The current Render health check proves the API is reachable, but its live payload reports `database: "not_configured"`. A full deployment pass requires the Node MongoDB driver to authenticate to an actual database and successfully run `ping`.

## One-time account step

I cannot create a cluster in your Atlas account without an authorized Atlas connection or account action. Do not paste the database password or complete URI into chat or commit it to Git.

1. Sign in to [MongoDB Atlas](https://cloud.mongodb.com/). Create or select a project and create a cluster (the free/shared option is sufficient for this training demo if available to your account).
2. In **Database Access**, create an application database user with access to the `clinicdesk` database. This is separate from your Atlas login.
3. In **Network Access**, allow the Render service's outbound addresses, using the current outbound IP information shown for the Render service/region. Avoid opening the database to all IP addresses except as a temporary troubleshooting measure.
4. Choose **Connect → Drivers** on the Atlas cluster and copy the Node.js connection URI. Replace the username/password placeholders locally with the database-user credentials and ensure the URI references the `clinicdesk` database. URL-encode special characters in the username/password as required by the driver.

Atlas official instructions: https://www.mongodb.com/docs/atlas/connect-to-database-deployment/ and https://www.mongodb.com/docs/atlas/security/quick-start/.

## Set the secret on Render

1. Open Render Dashboard → `clinicdesk-api-demo` → **Environment**.
2. Set `MONGODB_URI` to the copied Atlas URI. Do not put it in `render.yaml`, source files, workflow logs, or evidence.
3. Set `MONGODB_DB=clinicdesk`.
4. Set `ALLOW_NO_DATABASE=false`. This disables the database-free smoke-test override.
5. Save changes and wait for Render to finish redeploying/restarting the service.

Render's `sync: false` environment values are managed from the dashboard for an existing service. Official reference: https://render.com/docs/configure-environment-variables and https://render.com/docs/blueprint-spec.

## Automatic verification (no credentials pasted into chat)

The application now verifies the MongoDB connection by running `ping` after authentication. After Render restarts, open:
`https://clinicdesk-api-demo.onrender.com/health`

Expected fields for a real pass:
- `status: "ok"`
- `database: "connected"`
- `databaseUriConfigured: true`
- `allowNoDatabase: false`

The `MongoDB connectivity watch` workflow polls the live endpoint hourly and also runs when its own workflow or this guide changes. Once it sees `database=connected`, `databaseUriConfigured=true`, and `allowNoDatabase=false`, it automatically dispatches **ClinicDesk deployment checks**. That full workflow reruns tests/build/push, records the actual health response and per-stage timestamps, and only passes if the live service still reports MongoDB connected. You can also trigger **ClinicDesk deployment checks** manually from GitHub Actions if you do not want to wait for the next hourly poll. On failure, inspect Render Logs and Atlas Network Access/database-user settings.

## What is automated already

- CI installs API dependencies and runs HTTP tests.
- CI builds and pushes a versioned container image to GitHub Container Registry.
- CI checks the actual Render health endpoint and records real response data.
- CI refuses to call the full deployment successful when MongoDB is not connected.
- CI regenerates the task-folder deployment log and evidence.

The external database account, secure credentials and Atlas network access still require the one-time owner authorization above.
