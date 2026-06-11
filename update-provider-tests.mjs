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
    livePredictions:
      "Sportmonks hat Live-In-Play-Win-Probabilities vor dem Auftakt am 2026-06-11 angekuendigt; Integration erst nach Response-Nachweis schaerfer gewichten.",
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
    livePredictions: "Live Predictions Beta",
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
const coverageFields = fields.includes("livePredictions") ? fields : [...fields, "livePredictions"];
const coverage = coverageFields.map((field) => ({
  field,
  label: getFieldLabel(field),
  count: probe.coverage[field] || 0,
  total,
  tone: getTone(probe.coverage[field] || 0, total, field),
  detail: getCoverageMeaning(field, probe.coverage[field] || 0, total),
}));

const providerTests = {
  generatedAt,
  status: probe ? "primary-ready" : "not-run",
  summary: probe
    ? `Sportmonks ist als primaere WM-Datenquelle gesetzt und hat ${total} WM-Fixtures gefunden. Pre-Match-Struktur ist belastbar; Live-In-Play-Predictions sind laut Sportmonks als Beta vor dem Auftakt am 2026-06-11 angekuendigt und werden beim ersten echten Live-Request validiert.`
    : "Noch kein Sportmonks-Abdeckungsbericht vorhanden. Starte probe-sportmonks.cmd.",
  providers: [
    {
      id: "sportmonks",
      label: "Sportmonks",
      status: probe ? "Primaerquelle bereit" : "Noch nicht getestet",
      testedAt: probe?.generatedAt || null,
      fixtures: total,
      coverage,
      nextChecks: [
        "Kurz vor dem ersten Anpfiff: Lineups, Formationen und Expected Lineups pruefen.",
        "Vor dem Auftakt am 2026-06-11: Sportmonks-Doku fuer Live Predictions Beta und Include-/Feldnamen pruefen.",
        "Waehrend des ersten Spiels: Scores, State, Events, Timeline, Live Standings und Live Predictions Beta pruefen.",
        "Direkt nach Abpfiff: Statistics, xGFixture, Pressure und Post-Match-Daten pruefen.",
        "1-2 Stunden nach Abpfiff: nachlaufende Datenvollstaendigkeit und Korrekturen pruefen.",
      ],
      productUse: [
        "Spielplan- und Team-Mapping",
        "Pre-Match-Score mit Predictions",
        "Live-Win-Probability als Beta-Signal, sobald Sportmonks echte In-Play-Werte liefert",
        "Live-Ergebnis-Sync",
        "Gruppenszenarien und Was-bedeutet-dieses-Tor-Logik",
        "Post-Match-Analyse, falls xG/Pressure/Statistics geliefert werden",
      ],
    },
  ],
};

writeJson("data/provider-tests.json", providerTests);
console.log(`Updated data/provider-tests.json (${providerTests.status})`);
