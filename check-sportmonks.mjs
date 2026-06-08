import { existsSync, readFileSync, writeFileSync } from "node:fs";

function readJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === "object") return Object.keys(value).length > 0;
  return value !== null && value !== undefined && value !== "";
}

function getSource() {
  const config = readJson("data/result-sources.json", { sources: [] });
  return {
    config,
    sportmonks: config.sources.find((source) => source.id === "sportmonks"),
  };
}

async function fetchFixtures(source, apiKey) {
  const url = new URL(source.endpoint);
  url.searchParams.set("api_token", apiKey);
  url.searchParams.set("include", source.include || "participants;scores;state;predictions");
  url.searchParams.set("per_page", "50");

  const fixtures = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    url.searchParams.set("page", String(page));
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Sportmonks HTTP ${response.status}`);
    const payload = await response.json();
    fixtures.push(...(payload.data || []));
    hasMore = Boolean(payload.pagination?.has_more);
    page += 1;
  }

  return fixtures;
}

function pass(label, detail) {
  return { status: "pass", label, detail };
}

function warn(label, detail) {
  return { status: "warn", label, detail };
}

function fail(label, detail) {
  return { status: "fail", label, detail };
}

function marker(status) {
  return status === "pass" ? "[OK]" : status === "warn" ? "[WARN]" : "[FAIL]";
}

const { config, sportmonks } = getSource();
const apiKey = sportmonks?.apiKeyEnv ? process.env[sportmonks.apiKeyEnv] : null;
const mapping = readJson("data/provider-mapping.json", null);
const providerTests = readJson("data/provider-tests.json", null);
const results = readJson("data/results.json", null);
const localMatches = mapping?.coverage?.localMatches || readJson("data/matches.json", []).length;
const checks = [];
let liveFixtureCount = null;
let livePredictionCount = null;
let liveError = null;

if (!sportmonks) {
  checks.push(fail("Konfiguration", "Sportmonks fehlt in data/result-sources.json."));
} else {
  checks.push(
    config.activeSource === "sportmonks"
      ? pass("Aktive Quelle", "Sportmonks ist in data/result-sources.json aktiv.")
      : fail("Aktive Quelle", `Aktiv ist ${config.activeSource || "unbekannt"}, nicht sportmonks.`),
  );
  checks.push(sportmonks.enabled ? pass("Source enabled", "Sportmonks ist enabled=true.") : fail("Source enabled", "Sportmonks ist deaktiviert."));
}

checks.push(
  apiKey
    ? pass("Token", `${sportmonks.apiKeyEnv} ist in diesem Prozess sichtbar.`)
    : fail("Token", `${sportmonks?.apiKeyEnv || "SPORTMONKS_API_KEY"} ist nicht sichtbar. Terminal neu starten oder setup-sportmonks-token.cmd ausfuehren.`),
);

if (sportmonks && apiKey) {
  try {
    const fixtures = await fetchFixtures(sportmonks, apiKey);
    liveFixtureCount = fixtures.length;
    livePredictionCount = fixtures.filter((fixture) => hasValue(fixture.predictions)).length;
    checks.push(
      fixtures.length >= 104
        ? pass("Fixture-Zugriff", `${fixtures.length} Fixtures live von Sportmonks erreichbar.`)
        : warn("Fixture-Zugriff", `${fixtures.length} Fixtures live erreichbar; erwartet sind mindestens 104.`),
    );
    checks.push(
      livePredictionCount >= localMatches
        ? pass("Predictions live", `${livePredictionCount} Fixtures mit Prediction-Daten live erreichbar.`)
        : warn(
            "Predictions live",
            `${livePredictionCount} Fixtures mit Prediction-Daten im Health-Check-Request. Gespeichertes Mapping bleibt massgeblich, wenn der Prediction-Include live nicht gefuellt ist.`,
          ),
    );
  } catch (error) {
    liveError = error.message;
    checks.push(fail("Fixture-Zugriff", error.message));
  }
} else if (providerTests?.providers?.[0]?.fixtures) {
  checks.push(warn("Fixture-Zugriff", `Kein Live-Request; letzter Probe-Stand hat ${providerTests.providers[0].fixtures} Fixtures.`));
}

if (!mapping) {
  checks.push(fail("Mapping", "data/provider-mapping.json fehlt. probe-sportmonks.cmd und update-sportmonks-mapping.mjs ausfuehren."));
} else {
  checks.push(
    mapping.coverage?.mapped === mapping.coverage?.localMatches
      ? pass("Mapping", `${mapping.coverage.mapped}/${mapping.coverage.localMatches} Gruppenspiele gemappt.`)
      : fail("Mapping", `${mapping.coverage?.mapped || 0}/${mapping.coverage?.localMatches || 0} Gruppenspiele gemappt.`),
  );
  checks.push(
    mapping.coverage?.predictions >= mapping.coverage?.localMatches
      ? pass("Predictions Mapping", `${mapping.coverage.predictions}/${mapping.coverage.localMatches} gemappte Gruppenspiele mit Prediction-Signal.`)
      : warn("Predictions Mapping", `${mapping.coverage?.predictions || 0}/${mapping.coverage?.localMatches || 0} gemappte Gruppenspiele mit Prediction-Signal.`),
  );
}

checks.push(
  results?.activeSource === "sportmonks"
    ? pass("results.json", "results.json nutzt Sportmonks als aktive Quelle.")
    : fail("results.json", `results.json nutzt ${results?.activeSource || "unbekannt"}.`),
);

const failed = checks.filter((check) => check.status === "fail").length;
const warnings = checks.filter((check) => check.status === "warn").length;
const status = failed ? "fail" : warnings ? "warn" : "pass";
const report = {
  generatedAt: new Date().toISOString(),
  status,
  summary: failed ? `${failed} kritische Checks fehlgeschlagen.` : warnings ? `${warnings} Hinweise, keine kritischen Fehler.` : "Sportmonks Health Check gruen.",
  liveFixtureCount,
  livePredictionCount,
  liveError,
  checks,
};

writeJson("data/sportmonks-health.json", report);

console.log("Sportmonks Health Check");
console.log(`Status: ${status.toUpperCase()} - ${report.summary}`);
for (const check of checks) {
  console.log(`${marker(check.status)} ${check.label}: ${check.detail}`);
}
console.log("Wrote data/sportmonks-health.json");

process.exitCode = failed ? 1 : 0;
