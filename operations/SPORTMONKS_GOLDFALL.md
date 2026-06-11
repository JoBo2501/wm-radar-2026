# Sportmonks Goldfall

Zweck: Ein einzelnes Referenzspiel beweist die komplette Kette von Sportmonks bis UI. Wenn spaeter etwas bricht, wird zuerst dieser Goldfall geprueft.

## Referenzspiel

- Interne Match-ID: `mex-rsa-2026-06-11`
- Interne Teams: `MEX` vs `RSA`
- Sportmonks Fixture-ID: `19609127`
- Sportmonks Name: `Mexico vs South Africa`
- Kickoff Sportmonks: `2026-06-11 19:00:00`
- Mapping-Confidence: `100`
- Prediction-Signal: vorhanden
- Live-Predictions-Beta: ab Auftakt am 2026-06-11 pruefen, nicht vorab als geliefert behaupten

## Erwartete Kette

1. `check-sportmonks.cmd` zeigt Token, Fixture-Zugriff, Mapping und Predictions ohne kritische Fehler.
2. `probe-sportmonks.cmd` schreibt `data/raw/sportmonks-probe.json`.
3. `update-sportmonks-mapping.mjs` schreibt `data/provider-mapping.json`.
4. `data/provider-mapping.json` enthaelt `mex-rsa-2026-06-11` mit `providerId: 19609127`.
5. `enable-sportmonks.cmd` synchronisiert Ergebnisse und baut App-Dateien.
6. In der UI zeigt das Match-Dossier Sportmonks-Mapping und Pre-Match-Scout.
7. Sobald das Spiel live ist, wird geprueft, ob Sportmonks Live-Win-Probabilities am Fixture/Livescore liefert.
8. `build-pages.mjs` schreibt den Stand nach `docs/` fuer GitHub Pages.

## Schnelltest im Terminal

```powershell
node check-sportmonks.mjs
node probe-sportmonks.mjs
node update-sportmonks-mapping.mjs
node sync-results.mjs --source=sportmonks
node validate-results.mjs
node build-data.mjs
node build-standalone.mjs
node build-pages.mjs
```

## Fehlerbilder

- Token nicht sichtbar: `setup-sportmonks-token.cmd` erneut ausfuehren und Terminal/Fenster neu starten.
- Weniger als 104 Fixtures: Sportmonks-Endpoint, Abo-Modul oder Include-Parameter pruefen.
- Mapping unter 72/72: Team-Aliase und Datum/Zeitzone in `update-sportmonks-mapping.mjs` pruefen.
- Predictions fehlen: Sportmonks Coverage/Paket pruefen; die App darf dann Pre-Match nur ohne Prediction-Boost bewerten.
- Live Predictions fehlen: Beta-/Paketstatus pruefen; App bleibt bei Ergebnis, Status und eigener Tabellenlogik.
