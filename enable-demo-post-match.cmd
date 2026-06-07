@echo off
cd /d "%~dp0"
node switch-result-source.mjs demo-local
node sync-results.mjs --source=demo-local
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
echo.
echo Demo-Post-Match-Modus ist aktiv. Oeffne WM-Radar-26.html und waehle Brasilien vs Marokko.
echo Zum Zurueckschalten: restore-football-data.cmd doppelklicken.
pause
