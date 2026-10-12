# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38229272412
- Source commit used for CI image build: e01bb6d5e928bb46745d9b1776ee2dfd478fd05e
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:e01bb6d5e928bb46745d9b1776ee2dfd478fd05e
- Image digest reported by build-push action: sha256:959afa9bbc872c4bce12619285cf092d23cc9fa9db760a97c7cb5ce16f7635c4
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
