# GitHub und Deployment

## Ziel

Das Projekt soll versioniert und spaeter deploybar sein, ohne API-Token oder lokale Secrets zu veroeffentlichen.

## GitHub-Sicherung

Empfohlener Ablauf:

1. `.gitignore` pruefen.
2. Git-Status ansehen:

```powershell
git status --short
```

3. Dateien stagen:

```powershell
git add .
```

4. Initial Commit:

```powershell
git commit -m "Initial WM Radar 26 app"
```

5. GitHub-Repository anlegen und Remote verbinden:

```powershell
git remote add origin https://github.com/DEIN-NAME/wm-radar-26.git
git push -u origin master
```

## Secrets

Nicht committen:

- `.env`
- echte API-Token
- persoenliche lokale Konfiguration

Token bleiben lokal als Umgebungsvariable, zum Beispiel:

```powershell
setx FOOTBALL_DATA_TOKEN "dein-token"
```

## Deployment-Optionen

### GitHub Pages

Gut fuer:

- statische App
- `WM-Radar-26.html`
- schnelle Demo ohne Backend

Einschraenkung:

- Kein automatischer Node-Poller.
- Ergebnisse muessen vorher lokal gebaut und committed/gepusht werden.

Vorbereitet:

- `.nojekyll` verhindert, dass GitHub Pages Dateien als Jekyll-Seite verarbeitet.
- Die App wird als statisches Bundle in `docs/` bereitgestellt.

Aktivierung in GitHub:

1. Repository oeffnen.
2. `Settings` -> `Pages`.
3. Unter `Build and deployment` als Source `Deploy from a branch` waehlen.
4. Branch `master` und Folder `/docs` auswaehlen.
5. Speichern. GitHub baut die statische Seite danach selbst.

Erwartete URL:

```text
https://jobo2501.github.io/wm-radar-2026/
```

### Kleiner Server oder Worker

Gut fuer:

- automatischen Ergebnis-Sync
- regelmaessiges Polling
- spaetere Live-Daten

Moegliche Plattformen:

- Render
- Railway
- Fly.io
- eigener Mini-PC/NAS
- spaeter GitHub Actions nur fuer geplante Builds, falls API-Nutzung dort erlaubt ist

## Empfehlung

Phase 1:

- GitHub-Repo privat anlegen.
- Aktuellen Stand committen.
- Lokal weiter mit `watch-results.cmd` arbeiten.

Phase 2:

- GitHub Pages fuer statische Demo pruefen.
- Falls Live-Sync dauerhaft gebraucht wird, kleinen Server/Worker planen.
