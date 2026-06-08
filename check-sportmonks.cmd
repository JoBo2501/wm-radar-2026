@echo off
cd /d "%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$env:SPORTMONKS_API_KEY=[Environment]::GetEnvironmentVariable('SPORTMONKS_API_KEY','User'); node check-sportmonks.mjs"
echo.
echo Wenn der Token nicht sichtbar ist: setup-sportmonks-token.cmd erneut ausfuehren und Terminal/Fenster neu starten.
pause
