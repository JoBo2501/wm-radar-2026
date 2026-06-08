@echo off
setlocal
cd /d "%~dp0"
echo.
echo WM Radar 26 - Sportmonks Setup
echo.
echo Bitte den Sportmonks API-Key einfuegen. Er wird als Benutzer-Umgebungsvariable SPORTMONKS_API_KEY gespeichert.
echo Der Key wird nicht in GitHub, data.js oder die App geschrieben.
echo.
set /p SPORTMONKS_API_KEY_INPUT=SPORTMONKS_API_KEY: 
if "%SPORTMONKS_API_KEY_INPUT%"=="" (
  echo Kein Token eingegeben. Abbruch.
  pause
  exit /b 1
)
setx SPORTMONKS_API_KEY "%SPORTMONKS_API_KEY_INPUT%"
echo.
echo Token gespeichert. Wichtig: Terminal/Editor einmal neu starten, damit die Variable sichtbar ist.
echo Danach kannst du mit probe-sportmonks.cmd die API-Abdeckung testen.
echo.
pause
