#!/usr/bin/env sh
set -eu
: "${BACKEND_URL:?Set BACKEND_URL to the real deployed backend base URL}"
HEALTH_PATH="${HEALTH_PATH:-/health}"
OUT="${OUTPUT_FILE:-evidence/health-check.txt}"
CHECKED_AT="$(date -u '+%Y-%m-%dT%H:%M:%SZ')"
URL="${BACKEND_URL%/}${HEALTH_PATH}"
mkdir -p "$(dirname "$OUT")"
BODY="$(mktemp)"
trap 'rm -f "$BODY"' EXIT
STATUS="$(curl --silent --show-error --output "$BODY" --write-out '%{http_code}' --max-time 30 "$URL")"
{
  echo "Checked at (UTC): $CHECKED_AT"
  echo "URL: $URL"
  echo "HTTP status: $STATUS"
  echo "Response body:"
  cat "$BODY"
  echo
} > "$OUT"
cat "$OUT"
case "$STATUS" in 2*) ;; *) exit 1 ;; esac
