# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38229610295
- Source commit used for CI image build: 88646a60a51849d24f4803a9af8418326ccaa748
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:88646a60a51849d24f4803a9af8418326ccaa748
- Image digest reported by build-push action: sha256:3af46a57ced7b39c7532c959e1c521556744e4bbff0c0b28d62d98141b5fae89
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
