#!/bin/bash
set -e

# Get git status for changes
git status

# Commit pubspec file
git commit -a --allow-empty -m "style(flutter): format dart files with dartfmt [skip ci]"

# Push up-to-date pubspec file
git push origin HEAD:main
