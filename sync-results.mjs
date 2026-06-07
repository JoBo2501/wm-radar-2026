import { existsSync, readFileSync, writeFileSync } from "node:fs";

function readJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function getArg(name) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : null;
}

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function normalizeTeamName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function fixtureKey(date, teams) {
  return `${date}|${teams.slice().sort().join("-")}`;
}

function createFixtureIndexes(matches, knockout) {
  const groupById = new Map(matches.map((match) => [match.id, match]));
  const groupByDateTeams = new Map();
  for (const match of matches) {
    const germanyDate = match.kickoffGermany.slice(0, 10);
    const utcDate = new Date(match.kickoffGermany).toISOString().slice(0, 10);
    groupByDateTeams.set(fixtureKey(germanyDate, match.teams), match);
    groupByDateTeams.set(fixtureKey(utcDate, match.teams), match);
  }
  const knockoutByNumber = new Map(knockout.map((match) => [match.matchNumber, match]));

  return {
    groupById,
    groupByDateTeams,
    knockoutByNumber,
  };
}

function getTeamIndexes(teams) {
  const aliases = new Map();
  for (const team of teams) {
    aliases.set(normalizeTeamName(team.code), team.code);
    aliases.set(normalizeTeamName(team.name), team.code);
  }

  aliases.set("usa", "USA");
  aliases.set("united states", "USA");
  aliases.set("united states of america", "USA");
  aliases.set("korea republic", "KOR");
  aliases.set("south korea", "KOR");
  aliases.set("cote d ivoire", "CIV");
  aliases.set("ivory coast", "CIV");
  aliases.set("curacao", "CUW");
  aliases.set("cape verde", "CPV");
  aliases.set("czechia", "CZE");
  aliases.set("czech republic", "CZE");
  aliases.set("argentina", "ARG");
  aliases.set("brazil", "BRA");
  aliases.set("brasil", "BRA");
  aliases.set("spain", "ESP");
  aliases.set("germany", "GER");
  aliases.set("deutschland", "GER");
  aliases.set("france", "FRA");
  aliases.set("morocco", "MAR");
  aliases.set("japan", "JPN");
  aliases.set("norway", "NOR");
  aliases.set("turkiye", "TUR");
  aliases.set("turkey", "TUR");
  aliases.set("croatia", "CRO");
  aliases.set("algeria", "ALG");
  aliases.set("qatar", "QAT");
  aliases.set("switzerland", "SUI");
  aliases.set("scotland", "SCO");
  aliases.set("netherlands", "NED");
  aliases.set("holland", "NED");
  aliases.set("ecuador", "ECU");
  aliases.set("mexico", "MEX");
  aliases.set("south africa", "RSA");
  aliases.set("canada", "CAN");
  aliases.set("bosnia and herzegovina", "BIH");
  aliases.set("bosnia herzegovina", "BIH");
  aliases.set("paraguay", "PAR");
  aliases.set("australia", "AUS");
  aliases.set("tunisia", "TUN");
  aliases.set("sweden", "SWE");
  aliases.set("belgium", "BEL");
  aliases.set("egypt", "EGY");
  aliases.set("iran", "IRN");
  aliases.set("ir iran", "IRN");
  aliases.set("new zealand", "NZL");
  aliases.set("saudi arabia", "KSA");
  aliases.set("senegal", "SEN");
  aliases.set("iraq", "IRQ");
  aliases.set("austria", "AUT");
  aliases.set("jordan", "JOR");
  aliases.set("portugal", "POR");
  aliases.set("uzbekistan", "UZB");
  aliases.set("colombia", "COL");
  aliases.set("dr congo", "COD");
  aliases.set("congo dr", "COD");
  aliases.set("ghana", "GHA");
  aliases.set("panama", "PAN");

  return aliases;
}

function normalizeStatus(status) {
  const value = String(status || "").toLowerCase();
  if (["final", "finished", "ft", "full_time", "full-time"].includes(value)) return "final";
  if (["live", "in_play", "1h", "2h", "ht", "et", "p"].includes(value)) return "live";
  if (["postponed", "cancelled", "canceled", "suspended"].includes(value)) return "problem";
  return "scheduled";
}

function normalizeLocalResult(raw, indexes, teamAliases) {
  const matchId = raw.matchId || raw.id || null;
  const matchNumber = Number(raw.matchNumber || raw.number || 0) || null;
  let fixture = matchId ? indexes.groupById.get(matchId) : null;
  if (!fixture && matchNumber) fixture = indexes.knockoutByNumber.get(matchNumber);

  if (!fixture && raw.date && raw.home && raw.away) {
    const homeCode = teamAliases.get(normalizeTeamName(raw.home)) || raw.home;
    const awayCode = teamAliases.get(normalizeTeamName(raw.away)) || raw.away;
    fixture = indexes.groupByDateTeams.get(fixtureKey(raw.date, [homeCode, awayCode]));
  }

  return {
    matchId: fixture?.id || matchId || null,
    matchNumber: fixture?.matchNumber || matchNumber || null,
    stage: fixture?.stage || (fixture?.round ? "knockout" : "group"),
    status: normalizeStatus(raw.status),
    homeGoals: raw.homeGoals === null || raw.homeGoals === undefined ? null : Number(raw.homeGoals),
    awayGoals: raw.awayGoals === null || raw.awayGoals === undefined ? null : Number(raw.awayGoals),
    minute: raw.minute ?? null,
    penaltyHomeGoals: raw.penaltyHomeGoals ?? null,
    penaltyAwayGoals: raw.penaltyAwayGoals ?? null,
    source: raw.source || "local-json",
    providerId: raw.providerId || null,
    providerHome: raw.home || null,
    providerAway: raw.away || null,
    providerDate: raw.date || null,
    updatedAt: raw.updatedAt || new Date().toISOString(),
  };
}

async function fetchApiFootball(source) {
  const apiKey = process.env[source.apiKeyEnv];
  if (!apiKey) {
    throw new Error(`${source.apiKeyEnv} ist nicht gesetzt.`);
  }
  if (!source.leagueId) {
    throw new Error("api-football leagueId fehlt in data/result-sources.json.");
  }

  const url = new URL(source.endpoint);
  url.searchParams.set("league", source.leagueId);
  url.searchParams.set("season", source.season);
  const response = await fetch(url, {
    headers: { "x-apisports-key": apiKey },
  });
  if (!response.ok) throw new Error(`API-FOOTBALL HTTP ${response.status}`);
  const payload = await response.json();

  return (payload.response || []).map((item) => ({
    matchNumber: item.fixture?.id,
    date: item.fixture?.date?.slice(0, 10),
    home: item.teams?.home?.name,
    away: item.teams?.away?.name,
    homeGoals: item.goals?.home,
    awayGoals: item.goals?.away,
    status: item.fixture?.status?.short,
    minute: item.fixture?.status?.elapsed,
    providerId: item.fixture?.id,
    source: source.id,
    updatedAt: new Date().toISOString(),
  }));
}

async function fetchFootballData(source) {
  const token = process.env[source.apiKeyEnv];
  if (!token) {
    throw new Error(`${source.apiKeyEnv} ist nicht gesetzt. Starte setup-football-data-token.cmd oder setze die Variable manuell.`);
  }

  const response = await fetch(source.endpoint, {
    headers: { "X-Auth-Token": token },
  });
  if (!response.ok) throw new Error(`football-data.org HTTP ${response.status}`);
  const payload = await response.json();

  return (payload.matches || []).map((item) => ({
    date: item.utcDate?.slice(0, 10),
    home: item.homeTeam?.name,
    away: item.awayTeam?.name,
    homeGoals: item.score?.fullTime?.home,
    awayGoals: item.score?.fullTime?.away,
    status: item.status,
    providerId: item.id,
    source: source.id,
    updatedAt: new Date().toISOString(),
  }));
}

async function fetchSource(source) {
  if (source.type === "local-json") {
    const payload = readJson(source.path, { matches: [] });
    return payload.matches || [];
  }
  if (source.type === "api-football") return fetchApiFootball(source);
  if (source.type === "football-data") return fetchFootballData(source);
  throw new Error(`Unbekannter Source-Typ: ${source.type}`);
}

function mergeOverrides(results, overrides) {
  const byKey = new Map(results.map((result) => [result.matchId || `m${result.matchNumber}`, result]));
  for (const override of overrides.matches || []) {
    const key = override.matchId || `m${override.matchNumber}`;
    byKey.set(key, {
      ...byKey.get(key),
      ...override,
      source: "override",
      override: true,
      updatedAt: override.updatedAt || new Date().toISOString(),
    });
  }
  return [...byKey.values()];
}

const sourcesConfig = readJson("data/result-sources.json");
const teams = readJson("data/teams.json");
const matches = readJson("data/matches.json");
const knockout = readJson("data/knockout.json");
const overrides = readJson("data/result-overrides.json", { matches: [] });
const providerId = getArg("source") || sourcesConfig.activeSource;
const source = sourcesConfig.sources.find((candidate) => candidate.id === providerId);
const allowEmpty = hasFlag("allow-empty") || source?.type === "football-data";

if (!source) throw new Error(`Resultatquelle ${providerId} nicht gefunden.`);
if (!source.enabled) throw new Error(`Resultatquelle ${providerId} ist deaktiviert.`);

const indexes = createFixtureIndexes(matches, knockout);
const teamAliases = getTeamIndexes(teams);
let rawResults = [];
let syncError = null;

try {
  rawResults = await fetchSource(source);
} catch (error) {
  if (!allowEmpty) throw error;
  syncError = error;
}

const normalizedResults = rawResults
  .map((raw) => normalizeLocalResult(raw, indexes, teamAliases))
  .filter((result) => result.matchId || result.matchNumber)
  .filter((result) => result.status !== "scheduled" || hasFlag("include-scheduled"));
const mergedResults = mergeOverrides(normalizedResults, overrides);
const finalCount = mergedResults.filter((result) => result.status === "final").length;
const liveCount = mergedResults.filter((result) => result.status === "live").length;

writeJson("data/results.json", {
  mode: finalCount || liveCount ? "synced" : "preTournament",
  sourceLevel: finalCount || liveCount ? "real" : "model",
  activeSource: source.id,
  sourceLabel: source.label,
  sourceNote:
    syncError
      ? `Sync mit ${source.label} nicht moeglich: ${syncError.message}. Tabellenansicht nutzt weiter Modellprojektion.`
      : finalCount || liveCount
        ? `Automatisch synchronisiert aus ${source.label}; manuelle Overrides wurden angewendet.`
        : `Keine echten Ergebnisse von ${source.label}; Tabellenansicht nutzt weiter Modellprojektion.`,
  generatedAt: new Date().toISOString(),
  pollMinutes: source.pollMinutes,
  syncError: syncError
    ? {
        message: syncError.message,
        source: source.id,
      }
    : null,
  summary: {
    providerMatches: rawResults.length,
    synced: mergedResults.length,
    final: finalCount,
    live: liveCount,
    overrides: mergedResults.filter((result) => result.override).length,
  },
  matches: mergedResults,
});

console.log(
  `Synced ${mergedResults.length} results from ${source.label}: ${finalCount} final, ${liveCount} live, ${mergedResults.filter((result) => result.override).length} overrides`,
);
if (syncError) {
  console.log(`Sync warning: ${syncError.message}`);
}
