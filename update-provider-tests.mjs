import { existsSync, readFileSync, writeFileSync } from "node:fs";

function readJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function getTone(count, total, field) {
  if (!total) return "seed";
  const ratio = count / total;
  if (ratio === 1) return "real";
  if (ratio >= 0.5) return "mixed";
  if (count > 0 && ["lineups", "formations", "expectedLineups"].includes(field)) return "mixed";
  return "seed";
}

function getCoverageMeaning(field, count, total) {
  const values = {
    participants: "Teams sind fuer Mapping und Spielplan-Abgleich vorhanden.",
    scores: "Ergebnisse bleiben bis zu echten Spielen erwartbar leer.",
    state: "Spielstatus ist fuer Live-/Pre-Match-Logik vorhanden.",
    lineups: "Aufstellungen werden meist erst kurz vor Anpfiff belastbar.",
    events: "Events werden erst live oder nach Spielbeginn relevant.",
    statistics: "Statistiken werden live/nach Spielende erneut geprueft.",
    formations: "Formationen sind teilweise schon vorab sichtbar.",
    predictions: "Predictions koennen sofort in den Pre-Match-Score einfliessen.",
    xGFixture: "xG muss live oder post-match gegen den konkreten Plan geprueft werden.",
    pressure: "Pressure Index ist ein Kernkandidat fuer Momentum, aktuell noch leer.",
    expectedLineups: "Expected Lineups sind paketabhaengig und muessen separat validiert werden.",
  };

  return values[field] || `${count}/${total} Eintraege im letzten Probe-Lauf.`;
}

function getFieldLabel(field) {
  const labels = {
    participants: "Teams",
    scores: "Scores",
    state: "Status",
    lineups: "Lineups",
    events: "Events",
    statistics: "Statistiken",
    formations: "Formationen",
    predictions: "Predictions",
    xGFixture: "xG",
    pressure: "Pressure",
    expectedLineups: "Expected Lineups",
  };

  return labels[field] || field;
}

const probe = readJson("data/raw/sportmonks-probe.json", null);
const generatedAt = new Date().toISOString();
const fields = probe ? Object.keys(probe.coverage || {}) : [];
const total = probe?.fixtures || 0;
const coverage = fields.map((field) => ({
  field,
  label: getFieldLabel(field),
  count: probe.coverage[field],
  total,
  tone: getTone(probe.coverage[field], total, field),
  detail: getCoverageMeaning(field, probe.coverage[field], total),
}));

const providerTests = {
  generatedAt,
  status: probe ? "probe-ready" : "not-run",
  summary: probe
    ? `Sportmonks-Probe hat ${total} WM-Fixtures gefunden. Pre-Match-Struktur ist belastbar; Live-, Event- und Advanced-Felder werden ab dem ersten Spiel erneut geprueft.`
    : "Noch kein Sportmonks-Probe-Bericht vorhanden. Starte probe-sportmonks.cmd.",
  providers: [
    {
      id: "sportmonks",
      label: "Sportmonks",
      status: probe ? "Probe bereit" : "Noch nicht getestet",
      testedAt: probe?.generatedAt || null,
      fixtures: total,
      coverage,
      nextChecks: [
        "Kurz vor dem ersten Anpfiff: Lineups, Formationen und Expected Lineups pruefen.",
        "Waehrend des ersten Spiels: Scores, State, Events, Timeline und Live Standings pruefen.",
        "Direkt nach Abpfiff: Statistics, xGFixture, Pressure und Post-Match-Daten pruefen.",
        "1-2 Stunden nach Abpfiff: nachlaufende Datenvollstaendigkeit und Korrekturen pruefen.",
      ],
      productUse: [
        "Spielplan- und Team-Mapping",
        "Pre-Match-Score mit Predictions",
        "Live-Ergebnis-Sync",
        "Gruppenszenarien und Was-bedeutet-dieses-Tor-Logik",
        "Post-Match-Analyse, falls xG/Pressure/Statistics geliefert werden",
      ],
    },
  ],
};

writeJson("data/provider-tests.json", providerTests);
console.log(`Updated data/provider-tests.json (${providerTests.status})`);
