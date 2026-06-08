@echo off
cd /d "%~dp0"
node switch-result-source.mjs sportmonks
node sync-results.mjs --source=sportmonks
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
pause
