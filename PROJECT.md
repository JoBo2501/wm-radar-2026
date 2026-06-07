# WM Radar 26 Projekthandbuch

Stand: 2026-06-07

## Ziel

WM Radar 26 ist ein persoenliches Analysten-Cockpit fuer die FIFA Fussball-WM 2026. Die App soll bei 104 Spielen Orientierung geben, Low-Value-Spiele herausfiltern, Fokus-Teams priorisieren und sichtbar machen, wer weiterkommt, gegen wen es danach geht, welche Drittplatzierten profitieren und welche Taktiksignale zaehlen.

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
- Post-Match-Reports: `data/post-match-reports.json`, `generate-post-match-reports.mjs`, `validate-post-match-reports.mjs`
- Schluesselfiguren: `data/key-figures.json`
- Quellen-/Analystenmodell: `data/analyst-sources.json`
- Build/Validierung: `normalize-fixtures.mjs`, `validate-schedule.mjs`, `build-data.mjs`, `build-standalone.mjs`, `build-pages.mjs`, `release-pages.mjs`

## Datenfluss

1. Rohfixtures liegen in `data/raw/fixtures.json`.
2. `normalize-fixtures.mjs` erzeugt `data/matches.json`.
3. `validate-schedule.mjs` prueft 72 Gruppenspiele und 32 K.o.-Slots.
4. `sync-results.mjs` zieht Ergebnisse aus der aktiven Quelle, aktuell football-data.org Free.
5. `validate-results.mjs` prueft Mapping, Scores, Dubletten und Konflikte.
6. `generate-post-match-reports.mjs` erzeugt Draft-Reports aus finalen Ergebnissen.
7. `validate-post-match-reports.mjs` prueft Reportstruktur, Match-IDs und Metriken.
8. `build-data.mjs` packt alle Daten in `data.js`.
9. `build-standalone.mjs` erzeugt `WM-Radar-26.html`.
10. Die UI berechnet Match Value, Tabellen, Best Thirds, Bracket-Aufloesung und Dossiers.

## Ergebnis-Sync

Aktive Quelle: `football-data.org` in `data/result-sources.json`.

Aktueller Zustand:

- football-data.org liefert 104 Provider-Matches.
- Es gibt noch 0 finale und 0 Live-Ergebnisse.
- Die App bleibt deshalb im Projektionsmodus.
- Sobald echte Resultate kommen, aktualisieren sich Tabellen, Best Thirds, Bracket und K.o.-Dossiers automatisch.
- Finale Gruppenspiele erzeugen zusaetzlich automatische Post-Match-Draft-Reports mit Score-Audit, Metrik-Blueprint und Lernfrage.

Wichtige Dateien:

- `setup-football-data-token.cmd`: Token lokal speichern.
- `enable-football-data.cmd`: Provider aktivieren und einmal syncen.
- `enable-demo-post-match.cmd`: lokalen Demo-Feed aktivieren und Post-Match-Draft-Report testen.
- `restore-football-data.cmd`: nach Demo wieder auf football-data.org zurueckschalten.
- `watch-results.cmd`: dauerhaften Poller starten.
- `sync-results.cmd`: einmaliger Sync/Rebuild per Doppelklick.
- `release-pages.cmd`: Daten und `docs/` aktualisieren.
- `release-and-push.cmd`: Daten aktualisieren, committen und nach GitHub pushen.
- `.nojekyll`: statisches GitHub-Pages-Deployment aus Branch `master` ohne Jekyll-Verarbeitung.

## UI-Module

- Hero/Control Room: atmosphaerischer Einstieg und Kontrollzahlen.
- Was heute zaehlt: Empfehlungen Live, Analyse, Highlights, Skip.
- Tagesbriefing: Watch Plan plus Nachtspiele ohne Spoiler.
- Datenlage & Transparenz: Datenqualitaet, Spielplan-Ampel, Ergebnis-Sync-Ampel. Routine-Importe bleiben in einem einklappbaren Detailbereich.
- Gruppen & Szenarien: Gruppen A-L mit Weiterkommen-und-Gegner-Relevanz.
- Tabellen & Szenarien: Tabellenprojektion, direkte Qualifikanten, Best Thirds und moegliche naechste Gegner.
- Der Weg ins Finale: 32 K.o.-Matches, dynamisch aufgeloeste Slots und moegliche Gegnerfolgen.
- K.o.-Dossiers: Watch-Empfehlung, Stilkontrast, Upset-Risiko, moeglicher naechster Gegner.
- Match-Dossier: Analysten-Story, Belegschicht, Advanced-Metrics-Plan und Post-Match Report Hub.
- Team-Briefings: taktische Teamprofile. Sichtbare Teamwerte sind Watchlist-Prioritaet, kein objektives Ranking. Spaeter getrennt: Teamstaerke, Momentum, Attraktivitaet, Ueberraschungspotenzial und Datenlage.
- Schluesselfiguren: Trainer, Leader, Taktikspieler, Druckspieler und Turnier-Entdeckungen mit Erwartung vor dem Turnier, Watch-Cues und Entwicklung im Turnierverlauf.
- Analyst Desk: Trust-Modell fuer Daten, Stimmen und KI-Research.

## Erledigte Schritte

- MVP UI als lokales Analysten-Cockpit aufgebaut.
- Standalone-Doppelklickdatei erstellt.
- Vollstaendige Gruppenphase mit 72 Spielen importiert.
- K.o.-Struktur mit 32 Platzhalterspielen angelegt.
- Spielwert inklusive Weiterkommen-und-Gegner-Gewichtung gebaut.
- Gruppen & Szenarien, Tabellen & Szenarien und Best Thirds umgesetzt.
- Dynamische Bracket-Aufloesung fuer direkte Slots, Drittplatzierte und Folgerunden gebaut.
- K.o.-Match-Dossiers integriert.
- Ergebnis-Sync-Architektur mit Provider, Overrides, Validierung und Ampel gebaut.
- football-data.org Free vorbereitet und aktiviert.
- Poller fuer regelmaessigen Ergebnisabgleich hinzugefuegt.
- Post-Match-Report-Modell, Validator und automatischer Draft-Generator hinzugefuegt.
- Demo-Feed und Dry-Run fuer Post-Match-Reports hinzugefuegt, damit der Workflow ohne echte WM-Daten getestet werden kann.
- Schluesselfiguren-Modul als Seed-Datenmodell und UI-Schicht angelegt.

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
