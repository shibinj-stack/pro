# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38229785519
- Source commit used for CI image build: b82ceab8d4869fc85298886103285101992a122a
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:b82ceab8d4869fc85298886103285101992a122a
- Image digest reported by build-push action: sha256:f289e7f305b18c21857d864ba95288d9d8d0017674c44dba0253255d807f77b8
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
