@echo off
cd /d "%~dp0"
set "APP=%~dp0WM-Radar-26.html"
echo Oeffne WM Radar 26...
echo.
where node >nul 2>nul
if "%ERRORLEVEL%"=="0" (
  echo Aktualisiere Daten und Standalone-Datei...
  node normalize-fixtures.mjs
  node validate-schedule.mjs
  node build-data.mjs
  node build-standalone.mjs
)

if not exist "%APP%" (
  echo.
  echo Konnte WM-Radar-26.html nicht finden.
  echo Bitte pruefe, ob Node installiert ist oder oeffne index.html direkt.
  echo.
  pause
  exit /b 1
)

echo Die App wird direkt als lokale Datei geoeffnet. Kein localhost-Server noetig.
echo.
if exist "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" (
  start "" "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe" "%APP%"
  exit /b 0
)

if exist "%ProgramFiles%\Google\Chrome\Application\chrome.exe" (
  start "" "%ProgramFiles%\Google\Chrome\Application\chrome.exe" "%APP%"
  exit /b 0
)

start "" "%APP%"
