#!/bin/bash

# Exit on any error
set -e

# Ensure we're in the project directory
cd /mnt/c/Users/bighe/Documents/GitHub/React-Date-Picker

# Switch to main branch
echo "Switching to branch main"
git checkout main

# Pull latest changes
echo "Pulling latest changes"
git pull origin main

# Build the application
echo "Building app"
npm run build

# Deploy the files to the server
echo "Deploying files to server"
rsync -avz --delete-after build/ earthclaninfo@triviabydate.sarahzw.com:/var/www/triviabydate

echo "Deployment complete"
