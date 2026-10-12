# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38229978238
- Source commit used for CI image build: 7920d2c1a23c5849d94c21f3b7ae344883e27c7f
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:7920d2c1a23c5849d94c21f3b7ae344883e27c7f
- Image digest reported by build-push action: sha256:e7ddfd7352d4273b817469eab69359cf06712e6f9094b8c853d7c3b8a30c805b
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
