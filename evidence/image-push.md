# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38231521369
- Source commit used for CI image build: 198f6e12aa772bd07a95b90d0c2760c298292ef1
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:198f6e12aa772bd07a95b90d0c2760c298292ef1
- Image digest reported by build-push action: sha256:6d5fa3d46881176441136b5ac8fec4ff5a1cc3405bde0799d41ccbabff6c5b1b
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
