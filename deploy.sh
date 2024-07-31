#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
npm run build

echo "Deploying files to server"
rsync -avP build/ earthclaninfo@triviabydate.sarahzw.com:/var/www/triviabydate.sarahzw.com
echo "Deployment complete"