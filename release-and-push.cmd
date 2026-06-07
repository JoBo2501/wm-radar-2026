@echo off
cd /d "%~dp0"
node release-pages.mjs --commit --push --message="Update WM Radar deployment"
pause
