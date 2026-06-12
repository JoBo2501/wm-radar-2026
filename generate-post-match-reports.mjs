import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
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

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function getGroupId(match) {
  const groupMatch = match.group?.match(/Gruppe\s+([A-L])/i);
  return groupMatch ? groupMatch[1].toUpperCase() : null;
}

function getPathImpact(match, groups, teams) {
  const groupId = getGroupId(match);
  const group = groups.find((item) => item.id === groupId);
  const matchTeams = match.teams.map((code) => teams.find((team) => team.code === code)).filter(Boolean);
  const teamBoost = matchTeams.some((team) => team.focus) ? 10 : matchTeams.some((team) => team.surprise) ? 6 : 0;
  return clamp((group?.pathRelevance || 54) + teamBoost, 0, 100);
}

function computePreMatchScore(match, preferences, groups, teams) {
  const signal = match.signals;
  const weights = preferences.weights;
  const pathImpact = getPathImpact(match, groups, teams);
  const parts = [
    [signal.importance, weights.importance],
    [signal.tactical, weights.tactical],
    [signal.entertainment, weights.entertainment],
    [signal.focus, weights.focus],
    [signal.surprise, weights.surprise],
    [signal.time, weights.time],
    [pathImpact, weights.path],
  ];
  const weightedTotal = parts.reduce((sum, [value, weight]) => sum + value * weight, 0);
  const totalWeight = parts.reduce((sum, [, weight]) => sum + weight, 0);
  return clamp(Math.round(weightedTotal / totalWeight - signal.lowValueRisk * 0.18), 0, 100);
}

function getRecommendation(score) {
  if (score >= 80) return "live";
  if (score >= 70) return "analysis";
  if (score >= 52) return "highlights";
  return "skip";
}

function getDriver(match, pathImpact) {
  return [
    ["Taktik", match.signals.tactical],
    ["Fokus", match.signals.focus],
    ["Upset", match.signals.surprise],
    ["Bedeutung", match.signals.importance],
    ["Uhrzeit", match.signals.time],
    ["Finalweg", pathImpact],
  ].sort((a, b) => b[1] - a[1])[0][0];
}

function getResultVerdict(result, homeCode, awayCode) {
  const homeGoals = Number(result.homeGoals);
  const awayGoals = Number(result.awayGoals);
  if (homeGoals === awayGoals) return `Remis ${homeGoals}:${awayGoals}`;
  const winner = homeGoals > awayGoals ? homeCode : awayCode;
  return `${winner} gewinnt ${homeGoals}:${awayGoals}`;
}

function getPostMatchScore(preMatchScore, result, match) {
  const totalGoals = Number(result.homeGoals) + Number(result.awayGoals);
  const goalDelta = Math.abs(Number(result.homeGoals) - Number(result.awayGoals));
  const goalBoost = totalGoals >= 4 ? 8 : totalGoals >= 2 ? 4 : -4;
  const tensionBoost = goalDelta <= 1 ? 6 : goalDelta >= 3 ? -3 : 2;
  const tacticalBoost = match.signals.tactical >= 70 ? 4 : 0;
  return clamp(Math.round(preMatchScore + goalBoost + tensionBoost + tacticalBoost), 0, 100);
}

function getAuditVerdict(preRecommendation, postMatchScore) {
  const postRecommendation = getRecommendation(postMatchScore);
  if (preRecommendation === postRecommendation) return "plausibel";
  if (["live", "analysis"].includes(preRecommendation) && ["live", "analysis"].includes(postRecommendation)) return "Tendenz plausibel";
  return "neu kalibrieren";
}

function createMetrics(match, result, preMatchScore, postMatchScore) {
  return [];
}

function createReport(match, result, context) {
  const [homeCode, awayCode] = match.teams;
  const pathImpact = getPathImpact(match, context.groups, context.teams);
  const driver = getDriver(match, pathImpact);
  const preMatchScore = computePreMatchScore(match, context.preferences, context.groups, context.teams);
  const preRecommendation = getRecommendation(preMatchScore);
  const postMatchScore = getPostMatchScore(preMatchScore, result, match);
  const verdict = getAuditVerdict(preRecommendation, postMatchScore);
  const resultLine = getResultVerdict(result, homeCode, awayCode);

  return {
    matchId: match.id,
    status: "draft",
    generatedAt: new Date().toISOString(),
    generatedBy: "generate-post-match-reports.mjs",
    result: {
      homeGoals: Number(result.homeGoals),
      awayGoals: Number(result.awayGoals),
      resultLine,
      source: result.source || "unknown",
      updatedAt: result.updatedAt || null,
    },
    summary: `${resultLine}. Ergebnis ist synchronisiert; Detailmetriken wie xG, Druckphasen und Eventdaten fehlen noch.`,
    metrics: createMetrics(match, result, preMatchScore, postMatchScore),
    patterns: [
      {
        label: "Chancenqualität prüfen",
        note: "Ohne xG und Schussprofil ist noch nicht seriös klar, ob das Ergebnis die Spielqualität vollständig abbildet.",
      },
      {
        label: "Spielphase finden",
        note: "Review muss klären, welche Phase das Spiel entschieden hat: frühe Kontrolle, Standards, Umschalten oder Schlussphase.",
      },
      {
        label: "Empfehlung kalibrieren",
        note: "Die Pre-Match-Empfehlung wird erst nach Ergebnis plus Detaildaten endgültig bewertet.",
      },
    ],
    recommendationAudit: {
      preMatchScore,
      postMatchScore,
      preRecommendation,
      verdict,
      learning:
        verdict === "neu kalibrieren"
          ? "Pre-Match-Signale und Ergebniswirkung lagen auseinander; Gewichtung oder Quellenlage prüfen."
          : "Das Ergebnis widerspricht der Pre-Match-Empfehlung nicht klar; Detaildaten müssen die Einordnung noch bestätigen.",
    },
    analystNotes: [
      "Draft automatisch aus finalem Ergebnis und Pre-Match-Signalen erzeugt.",
      "Keine künstlichen Detailmetriken anzeigen, bis Providerdaten oder Videoanalyse vorliegen.",
    ],
  };
}

const matches = readJson("data/matches.json");
const groups = readJson("data/groups.json");
const teams = readJson("data/teams.json");
const preferences = readJson("data/preferences.json");
const results = readJson(getArg("results") || "data/results.json");
const reportsBundle = readJson("data/post-match-reports.json");
const dryRun = hasFlag("dry-run");

const finalResults = (results.matches || []).filter((result) => result.status === "final" && result.matchId);
const existingReports = reportsBundle.reports || [];
const manualReports = existingReports.filter((report) => report.status && report.status !== "draft");
const manualIds = new Set(manualReports.map((report) => report.matchId));
const reports = [...manualReports];

for (const result of finalResults) {
  if (manualIds.has(result.matchId)) continue;
  const match = matches.find((candidate) => candidate.id === result.matchId);
  if (!match) continue;
  reports.push(createReport(match, result, { groups, teams, preferences }));
}

const nextBundle = {
  ...reportsBundle,
  status: reports.length ? "drafts-generated" : "preTournament",
  generatedAt: new Date().toISOString(),
  reports: reports.sort((a, b) => a.matchId.localeCompare(b.matchId)),
};

if (dryRun) {
  console.log(JSON.stringify({ reports: reports.length, finalResults: finalResults.length, sample: reports[0] || null }, null, 2));
} else {
  writeJson("data/post-match-reports.json", nextBundle);
  console.log(`Generated ${reports.length} post-match reports from ${finalResults.length} final results`);
}
