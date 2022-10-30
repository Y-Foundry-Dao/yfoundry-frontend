#!/bin/bash

git checkout -b releases/v$1 main
git branch --set-upstream-to=origin/main releases/v$1
git push

echo "Release v$1 branch prepared for deployment!"

echo "Go to https://github.com/Y-Foundry-Dao/yfoundry-frontend/releases/new to continue the process."

echo "Full instructions available at https://docs.yfoundry.io/develop/web2/commit/"

