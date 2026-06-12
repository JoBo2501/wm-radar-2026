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

const metricDefinitions = [
  {
    id: "shotVolume",
    label: "Schussbild",
    providerTarget: "SportMonks Statistics: shots-total, shots-on-target, shots-insidebox",
    meaning: "Zeigt, ob der Endstand durch Abschlussvolumen und Strafraumaktionen gestuetzt wird.",
  },
  {
    id: "territory",
    label: "Territorium",
    providerTarget: "SportMonks Statistics: dangerous-attacks, attacks",
    meaning: "Ordnet ein, wer mehr gefaehrliche Zonen erreicht hat.",
  },
  {
    id: "possession",
    label: "Ballbesitz und Passspiel",
    providerTarget: "SportMonks Statistics: ball-possession, passes, successful-passes-percentage",
    meaning: "Trennt Ballkontrolle von Ergebniswirkung.",
  },
  {
    id: "chanceQualityProxy",
    label: "Grosschancen",
    providerTarget: "SportMonks Statistics: big-chances-created, big-chances-missed",
    meaning: "Nutzt Grosschancen als xG-nahe Ersatzinformation, solange kein xGFixture geliefert wird.",
  },
  {
    id: "pressure",
    label: "Pressure Index",
    providerTarget: "SportMonks Pressure",
    meaning: "Verdichtet Druckphasen, ohne daraus PPDA oder Field Tilt zu behaupten.",
  },
  {
    id: "discipline",
    label: "Disziplin",
    providerTarget: "SportMonks Statistics + Events: yellowcards, redcards",
    meaning: "Markiert Karten und Unterzahl als moegliche Spielkipper.",
  },
];

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

function getStat(postMatch, side, key) {
  const value = postMatch?.statistics?.[side]?.[key];
  return Number.isFinite(Number(value)) ? Number(value) : null;
}

function formatRatio(homeValue, awayValue, unit = "") {
  const suffix = unit ? ` ${unit}` : "";
  return `${homeValue}${suffix}:${awayValue}${suffix}`;
}

function metricAdvantage(homeValue, awayValue) {
  const total = Math.abs(homeValue) + Math.abs(awayValue);
  if (!total) return 50;
  return clamp(Math.round((Math.max(homeValue, awayValue) / total) * 100), 0, 100);
}

function getMetricWinner(homeValue, awayValue) {
  if (homeValue === awayValue) return "even";
  return homeValue > awayValue ? "home" : "away";
}

function createComparisonMetric(id, label, homeValue, awayValue, note, unit = "") {
  if (!Number.isFinite(homeValue) || !Number.isFinite(awayValue)) return null;
  return {
    id,
    label,
    status: "provider-synced",
    value: metricAdvantage(homeValue, awayValue),
    homeValue,
    awayValue,
    unit,
    winner: getMetricWinner(homeValue, awayValue),
    note,
  };
}

function createMetrics(match, result) {
  const postMatch = result.postMatch;
  if (!postMatch?.statistics) return [];

  const metrics = [
    createComparisonMetric(
      "shotVolume",
      "Schussbild",
      getStat(postMatch, "home", "shotsTotal"),
      getStat(postMatch, "away", "shotsTotal"),
      `${formatRatio(getStat(postMatch, "home", "shotsOnTarget") ?? 0, getStat(postMatch, "away", "shotsOnTarget") ?? 0)} aufs Tor; ${formatRatio(
        getStat(postMatch, "home", "shotsInsideBox") ?? 0,
        getStat(postMatch, "away", "shotsInsideBox") ?? 0,
      )} im Strafraum.`,
    ),
    createComparisonMetric(
      "territory",
      "Territorium",
      getStat(postMatch, "home", "dangerousAttacks"),
      getStat(postMatch, "away", "dangerousAttacks"),
      `${formatRatio(getStat(postMatch, "home", "attacks") ?? 0, getStat(postMatch, "away", "attacks") ?? 0)} Angriffe insgesamt.`,
    ),
    createComparisonMetric(
      "possession",
      "Ballbesitz",
      getStat(postMatch, "home", "possession"),
      getStat(postMatch, "away", "possession"),
      `${formatRatio(getStat(postMatch, "home", "passes") ?? 0, getStat(postMatch, "away", "passes") ?? 0)} Paesse; ${formatRatio(
        getStat(postMatch, "home", "passAccuracy") ?? 0,
        getStat(postMatch, "away", "passAccuracy") ?? 0,
        "%",
      )} Passquote.`,
      "%",
    ),
    createComparisonMetric(
      "chanceQualityProxy",
      "Grosschancen",
      getStat(postMatch, "home", "bigChancesCreated"),
      getStat(postMatch, "away", "bigChancesCreated"),
      `${formatRatio(getStat(postMatch, "home", "bigChancesMissed") ?? 0, getStat(postMatch, "away", "bigChancesMissed") ?? 0)} vergebene Grosschancen.`,
    ),
  ].filter(Boolean);

  const pressureHome = postMatch.pressure?.home?.average;
  const pressureAway = postMatch.pressure?.away?.average;
  const pressureMetric = createComparisonMetric(
    "pressure",
    "Pressure Index",
    Number(pressureHome),
    Number(pressureAway),
    `Maximalwerte ${postMatch.pressure?.home?.max ?? "offen"}:${postMatch.pressure?.away?.max ?? "offen"}; hohe Druckminuten ${
      postMatch.pressure?.home?.highMinutes ?? 0
    }:${postMatch.pressure?.away?.highMinutes ?? 0}.`,
  );
  if (pressureMetric) metrics.push(pressureMetric);

  const disciplineMetric = createComparisonMetric(
    "discipline",
    "Disziplin",
    (getStat(postMatch, "home", "yellowCards") ?? 0) + (getStat(postMatch, "home", "redCards") ?? 0) * 2,
    (getStat(postMatch, "away", "yellowCards") ?? 0) + (getStat(postMatch, "away", "redCards") ?? 0) * 2,
    `Gelb ${formatRatio(getStat(postMatch, "home", "yellowCards") ?? 0, getStat(postMatch, "away", "yellowCards") ?? 0)}, Rot ${formatRatio(
      getStat(postMatch, "home", "redCards") ?? 0,
      getStat(postMatch, "away", "redCards") ?? 0,
    )}.`,
  );
  if (disciplineMetric) metrics.push({ ...disciplineMetric, lowerIsBetter: true });

  return metrics;
}

function getTeamLabel(side, homeCode, awayCode) {
  return side === "home" ? homeCode : side === "away" ? awayCode : "beide";
}

function getMetricLine(metric, homeCode, awayCode) {
  const winner = getTeamLabel(metric.winner, homeCode, awayCode);
  if (metric.winner === "even") return `${metric.label}: ausgeglichen (${formatRatio(metric.homeValue, metric.awayValue, metric.unit)}).`;
  return `${metric.label}: Vorteil ${winner} (${formatRatio(metric.homeValue, metric.awayValue, metric.unit)}).`;
}

function getGoals(postMatch) {
  return (postMatch?.events || []).filter((event) => Number(event.typeId) === 14 || event.type === "GOAL");
}

function getCards(postMatch) {
  return (postMatch?.events || []).filter((event) => [19, 20, 1697].includes(Number(event.typeId)));
}

function formatMinute(event) {
  if (!event.minute) return "";
  return `${event.minute}${event.extraMinute ? `+${event.extraMinute}` : ""}.`;
}

function createEventTimeline(postMatch) {
  const events = [...getGoals(postMatch), ...getCards(postMatch)]
    .sort((a, b) => Number(a.minute || 0) - Number(b.minute || 0))
    .slice(0, 8);
  return events.map((event) => ({
    minute: formatMinute(event),
    type: Number(event.typeId) === 14 ? "Tor" : Number(event.typeId) === 20 ? "Rot" : Number(event.typeId) === 19 ? "Gelb" : "VAR",
    player: event.player || "Unbekannt",
    relatedPlayer: event.relatedPlayer || null,
    result: event.result || null,
    info: event.info || null,
  }));
}

function createPatterns(metrics, postMatch, homeCode, awayCode) {
  if (!metrics.length) {
    return [
      {
        label: "Daten fehlen",
        note: "Sportmonks liefert fuer dieses Spiel noch keine belastbaren Analysewerte; nur der Endstand ist sicher.",
      },
    ];
  }

  const goals = getGoals(postMatch);
  const shotMetric = metrics.find((metric) => metric.id === "shotVolume");
  const territoryMetric = metrics.find((metric) => metric.id === "territory");
  const pressureMetric = metrics.find((metric) => metric.id === "pressure");
  const disciplineMetric = metrics.find((metric) => metric.id === "discipline");
  const patterns = [];

  if (goals.length) {
    const firstGoal = goals[0];
    const lastGoal = goals[goals.length - 1];
    patterns.push({
      label: "Spielkippmoment",
      note:
        goals.length === 1
          ? `${formatMinute(firstGoal)} ${firstGoal.player} setzt den einzigen Treffer.`
          : `${formatMinute(firstGoal)} ${firstGoal.player} eröffnet, ${formatMinute(lastGoal)} ${lastGoal.player} setzt den letzten Treffer.`,
    });
  }

  if (shotMetric) {
    patterns.push({
      label: "Chancenbild",
      note: getMetricLine(shotMetric, homeCode, awayCode),
    });
  }

  if (territoryMetric || pressureMetric) {
    patterns.push({
      label: "Druck und Raum",
      note: [territoryMetric && getMetricLine(territoryMetric, homeCode, awayCode), pressureMetric && getMetricLine(pressureMetric, homeCode, awayCode)]
        .filter(Boolean)
        .join(" "),
    });
  }

  if (disciplineMetric && (disciplineMetric.homeValue || disciplineMetric.awayValue)) {
    patterns.push({
      label: "Disziplin",
      note: disciplineMetric.note,
    });
  }

  return patterns.slice(0, 4);
}

function createSummary(resultLine, metrics, postMatch, homeCode, awayCode) {
  const shotMetric = metrics.find((metric) => metric.id === "shotVolume");
  const territoryMetric = metrics.find((metric) => metric.id === "territory");
  const goals = getGoals(postMatch);
  const goalLine = goals.length
    ? `Tore: ${goals.map((event) => `${formatMinute(event)} ${event.player}${event.result ? ` (${event.result})` : ""}`).join(", ")}.`
    : "Tordetails fehlen noch.";
  const metricLine = [shotMetric && getMetricLine(shotMetric, homeCode, awayCode), territoryMetric && getMetricLine(territoryMetric, homeCode, awayCode)]
    .filter(Boolean)
    .join(" ");
  return `${resultLine}. ${metricLine || "Provider-Detaildaten sind noch unvollstaendig."} ${goalLine}`;
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
  const metrics = createMetrics(match, result);
  const timeline = createEventTimeline(result.postMatch);
  const patterns = createPatterns(metrics, result.postMatch, homeCode, awayCode);
  const hasProviderAnalysis = Boolean(result.postMatch?.coverage?.statistics || result.postMatch?.coverage?.events || result.postMatch?.coverage?.pressure);

  return {
    matchId: match.id,
    status: hasProviderAnalysis ? "provider-synced" : "draft",
    generatedAt: new Date().toISOString(),
    generatedBy: "generate-post-match-reports.mjs",
    result: {
      homeGoals: Number(result.homeGoals),
      awayGoals: Number(result.awayGoals),
      resultLine,
      source: result.source || "unknown",
      updatedAt: result.updatedAt || null,
    },
    summary: createSummary(resultLine, metrics, result.postMatch, homeCode, awayCode),
    metrics,
    timeline,
    patterns,
    dataCoverage: result.postMatch?.coverage || { statistics: false, events: false, pressure: false, xg: false },
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
      hasProviderAnalysis
        ? "Aus Sportmonks-Statistiken, Events und Pressure automatisch verdichtet."
        : "Draft automatisch aus finalem Ergebnis und Pre-Match-Signalen erzeugt.",
      result.postMatch?.coverage?.xg
        ? "xG wurde vom Provider geliefert."
        : "xG wird nicht angezeigt, weil Sportmonks fuer dieses Spiel kein xGFixture liefert.",
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
  metricDefinitions,
  reports: reports.sort((a, b) => a.matchId.localeCompare(b.matchId)),
};

if (dryRun) {
  console.log(JSON.stringify({ reports: reports.length, finalResults: finalResults.length, sample: reports[0] || null }, null, 2));
} else {
  writeJson("data/post-match-reports.json", nextBundle);
  console.log(`Generated ${reports.length} post-match reports from ${finalResults.length} final results`);
}
