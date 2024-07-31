#!/bin/sh

echo "Switching to branch main"
git checkout main

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP dist/ earthclaninfo@triviabydate.sarahzw.com:/var/www/triviabydate.sarahzw.com/
echo "Deployment complete"