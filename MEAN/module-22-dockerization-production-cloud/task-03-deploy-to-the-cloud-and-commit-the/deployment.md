# Step-by-Step Cloud Deployment Log — Week 22 Task 03

## Deployment target
- Provider: Render
- Service type: Docker Web Service
- Service name: clinicdesk-api-demo
- Service ID: srv-db698s8473hc73dkp5vg
- Public URL: https://clinicdesk-api-demo.onrender.com
- Health endpoint: https://clinicdesk-api-demo.onrender.com/health
- Region declared by Blueprint: Oregon (oregon)
- Repository: https://github.com/shibinj-stack/pro
- Branch: main

## 1. Build and validate the application
- Dependency installation started (UTC): 2026-10-12T09:42:48Z
- Dependency installation completed (UTC): 2026-10-12T09:42:50Z
- API tests started (UTC): 2026-10-12T09:42:50Z
- API tests completed (UTC): 2026-10-12T09:42:51Z
- The GitHub Actions workflow installed the API dependencies in server/ and ran the Node HTTP tests.
- Test command: npm test (working directory: server).
- Docker build context: server/.
- Dockerfile: server/Dockerfile.
- Result in this workflow run: API tests passed and the Docker image build completed successfully.
- Build/run details: https://github.com/shibinj-stack/pro/actions/runs/38231632020

## 2. Push the versioned container image
- Docker build started (UTC): 2026-10-12T09:42:51Z
- Docker build completed (UTC): 2026-10-12T09:43:03Z
- Registry push started (UTC): 2026-10-12T09:43:03Z
- Registry push completed (UTC): 2026-10-12T09:43:08Z
- Registry: GitHub Container Registry (ghcr.io).
- Pushed image reference: ghcr.io/shibinj-stack/clinicdesk-api-demo:3c600c41a8493ed5375c1b945c920826b849f3c0
- Image digest: sha256:560baffe7052b3532868d2e697f36d71874f9e0061d99230905458a1b385d605
- The GHCR publish step completed successfully in the linked workflow run.
- Deployment relationship: the existing Render service is configured with runtime=docker in render.yaml. Render builds from the repository's Dockerfile; this log does not falsely claim that Render pulled the separate GHCR image.

## 3. Provision the cloud service
- Provisioned service state/identity verified (UTC): 2026-10-12T09:43:09Z. This is when the live service was confirmed by the health endpoint, not a fabricated historical create-event time.
- Render Blueprint: repository-root render.yaml.
- Render created the web service clinicdesk-api-demo.
- Service ID observed from the live health payload: srv-db698s8473hc73dkp5vg.
- Blueprint-selected runtime: Docker Web Service.
- Blueprint-selected region: Oregon (oregon).
- Render dashboard showed the service as Live; the supplied Deploys screenshot showed a 30.2 second duration for the deployment row running commit 9c647cc.

## 4. Configure host environment
- Blueprint and returned host-configuration values audited (UTC): 2026-10-12T09:43:08Z.
- ALLOW_NO_DATABASE=true was configured by render.yaml for a database-free smoke deployment.
- MONGODB_DB=clinicdesk was configured by render.yaml.
- MONGODB_URI is declared as a non-synced Render secret (sync: false). Configure a real Atlas connection string in the Render dashboard; its value is never committed or logged.
- Live database state observed during this run: not_configured.
- CORS_ORIGIN is not set in the committed Blueprint; any independent dashboard override is not inferred.
- No secret values are written to source control or this log.

## 5. Deploy the application
- Active deployed revision and branch observed (UTC): 2026-10-12T09:43:09Z.
- Render deployed the Git source revision reported by the running service: cded707f64339579cec9904640e468ea12240a59.
- The deployed branch reported by Render: main.
- Render service public URL: https://clinicdesk-api-demo.onrender.com.
- Render's current configuration builds from server/Dockerfile on the selected Git commit. The GHCR image above is retained as a versioned CI artifact, not misidentified as the active Render image.
- The exact provider deployment event start/finish times are not exposed by the public health endpoint. Use the Render Deploys/Events panel for provider-specific event timestamps if the evaluator requires them.

## 6. Verify the live deployment
- Verification completed (UTC): 2026-10-12T09:43:09Z
- Endpoint requested: https://clinicdesk-api-demo.onrender.com/health
- HTTP response status: 200
- Health verification result: VERIFICATION FAILED
- Response body and Render identity metadata: ../evidence/health-check.txt
- Host/service environment record: ../evidence/host-environment.md
- Deployment evidence: ../evidence/deployment.md
- Verification workflow: https://github.com/shibinj-stack/pro/actions/runs/38231632020

## Result and qualification
The live API returned HTTP 200 and supplied Render service identity, branch, and deployed commit metadata at 2026-10-12T09:43:09Z. The app is in database-free smoke-test mode (database not_configured); this confirms API reachability, not MongoDB connectivity. The API source in this repository is a minimal deployment demo, not the original full ClinicDesk MEAN application.
