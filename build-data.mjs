import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const teams = readJson("data/teams.json");
const groups = readJson("data/groups.json");
const matches = readJson("data/matches.json");
const knockout = readJson("data/knockout.json");
const results = readJson("data/results.json");
const resultValidation = readJson("data/result-validation.json");
const preferences = readJson("data/preferences.json");
const teamProfiles = readJson("data/team-profiles.json");
const keyFigures = readJson("data/key-figures.json");
const analystSources = readJson("data/analyst-sources.json");
const scheduleValidation = readJson("data/schedule-validation.json");
const postMatchReports = readJson("data/post-match-reports.json");
const postMatchValidation = readJson("data/post-match-validation.json");
const providerTests = readJson("data/provider-tests.json");
const providerMapping = readJson("data/provider-mapping.json");
const featureBlueprints = readJson("data/feature-blueprints.json");
const sportmonksHealth = readJson("data/sportmonks-health.json");

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
  dataStatus: [
    {
      label: "Turnierformat",
      value: "Echt",
      tone: "real",
      detail: "48 Teams und 104 Spiele laut FIFA.",
      confidence: 98,
    },
    {
      label: "JSON-Datenkern",
      value: "Neu",
      tone: "model",
      detail: "Teams, Matches und Gewichtungen liegen jetzt strukturiert in data/.",
      confidence: 86,
    },
    {
      label: "Spielplan-Basis",
      value: "Teilweise echt",
      tone: "mixed",
      detail: "Einige Partien sind aus FIFA-nahen Quellen gespiegelt, Seed-Duelle bleiben markiert.",
      confidence: 78,
    },
    {
      label: "Gruppen & Szenarien",
      value: "Modell",
      tone: "mixed",
      detail: "Gruppen A-L, Tabellenprojektion und K.o.-Slots sind strukturiert; echte Resultate werden spaeter eingespielt.",
      confidence: 74,
    },
    {
      label: "Resultate & Tabellen",
      value: resultValidation.status === "synced" ? "Sync aktiv" : "Projektion",
      tone: resultValidation.status === "critical" ? "seed" : resultValidation.status === "synced" ? "real" : "model",
      detail:
        resultValidation.status === "synced"
          ? `${resultValidation.coverage.totalResults} echte Ergebnisse synchronisiert.`
          : "Noch keine echten Ergebnisse; Tabellen laufen transparent im Projektionsmodus.",
      confidence: resultValidation.status === "synced" ? 90 : resultValidation.status === "critical" ? 35 : 68,
    },
    {
      label: "Post-Match Reports",
      value: postMatchValidation.status === "ready" ? "Bereit" : "Blueprint",
      tone: postMatchValidation.status === "critical" ? "seed" : postMatchValidation.status === "ready" ? "real" : "model",
      detail:
        postMatchValidation.status === "ready"
          ? `${postMatchValidation.coverage.reports} Reports strukturell plausibel.`
          : "Report-Schema, Metriken und Validierungsfragen sind vorbereitet.",
      confidence: postMatchValidation.status === "critical" ? 38 : postMatchValidation.status === "ready" ? 84 : 72,
    },
    {
      label: "Match Value Score",
      value: "Live berechnet",
      tone: "model",
      detail: "Score und Empfehlung entstehen aus Signalen plus deinen Gewichtungen.",
      confidence: 76,
    },
  ],
  teams,
  groups,
  teamProfiles,
  keyFigures,
  analystSources,
  scheduleValidation,
  resultValidation,
  postMatchReports,
  postMatchValidation,
  providerTests,
  providerMapping,
  sportmonksHealth,
  featureBlueprints,
  focusTeams,
  filters: [
    { id: "all", label: "Alle" },
    { id: "today", label: "Heute" },
    { id: "tomorrow", label: "Morgen" },
    { id: "focus", label: "Fokus-Teams" },
    { id: "path", label: "Weiterkommen & Gegner" },
    { id: "night", label: "Nachtspiele" },
    { id: "low-value", label: "Low Value" },
  ],
  categoryFilters: [
    { id: "all", label: "Alle Empfehlungen" },
    { id: "live", label: "Live" },
    { id: "analysis", label: "Analyse" },
    { id: "highlights", label: "Highlights" },
    { id: "skip", label: "Skip" },
  ],
  preferences,
  matches,
  knockout,
  results,
  surpriseTeams,
  sources: [
    {
      grade: "A",
      title: "FIFA Official",
      text: "Turnierformat, Spielplan, Teams, Stadien, Ergebnisstatus.",
      quality: 98,
    },
    {
      grade: "A",
      title: "SportMonks",
      text: "Primaere WM-Datenquelle fuer Fixtures, Teams, Status, Scores, Predictions, Lineups und verfuegbare Advanced-Felder.",
      quality: 93,
    },
    {
      grade: "A",
      title: "Taktikautoren und Coaches",
      text: "Spielverlagerung, Coaches' Voice, gute Beat-Reporter mit belegten Beobachtungen.",
      quality: 90,
    },
    {
      grade: "B",
      title: "Seriöse Ex-Profis",
      text: "Nützlich, wenn Rollen, Drucksituationen oder Kabinenlogik erklärt werden.",
      quality: 72,
    },
    {
      grade: "C",
      title: "TV-Talk und Narrative",
      text: "Nur als Stimmungsbild. Keine Match-Empfehlung ohne Daten- oder Taktikbezug.",
      quality: 34,
    },
  ],
};

const serialized = JSON.stringify(data, null, 2).replace(/<\/script/gi, "<\\/script");
writeFileSync("data.js", `window.WMRadarData = ${serialized};\n`, "utf8");
console.log(
  `Created data.js from ${teams.length} teams, ${groups.length} groups, ${matches.length} matches, ${knockout.length} knockout slots, ${results.matches.length} results, ${postMatchReports.reports.length} post-match reports and ${analystSources.pillars.length} source pillars`,
);
