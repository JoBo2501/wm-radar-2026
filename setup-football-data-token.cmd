@echo off
setlocal
cd /d "%~dp0"
echo.
echo WM Radar 26 - football-data.org Free Setup
echo.
echo 1. Kostenlosen Token holen: https://www.football-data.org/client/register
echo 2. Token hier einfuegen. Er wird als Benutzer-Umgebungsvariable FOOTBALL_DATA_TOKEN gespeichert.
echo.
set /p FOOTBALL_DATA_TOKEN_INPUT=FOOTBALL_DATA_TOKEN: 
if "%FOOTBALL_DATA_TOKEN_INPUT%"=="" (
  echo Kein Token eingegeben. Abbruch.
  pause
  exit /b 1
)
setx FOOTBALL_DATA_TOKEN "%FOOTBALL_DATA_TOKEN_INPUT%"
echo.
echo Token gespeichert. Wichtig: Terminal/Editor einmal neu starten, damit die Variable sichtbar ist.
echo Danach kann football-data.org mit folgendem Befehl getestet werden:
echo.
echo node sync-results.mjs --source=football-data
echo node validate-results.mjs
echo.
pause
