# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38231417293
- Source commit used for CI image build: ec23fd82c619a58127e87ed3ae1073ae962294de
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:ec23fd82c619a58127e87ed3ae1073ae962294de
- Image digest reported by build-push action: sha256:f47e124e78de53a9279679279eb20aeba1027723a6d578a5616057f30ff80990
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
