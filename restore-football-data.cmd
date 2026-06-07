@echo off
cd /d "%~dp0"
node switch-result-source.mjs football-data
node sync-results.mjs --source=football-data
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
echo.
echo football-data.org ist wieder aktiv. Wenn FOOTBALL_DATA_TOKEN fehlt, bleibt die App im Projektionsmodus.
pause
