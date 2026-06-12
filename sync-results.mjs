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

function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function shouldRetryStatus(status) {
  return status === 429 || status >= 500;
}

async function fetchJsonWithRetry(url, options = {}, label = "Request", attempts = 3) {
  let lastError = null;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const error = new Error(`${label} HTTP ${response.status}`);
        error.status = response.status;
        if (!shouldRetryStatus(response.status) || attempt === attempts) throw error;
        lastError = error;
      } else {
        return response.json();
      }
    } catch (error) {
      lastError = error;
      if (attempt === attempts || (error.status && !shouldRetryStatus(error.status))) throw error;
    }
    await wait(750 * attempt);
  }
  throw lastError;
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

function createProviderMappingIndex(mappingPayload, source) {
  if (!mappingPayload?.mappings?.length) return new Map();
  const provider = String(mappingPayload.provider || "").toLowerCase();
  const sourceId = String(source?.id || "").toLowerCase();
  const sourceType = String(source?.type || "").toLowerCase();
  if (provider && provider !== sourceId && provider !== sourceType) return new Map();

  return new Map(
    mappingPayload.mappings
      .filter((mapping) => mapping.providerId && mapping.matchId)
      .map((mapping) => [
        String(mapping.providerId),
        {
          matchId: mapping.matchId,
          confidence: mapping.confidence ?? null,
        },
      ]),
  );
}

function getProviderMappedCount(results) {
  return results.filter((result) => result.providerMapped).length;
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

function getSportmonksParticipantName(item, location) {
  const participant = (item.participants || []).find(
    (candidate) => String(candidate.meta?.location || candidate.location || "").toLowerCase() === location,
  );
  return participant?.name || null;
}

function getSportmonksNames(item) {
  const home = getSportmonksParticipantName(item, "home");
  const away = getSportmonksParticipantName(item, "away");
  if (home && away) return { home, away };

  const nameParts = String(item.name || "").split(/\s+vs\s+|\s+-\s+/i);
  return {
    home: home || nameParts[0] || null,
    away: away || nameParts[1] || null,
  };
}

function getSportmonksScore(item, location) {
  const scores = item.scores || [];
  const candidates = scores.filter(
    (score) => String(score.score?.participant || score.participant || "").toLowerCase() === location,
  );
  const currentTypeId = 1525;
  const preferred =
    candidates.find((score) => Number(score.type_id || score.type?.id) === currentTypeId) ||
    candidates.find((score) => String(score.description || score.type?.name || "").toLowerCase() === "current") ||
    candidates.find((score) => String(score.description || score.type?.name || "").toLowerCase().includes("full")) ||
    candidates.at(-1);

  const goals = preferred?.score?.goals ?? preferred?.score?.score ?? preferred?.goals ?? preferred?.value;
  return goals === null || goals === undefined ? null : Number(goals);
}

function getSportmonksStatus(item) {
  return normalizeStatus(item.state?.state || item.state?.name || item.state?.short_name || item.state_id);
}

function getSportmonksParticipant(item, location) {
  return (item.participants || []).find(
    (candidate) => String(candidate.meta?.location || candidate.location || "").toLowerCase() === location,
  );
}

const statisticIdFallback = new Map([
  [34, "CORNERS"],
  [41, "SHOTS_OFF_TARGET"],
  [42, "SHOTS_TOTAL"],
  [43, "ATTACKS"],
  [44, "DANGEROUS_ATTACKS"],
  [45, "BALL_POSSESSION"],
  [49, "SHOTS_INSIDEBOX"],
  [50, "SHOTS_OUTSIDEBOX"],
  [52, "GOALS"],
  [54, "GOAL_ATTEMPTS"],
  [56, "FOULS"],
  [57, "SAVES"],
  [58, "SHOTS_BLOCKED"],
  [78, "TACKLES"],
  [80, "PASSES"],
  [81, "SUCCESSFUL_PASSES"],
  [82, "SUCCESSFUL_PASSES_PERCENTAGE"],
  [83, "REDCARDS"],
  [84, "YELLOWCARDS"],
  [86, "SHOTS_ON_TARGET"],
  [98, "TOTAL_CROSSES"],
  [99, "ACCURATE_CROSSES"],
  [100, "INTERCEPTIONS"],
  [106, "DUELS_WON"],
  [117, "KEY_PASSES"],
  [580, "BIG_CHANCES_CREATED"],
  [581, "BIG_CHANCES_MISSED"],
  [1527, "COUNTER_ATTACKS"],
  [27264, "SUCCESSFUL_LONG_PASSES"],
]);

const statisticKeys = new Map([
  ["CORNERS", "corners"],
  ["SHOTS_OFF_TARGET", "shotsOffTarget"],
  ["SHOTS_TOTAL", "shotsTotal"],
  ["ATTACKS", "attacks"],
  ["DANGEROUS_ATTACKS", "dangerousAttacks"],
  ["BALL_POSSESSION", "possession"],
  ["SHOTS_INSIDEBOX", "shotsInsideBox"],
  ["SHOTS_OUTSIDEBOX", "shotsOutsideBox"],
  ["GOALS", "goals"],
  ["GOAL_ATTEMPTS", "goalAttempts"],
  ["FOULS", "fouls"],
  ["SAVES", "saves"],
  ["SHOTS_BLOCKED", "shotsBlocked"],
  ["TACKLES", "tackles"],
  ["PASSES", "passes"],
  ["SUCCESSFUL_PASSES", "successfulPasses"],
  ["SUCCESSFUL_PASSES_PERCENTAGE", "passAccuracy"],
  ["REDCARDS", "redCards"],
  ["YELLOWCARDS", "yellowCards"],
  ["SHOTS_ON_TARGET", "shotsOnTarget"],
  ["TOTAL_CROSSES", "crosses"],
  ["ACCURATE_CROSSES", "accurateCrosses"],
  ["INTERCEPTIONS", "interceptions"],
  ["DUELS_WON", "duelsWon"],
  ["KEY_PASSES", "keyPasses"],
  ["BIG_CHANCES_CREATED", "bigChancesCreated"],
  ["BIG_CHANCES_MISSED", "bigChancesMissed"],
  ["COUNTER_ATTACKS", "counterAttacks"],
  ["SUCCESSFUL_LONG_PASSES", "successfulLongPasses"],
]);

function getStatisticKey(statistic) {
  const developerName =
    statistic.type?.developer_name ||
    statistic.type?.code?.replace(/-/g, "_").toUpperCase() ||
    statisticIdFallback.get(Number(statistic.type_id));
  return statisticKeys.get(developerName) || null;
}

function getStatisticValue(statistic) {
  const value = statistic.data?.value ?? statistic.value;
  return value === null || value === undefined ? null : Number(value);
}

function collectSportmonksStatistics(item, participant) {
  const stats = {};
  if (!participant?.id) return stats;

  for (const statistic of item.statistics || []) {
    if (Number(statistic.participant_id) !== Number(participant.id)) continue;
    const key = getStatisticKey(statistic);
    const value = getStatisticValue(statistic);
    if (!key || !Number.isFinite(value)) continue;
    stats[key] = value;
  }

  return stats;
}

function getEventType(event) {
  return event.type?.developer_name || event.type?.code?.toUpperCase() || event.type?.name || String(event.type_id || "");
}

function collectSportmonksEvents(item) {
  return (item.events || [])
    .filter((event) => [10, 14, 19, 20, 1697].includes(Number(event.type_id)))
    .map((event) => ({
      minute: event.minute ?? null,
      extraMinute: event.extra_minute ?? null,
      typeId: event.type_id ?? null,
      type: getEventType(event),
      participantId: event.participant_id ?? null,
      player: event.player?.display_name || event.player?.name || event.player_name || null,
      relatedPlayer: event.relatedPlayer?.display_name || event.relatedPlayer?.name || event.related_player_name || null,
      info: event.info || null,
      result: event.result || null,
    }))
    .sort((a, b) => Number(a.minute || 0) - Number(b.minute || 0));
}

function collectPressureSummary(item, participant) {
  const rows = (item.pressure || []).filter((row) => Number(row.participant_id) === Number(participant?.id));
  if (!rows.length) return null;
  const values = rows.map((row) => Number(row.pressure ?? row.value ?? row.data?.value ?? 0)).filter(Number.isFinite);
  if (!values.length) return null;
  return {
    average: Number((values.reduce((sum, value) => sum + value, 0) / values.length).toFixed(1)),
    max: Number(Math.max(...values).toFixed(1)),
    highMinutes: values.filter((value) => value >= 35).length,
    samples: values.length,
  };
}

function getSportmonksPostMatch(item) {
  const home = getSportmonksParticipant(item, "home");
  const away = getSportmonksParticipant(item, "away");
  const statisticsAvailable = Boolean((item.statistics || []).length && home && away);
  const eventsAvailable = Boolean((item.events || []).length);
  const pressureAvailable = Boolean((item.pressure || []).length && home && away);

  if (!statisticsAvailable && !eventsAvailable && !pressureAvailable) return null;

  return {
    provider: "sportmonks",
    coverage: {
      statistics: statisticsAvailable,
      events: eventsAvailable,
      pressure: pressureAvailable,
      xg: Boolean(item.xGFixture),
    },
    participants: {
      home: { id: home?.id || null, name: home?.name || null },
      away: { id: away?.id || null, name: away?.name || null },
    },
    statistics: statisticsAvailable
      ? {
          home: collectSportmonksStatistics(item, home),
          away: collectSportmonksStatistics(item, away),
        }
      : null,
    events: eventsAvailable ? collectSportmonksEvents(item) : [],
    pressure: pressureAvailable
      ? {
          home: collectPressureSummary(item, home),
          away: collectPressureSummary(item, away),
        }
      : null,
  };
}

function normalizeLocalResult(raw, indexes, teamAliases, providerMappingById) {
  const mappedProviderFixture = raw.providerId ? providerMappingById.get(String(raw.providerId)) : null;
  const matchId = mappedProviderFixture?.matchId || raw.matchId || raw.id || null;
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
    providerMapped: Boolean(mappedProviderFixture),
    providerMappingConfidence: mappedProviderFixture?.confidence ?? null,
    providerHome: raw.home || null,
    providerAway: raw.away || null,
    providerDate: raw.date || null,
    postMatch: raw.postMatch || null,
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
  const payload = await fetchJsonWithRetry(url, {
    headers: { "x-apisports-key": apiKey },
  }, "API-FOOTBALL");

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

  const payload = await fetchJsonWithRetry(source.endpoint, {
    headers: { "X-Auth-Token": token },
  }, "football-data.org");

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

async function fetchSportmonks(source) {
  const apiKey = process.env[source.apiKeyEnv];
  if (!apiKey) {
    throw new Error(`${source.apiKeyEnv} ist nicht gesetzt. Starte setup-sportmonks-token.cmd oder setze die Variable manuell.`);
  }

  const url = new URL(source.endpoint);
  url.searchParams.set("api_token", apiKey);
  if (source.include) url.searchParams.set("include", source.include);
  if (source.leagueId) url.searchParams.set("filters", `fixtureLeagues:${source.leagueId}`);
  url.searchParams.set("per_page", "50");

  const allFixtures = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    url.searchParams.set("page", String(page));
    const payload = await fetchJsonWithRetry(url, {}, "Sportmonks");
    const pageData = payload.data || [];
    allFixtures.push(...pageData);
    if (!payload.pagination && pageData.length === 50) {
      throw new Error("Sportmonks Pagination fehlt trotz voller Seite; Fixture-Set waere unvollstaendig.");
    }
    hasMore = Boolean(payload.pagination?.has_more);
    page += 1;
  }

  return allFixtures.map((item) => {
    const names = getSportmonksNames(item);
    return {
      date: item.starting_at?.slice(0, 10),
      home: names.home,
      away: names.away,
      homeGoals: getSportmonksScore(item, "home"),
      awayGoals: getSportmonksScore(item, "away"),
      status: getSportmonksStatus(item),
      minute: item.periods?.current?.minute ?? item.currentPeriod?.minute ?? null,
      providerId: item.id,
      postMatch: getSportmonksPostMatch(item),
      source: source.id,
      updatedAt: new Date().toISOString(),
    };
  });
}

async function fetchSource(source) {
  if (source.type === "local-json") {
    const payload = readJson(source.path, { matches: [] });
    return payload.matches || [];
  }
  if (source.type === "api-football") return fetchApiFootball(source);
  if (source.type === "football-data") return fetchFootballData(source);
  if (source.type === "sportmonks") return fetchSportmonks(source);
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

function writeSyncStatus(payload) {
  writeJson("data/sync-status.json", {
    ...payload,
    generatedAt: new Date().toISOString(),
  });
}

const sourcesConfig = readJson("data/result-sources.json");
const teams = readJson("data/teams.json");
const matches = readJson("data/matches.json");
const knockout = readJson("data/knockout.json");
const overrides = readJson("data/result-overrides.json", { matches: [] });
const providerMapping = readJson("data/provider-mapping.json", { mappings: [] });
const providerId = getArg("source") || sourcesConfig.activeSource;
const source = sourcesConfig.sources.find((candidate) => candidate.id === providerId);
const allowEmpty = hasFlag("allow-empty") || source?.type === "football-data" || source?.type === "sportmonks";

if (!source) throw new Error(`Resultatquelle ${providerId} nicht gefunden.`);
if (!source.enabled) throw new Error(`Resultatquelle ${providerId} ist deaktiviert.`);

const indexes = createFixtureIndexes(matches, knockout);
const teamAliases = getTeamIndexes(teams);
const providerMappingById = createProviderMappingIndex(providerMapping, source);
let rawResults = [];
let syncError = null;

try {
  rawResults = await fetchSource(source);
} catch (error) {
  if (!allowEmpty) throw error;
  syncError = error;
}

if (syncError) {
  writeSyncStatus({
    ok: false,
    activeSource: source.id,
    sourceLabel: source.label,
    error: {
      message: syncError.message,
      source: source.id,
    },
    preservedResults: existsSync("data/results.json"),
  });
  console.log(`Sync warning: ${syncError.message}`);
  console.log("Bestehende data/results.json bleibt unveraendert.");
  process.exit(1);
}

const normalizedResults = rawResults
  .map((raw) => normalizeLocalResult(raw, indexes, teamAliases, providerMappingById))
  .filter((result) => result.matchId || result.matchNumber)
  .filter((result) => result.status !== "scheduled" || hasFlag("include-scheduled"));
const mergedResults = mergeOverrides(normalizedResults, overrides);
const finalCount = mergedResults.filter((result) => result.status === "final").length;
const liveCount = mergedResults.filter((result) => result.status === "live").length;
const providerMappedCount = getProviderMappedCount(normalizedResults);

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
    providerMapped: providerMappedCount,
    final: finalCount,
    live: liveCount,
    overrides: mergedResults.filter((result) => result.override).length,
  },
  matches: mergedResults,
});

writeSyncStatus({
  ok: true,
  activeSource: source.id,
  sourceLabel: source.label,
  providerMatches: rawResults.length,
  synced: mergedResults.length,
  providerMapped: providerMappedCount,
  final: finalCount,
  live: liveCount,
  providerMappingEntries: providerMappingById.size,
});

console.log(
  `Synced ${mergedResults.length} results from ${source.label}: ${finalCount} final, ${liveCount} live, ${mergedResults.filter((result) => result.override).length} overrides`,
);
if (syncError) {
  console.log(`Sync warning: ${syncError.message}`);
}
