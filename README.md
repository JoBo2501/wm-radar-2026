# WM Radar 26

Ein erster lokaler Prototyp fuer ein persoenliches Analysten-Cockpit zur Fussball-WM 2026.

Die dauerhafte Projektdokumentation liegt in `PROJECT.md`. Dort stehen Zielbild, Komponenten, Datenfluss, erledigte Schritte, Ergebnis-Sync, GitHub-/Deployment-Plan und naechste Schritte.

GitHub- und Deployment-Hinweise liegen in `GITHUB_DEPLOYMENT.md`.

GitHub Pages ist vorbereitet. Nach Aktivierung in GitHub Settings -> Pages -> Source: `Deploy from a branch`, Branch `master`, Folder `/docs` kann die statische App unter `https://jobo2501.github.io/wm-radar-2026/` laufen.

## Was drin ist

- "Was heute zaehlt" mit Empfehlungen fuer Live, Analyse, Highlights und Skip
- Fokus-Teams fuer Argentinien, Brasilien, Spanien, Deutschland, England, Frankreich und Portugal
- Match-Dossier mit taktischem Kern, Risiko-Signal, Datenprofil und Quellenlogik
- Surprise Radar fuer Teams mit attraktivem Upset-Potenzial
- PWA-Grundlage mit Manifest und Service Worker
- Datenmodell in `data.js` mit Real/Mixed/Model/Seed-Kennzeichnung
- Datenlage & Transparenz mit eingeklappten Import- und Validierungsdetails
- Provider-Testprotokoll fuer Sportmonks-Abdeckung, Advanced-Felder und naechste Live-Pruefzeitpunkte
- Team-Briefings mit taktischen Profilen fuer Fokus- und Surprise-Teams
- Schluesselfiguren-Modul mit Trainern, Leadern, Taktikspielern, Druckspielern und Turnier-Entdeckungen
- Watchlist-Prioritaet getrennt von spaeterer Teamstaerke, Momentum, Attraktivitaet, Ueberraschungspotenzial und Datenlage
- Match-Dossier mit Team-Matchup und Watch-Cues
- Tagesbriefing mit Watch Plan und Morgen-ohne-Spoiler-Ansicht
- Low-Value-Erklaerungen direkt an Skip-Spielen
- Gruppen & Szenarien mit Gruppen A-L, Watch-Empfehlung und der Frage "Wer kommt weiter und gegen wen?"
- Spielwert mit neuer Gewichtung `Weiterkommen & Gegner`
- Import-Pipeline fuer Spielplan-Rohdaten in `data/raw/fixtures.json`
- Vollstaendige Gruppenphase mit 72 importierten Gruppenspielen
- Der Weg ins Finale mit 32 K.o.-Platzhalterspielen von Round of 32 bis Finale
- Ergebnis- und Tabellenlayer mit Projektionsmodus bis echte Resultate vorliegen
- Dynamische Finalweg-Aufloesung fuer `1E`, `2B`, `3ABCDF`, `W73` und Folgerunden
- K.o.-Match-Dossiers mit Watch-Empfehlung, Stilkontrast, Upset-Sensitivitaet und naechstem Gegner
- Spielplan-Transparenz mit Coverage, Gruppenstatus, Bracketstatus und Datenqualitaets-Ampel
- Analyse-Overrides in `data/match-overrides.json` fuer kuratierte Topspiele
- Analyst Desk mit Trust-Modell fuer Premiumdaten, Taktikstimmen, KI-Research und Noise-Filter
- Analyse-Synthese-Modell fuer automatische Daten, halbautomatische Quellen-Inbox und gewichtete Spieldeutung
- Post-Match-Report-Modell mit automatischem Draft-Generator fuer finale Ergebnisse

## Lokal starten

Einfachste Variante: `WM-Radar-26.html` doppelklicken.

Alternative: `start-wm-radar.cmd` doppelklicken. Der Starter oeffnet die Standalone-Datei direkt in Edge oder Chrome.

Falls die Standalone-Datei fehlt:

```powershell
node normalize-fixtures.mjs
node validate-schedule.mjs
node sync-results.mjs
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
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
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Ergebnis-Sync:

```powershell
node sync-results.mjs
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
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

Post-Match-Demo testen:

```powershell
node generate-post-match-reports.mjs --results=data/raw/demo-results-final.json --dry-run
```

Oder `enable-demo-post-match.cmd` doppelklicken. Das schaltet lokal auf den Demo-Ergebnisfeed, erzeugt einen Draft-Report fuer Brasilien-Marokko und baut die App neu. Danach mit `restore-football-data.cmd` wieder auf football-data.org zurueckschalten.

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
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Sportmonks-Testphase vorbereiten:

1. Sportmonks-Abo/Test starten und API-Key im Sportmonks-Dashboard erzeugen.
2. `setup-sportmonks-token.cmd` doppelklicken und Key eintragen.
3. Terminal/Fenster neu starten.
4. `probe-sportmonks.cmd` doppelklicken. Das schreibt `data/raw/sportmonks-probe.json` und aktualisiert `data/provider-tests.json` mit Abdeckung fuer Fixtures, Scores, Lineups, Events, xG, Pressure und Expected Lineups.
5. Wenn der Probe gut aussieht: `enable-sportmonks.cmd` doppelklicken. Dann wird Sportmonks als aktive Ergebnisquelle gesetzt und die App neu gebaut.

Alternativ im Terminal:

```powershell
node probe-sportmonks.mjs
node update-sportmonks-mapping.mjs
node switch-result-source.mjs sportmonks
node sync-results.mjs --source=sportmonks
node validate-results.mjs
node generate-post-match-reports.mjs
node validate-post-match-reports.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

Die aktuelle Turnierstruktur ist vollstaendig importiert: 72 Gruppenspiele plus 32 K.o.-Platzhalter. Spielzeiten und Spielplanbasis sind als `mixed` markiert, weil sie aus offiziellen/FIFA-nahen und aktuellen Fixture-Listen gespiegelt wurden. Live-Ergebnisse, Tabellen und Premium-Statistiken folgen als naechste Datenebene.

Die Analysten- und Quellenlogik liegt in `data/analyst-sources.json`. Dort werden Datenanbieter, serioese Stimmen, KI-Research und Abwertungsregeln gepflegt.

Die Spielplan-Ampel liegt in `data/schedule-validation.json` und wird mit `validate-schedule.mjs` aus den Rohfixtures berechnet.

Die K.o.-Struktur liegt in `data/knockout.json`. Dort stehen Slots wie `1E`, `3ABCDF`, `W73` oder `L101`, bis echte Tabellen und Ergebnisse angebunden sind.

Der Ergebnislayer liegt in `data/results.json`. Aktuell ist er leer und markiert die App als `preTournament`; Tabellen & Szenarien berechnen deshalb eine Modellprojektion. Sobald echte Resultate mit `status: "final"` eingetragen werden, fliessen sie automatisch in Gruppenstaende und Third-Place-Ranking ein.

Der automatische Ergebnisabgleich ist in `sync-results.mjs` vorbereitet. Die aktive Quelle steht in `data/result-sources.json`, manuelle Korrekturen liegen in `data/result-overrides.json`, und `validate-results.mjs` schreibt die Sync-Ampel nach `data/result-validation.json`. Sportmonks ist als Testanbieter vorbereitet; der API-Key bleibt lokal in `SPORTMONKS_API_KEY`.

Das Provider-Testprotokoll liegt in `data/provider-tests.json`. Es wird aus `data/raw/sportmonks-probe.json` erzeugt und in der App unter Datenlage & Transparenz angezeigt. So bleibt sichtbar, welche Sportmonks-Features bereits belastbar sind und welche erst kurz vor Anpfiff, live oder nach Abpfiff erneut geprueft werden muessen.

Das Sportmonks-Mapping liegt in `data/provider-mapping.json`. Nach jedem neuen `probe-sportmonks.cmd`-Lauf wird daraus die Verbindung zwischen Sportmonks-Fixture-IDs, internen Match-IDs und Prediction-Verfuegbarkeit erzeugt. Erst danach fliesst das Prediction-Signal vorsichtig in den Spielwert ein.

Post-Match-Reports liegen in `data/post-match-reports.json`. `generate-post-match-reports.mjs` erzeugt aus finalen Ergebnissen erste Draft-Reports mit Score-Audit, Metrik-Blueprint und Lernfrage; `validate-post-match-reports.mjs` schreibt die Ampel nach `data/post-match-validation.json`.

Der Weg ins Finale liest diese Tabellenprojektion bereits aus: Direkte Slots wie `1E` oder `2B` werden aus der Gruppentabelle gesetzt, Third-Place-Slots wie `3ABCDF` nehmen den besten erlaubten Drittplatzierten, und Folgerunden-Slots wie `W73`/`L101` kaskadieren aus den vorherigen Match-Projektionen.

Jede K.o.-Karte enthaelt zusaetzlich ein Mini-Dossier: Spielwert, Watch-Empfehlung, Stilkontrast, Upset-Risiko, moeglicher naechster Gegner und konkrete Watch-Cues. Das ist noch modelliert, wird aber sofort besser, sobald echte Ergebnisse und weitere Teamdaten einlaufen.
