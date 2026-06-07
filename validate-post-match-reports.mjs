import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

const matches = readJson("data/matches.json");
const reportsBundle = readJson("data/post-match-reports.json");
const results = readJson("data/results.json");

const matchIds = new Set(matches.map((match) => match.id));
const finalResultIds = new Set((results.matches || []).filter((result) => result.status === "final").map((result) => result.matchId));
const metricIds = new Set((reportsBundle.metricDefinitions || []).map((metric) => metric.id));
const requiredFields = reportsBundle.reportTemplate?.requiredFields || [];
const statusValues = new Set(reportsBundle.reportTemplate?.statusValues || []);

const unknownMatches = [];
const missingFields = [];
const invalidMetrics = [];
const missingFinalResults = [];
const warnings = [];
const seen = new Set();
const duplicates = [];

for (const report of reportsBundle.reports || []) {
  const key = report.matchId || "unknown";
  if (seen.has(key)) duplicates.push(key);
  seen.add(key);

  if (!matchIds.has(report.matchId)) unknownMatches.push(key);

  for (const field of requiredFields) {
    if (!(field in report)) missingFields.push(`${key}: ${field}`);
  }

  if (report.status && !statusValues.has(report.status)) {
    missingFields.push(`${key}: ungueltiger Status ${report.status}`);
  }

  for (const metric of report.metrics || []) {
    if (!metricIds.has(metric.id)) invalidMetrics.push(`${key}: unbekannte Metrik ${metric.id}`);
    if (metric.value !== null && metric.value !== undefined && !Number.isFinite(Number(metric.value))) {
      invalidMetrics.push(`${key}: ${metric.id} ohne numerischen Wert`);
    }
  }

  if (report.status !== "draft" && !finalResultIds.has(report.matchId)) {
    missingFinalResults.push(`${key}: Report ist nicht Draft, aber kein finales Ergebnis liegt vor`);
  }
}

if (!(reportsBundle.reports || []).length) {
  warnings.push("Noch keine Post-Match-Reports vorhanden; Dossier nutzt Pre-Match-Blueprints.");
}

const criticalIssues = unknownMatches.length + missingFields.length + invalidMetrics.length + duplicates.length;
const validation = {
  generatedAt: new Date().toISOString(),
  status: criticalIssues ? "critical" : (reportsBundle.reports || []).length ? "ready" : "waiting",
  summary: criticalIssues
    ? "Post-Match-Reports enthalten kritische Strukturprobleme."
    : (reportsBundle.reports || []).length
      ? "Post-Match-Reports sind strukturell plausibel."
      : "Post-Match-Report-Modell ist vorbereitet; echte Reports entstehen nach finalen Ergebnissen.",
  coverage: {
    reports: (reportsBundle.reports || []).length,
    finalResults: finalResultIds.size,
    matchCoverage: Math.round((((reportsBundle.reports || []).length) / matches.length) * 100),
  },
  issues: {
    unknownMatches,
    missingFields,
    invalidMetrics,
    duplicateReports: duplicates,
    missingFinalResults,
    warnings,
  },
};

writeFileSync("data/post-match-validation.json", `${JSON.stringify(validation, null, 2)}\n`, "utf8");
console.log(
  `Validated post-match reports: ${validation.coverage.reports} reports, status ${validation.status}, ${criticalIssues} critical issues`,
);
