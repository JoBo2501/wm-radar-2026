import { existsSync, readFileSync, writeFileSync } from "node:fs";

function readJson(path, fallback = null) {
  if (!existsSync(path)) return fallback;
  return JSON.parse(readFileSync(path, "utf8"));
}

function writeJson(path, value) {
  writeFileSync(path, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function normalizeTeamName(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function getTeamAliases(teams) {
  const aliases = new Map();
  for (const team of teams) {
    aliases.set(normalizeTeamName(team.code), team.code);
    aliases.set(normalizeTeamName(team.name), team.code);
  }

  aliases.set("usa", "USA");
  aliases.set("united states", "USA");
  aliases.set("united states of america", "USA");
  aliases.set("mexico", "MEX");
  aliases.set("korea republic", "KOR");
  aliases.set("south korea", "KOR");
  aliases.set("czech republic", "CZE");
  aliases.set("czechia", "CZE");
  aliases.set("canada", "CAN");
  aliases.set("south africa", "RSA");
  aliases.set("bosnia and herzegovina", "BIH");
  aliases.set("bosnia herzegovina", "BIH");
  aliases.set("qatar", "QAT");
  aliases.set("switzerland", "SUI");
  aliases.set("brazil", "BRA");
  aliases.set("morocco", "MAR");
  aliases.set("scotland", "SCO");
  aliases.set("curacao", "CUW");
  aliases.set("cote d ivoire", "CIV");
  aliases.set("ivory coast", "CIV");
  aliases.set("cape verde", "CPV");
  aliases.set("cape verde islands", "CPV");
  aliases.set("saudi arabia", "KSA");
  aliases.set("ir iran", "IRN");
  aliases.set("iran", "IRN");
  aliases.set("dr congo", "COD");
  aliases.set("congo dr", "COD");
  aliases.set("congo democratic republic", "COD");
  aliases.set("turkiye", "TUR");
  aliases.set("turkey", "TUR");
  aliases.set("brasil", "BRA");
  aliases.set("holland", "NED");
  aliases.set("australia", "AUS");
  aliases.set("germany", "GER");
  aliases.set("netherlands", "NED");
  aliases.set("sweden", "SWE");
  aliases.set("tunisia", "TUN");
  aliases.set("spain", "ESP");
  aliases.set("belgium", "BEL");
  aliases.set("egypt", "EGY");
  aliases.set("new zealand", "NZL");
  aliases.set("france", "FRA");
  aliases.set("senegal", "SEN");
  aliases.set("iraq", "IRQ");
  aliases.set("norway", "NOR");
  aliases.set("argentina", "ARG");
  aliases.set("algeria", "ALG");
  aliases.set("austria", "AUT");
  aliases.set("jordan", "JOR");
  aliases.set("england", "ENG");
  aliases.set("croatia", "CRO");
  aliases.set("uzbekistan", "UZB");
  aliases.set("colombia", "COL");
  aliases.set("ghana", "GHA");
  aliases.set("panama", "PAN");
  aliases.set("uruguay", "URU");
  aliases.set("japan", "JPN");
  aliases.set("paraguay", "PAR");

  return aliases;
}

function fixtureKey(date, teams) {
  return `${date}|${teams.slice().sort().join("-")}`;
}

function toUtcDate(value) {
  if (!value) return null;
  return new Date(value).toISOString().slice(0, 10);
}

function getSportmonksTeams(fixture, teamAliases) {
  const participants = fixture.participants || [];
  const mapped = participants
    .map((participant) => teamAliases.get(normalizeTeamName(participant.name)))
    .filter(Boolean);
  if (mapped.length >= 2) return mapped.slice(0, 2);

  return String(fixture.name || "")
    .split(/\s+vs\s+|\s+-\s+/i)
    .map((name) => teamAliases.get(normalizeTeamName(name)))
    .filter(Boolean)
    .slice(0, 2);
}

function getPredictionMeta(prediction) {
  if (!prediction) return { available: false, keys: [], summary: null };
  if (Array.isArray(prediction.predictions)) {
    return {
      available: true,
      keys: prediction.predictions.slice(0, 8).map((item) => item.type?.name || item.type || item.name || item.id),
      summary: getPredictionSummary(prediction.predictions),
    };
  }
  if (prediction.predictions && typeof prediction.predictions === "object") {
    return { available: true, keys: Object.keys(prediction.predictions).slice(0, 8), summary: getPredictionSummary([prediction]) };
  }
  return {
    available: true,
    keys: Object.keys(prediction)
      .filter((key) => key !== "id" && key !== "name" && key !== "starting_at")
      .slice(0, 8),
    summary: null,
  };
}

function isNumber(value) {
  return typeof value === "number" && Number.isFinite(value);
}

function roundPercent(value) {
  return Math.round(value * 10) / 10;
}

function getPredictionSummary(items) {
  const outcomeModels = [];
  let scoreModel = null;
  const yesNoSignals = [];

  for (const item of items) {
    const values = item.predictions || {};
    if (isNumber(values.home) && isNumber(values.away) && isNumber(values.draw)) {
      outcomeModels.push({
        typeId: item.type_id || null,
        home: roundPercent(values.home),
        draw: roundPercent(values.draw),
        away: roundPercent(values.away),
      });
    }

    if (!scoreModel && values.scores && typeof values.scores === "object") {
      scoreModel = {
        typeId: item.type_id || null,
        topScores: Object.entries(values.scores)
          .filter(([, value]) => isNumber(value))
          .sort((a, b) => b[1] - a[1])
          .slice(0, 5)
          .map(([score, value]) => ({ score, value: roundPercent(value) })),
      };
    }

    if (isNumber(values.yes) && isNumber(values.no)) {
      yesNoSignals.push({
        typeId: item.type_id || null,
        yes: roundPercent(values.yes),
        no: roundPercent(values.no),
        equal: isNumber(values.equal) ? roundPercent(values.equal) : null,
      });
    }
  }

  const preferredOutcome = outcomeModels.find((model) => model.typeId === 237) || outcomeModels[0] || null;
  return {
    modelCount: items.length,
    preferredOutcome,
    outcomeModels: outcomeModels.slice(0, 3),
    topScores: scoreModel?.topScores || [],
    scoreTypeId: scoreModel?.typeId || null,
    yesNoSignals: yesNoSignals.slice(0, 4),
  };
}

const teams = readJson("data/teams.json", []);
const matches = readJson("data/matches.json", []);
const probe = readJson("data/raw/sportmonks-probe.json", null);
const teamAliases = getTeamAliases(teams);
const fixtures = probe?.fixtureIndex || [];
const predictions = new Map((probe?.predictionIndex || []).map((fixture) => [fixture.id, fixture]));

const matchByKey = new Map();
const matchByTeams = new Map();
for (const match of matches) {
  const utcDate = toUtcDate(match.kickoffGermany);
  const localDate = match.kickoffGermany.slice(0, 10);
  matchByKey.set(fixtureKey(utcDate, match.teams), match);
  matchByKey.set(fixtureKey(localDate, match.teams), match);
  matchByTeams.set(match.teams.slice().sort().join("-"), match);
}

const mappings = [];
const unmatchedProviderFixtures = [];

for (const fixture of fixtures) {
  const providerTeams = getSportmonksTeams(fixture, teamAliases);
  const providerDate = toUtcDate(`${fixture.starting_at}Z`);
  let match = providerTeams.length === 2 ? matchByKey.get(fixtureKey(providerDate, providerTeams)) : null;
  let confidence = match ? 100 : 0;
  let dateDeltaHours = null;

  if (!match && providerTeams.length === 2) {
    const teamOnlyMatch = matchByTeams.get(providerTeams.slice().sort().join("-"));
    if (teamOnlyMatch) {
      const providerTime = new Date(`${fixture.starting_at}Z`).getTime();
      const localTime = new Date(teamOnlyMatch.kickoffGermany).getTime();
      dateDeltaHours = Math.round(Math.abs(providerTime - localTime) / 36_000) / 100;
      match = teamOnlyMatch;
      confidence = dateDeltaHours <= 3 ? 96 : dateDeltaHours <= 30 ? 82 : 68;
    }
  }
  const prediction = predictions.get(fixture.id);
  const predictionMeta = getPredictionMeta(prediction);

  if (!match) {
    unmatchedProviderFixtures.push({
      providerId: fixture.id,
      name: fixture.name,
      startingAt: fixture.starting_at,
      teams: providerTeams,
    });
    continue;
  }

  mappings.push({
    matchId: match.id,
    provider: "sportmonks",
    providerId: fixture.id,
    providerName: fixture.name,
    startingAt: fixture.starting_at,
    teams: match.teams,
    confidence,
    dateDeltaHours,
    predictionAvailable: predictionMeta.available,
    predictionKeys: predictionMeta.keys,
    predictionSummary: predictionMeta.summary,
    predictionImpact: predictionMeta.available ? 6 : 0,
  });
}

const mappedMatchIds = new Set(mappings.map((mapping) => mapping.matchId));
const unmatchedLocalMatches = matches
  .filter((match) => !mappedMatchIds.has(match.id))
  .map((match) => ({ matchId: match.id, teams: match.teams, kickoffGermany: match.kickoffGermany }));

writeJson("data/provider-mapping.json", {
  generatedAt: new Date().toISOString(),
  provider: "sportmonks",
  status: mappings.length === matches.length ? "ready" : mappings.length ? "partial" : "not-ready",
  summary: `${mappings.length}/${matches.length} Gruppenspiele auf Sportmonks gemappt, ${mappings.filter((mapping) => mapping.predictionAvailable).length} mit Prediction-Signal.`,
  coverage: {
    localMatches: matches.length,
    providerFixtures: fixtures.length,
    mapped: mappings.length,
    unmatchedLocal: unmatchedLocalMatches.length,
    unmatchedProvider: unmatchedProviderFixtures.length,
    predictions: mappings.filter((mapping) => mapping.predictionAvailable).length,
  },
  mappings,
  unmatchedLocalMatches,
  unmatchedProviderFixtures,
});

console.log(`Sportmonks mapping: ${mappings.length}/${matches.length} matches, ${mappings.filter((mapping) => mapping.predictionAvailable).length} predictions`);
