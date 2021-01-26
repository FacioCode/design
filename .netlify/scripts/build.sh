#!/bin/bash
set -e

npm install -g npm@latest
npm install -g lerna
npm ci --no-optional
lerna bootstrap
npm run build
cd packages/react
npm run build-storybook
