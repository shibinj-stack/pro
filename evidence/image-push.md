# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38231502044
- Source commit used for CI image build: cded707f64339579cec9904640e468ea12240a59
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:cded707f64339579cec9904640e468ea12240a59
- Image digest reported by build-push action: sha256:0ac329dc592637f3e3ba7231b1814b37f80f6e66b6148c9ba7b8ddb57835a5f5
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
