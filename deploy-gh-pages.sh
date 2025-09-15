#!/bin/bash#!/bin/bash

# Deploy the contents of the 'out' directory to the 'gh-pages' branch# Deploy the contents of the 'out' directory to the 'gh-pages' branch



set -eset -e



# Build the site (already done, but you can uncomment if needed)# Build the site (already done, but you can uncomment if needed)

# pnpm build# pnpm build



# Check for 'out' directory# Check for 'out' directory

echo "Checking for 'out' directory..."echo "Checking for 'out' directory..."

if [ ! -d "out" ]; thenif [ ! -d "out" ]; then

  echo "Error: 'out' directory not found. Run 'pnpm build' first."  echo "Error: 'out' directory not found. Run 'pnpm build' first."

  exit 1  exit 1

fifi



git checkout --orphan gh-pagesgit checkout --orphan gh-pages

rm -rf *rm -rf *

cp -r out/* .cp -r out/* .

rm -rf outrm -rf out



git add .git add .

git commit -m "Deploy to GitHub Pages"git commit -m "Deploy to GitHub Pages"

git push -f origin gh-pagesgit push -f origin gh-pages



git checkout maingit checkout main

echo "Deployment complete!"echo "Deployment complete!"
