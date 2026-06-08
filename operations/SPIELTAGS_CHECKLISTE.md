# Spieltags-Checkliste

Ziel: Vor, waehrend und nach einem WM-Spiel schnell pruefen, ob Sportmonks-Daten stabil in WM Radar laufen.

## Vor dem ersten Spiel des Tages

1. `check-sportmonks.cmd` ausfuehren.
2. Bei Fehlern zuerst Token, Fixture-Zugriff und Mapping pruefen.
3. `probe-sportmonks.cmd` ausfuehren, wenn neue Lineups/Formationen/Predictions erwartet werden.
4. App neu bauen lassen oder `enable-sportmonks.cmd` ausfuehren.
5. In der App den Heute-Bereich und das Match-Dossier des Topspiels pruefen.

## 60 bis 30 Minuten vor Anpfiff

1. `probe-sportmonks.cmd` erneut ausfuehren.
2. In `Datenlage & Transparenz` pruefen:
   - Lineups
   - Formationen
   - Expected Lineups
   - Predictions
3. Pre-Match-Scout im Match-Dossier lesen.
4. Falls Lineups fehlen: Dossier weiter als Pre-Match ohne Startelf-Sicherheit behandeln.

## Waehrend des Spiels

1. `watch-results.cmd` laufen lassen oder regelmaessig `sync-results.cmd` ausfuehren.
2. Pruefen:
   - Spielstatus
   - Scores
   - Events
   - Statistics
   - Pressure
3. Wenn Live-Felder leer bleiben: App bleibt im Ergebnis-/Statusmodus und Momentum-Features nicht ueberinterpretieren.

## Direkt nach Abpfiff

1. `sync-results.cmd` ausfuehren.
2. `validate-results.mjs` pruefen: keine kritischen Issues.
3. `generate-post-match-reports.mjs` und `validate-post-match-reports.mjs` laufen lassen.
4. Post-Match-Dossier pruefen:
   - Ergebnis
   - Tabellenwirkung
   - Score-Audit
   - Advanced-Metric-Plan

## Nachlauf 1 bis 2 Stunden spaeter

1. `probe-sportmonks.cmd` erneut ausfuehren.
2. Nachlaufende Felder pruefen:
   - xGFixture
   - Pressure
   - Statistics
   - Events
3. Nur bestaetigte Felder in Analyse und Feature Lab schaerfer gewichten.
