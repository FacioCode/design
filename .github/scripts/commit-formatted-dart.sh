#!/bin/bash
set -e

# Get git status for changes
git status

# Prepare changed dart files to be committed
# shellcheck disable=SC2046
git add $(git diff --name-only -- '*.dart')

# Commit pubspec file
git commit --allow-empty -m "style(flutter): format dart files with dartfmt [skip ci]"

# Push up-to-date pubspec file
git push origin
