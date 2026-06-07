# WM Radar 26 Data Foundation

Stand: 2026-06-07

## Datenstatus im MVP

- Echt: Turnierformat, offizieller FIFA-Kontext, 48 Teams, 104 Spiele.
- Teilweise echt: komplette Turnierstruktur mit 72 Gruppenspielen und 32 K.o.-Platzhaltern aus FIFA-Kontext und aktuellen Fixture-Listen.
- Berechnet: Match Value Score, Watch-Empfehlung, Low-Value-Erkennung.
- Seed: Taktikdossiers, Surprise-Radar-Werte, Advanced-Stat-Platzhalter.
- Seed: Team-Lab-Profile mit taktischen Arbeitsannahmen ohne finale Kader-/Startelfbehauptungen.
- Modell: Gruppenpfade und Pfad-Relevanz fuer Fokus-Teams, Surprise-Teams und Drittplatziertenlogik.
- Pipeline: `data/raw/fixtures.json` wird mit Team-, Gruppen- und Profilinformationen in `data/matches.json` normalisiert.
- Validierung: `validate-schedule.mjs` erzeugt `data/schedule-validation.json` mit Coverage, fehlenden Paarungen und Strukturwarnungen.
- Bracket: `data/knockout.json` enthaelt K.o.-Slots, Runden, Termine, Stadien und Platzhalter wie `1E`, `3ABCDF` oder `W73`.
- Ergebnisse: `data/results.json` ist als eigene Resultatquelle vorbereitet. Aktuell sind keine echten Ergebnisse enthalten; Tabellen und Best-Thirds laufen im Projektionsmodus.
- Ergebnis-Sync: `sync-results.mjs` liest die aktive Quelle aus `data/result-sources.json`, schreibt den lokalen Cache `data/results.json` und wendet `data/result-overrides.json` an.
- Ergebnis-Validierung: `validate-results.mjs` prueft unbekannte Matches, Scores, Dubletten und Mapping-Konflikte und schreibt `data/result-validation.json`.
- Bracket-Aufloesung: Die UI verbindet `data/results.json`, Gruppentabellen und `data/knockout.json`, um direkte Qualifikanten, erlaubte Drittplatzierte und Folgerunden-Slots modelliert zu setzen.
- K.o.-Dossiers: Watch-Empfehlungen, Stilkontrast und Upset-Sensitivitaet werden aus Teamprofilen, Pfadwerten, Projektionstabellen und Fokus-/Surprise-Markierungen berechnet.
- Kuratiert: `data/match-overrides.json` ersetzt Auto-Tags und Auto-Analysen fuer besonders wichtige Spiele.
- Analyst Desk: `data/analyst-sources.json` bewertet Datenanbieter, Taktikstimmen, KI-Research und Noise-Regeln.

## Primaere Quellen

- FIFA final draw results: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/final-draw-results
- FIFA official schedule: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums
- FIFA scores & fixtures: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures
- FIFA groups, qualification rules and tie-breakers: https://www.fifa.com/en/articles/groups-how-teams-qualify-tie-breakers
- FIFA teams: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/
- FIFA updated match schedule article: https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/updated-fifa-world-cup-2026-match-schedule-now-available

## Premium-Schicht

- Opta / Stats Perform: Live-Events, xG, Predictions, Medienfeeds.
- StatsBomb: Eventdaten, 360-Kontext, OBV, Pressures, Passqualitaet.
- SkillCorner: Tracking, Off-Ball-Runs, physische Profile, Game Intelligence.
- Wyscout: Video, Scouting, getaggte Events.
- SciSports: AI-gestuetzte Scouting-, Team- und Matchanalyse.
- Coaches' Voice, The Athletic FC Tactics, Spielverlagerung, Total Football Analysis: Taktik- und Coach-Kontext.
- TacticAI / Google DeepMind + Liverpool FC: Research-Referenz fuer KI-gestuetzte Standardsituationen.

## Naechster technischer Schritt

1. Echte Ergebnisquelle aktivieren: API-Key setzen, Provider in `data/result-sources.json` einschalten und Match-Mapping gegen den Anbieter testen.
2. Weitere Teamprofile in `data/teams.json` mit Stil- und Watch-Priority-Signalen pflegen.
3. Live-/Post-Match-Daten als zweite Schicht andocken.
4. Match-Dossiers aus echten Event- und Trackingdaten statt Seed-Texten erzeugen.
5. Daily Command Center spaeter mit echten Ergebnissen, Live-Status und Spoiler-Schutz verbinden.

## Build

```powershell
node normalize-fixtures.mjs
node validate-schedule.mjs
node sync-results.mjs
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
```

## football-data.org Free Setup

1. Kostenlosen Token bei https://www.football-data.org/client/register holen.
2. `setup-football-data-token.cmd` ausfuehren.
3. Danach `enable-football-data.cmd` ausfuehren.
4. Wenn der Token fehlt oder die Quelle noch keine WM-Resultate liefert, bleibt die App im Projektionsmodus und zeigt den Setup-/Sync-Status im Data Hub.
