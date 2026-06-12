# QA-Bericht WM Radar 26

Stand: 2026-06-12 · Reiner Befundbericht, keine Code-Aenderungen vorgenommen.

Anlass: Die App wirkt unuebersichtlich und der Ergebnis-Sync vom Datenprovider (Sportmonks) funktioniert nicht zuverlaessig. Dieser Bericht haelt die Ursachen fest, priorisiert und mit Datei:Zeile belegt.

---

## Teil A — Datenuebertragung vom Provider (Sportmonks)

### Entwarnung vorab
Der API-Zugriff funktioniert. Token, Netzwerk und Abruf sind in Ordnung: Es kommen alle 104 Fixtures an (`results.json` und `sportmonks-health.json` zeigen `providerMatches: 104`). Dass zum Sync-Zeitpunkt (12.06., 09:18 CEST) nur 2 Spiele `final` sind, ist sachlich korrekt — nur Mexiko-Suedafrika (11.06.) und Suedkorea-Tschechien (12.06.) waren abgepfiffen. Es ist KEIN Token- oder Netzwerkproblem.

Das eigentliche Problem ist latent: Die Sync-Logik verliert ab den naechsten Spieltagen still Ergebnisse, weil das Mapping im Sync schwaecher ist als das bereits vorhandene, robuste `provider-mapping.json`. Simulation gegen echte Providerdaten: nur 67 von 72 Gruppenspielen wuerden ueber den Sync-Pfad sauber matchen.

### KRITISCH

**A1 — Sync ignoriert das fertige `provider-mapping.json` komplett.**
`sync-results.mjs:172-176` mappt Provider zu intern nur per `fixtureKey(date, [homeCode, awayCode])` und re-derivt das Mapping live ueber Name+Datum. Das vorhandene `data/provider-mapping.json` (mit stabiler `providerId -> matchId`, Confidence-Scores, Fallback) wird nirgends gelesen. Die ganze Mapping-Arbeit der Probe-/Health-Kette wird weggeworfen.
Empfehlung: Im Sync primaer per `providerId` ueber `provider-mapping.json` mappen; Name/Datum nur als Fallback.

**A2 — Kein Team-only-Fallback; Datums-Offset killt Spiele.**
`sync-results.mjs:172-176` matcht nur exakt auf `date+teams`. `update-sportmonks-mapping.mjs:217-226` hat dagegen einen Team-Paar-Fallback mit Zeit-Delta. Dadurch erreicht das Mapping 72/72, der Sync nur 67/72. Konkret betroffen wegen 1-Tag-Versatz (Provider-UTC-Datum vs. internes Datum): `usa-par-2026-06-14` (Provider 2026-06-13) und `tur-par-2026-06-21` (Provider 2026-06-20). Diese Spiele werden nach Anpfiff nie gesynct.
Empfehlung: Team-only-Fallback uebernehmen oder direkt per `providerId` mappen.

**A3 — Unvollstaendige, divergente Team-Alias-Liste.**
`sync-results.mjs:53-119` und `update-sportmonks-mapping.mjs:21-88` pflegen zwei getrennte, nicht synchrone Alias-Tabellen. Dem Sync fehlen u.a. `cape verde islands`, `england`, `uruguay`, `japan`, `paraguay`, `congo democratic republic`. Folge: `Cape Verde Islands` wird im Sync nicht zu `CPV` aufgeloest -> die 3 CPV-Spiele (`esp-cpv`, `uru-cpv`, `cpv-ksa`) fallen durch. `teams.json` enthaelt nur deutsche Namen, d.h. die englischen Provider-Namen haengen zu 100% an dieser handgepflegten Liste — jeder fehlende Eintrag = stilles Mapping-Loch.
Empfehlung: Alias-Liste zentral in EINE Datei/Funktion auslagern und von beiden Skripten importieren; idealerweise per `providerId` mappen.

### MITTEL

**A4 — Kein Error-Handling / kein Retry / kein File-Logging.**
`sync-results.mjs:271-279`: Bei jedem HTTP-Fehler `throw` ohne Retry/Backoff. Da `allowEmpty` fuer Sportmonks immer `true` ist (`:331`), wird der Fehler in `:341-346` geschluckt und eine leere/Modell-`results.json` geschrieben — ein transienter 429/500 ueberschreibt also stillschweigend bereits gesyncte Ergebnisse mit "keine Ergebnisse". Nur `console.log`, kein File-Log.
Empfehlung: Retry mit Backoff fuer 429/5xx; bei Sync-Fehler die letzte gute `results.json` behalten statt zu ueberschreiben.

**A5 — Fehlende Liga-/Saison-Filterung.**
`result-sources.json:38-41`: Endpoint `fixtures/between/2026-06-11/2026-07-19`, `leagueId: null`. In `sync-results.mjs:264` ist `if (source.leagueId)` damit falsy -> kein Liga-Filter. Es werden potenziell beliebige Fixtures weltweit im Zeitfenster gezogen (Risiko Namens-/Datums-Kollisionen). Aktuell liefert das Abo zufaellig nur 104 WC-Fixtures, das ist nicht abgesichert.
Empfehlung: `leagueId` setzen und Filter erzwingen.

**A6 — Inkonsistente Datums-Interpretation Sync vs. Mapper.**
`sync-results.mjs:284` nimmt `item.starting_at?.slice(0,10)` als reinen String (Provider-Zeit faktisch als lokale Wand-Uhr). `update-sportmonks-mapping.mjs:212` macht `toUtcDate(...Z)` (erzwingt UTC). Unterschiedliche Tages-Keys -> Mismatch-Risiko (siehe A2).
Empfehlung: Gemeinsame `toUtcDate`-Hilfsfunktion verwenden.

**A7 — Health-Check und Sync nutzen unterschiedliche Include-Parameter.**
`check-sportmonks.mjs:29` nutzt anderen Include als `sync-results.mjs:263-264`. Der Health-Check testet nicht exakt denselben Request wie der Sync — er kann gruen sein, waehrend der Sync anders reagiert. `sportmonks-health.json` zeigt zudem `livePredictionCount: 0`, waehrend das Mapping 72 Predictions behauptet (Stale-Data-Falle).
Empfehlung: Health-Check denselben Request-Aufbau wie der Sync verwenden lassen.

### GERING

**A8 — Score-Extraktion sehr heuristisch.**
`sync-results.mjs:148-160` raet die Score-Struktur ueber Fallback-Pfade und Beschreibungs-Stringmatching (`includes("current")/("full")`). Fragil gegenueber Schemaaenderungen (ET/Penalty, Halbzeit vs. Endstand).
Empfehlung: Score-Typ explizit ueber dokumentierte Sportmonks `type_id`s waehlen.

**A9 — Pagination-Annahme nicht abgesichert.**
`sync-results.mjs:277` u.a. verlassen sich auf `payload.pagination?.has_more`. Fehlt das Feld, bricht die Schleife nach Seite 1 still ab -> unvollstaendige Daten ohne Fehler.

**A10 — Override-Merge-Key fragil.**
`sync-results.mjs:309-310`: Key `matchId || m<matchNumber>`. Bei Overrides ohne `matchId` greift kein Mapping. Aktuell leer, daher kein akutes Problem.

**A11 — `watch-results.mjs` ohne Fehler-Eskalation.**
`watch-results.mjs:64-69`: Sync-Fehler werden nur geloggt und im Intervall weiterversucht — keine Alarmierung/kein Stand-Tracking.

### Wichtigste Einzelmassnahme (Teil A)
Den Sync auf `providerId`-basiertes Mapping ueber das bereits vorhandene `data/provider-mapping.json` umstellen. Das eliminiert A1, A2, A3 und A6 in einem Schritt, da die Provider-Fixture-ID stabil und eindeutig ist.

---

## Teil B — UI-Uebersichtlichkeit

### Kernursache
Die App wurde im HTML bereits entschlackt, aber im JavaScript nicht zu Ende gefuehrt. Daraus ergibt sich ein doppeltes Problem: zu viel sichtbarer Inhalt auf einer Seite UND toter Code, der ueber den wahren Zustand taeuscht. (Die 21-Module-Liste in PROJECT.md beschreibt nicht den aktuellen Stand.)

### Tatsaechlich gerenderte Sektionen (~15, auf einer Endlos-Scroll-Seite)
Quelle: `index.html` (16 `<section>`-Bloecke), gegengeprueft mit den aktiven Render-Aufrufen `app.js:2971-2986`.

- Zone 01 "Heute" (`#matches`): Hero/Control Room, Orientierungs-Map (3 Karten), "Was heute zaehlt", Command-Center (5 Panels in einem Block), `<details>` "Tagesplan feinjustieren"
- Zone 02 "Spiele" (`#games`): Zone-Divider, Team-Briefings, Schluesselfiguren, Match-Liste + Match-Dossier (mit Pre-Match-Scout + `<details>` mit 7 Insight-Cards), Surprise Radar
- Zone 03 "Turnierlage" (`#tournament`): Zone-Divider, Turnierlage-Snapshot, Gruppen & Szenarien, Tabellen & Szenarien, Bracket "Der Weg ins Finale"

### Toter Code (Render-Funktion ohne DOM-Container -> No-op)
Aufgerufen in `app.js`, Ziel-Container existiert weder in `index.html` noch `docs/index.html`:
- `renderDataStatus()` -> `#dataSnapshot`, `#dataStatusGrid`
- `renderProviderTests()` -> `#providerTestGrid`
- `renderFeatureLab()` -> `#featureLabGrid`
- `renderScheduleValidation()` -> `#scheduleValidator`
- `renderResultValidation()` -> `#resultValidator`
- `renderSources()` -> `#sourceStack`
- `renderAnalystDesk()` -> `#analystPillars`, `#analystVoices`, `#sourceAutomation`, `#sourceAccess`, `#synthesisModel`, `#sourceRules`, `#aiModelCard`

Diese Funktionen sind durch `if (!element) return`-Guards abgesichert und tun aktuell nichts.

### Hauptprobleme
**B1 — Eine einzige Endlos-Scroll-Seite mit ~15 Sektionen.** Keine echte Seiten-/Tab-Trennung. Die Navigation (`setupZoneNavigation`, `app.js:2919`) scrollt nur per `scrollIntoView` zu Ankern. Alles existiert gleichzeitig untereinander.

**B2 — Inkonsistente Navigation: 3 vs. 4 Zonen.** Top-Nav hat 3 Punkte (Heute/Spiele/Turnierlage), PROJECT.md und Texte sprechen von 4 inkl. "Analyse". Die Analyse-Zone wurde aus dem HTML entfernt, die Render-Aufrufe blieben — sichtbarer Rest einer halb durchgefuehrten Reduktion.

**B3 — Top-Spiel dreifach redundant.** Dasselbe Topspiel erscheint in Hero-Mission/Signal-Stack (`app.js:734-842`), Command-Center Top-Match-Card (`:1929`) und nochmals in Watch-Plan/Storylines. Hero und Command-Center sind fast deckungsgleich.

**B4 — Command-Center buendelt 5 Panels** (Briefing, Top-Match, Storylines, Watch-Plan, Skip, Morgen-Queue). An Spieltagen mit mehreren Spielen entsteht sofort eine Wand aus Karten.

**B5 — Match-Dossier sehr dicht.** Sichtbar: Story + Schluesselduell + Pre-Match-Scout + Trigger + Decision-Matrix; dazu 7 weitere Cards im `<details>`. Die sichtbare Ebene hat bereits 5 Karten.

**B6 — Hoher CSS-Wildwuchs.** `styles.css`: 5.625 Zeilen, 285 distinkte Klassen-Selektoren, 895 Regelbloecke. Jede Sektion hat ihr eigenes Kartendesign (orbit, pitch, radar, bracket, command-metric, ...).

**B7 — `app.js` ist ein Monolith.** 2.986 Zeilen, 35 Render-Funktionen, ~100 globale DOM-Referenzen (`:34-100`), zwei fast identische Sammelfunktionen `renderAllDynamic()` und `renderComputedViews()` (`:2885-2909`).

### Priorisierte Empfehlungen
- **P1 (sofort, risikolos):** Toten Code entfernen — 7 No-op-Render-Aufrufe + Funktionen + ~14 nie gefundene DOM-Referenzen (`app.js:77-99`). PROJECT.md auf realen 3-Zonen-Stand korrigieren.
- **P2:** Top-Spiel-Redundanz aufloesen — konkretes Topspiel nur im Command-Center fuehren, Hero auf Atmosphaere + 1 Mission-Satz reduzieren.
- **P3:** Command-Center entschlacken — "Morgen ohne Spoiler" und "Bewusst auslassen" hinter `<details>`; sichtbar nur Briefing, Top-Match, Watch-Plan (= die versprochenen "drei Entscheidungen").
- **P4:** Navigation konsistent machen — 4-Zonen-Referenzen entfernen oder Analyse-Zone echt wiedereinfuehren.
- **P5 (groesste Wirkung, groesste Aenderung):** Drei Zonen als echte umschaltbare Views (eine sichtbar, zwei `hidden`) statt durchgehender Scroll.
- **P6 (mittelfristig):** `app.js` in thematische Module aufteilen; die zwei Sammelfunktionen zusammenfuehren.

### Kernaussage (Teil B)
Die App wirkt ueberladen, weil sie (1) alles auf einer langen Seite stapelt, (2) das Topspiel mehrfach wiederholt und (3) die Reduktion im HTML begonnen, aber im JS nicht beendet wurde. Schnellster Gewinn: P1-P3.

---

## Empfohlene Reihenfolge (wenn umgesetzt wird)
1. A1-A3 (Sync auf providerId-Mapping) — live-kritisch, verhindert stillen Datenverlust ab den naechsten Spieltagen.
2. A4 (Error-Handling) — verhindert Ueberschreiben guter Daten.
3. B1/P1-P3 (toten Code raus, Redundanz weg, Command-Center fokussieren) — schneller Uebersichtlichkeitsgewinn.
4. Rest nach Bedarf.
