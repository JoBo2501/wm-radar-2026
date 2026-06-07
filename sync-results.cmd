@echo off
cd /d "%~dp0"
node sync-results.mjs
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
pause
