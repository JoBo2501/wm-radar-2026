# WM Radar 26 Projekthandbuch

Stand: 2026-06-10

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
- Ergebnis-Sync: `sync-results.mjs`, `validate-results.mjs`, `watch-results.mjs`, Sportmonks-Abdeckungsprobe `probe-sportmonks.mjs`
- Ergebnis-Konfiguration: `data/result-sources.json`, `data/results.json`, `data/result-overrides.json`, `data/result-validation.json`
- Provider-Testprotokoll: `data/provider-tests.json`, erzeugt aus `data/raw/sportmonks-probe.json`
- Provider-Mapping: `data/provider-mapping.json`, erzeugt aus Sportmonks-Probe und internem Spielplan
- Sportmonks-Betrieb: `check-sportmonks.mjs`, `check-sportmonks.cmd`, `operations/SPORTMONKS_GOLDFALL.md`, `operations/SPIELTAGS_CHECKLISTE.md`
- Feature Blueprints: `data/feature-blueprints.json`
- Post-Match-Reports: `data/post-match-reports.json`, `generate-post-match-reports.mjs`, `validate-post-match-reports.mjs`
- Schluesselfiguren: `data/key-figures.json`
- Quellen-/Analystenmodell: `data/analyst-sources.json` mit Automationsplan, Zugangsmodell und Analyse-Synthese
- Build/Validierung: `normalize-fixtures.mjs`, `validate-schedule.mjs`, `build-data.mjs`, `build-standalone.mjs`, `build-pages.mjs`, `release-pages.mjs`

## Datenfluss

1. Rohfixtures liegen in `data/raw/fixtures.json`.
2. `normalize-fixtures.mjs` erzeugt `data/matches.json`.
3. `validate-schedule.mjs` prueft 72 Gruppenspiele und 32 K.o.-Slots.
4. `sync-results.mjs` zieht Ergebnisse aus der aktiven Quelle, aktuell Sportmonks.
5. `validate-results.mjs` prueft Mapping, Scores, Dubletten und Konflikte.
6. `generate-post-match-reports.mjs` erzeugt Draft-Reports aus finalen Ergebnissen.
7. `validate-post-match-reports.mjs` prueft Reportstruktur, Match-IDs und Metriken.
8. `build-data.mjs` packt alle Daten in `data.js`.
9. `build-standalone.mjs` erzeugt `WM-Radar-26.html`.
10. Die UI berechnet Match Value, Tabellen, Best Thirds, Bracket-Aufloesung und Dossiers.

## Ergebnis-Sync

Aktive Quelle: `Sportmonks` in `data/result-sources.json`.
Sportmonks ist auf League-ID `732` gefiltert; der Ergebnis-Sync mappt Sportmonks-Fixtures primaer ueber die stabile `providerId` aus `data/provider-mapping.json`.
Scores werden aus Sportmonks `scores` primaer ueber `type_id 1525` / `CURRENT` gelesen; Halbzeit- und Perioden-Scores bleiben Fallbacks.

Aktueller Zustand:

- Sportmonks liefert 104 Provider-Matches.
- Es gibt 2 finale und 0 Live-Ergebnisse.
- Tabellen, Best Thirds und Bracket laufen mit den synchronisierten Ergebnissen, solange echte Resultate vorliegen; ansonsten bleiben Modellprojektionen sichtbar.
- Sobald echte Resultate kommen, aktualisieren sich Tabellen, Best Thirds, Bracket und K.o.-Dossiers automatisch.
- Finale Gruppenspiele erzeugen zusaetzlich automatische Post-Match-Draft-Reports mit Score-Audit, Metrik-Blueprint und Lernfrage.

Wichtige Dateien:

- `setup-football-data-token.cmd`: Token lokal speichern.
- `enable-football-data.cmd`: Provider aktivieren und einmal syncen.
- `enable-demo-post-match.cmd`: lokalen Demo-Feed aktivieren und Post-Match-Draft-Report testen.
- `restore-sportmonks.cmd`: nach Demo oder Fallback wieder auf Sportmonks als Primaerquelle zurueckschalten.
- `restore-football-data.cmd`: Legacy-Fallback auf football-data.org.
- `setup-sportmonks-token.cmd`: Sportmonks API-Key lokal speichern.
- `check-sportmonks.cmd`: Token, Fixture-Zugriff, Mapping-Quote und Prediction-Verfuegbarkeit pruefen.
- `probe-sportmonks.cmd`: Sportmonks-Abdeckung fuer Basis- und Advanced-Felder pruefen.
- `enable-sportmonks.cmd`: Sportmonks als primaere Ergebnisquelle setzen, synchronisieren und App neu bauen.
- `watch-results.cmd`: dauerhaften Poller starten.
- `sync-results.cmd`: einmaliger Sync/Rebuild per Doppelklick.
- `release-pages.cmd`: Daten und `docs/` aktualisieren.
- `release-and-push.cmd`: Daten aktualisieren, committen und nach GitHub pushen.
- `.nojekyll`: statisches GitHub-Pages-Deployment aus Branch `master` ohne Jekyll-Verarbeitung.

## UI-Module

- Hero/Control Room: atmosphaerischer Einstieg und Kontrollzahlen.
- Orientierungsschicht: drei echte Views Heute, Spiele und Turnierlage mit Bereichskarten, aktiver Navigation und Schnellzugriffen.
- Was heute zaehlt: Empfehlungen Live, Analyse, Highlights, Skip.
- Matchday-Startseite: Topspiel, Tages-Storylines, kuratierter Watch-Plan, bewusste Skip-Liste und Morgen-ohne-Spoiler.
- Tagesbriefing: Watch Plan plus Nachtspiele ohne Spoiler.
- Datenlage & Transparenz: Datenqualitaet, Spielplan-Ampel und Ergebnis-Sync-Ampel bleiben in den Daten- und Betriebsdateien pruefbar; die Nutzeroberflaeche zeigt nur spielrelevante Signale.
- Provider-Testprotokoll: Sportmonks-Abdeckung, Feature-Coverage und naechste Pruefzeitpunkte werden in den Daten- und Betriebsdateien gepflegt, aber nicht mehr als eigenes UI-Modul ausgespielt.
- Provider-Mapping und Predictions: Sportmonks-Fixture-IDs werden auf interne Match-IDs gemappt; Prediction-Verfuegbarkeit kann vorsichtig als Pre-Match-Signal in den Spielwert einfliessen.
- Live-Predictions-Beta: Sportmonks hat In-Play-Win-Probabilities vor dem Auftakt am 2026-06-11 angekuendigt; die App fuehrt sie als Beta-Signal, bis echte Responses validiert sind.
- Datenanbieter-Architektur: SportMonks ist die einzige sichtbare App-Datenquelle; Taktik- und Medienquellen bleiben separat als Analyseebene.
- Feature Lab: Was-passiert-wenn, Live-Predictions-Radar, Momentum, Stuermer-Effizienz und Pre-Match-Scout bleiben als Datenmodell und Produkt-Backlog erhalten; sichtbar ist aktuell der Pre-Match-Scout im Match-Dossier.
- Pre-Match-Scout: Match-Dossier verbindet Prediction, Lineup-/Formationsstatus, Expected-XI-Abdeckung, Mapping-Vertrauen und konkrete Pruefpunkte vor Anpfiff.
- Gruppen & Szenarien: Gruppen A-L mit Weiterkommen-und-Gegner-Relevanz.
- Tabellen & Szenarien: Tabellenprojektion, direkte Qualifikanten, Best Thirds und moegliche naechste Gegner.
- Der Weg ins Finale: 32 K.o.-Matches, dynamisch aufgeloeste Slots und moegliche Gegnerfolgen.
- K.o.-Dossiers: Watch-Empfehlung, Stilkontrast, Upset-Risiko, moeglicher naechster Gegner.
- Match-Dossier: Fuehrt die Spiele-View direkt mit Match-Liste, Analysten-Story, Belegschicht, Advanced-Metrics-Plan und Post-Match Report Hub.
- Team-Briefings: taktische Teamprofile als Kontext unterhalb der Spiele. Sichtbare Teamwerte sind Watchlist-Prioritaet, kein objektives Ranking. Spaeter getrennt: Teamstaerke, Momentum, Attraktivitaet, Ueberraschungspotenzial und Datenlage.
- Schluesselfiguren: Trainer, Leader, Taktikspieler, Druckspieler und Turnier-Entdeckungen mit Erwartung vor dem Turnier, Watch-Cues und Entwicklung im Turnierverlauf.
- Analyse-Synthese: Datenanker, Video-/Tracking-Beleg, taktische Deutung und Kontextstimmen werden im Match-Dossier getrennt gewichtet.

## Erledigte Schritte

- MVP UI als lokales Analysten-Cockpit aufgebaut.
- UI-Orientierung mit Drei-Zonen-Navigation, Bereichskarten, Bereichstrennern und echter View-Umschaltung verbessert.
- Heute-Bereich zur kuratierten Matchday-Startseite ausgebaut.
- Standalone-Doppelklickdatei erstellt.
- Vollstaendige Gruppenphase mit 72 Spielen importiert.
- K.o.-Struktur mit 32 Platzhalterspielen angelegt.
- Spielwert inklusive Weiterkommen-und-Gegner-Gewichtung gebaut.
- Gruppen & Szenarien, Tabellen & Szenarien und Best Thirds umgesetzt.
- Dynamische Bracket-Aufloesung fuer direkte Slots, Drittplatzierte und Folgerunden gebaut.
- K.o.-Match-Dossiers integriert.
- Ergebnis-Sync-Architektur mit Provider, Overrides, Validierung und Ampel gebaut.
- football-data.org Free als frueher Fallback vorbereitet.
- Sportmonks als primaere WM-Datenquelle mit Setup-, Probe- und Enable-Workflow aktiviert.
- Sportmonks-Probebericht als Betriebs- und Datenpruefung integriert; die sichtbare App bleibt auf Spieltagsorientierung fokussiert.
- Sportmonks-Mapping-Generator und Prediction-Signal-Kanal vorbereitet.
- Sportmonks-Meldung vom 2026-06-10 aufgenommen: Live-In-Play-Predictions Beta vor dem Auftakt am 2026-06-11, Widgets als Fallback, MCP als Developer-Hilfe.
- Sichtbare Datenanbieter auf SportMonks konsolidiert und alte Provider-Pillars entfernt.
- Sportmonks-Health-Check, Referenzspiel-Goldfall und Spieltags-Checkliste angelegt.
- Differenzierende Sportmonks-Featuremodule als Datenmodell und Backlog aufgenommen.
- Pre-Match-Scout v1 im Match-Dossier integriert.
- Poller fuer regelmaessigen Ergebnisabgleich hinzugefuegt.
- Post-Match-Report-Modell, Validator und automatischer Draft-Generator hinzugefuegt.
- Demo-Feed und Dry-Run fuer Post-Match-Reports hinzugefuegt, damit der Workflow ohne echte WM-Daten getestet werden kann.
- Schluesselfiguren-Modul als Seed-Datenmodell und UI-Schicht angelegt.
- Quellen-Automationsmodell und Analyse-Synthese fuer Match-Dossiers integriert.

## Naechste Schritte

1. Vor jedem Spieltag `check-sportmonks.cmd` ausfuehren.
2. Goldfall `mex-rsa-2026-06-11` pruefen, wenn Mapping oder UI-Ausgabe unklar ist.
3. Poller waehrend Spieltagen mit `watch-results.cmd` laufen lassen.
4. Sobald echte Resultate eintreffen, Mapping und Tabellen live pruefen.
5. Provider-Mapping fuer K.o.-Runden gegen echte Providerdaten nachschaerfen.
6. Live-Predictions-Beta, xG, Pressure und Expected Lineups erst nach echten Sportmonks-Responses schaerfer gewichten.

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
