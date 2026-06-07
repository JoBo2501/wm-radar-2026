@echo off
cd /d "%~dp0"
echo Starte WM Radar 26 Server...
echo.
echo Bitte dieses Fenster offen lassen.
echo Wenn gleich "listening" erscheint, oeffne:
echo http://localhost:5173
echo.
node server.mjs
pause
