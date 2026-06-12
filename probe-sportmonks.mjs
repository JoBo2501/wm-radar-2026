import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function getArg(name) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

function getSource() {
  const config = readJson("data/result-sources.json");
  const source = config.sources.find((candidate) => candidate.id === "sportmonks");
  if (!source) throw new Error("Sportmonks ist in data/result-sources.json nicht konfiguriert.");
  return source;
}

function hasValue(value) {
  if (Array.isArray(value)) return value.length > 0;
  if (value && typeof value === "object") return Object.keys(value).length > 0;
  return value !== null && value !== undefined && value !== "";
}

async function fetchAll(url) {
  const data = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    url.searchParams.set("page", String(page));
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Sportmonks HTTP ${response.status}`);
    const payload = await response.json();
    data.push(...(payload.data || []));
    if (!payload.pagination && payload.data?.length === 50) {
      throw new Error("Sportmonks Pagination fehlt trotz voller Seite; Fixture-Set waere unvollstaendig.");
    }
    hasMore = Boolean(payload.pagination?.has_more);
    page += 1;
  }

  return data;
}

const source = getSource();
const apiKey = process.env[source.apiKeyEnv];
if (!apiKey) {
  throw new Error(`${source.apiKeyEnv} ist nicht gesetzt. Starte setup-sportmonks-token.cmd oder setze die Variable manuell.`);
}

const include =
  getArg("include") ||
  "participants;scores;state;league;season;stage;group;lineups;events;statistics;formations;predictions;xGFixture;pressure;expectedLineups";
const leagueId = getArg("league-id") || source.leagueId;

const url = new URL(source.endpoint);
url.searchParams.set("api_token", apiKey);
url.searchParams.set("include", include);
url.searchParams.set("per_page", "50");
if (leagueId) url.searchParams.set("filters", `fixtureLeagues:${leagueId}`);

const fixtures = await fetchAll(url);
const coverageFields = ["participants", "scores", "state", "lineups", "events", "statistics", "formations", "predictions", "xGFixture", "pressure", "expectedLineups"];
const coverage = Object.fromEntries(
  coverageFields.map((field) => [field, fixtures.filter((fixture) => hasValue(fixture[field])).length]),
);

const sample = fixtures.slice(0, 5).map((fixture) => ({
  id: fixture.id,
  name: fixture.name,
  starting_at: fixture.starting_at,
  leagueId: fixture.league?.id || fixture.league_id || null,
  league: fixture.league?.name || fixture.league_id,
  seasonId: fixture.season?.id || fixture.season_id || null,
  season: fixture.season?.name || fixture.season_id,
  state: fixture.state?.name || fixture.state?.state || fixture.state_id,
  has: Object.fromEntries(coverageFields.map((field) => [field, hasValue(fixture[field])])),
}));

const fixtureIndex = fixtures.map((fixture) => ({
  id: fixture.id,
  name: fixture.name,
  starting_at: fixture.starting_at,
  leagueId: fixture.league?.id || fixture.league_id || null,
  league: fixture.league?.name || fixture.league_id,
  seasonId: fixture.season?.id || fixture.season_id || null,
  season: fixture.season?.name || fixture.season_id,
  state: fixture.state?.name || fixture.state?.state || fixture.state_id,
  participants: (fixture.participants || []).map((participant) => ({
    id: participant.id,
    name: participant.name,
    location: participant.meta?.location || participant.location || null,
  })),
}));

const predictionIndex = fixtures
  .filter((fixture) => hasValue(fixture.predictions))
  .map((fixture) => ({
    id: fixture.id,
    name: fixture.name,
    starting_at: fixture.starting_at,
    predictions: fixture.predictions,
  }));

const report = {
  generatedAt: new Date().toISOString(),
  source: "sportmonks",
  endpoint: source.endpoint,
  include,
  leagueId: leagueId || null,
  fixtures: fixtures.length,
  leagueIds: [
    ...new Set(
      fixtures
        .map((fixture) => fixture.league?.id || fixture.league_id || null)
        .filter(Boolean)
        .map(String),
    ),
  ],
  coverage,
  fixtureIndex,
  predictionIndex,
  sample,
};

if (!existsSync("data/raw")) mkdirSync("data/raw", { recursive: true });
writeFileSync("data/raw/sportmonks-probe.json", `${JSON.stringify(report, null, 2)}\n`, "utf8");
await import("./update-provider-tests.mjs");

console.log(`Sportmonks probe: ${fixtures.length} fixtures`);
for (const [field, count] of Object.entries(coverage)) {
  console.log(`- ${field}: ${count}/${fixtures.length}`);
}
console.log("Wrote data/raw/sportmonks-probe.json");
console.log("Updated data/provider-tests.json");
