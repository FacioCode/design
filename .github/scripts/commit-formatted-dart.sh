#!/bin/bash
set -e

# Get git status for changes
git status

# Prepare changed files to be committed
git add -a

# Commit pubspec file
git commit --allow-empty -m "style(flutter): format dart files with dartfmt [skip ci]"

# Push up-to-date pubspec file
git push origin HEAD:main
