# Week 22 Task 03 — Deploy to the Cloud and Commit the Evidence

This folder contains the step-by-step deployment log, verified health-check response, service identity, host environment record, versioned image push record, source and test files, and Render configuration snapshot.

## Key files
- docs/deployment.md: ordered build, push, provision, configure, deploy, and live verification log.
- deployment.md: root-level compatibility copy of the deployment log.
- deployment-run.log: execution record for the linked workflow run.
- capture-evidence.yml: non-secret host, image, and runtime environment values.
- evidence/health-check.txt: actual live HTTP response and UTC check time.
- evidence/deployment.md: deployment identity, status, public URL, and response.
- evidence/host-environment.md: provider, service, region and safe environment values.
- evidence/image-push.md: image tag, digest and registry push evidence.
- render.yaml: snapshot of the live source-based Blueprint.
- server/ and root-level Dockerfile/index.js/package.json/test/: source and test code.

## Important deployment distinctions
The live Render service is Blueprint-managed with runtime=docker and builds from repository source. GitHub Actions separately publishes a versioned CI image to GHCR; this package does not claim that Render pulled that image. The active deployment identity is the full commit SHA reported by Render's live /health endpoint.

The service's ALLOW_NO_DATABASE and MONGODB_URI settings are controlled in Render and are not committed as secret values. The GitHub workflow accepts a full deployment pass only when the live /health payload reports database=connected. If the current evidence says not_configured or disconnected, configure a real MongoDB Atlas connection string in Render, set ALLOW_NO_DATABASE=false there, then redeploy and rerun checks.

To run local checks from this folder: npm install, npm test, npm run check-evidence. The health-capture helper makes a real HTTP request only when supplied with a real BACKEND_URL.
