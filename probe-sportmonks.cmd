@echo off
cd /d "%~dp0"
node probe-sportmonks.mjs
node update-sportmonks-mapping.mjs
pause
