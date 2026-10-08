#!/usr/bin/env bash
# Update the landing on the server: pull main and rebuild.
set -euo pipefail
cd "$(dirname "$0")/.."
git pull --ff-only origin main
docker compose up -d --build --remove-orphans
docker compose ps
docker image prune -f
