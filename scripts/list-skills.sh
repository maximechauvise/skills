#!/usr/bin/env bash
set -euo pipefail

repo_dir="$(cd "$(dirname "$0")/.." && pwd)"

cd "$repo_dir"
find skills -name SKILL.md -not -path '*/node_modules/*' | sort
