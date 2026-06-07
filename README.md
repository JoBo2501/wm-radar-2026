# WM Radar 26

Ein erster lokaler Prototyp fuer ein persoenliches Analysten-Cockpit zur Fussball-WM 2026.

Die dauerhafte Projektdokumentation liegt in `PROJECT.md`. Dort stehen Zielbild, Komponenten, Datenfluss, erledigte Schritte, Ergebnis-Sync, GitHub-/Deployment-Plan und naechste Schritte.

GitHub- und Deployment-Hinweise liegen in `GITHUB_DEPLOYMENT.md`.

GitHub Pages ist vorbereitet. Nach Aktivierung in GitHub Settings -> Pages -> Source: `Deploy from a branch`, Branch `master`, Folder `/docs` kann die statische App unter `https://jobo2501.github.io/wm-radar-2026/` laufen.

## Was drin ist

- Match Value Board mit Empfehlungen fuer Live, Analyse, Highlights und Skip
- Fokus-Teams fuer Argentinien, Brasilien, Spanien, Deutschland, England und Frankreich
- Match-Dossier mit taktischem Kern, Risiko-Signal, Datenprofil und Quellenlogik
- Surprise Radar fuer Teams mit attraktivem Upset-Potenzial
- PWA-Grundlage mit Manifest und Service Worker
- Datenmodell in `data.js` mit Real/Mixed/Model/Seed-Kennzeichnung
- Data Hub in der UI fuer Transparenz ueber Datenqualitaet
- Team Lab mit taktischen Profilen fuer Fokus- und Surprise-Teams
- Match-Dossier mit Team-Matchup und Watch-Cues
- Daily Command Center mit Tagesbriefing, Watch Plan und Spoiler-Safe Morning
- Low-Value-Erklaerungen direkt an Skip-Spielen
- Groups & Paths mit Gruppen A-L, Watch Strategy und modellierter Pfad-Relevanz
- Match Value Score mit neuer Gewichtung `Pfad`
- Import-Pipeline fuer Spielplan-Rohdaten in `data/raw/fixtures.json`
- Vollstaendige Gruppenphase mit 72 importierten Gruppenspielen
- K.o.-Bracket-Schicht mit 32 Platzhalterspielen von Round of 32 bis Finale
- Ergebnis- und Tabellenlayer mit Projektionsmodus bis echte Resultate vorliegen
- Dynamische Bracket-Aufloesung fuer `1E`, `2B`, `3ABCDF`, `W73` und Folgerunden
- K.o.-Match-Dossiers mit Watch-Empfehlung, Stilkontrast, Upset-Sensitivitaet und Pfadwert
- Spielplan-Validierung mit Coverage, Gruppenstatus, Bracketstatus und Datenqualitaets-Ampel
- Analyse-Overrides in `data/match-overrides.json` fuer kuratierte Topspiele
- Analyst Desk mit Trust-Modell fuer Premiumdaten, Taktikstimmen, KI-Research und Noise-Filter

## Lokal starten

Einfachste Variante: `WM-Radar-26.html` doppelklicken.

Alternative: `start-wm-radar.cmd` doppelklicken. Der Starter oeffnet die Standalone-Datei direkt in Edge oder Chrome.

Falls die Standalone-Datei fehlt:

```powershell
node normalize-fixtures.mjs
node validate-schedule.mjs
node sync-results.mjs
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Optional mit lokalem Server:

`start-wm-radar-server.cmd` doppelklicken.

Oder im Terminal im Projektordner:

```powershell
node server.mjs
```

Danach im Browser oeffnen:

```text
http://localhost:5173
```

Der Datenkern liegt in `data/`. Nach Aenderungen an JSON-Dateien:

```powershell
node normalize-fixtures.mjs
node validate-schedule.mjs
node sync-results.mjs
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Ergebnis-Sync:

```powershell
node sync-results.mjs
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Oder `sync-results.cmd` doppelklicken. Standardquelle ist `data/raw/results-feed.json`; echte API-Provider werden in `data/result-sources.json` aktiviert und ueber Umgebungsvariablen wie `API_FOOTBALL_KEY` oder `FOOTBALL_DATA_TOKEN` authentifiziert.

Deployment-Update fuer GitHub Pages:

```powershell
node release-pages.mjs
```

Oder `release-pages.cmd` doppelklicken. Das aktualisiert Daten, Standalone-Datei und `docs/`.

Zum Aktualisieren und direkt nach GitHub pushen:

```powershell
node release-pages.mjs --commit --push --message="Update WM Radar deployment"
```

Oder `release-and-push.cmd` doppelklicken.

Dauerhafter Poller:

```powershell
node watch-results.mjs
```

Oder `watch-results.cmd` doppelklicken. Der Poller synchronisiert im konfigurierten Intervall, validiert, baut `data.js` und `WM-Radar-26.html` neu und zeigt den Status im Terminal.

football-data.org Free vorbereiten:

1. Kostenlos registrieren: https://www.football-data.org/client/register
2. `setup-football-data-token.cmd` doppelklicken und Token eintragen.
3. Terminal/Fenster neu starten.
4. `enable-football-data.cmd` doppelklicken.

Alternativ im Terminal:

```powershell
node switch-result-source.mjs football-data
node sync-results.mjs --source=football-data
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Die aktuelle Turnierstruktur ist vollstaendig importiert: 72 Gruppenspiele plus 32 K.o.-Platzhalter. Spielzeiten und Spielplanbasis sind als `mixed` markiert, weil sie aus offiziellen/FIFA-nahen und aktuellen Fixture-Listen gespiegelt wurden. Live-Ergebnisse, Tabellen und Premium-Statistiken folgen als naechste Datenebene.

Die Analysten- und Quellenlogik liegt in `data/analyst-sources.json`. Dort werden Datenanbieter, serioese Stimmen, KI-Research und Abwertungsregeln gepflegt.

Die Spielplan-Ampel liegt in `data/schedule-validation.json` und wird mit `validate-schedule.mjs` aus den Rohfixtures berechnet.

Die K.o.-Struktur liegt in `data/knockout.json`. Dort stehen Slots wie `1E`, `3ABCDF`, `W73` oder `L101`, bis echte Tabellen und Ergebnisse angebunden sind.

Der Ergebnislayer liegt in `data/results.json`. Aktuell ist er leer und markiert die App als `preTournament`; der Standings Hub berechnet deshalb eine Modellprojektion. Sobald echte Resultate mit `status: "final"` eingetragen werden, fliessen sie automatisch in Gruppenstaende und Third-Place-Ranking ein.

Der automatische Ergebnisabgleich ist in `sync-results.mjs` vorbereitet. Die aktive Quelle steht in `data/result-sources.json`, manuelle Korrekturen liegen in `data/result-overrides.json`, und `validate-results.mjs` schreibt die Sync-Ampel nach `data/result-validation.json`.

Das Bracket liest diese Tabellenprojektion bereits aus: Direkte Slots wie `1E` oder `2B` werden aus der Gruppentabelle gesetzt, Third-Place-Slots wie `3ABCDF` nehmen den besten erlaubten Drittplatzierten, und Folgerunden-Slots wie `W73`/`L101` kaskadieren aus den vorherigen Match-Projektionen.

Jede K.o.-Karte enthaelt zusaetzlich ein Mini-Dossier: Score, Watch-Empfehlung, Stilkontrast, Upset-Risiko, Pfadwert und konkrete Watch-Cues. Das ist noch modelliert, wird aber sofort besser, sobald echte Ergebnisse und weitere Teamdaten einlaufen.
