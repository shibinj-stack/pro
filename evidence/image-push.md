# Container Image Build and Push Record

- Workflow run: https://github.com/shibinj-stack/pro/actions/runs/38231247696
- Source commit used for CI image build: 0db092e41efed6734621930d684d071f28e5a543
- Image tag: ghcr.io/shibinj-stack/clinicdesk-api-demo:0db092e41efed6734621930d684d071f28e5a543
- Image digest reported by build-push action: sha256:f4948dec09a55e04cfb31451cf5734e4eae13d2ca017674ddb84148030fe6b97
- Registry: GitHub Container Registry (ghcr.io)
- Image build/push step: completed successfully before this health-check step
- Important: the running Render service is Blueprint-managed with runtime=docker, so it builds from the repository Dockerfile. The GHCR image above is a separately published CI artifact; it is not claimed to be the image pulled by the existing Render service.

Secrets are excluded.
