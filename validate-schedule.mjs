import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function pairKey(codes) {
  return codes.slice().sort().join("-");
}

function getGroupId(match) {
  if (match.group) return match.group;
  const groupMatch = match.group?.match?.(/Gruppe\s+([A-L])/i);
  return groupMatch ? groupMatch[1].toUpperCase() : null;
}

const fixtures = readJson("data/raw/fixtures.json");
const knockout = readJson("data/knockout.json");
const teams = readJson("data/teams.json");
const groups = readJson("data/groups.json");

const teamByCode = new Map(teams.map((team) => [team.code, team]));
const expectedTotalMatches = 104;
const expectedGroupMatches = groups.length * 6;
const expectedKnockoutMatches = expectedTotalMatches - expectedGroupMatches;
const seenIds = new Set();
const duplicateFixtures = [];
const unknownTeams = [];
const invalidGroups = [];
const groupSummaries = [];
const warnings = [];
const invalidKnockout = [];

for (const fixture of fixtures) {
  const groupId = getGroupId(fixture);
  const id = `${fixture.teams.join("-")}-${fixture.kickoffGermany}`;

  if (seenIds.has(id)) duplicateFixtures.push(id);
  seenIds.add(id);

  if (!groups.some((group) => group.id === groupId)) {
    invalidGroups.push(`${id}: ${groupId || "ohne Gruppe"}`);
  }

  for (const code of fixture.teams || []) {
    if (!teamByCode.has(code)) unknownTeams.push(`${id}: ${code}`);
  }

  if (!fixture.kickoffGermany?.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+02:00$/)) {
    warnings.push(`${id}: kickoffGermany sollte als CEST-ISO-Zeit vorliegen.`);
  }

  if (!fixture.venue) warnings.push(`${id}: Stadion fehlt.`);
  if (!fixture.sourceNote) warnings.push(`${id}: sourceNote fehlt.`);
}

for (const group of groups) {
  const expectedPairs = [];
  for (let i = 0; i < group.teams.length; i += 1) {
    for (let j = i + 1; j < group.teams.length; j += 1) {
      expectedPairs.push(pairKey([group.teams[i], group.teams[j]]));
    }
  }

  const groupFixtures = fixtures.filter((fixture) => fixture.group === group.id);
  const importedPairs = new Set(groupFixtures.map((fixture) => pairKey(fixture.teams)));
  const missingPairs = expectedPairs.filter((expectedPair) => !importedPairs.has(expectedPair));
  const duplicatePairs = groupFixtures
    .map((fixture) => pairKey(fixture.teams))
    .filter((fixturePair, index, allPairs) => allPairs.indexOf(fixturePair) !== index);

  groupSummaries.push({
    id: group.id,
    expected: expectedPairs.length,
    imported: groupFixtures.length,
    missing: missingPairs.length,
    coverage: Math.round((groupFixtures.length / expectedPairs.length) * 100),
    complete: missingPairs.length === 0 && duplicatePairs.length === 0,
    missingPairs,
    duplicatePairs: [...new Set(duplicatePairs)],
    verified: groupFixtures.filter((fixture) => fixture.fixtureVerified).length,
    mixed: groupFixtures.filter((fixture) => fixture.sourceLevel === "mixed").length,
    real: groupFixtures.filter((fixture) => fixture.sourceLevel === "real").length,
    model: groupFixtures.filter((fixture) => fixture.sourceLevel === "model").length,
  });
}

const knockoutIds = new Set();
for (const match of knockout) {
  if (knockoutIds.has(match.matchNumber)) invalidKnockout.push(`Doppelte K.o.-Matchnummer ${match.matchNumber}`);
  knockoutIds.add(match.matchNumber);

  if (!match.kickoffGermany?.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\+02:00$/)) {
    warnings.push(`${match.id}: kickoffGermany sollte als CEST-ISO-Zeit vorliegen.`);
  }

  if (!match.venue) warnings.push(`${match.id}: Stadion fehlt.`);
  if (!match.slots || match.slots.length !== 2) invalidKnockout.push(`${match.id}: exakt zwei Bracket-Slots erwartet.`);
  if (!match.round) invalidKnockout.push(`${match.id}: Runde fehlt.`);
}

const importedGroupMatches = fixtures.length;
const verifiedGroupMatches = fixtures.filter((fixture) => fixture.fixtureVerified).length;
const completeGroups = groupSummaries.filter((group) => group.complete).length;
const importedKnockoutMatches = knockout.length;
const verifiedKnockoutMatches = knockout.filter((match) => match.fixtureVerified).length;
const criticalIssues = duplicateFixtures.length + unknownTeams.length + invalidGroups.length + invalidKnockout.length;
const groupCoverage = Math.round((importedGroupMatches / expectedGroupMatches) * 100);
const knockoutCoverage = Math.round((importedKnockoutMatches / expectedKnockoutMatches) * 100);
const tournamentCoverage = Math.round(((importedGroupMatches + importedKnockoutMatches) / expectedTotalMatches) * 100);

const validation = {
  generatedAt: new Date().toISOString(),
  expected: {
    totalMatches: expectedTotalMatches,
    groupMatches: expectedGroupMatches,
    knockoutMatches: expectedKnockoutMatches,
    groups: groups.length,
    matchesPerGroup: 6,
  },
  imported: {
    totalMatches: importedGroupMatches + importedKnockoutMatches,
    groupMatches: importedGroupMatches,
    knockoutMatches: importedKnockoutMatches,
    verifiedGroupMatches,
    verifiedKnockoutMatches,
    completeGroups,
  },
  coverage: {
    tournament: tournamentCoverage,
    groupStage: groupCoverage,
    knockout: knockoutCoverage,
    verifiedGroupStage: Math.round((verifiedGroupMatches / expectedGroupMatches) * 100),
    verifiedKnockout: Math.round((verifiedKnockoutMatches / expectedKnockoutMatches) * 100),
  },
  status:
    criticalIssues > 0
      ? "critical"
      : importedGroupMatches === expectedGroupMatches && importedKnockoutMatches === expectedKnockoutMatches
        ? "structure-ready"
        : importedGroupMatches === expectedGroupMatches
          ? "ready"
          : importedGroupMatches >= expectedGroupMatches * 0.5
            ? "partial"
            : "seed",
  summary:
    criticalIssues > 0
      ? "Import enthaelt kritische Strukturprobleme."
      : importedGroupMatches === expectedGroupMatches && importedKnockoutMatches === expectedKnockoutMatches
        ? "Turnierstruktur vollstaendig importiert; Teams und Ergebnisse bleiben bis zur Gruppenphase offen."
        : importedGroupMatches === expectedGroupMatches
          ? "Gruppenphase vollstaendig importiert; K.o.-Runden brauchen Platzhalter oder Live-Bracket."
          : "Gruppenphase teilweise importiert; fehlende Gruppen und Paarungen sind sichtbar markiert.",
  issues: {
    duplicateFixtures,
    unknownTeams,
    invalidGroups,
    invalidKnockout,
    warnings,
  },
  groups: groupSummaries,
  knockout: {
    expected: expectedKnockoutMatches,
    imported: importedKnockoutMatches,
    verified: verifiedKnockoutMatches,
    coverage: knockoutCoverage,
    rounds: [
      { id: "round-of-32", label: "Round of 32", expected: 16 },
      { id: "round-of-16", label: "Achtelfinale", expected: 8 },
      { id: "quarter-final", label: "Viertelfinale", expected: 4 },
      { id: "semi-final", label: "Halbfinale", expected: 2 },
      { id: "third-place", label: "Spiel um Platz 3", expected: 1 },
      { id: "final", label: "Finale", expected: 1 },
    ].map((round) => ({
      ...round,
      imported: knockout.filter((match) => match.round === round.id).length,
      complete: knockout.filter((match) => match.round === round.id).length === round.expected,
    })),
  },
};

writeFileSync("data/schedule-validation.json", `${JSON.stringify(validation, null, 2)}\n`, "utf8");
console.log(
  `Validated schedule: ${importedGroupMatches}/${expectedGroupMatches} group fixtures, ${importedKnockoutMatches}/${expectedKnockoutMatches} knockout fixtures, status ${validation.status}`,
);
