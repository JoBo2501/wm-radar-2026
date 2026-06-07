import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function resultKey(result) {
  return result.matchId || `m${result.matchNumber}`;
}

const matches = readJson("data/matches.json");
const knockout = readJson("data/knockout.json");
const results = readJson("data/results.json");

const groupIds = new Set(matches.map((match) => match.id));
const knockoutNumbers = new Set(knockout.map((match) => match.matchNumber));
const seen = new Set();
const unknownMatches = [];
const invalidScores = [];
const duplicateResults = [];
const teamMismatches = [];
const warnings = [];

if (results.syncError?.message) {
  warnings.push(`Sync-Fehler: ${results.syncError.message}`);
}

for (const result of results.matches || []) {
  const key = resultKey(result);
  const isScheduledOnly = result.status === "scheduled";
  if (seen.has(key)) duplicateResults.push(key);
  seen.add(key);

  const knownGroupMatch = result.matchId && groupIds.has(result.matchId);
  const knownKnockoutMatch = result.matchNumber && knockoutNumbers.has(result.matchNumber);
  if (!knownGroupMatch && !knownKnockoutMatch) {
    if (isScheduledOnly) warnings.push(`${key}: geplantes Provider-Spiel ohne lokales Mapping ignoriert`);
    else unknownMatches.push(key);
  }

  const hasHome = Number.isFinite(Number(result.homeGoals));
  const hasAway = Number.isFinite(Number(result.awayGoals));
  if (result.status === "final" && (!hasHome || !hasAway)) {
    invalidScores.push(`${key}: final ohne vollstaendigen Score`);
  }
  if ((hasHome && Number(result.homeGoals) < 0) || (hasAway && Number(result.awayGoals) < 0)) {
    invalidScores.push(`${key}: negativer Score`);
  }

  if (!result.updatedAt) warnings.push(`${key}: updatedAt fehlt`);
  if (!result.source) warnings.push(`${key}: source fehlt`);
  if (!isScheduledOnly && result.matchId && result.matchNumber) {
    const groupMatch = matches.find((match) => match.id === result.matchId);
    if (groupMatch && result.matchNumber > 72) teamMismatches.push(`${key}: Gruppenmatch mit K.o.-Matchnummer`);
  }
}

const finalGroupResults = (results.matches || []).filter((result) => result.status === "final" && result.matchId).length;
const finalKnockoutResults = (results.matches || []).filter((result) => result.status === "final" && result.matchNumber > 72).length;
const liveResults = (results.matches || []).filter((result) => result.status === "live").length;
const criticalIssues = unknownMatches.length + invalidScores.length + duplicateResults.length + teamMismatches.length;
const validation = {
  generatedAt: new Date().toISOString(),
  status: criticalIssues ? "critical" : results.syncError ? "blocked" : finalGroupResults || finalKnockoutResults ? "synced" : "waiting",
  summary: criticalIssues
    ? "Resultat-Sync enthaelt kritische Zuordnungsprobleme."
    : results.syncError
      ? `Resultat-Sync ist vorbereitet, aber aktuell blockiert: ${results.syncError.message}`
      : finalGroupResults || finalKnockoutResults
        ? "Resultate sind synchronisiert und plausibel."
        : "Noch keine echten Resultate synchronisiert; Projektionsmodus bleibt aktiv.",
  source: {
    activeSource: results.activeSource || "unknown",
    sourceLabel: results.sourceLabel || "Unbekannt",
    generatedAt: results.generatedAt || null,
    pollMinutes: results.pollMinutes || null,
  },
  issues: {
    unknownMatches,
    invalidScores,
    duplicateResults,
    teamMismatches,
    warnings,
  },
  coverage: {
    groupResults: finalGroupResults,
    knockoutResults: finalKnockoutResults,
    liveResults,
    totalResults: finalGroupResults + finalKnockoutResults,
    groupCoverage: Math.round((finalGroupResults / matches.length) * 100),
    knockoutCoverage: Math.round((finalKnockoutResults / knockout.length) * 100),
  },
};

writeFileSync("data/result-validation.json", `${JSON.stringify(validation, null, 2)}\n`, "utf8");
console.log(
  `Validated results: ${validation.coverage.totalResults} final results, status ${validation.status}, ${criticalIssues} critical issues`,
);
