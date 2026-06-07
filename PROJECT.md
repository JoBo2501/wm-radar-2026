# WM Radar 26 Projekthandbuch

Stand: 2026-06-07

## Ziel

WM Radar 26 ist ein persoenliches Analysten-Cockpit fuer die FIFA Fussball-WM 2026. Die App soll bei 104 Spielen Orientierung geben, Low-Value-Spiele herausfiltern, Fokus-Teams priorisieren und K.o.-Pfade, Drittplatzierte, Tabellen, Taktiksignale und serioese Quellen sichtbar machen.

## Produktprinzipien

- Orientierung vor Vollstaendigkeit: Die App soll sagen, was wirklich wichtig ist.
- Datenklarheit: Jede Ebene ist als Echt, Mixed, Modell oder Seed erkennbar.
- Automatisierung vor Handarbeit: Ergebnisse werden ueber Provider synchronisiert, nicht manuell gepflegt.
- Analystenqualitaet vor TV-Laerm: Quellen werden nach Trust, Datenanker und Fachwert bewertet.
- Mobile und PC: Die Standalone-Datei laeuft lokal per Doppelklick, optional auch ueber lokalen Server.

## Hauptkomponenten

- UI: `index.html`, `styles.css`, `app.js`
- Standalone-Build: `WM-Radar-26.html`
- App-Datenbundle: `data.js`
- Teams/Gruppen/Fixtures: `data/teams.json`, `data/groups.json`, `data/matches.json`
- K.o.-Struktur: `data/knockout.json`
- Ergebnis-Sync: `sync-results.mjs`, `validate-results.mjs`, `watch-results.mjs`
- Ergebnis-Konfiguration: `data/result-sources.json`, `data/results.json`, `data/result-overrides.json`, `data/result-validation.json`
- Quellen-/Analystenmodell: `data/analyst-sources.json`
- Build/Validierung: `normalize-fixtures.mjs`, `validate-schedule.mjs`, `build-data.mjs`, `build-standalone.mjs`, `build-pages.mjs`

## Datenfluss

1. Rohfixtures liegen in `data/raw/fixtures.json`.
2. `normalize-fixtures.mjs` erzeugt `data/matches.json`.
3. `validate-schedule.mjs` prueft 72 Gruppenspiele und 32 K.o.-Slots.
4. `sync-results.mjs` zieht Ergebnisse aus der aktiven Quelle, aktuell football-data.org Free.
5. `validate-results.mjs` prueft Mapping, Scores, Dubletten und Konflikte.
6. `build-data.mjs` packt alle Daten in `data.js`.
7. `build-standalone.mjs` erzeugt `WM-Radar-26.html`.
8. Die UI berechnet Match Value, Tabellen, Best Thirds, Bracket-Aufloesung und K.o.-Dossiers.

## Ergebnis-Sync

Aktive Quelle: `football-data.org` in `data/result-sources.json`.

Aktueller Zustand:

- football-data.org liefert 104 Provider-Matches.
- Es gibt noch 0 finale und 0 Live-Ergebnisse.
- Die App bleibt deshalb im Projektionsmodus.
- Sobald echte Resultate kommen, aktualisieren sich Tabellen, Best Thirds, Bracket und K.o.-Dossiers automatisch.

Wichtige Dateien:

- `setup-football-data-token.cmd`: Token lokal speichern.
- `enable-football-data.cmd`: Provider aktivieren und einmal syncen.
- `watch-results.cmd`: dauerhaften Poller starten.
- `sync-results.cmd`: einmaliger Sync/Rebuild per Doppelklick.
- `.nojekyll`: statisches GitHub-Pages-Deployment aus Branch `master` ohne Jekyll-Verarbeitung.

## UI-Module

- Hero/Control Room: atmosphaerischer Einstieg und Kontrollzahlen.
- Match Value Board: Empfehlungen Live, Analyse, Highlights, Skip.
- Daily Command Center: Tagesplan plus Nachtspiele.
- Data Hub: Datenqualitaet, Spielplan-Ampel, Ergebnis-Sync-Ampel.
- Groups & Paths: Gruppen A-L mit Pfadrelevanz.
- Standings Hub: Tabellenprojektion, direkte Qualifikanten, Best Thirds.
- Bracket Command: 32 K.o.-Matches, dynamisch aufgeloeste Slots.
- K.o.-Dossiers: Watch-Empfehlung, Stilkontrast, Upset-Risiko, Pfadwert.
- Team Lab: taktische Teamprofile.
- Analyst Desk: Trust-Modell fuer Daten, Stimmen und KI-Research.

## Erledigte Schritte

- MVP UI als lokales Analysten-Cockpit aufgebaut.
- Standalone-Doppelklickdatei erstellt.
- Vollstaendige Gruppenphase mit 72 Spielen importiert.
- K.o.-Struktur mit 32 Platzhalterspielen angelegt.
- Match Value Score inklusive Pfadgewichtung gebaut.
- Groups & Paths, Standings Hub und Best Thirds umgesetzt.
- Dynamische Bracket-Aufloesung fuer direkte Slots, Drittplatzierte und Folgerunden gebaut.
- K.o.-Match-Dossiers integriert.
- Ergebnis-Sync-Architektur mit Provider, Overrides, Validierung und Ampel gebaut.
- football-data.org Free vorbereitet und aktiviert.
- Poller fuer regelmaessigen Ergebnisabgleich hinzugefuegt.

## Naechste Schritte

1. Poller waehrend Spieltagen mit `watch-results.cmd` laufen lassen.
2. Sobald echte Resultate eintreffen, Mapping und Tabellen live pruefen.
3. Provider-Mapping fuer K.o.-Runden gegen echte Providerdaten nachschaerfen.
4. GitHub-Repository anlegen und Projekt sichern.
5. GitHub Pages aktivieren und die statische Demo pruefen.
6. Premium-Datenphase planen: xG, Lineups, Karten, Schuesse, Ballbesitz, Pressing-/Trackingdaten.

## GitHub und Deployment

GitHub ist sinnvoll, sobald der aktuelle Stand stabil gesichert werden soll. Details stehen in `GITHUB_DEPLOYMENT.md`. Wichtig: API-Token gehoeren nicht ins Repository. Sie bleiben als Umgebungsvariablen lokal.

Empfohlener Ablauf:

1. `.gitignore` fuer Tokens, Logs und lokale Runtime-Dateien anlegen.
2. Repository initialisieren oder bestehendes Repo nutzen.
3. Initial Commit mit App, Datenmodell und Dokumentation.
4. GitHub Pages per `Deploy from a branch` aktivieren: Branch `master`, Folder `/docs`.
5. Fuer automatischen Live-Sync spaeter eher ein kleiner Server/Worker, weil GitHub Pages selbst keine regelmaessigen Node-Syncs ausfuehrt.

## Betriebsmodus waehrend der WM

- App lokal oder per Server oeffnen.
- `watch-results.cmd` starten.
- Browser nach Sync neu laden, wenn die Standalone-Datei genutzt wird.
- Bei lokalem Server kann spaeter Auto-Refresh oder Live-Reload ergaenzt werden.
