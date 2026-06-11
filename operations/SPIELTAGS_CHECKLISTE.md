# Spieltags-Checkliste

Ziel: Vor, waehrend und nach einem WM-Spiel schnell pruefen, ob Sportmonks-Daten stabil in WM Radar laufen.

## Vor dem ersten Spiel des Tages

1. `check-sportmonks.cmd` ausfuehren.
2. Bei Fehlern zuerst Token, Fixture-Zugriff und Mapping pruefen.
3. `probe-sportmonks.cmd` ausfuehren, wenn neue Lineups/Formationen/Predictions erwartet werden.
4. Vor dem Auftakt am 2026-06-11 Sportmonks-Doku/AI Developer Hub auf Live-Predictions-Beta pruefen: Include-Namen, Response-Form und Paketfreigabe notieren.
5. App neu bauen lassen oder `enable-sportmonks.cmd` ausfuehren.
6. In der App den Heute-Bereich und das Match-Dossier des Topspiels pruefen.
7. Falls API-Live-Predictions noch nicht stabil sind: Sportmonks Widgets als reinen Fallback fuer Live Scores/Tournament Hub bereithalten.

## 60 bis 30 Minuten vor Anpfiff

1. `probe-sportmonks.cmd` erneut ausfuehren.
2. In `Datenlage & Transparenz` pruefen:
   - Lineups
   - Formationen
   - Expected Lineups
   - Predictions
   - Live Predictions Beta, falls Sportmonks sie schon am Fixture oder Livescore liefert
3. Pre-Match-Scout im Match-Dossier lesen.
4. Falls Lineups fehlen: Dossier weiter als Pre-Match ohne Startelf-Sicherheit behandeln.

## Waehrend des Spiels

1. `watch-results.cmd` laufen lassen oder regelmaessig `sync-results.cmd` ausfuehren.
2. Pruefen:
   - Spielstatus
   - Scores
   - Live Predictions / Win Probabilities
   - Events
   - Statistics
   - Pressure
3. Wenn Live-Predictions leer bleiben: Pre-Match-Prediction nicht als Live-Wahrscheinlichkeit anzeigen.
4. Wenn Live-Felder leer bleiben: App bleibt im Ergebnis-/Statusmodus und Momentum-Features nicht ueberinterpretieren.

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
