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
- Dependency installation started (UTC): 2026-10-13T04:21:02Z
- Dependency installation completed (UTC): 2026-10-13T04:21:09Z
- API tests started (UTC): 2026-10-13T04:21:09Z
- API tests completed (UTC): 2026-10-13T04:21:10Z
- The GitHub Actions workflow installed the API dependencies in server/ and ran the Node HTTP tests.
- Test command: npm test (working directory: server).
- Docker build context: server/.
- Dockerfile: server/Dockerfile.
- Result in this workflow run: API tests passed and the Docker image build completed successfully.
- Build/run details: https://github.com/shibinj-stack/pro/actions/runs/38346002453

## 2. Build the versioned container image
- Docker build started (UTC): 2026-10-13T04:21:10Z
- Docker build completed (UTC): 2026-10-13T04:21:19Z
- Command: docker build -f server/Dockerfile -t clinicdesk-api:759166c73db44a20468bdad6f0e8c006fa683626 server.
- Result: Docker image build completed successfully in this workflow run.
- Build/run details: https://github.com/shibinj-stack/pro/actions/runs/38346002453

## 3. Push the versioned container image
- Registry push started (UTC): 2026-10-13T04:21:19Z
- Registry push completed (UTC): 2026-10-13T04:21:23Z
- Registry: GitHub Container Registry (ghcr.io).
- Pushed image reference: ghcr.io/shibinj-stack/clinicdesk-api-demo:759166c73db44a20468bdad6f0e8c006fa683626
- Image digest: sha256:df3b26a393b18987d3da5f6831bee3a5cf9b5a419e53dc01daf354048d5cd867
- The registry push completed successfully in the linked workflow run.
- Deployment relationship: the existing Render service is configured with runtime=docker in render.yaml. Render builds from the repository's Dockerfile; the GHCR image is a separate CI artifact and is not claimed as the active Render image.

## 4. Provision the cloud service
- Provisioned service state/identity verified (UTC): 2026-10-13T04:21:23Z. This is when the live service was confirmed by the health endpoint, not a fabricated historical create-event time.
- Render Blueprint: repository-root render.yaml.
- Render created the web service clinicdesk-api-demo.
- Service ID observed from the live health payload: srv-db698s8473hc73dkp5vg.
- Blueprint-selected runtime: Docker Web Service.
- Blueprint-selected region: Oregon (oregon).
- Render dashboard showed the service as Live; the supplied Deploys screenshot showed a 30.2 second duration for the deployment row running commit 9c647cc.

## 5. Configure host environment
- Blueprint and returned host-configuration values audited (UTC): 2026-10-13T04:21:23Z.
- ALLOW_NO_DATABASE runtime value reported by /health: false. CI still requires database=connected, so a smoke-mode response is not accepted as complete.
- MONGODB_DB=clinicdesk is configured by render.yaml.
- MONGODB_URI has a non-synced secret entry (sync: false). Runtime configured flag: true; current state: connected; configured in Render and connected (secret value intentionally redacted).
- CORS_ORIGIN is not set in the committed Blueprint; any independent dashboard override is not inferred.
- No secret values are written to source control or this log.

## 6. Deploy the application
- Active deployed revision and branch observed (UTC): 2026-10-13T04:21:23Z.
- Render deployed the Git source revision reported by the running service: 6d8469be4ea7b44e4bedf0c04ed09b829cd12df2.
- The deployed branch reported by Render: main.
- Render service public URL: https://clinicdesk-api-demo.onrender.com.
- Render's current configuration builds from server/Dockerfile on the selected Git commit. The GHCR image above is retained as a versioned CI artifact, not misidentified as the active Render image.
- The exact provider deployment event start/finish times are not exposed by the public health endpoint. Use the Render Deploys/Events panel for provider-specific event timestamps if the evaluator requires them.

## 7. Verify the live deployment
- Verification completed (UTC): 2026-10-13T04:21:23Z
- Endpoint requested: https://clinicdesk-api-demo.onrender.com/health
- HTTP response status: 200
- Health verification result: LIVE ENDPOINT VERIFIED
- Response body and Render identity metadata: ../evidence/health-check.txt
- Host/service environment record: ../evidence/host-environment.md
- Deployment evidence: ../evidence/deployment.md
- Verification workflow: https://github.com/shibinj-stack/pro/actions/runs/38346002453

## Result and qualification
The live API returned HTTP 200 and supplied Render service identity, branch, and deployed commit metadata at 2026-10-13T04:21:23Z. MongoDB state: connected; URI configured flag: true; configured in Render and connected (secret value intentionally redacted). This workflow records a full pass only when the database state is connected. The API source in this repository is a minimal deployment demo, not the original full ClinicDesk MEAN application.
