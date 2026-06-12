import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const teams = readJson("data/teams.json");
const groups = readJson("data/groups.json");
const matches = readJson("data/matches.json");
const knockout = readJson("data/knockout.json");
const results = readJson("data/results.json");
const preferences = readJson("data/preferences.json");
const teamProfiles = readJson("data/team-profiles.json");
const keyFigures = readJson("data/key-figures.json");
const analystSources = readJson("data/analyst-sources.json");
const postMatchReports = readJson("data/post-match-reports.json");
const providerTests = readJson("data/provider-tests.json");
const providerMapping = readJson("data/provider-mapping.json");

const focusTeams = teams.filter((team) => team.focus);
const surpriseTeams = teams
  .filter((team) => team.surprise)
  .map((team) => ({
    code: team.code,
    team: team.name,
    flag: team.flag,
    score: team.watchPriority,
    reason: team.style,
    spark: [42, 58, 66, 73, 78, Math.max(72, team.watchPriority - 4), team.watchPriority],
  }));

const data = {
  metadata: {
    snapshotDate: "2026-06-07",
    tournament: "FIFA World Cup 2026",
    format: "48 Teams, 104 Spiele, 12 Gruppen",
    status: "MVP mit offiziellen Basisdaten, strukturiertem JSON-Kern und kuratierten Seed-Analysen",
    baseDate: preferences.baseDate,
    officialLinks: [
      {
        label: "FIFA Spielplan",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/articles/match-schedule-fixtures-results-teams-stadiums",
      },
      {
        label: "FIFA Scores & Fixtures",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/scores-fixtures",
      },
      {
        label: "FIFA Teams",
        url: "https://www.fifa.com/en/tournaments/mens/worldcup/canadamexicousa2026/teams/",
      },
    ],
  },
  teams,
  groups,
  teamProfiles,
  keyFigures,
  analystSources,
  postMatchReports,
  providerTests,
  providerMapping,
  focusTeams,
  filters: [
    { id: "all", label: "Alle" },
    { id: "today", label: "Heute" },
    { id: "tomorrow", label: "Morgen" },
    { id: "focus", label: "Fokus-Teams" },
    { id: "path", label: "Weiterkommen & Gegner" },
    { id: "night", label: "Nachtspiele" },
    { id: "low-value", label: "Geringer Spielwert" },
  ],
  categoryFilters: [
    { id: "all", label: "Alle Empfehlungen" },
    { id: "live", label: "Live" },
    { id: "analysis", label: "Analyse" },
    { id: "highlights", label: "Highlights" },
    { id: "skip", label: "Auslassen" },
  ],
  preferences,
  matches,
  knockout,
  results,
  surpriseTeams,
};

const serialized = JSON.stringify(data, null, 2).replace(/<\/script/gi, "<\\/script");
writeFileSync("data.js", `window.WMRadarData = ${serialized};\n`, "utf8");
console.log(
  `Created data.js from ${teams.length} teams, ${groups.length} groups, ${matches.length} matches, ${knockout.length} knockout slots, ${results.matches.length} results, ${postMatchReports.reports.length} post-match reports and ${analystSources.pillars.length} source pillars`,
);
