const data = window.WMRadarData;
const {
  analystSources,
  categoryFilters,
  dataStatus,
  filters,
  focusTeams,
  groups,
  keyFigures,
  knockout,
  matches,
  metadata,
  postMatchReports,
  postMatchValidation,
  preferences,
  providerTests,
  providerMapping,
  resultValidation,
  results,
  scheduleValidation,
  sources,
  surpriseTeams,
  teamProfiles,
  teams,
} = data;

const teamByCode = new Map(teams.map((team) => [team.code, team]));
const profileByCode = new Map(teamProfiles.map((profile) => [profile.code, profile]));
const keyFiguresByTeam = new Map(keyFigures.map((entry) => [entry.team, entry]));
const providerMappingByMatchId = new Map((providerMapping?.mappings || []).map((mapping) => [mapping.matchId, mapping]));
const groupById = new Map(groups.map((group) => [group.id, group]));
const groupByTeamCode = new Map(groups.flatMap((group) => group.teams.map((code) => [code, group])));
const stateLabels = {
  live: "Pflichtspiel",
  analysis: "Analysewürdig",
  highlights: "Highlights reichen",
  skip: "Skip",
};

let activeFilter = "today";
let activeCategory = "all";
let weights = { ...preferences.weights };
let selectedMatchId = null;

const focusTeamsEl = document.querySelector("#focusTeams");
const heroMissionEl = document.querySelector("#heroMission");
const heroStatusRailEl = document.querySelector("#heroStatusRail");
const orbitSignalEl = document.querySelector("#orbitSignal");
const heroSignalStackEl = document.querySelector("#heroSignalStack");
const controlStatsEl = document.querySelector("#controlStats");
const summaryGridEl = document.querySelector("#summaryGrid");
const summaryLineEl = document.querySelector("#summaryLine");
const filtersEl = document.querySelector("#filters");
const categoryFiltersEl = document.querySelector("#categoryFilters");
const scoreControlsEl = document.querySelector("#scoreControls");
const activeDateChipEl = document.querySelector("#activeDateChip");
const dailyBriefingTextEl = document.querySelector("#dailyBriefingText");
const commandMetricsEl = document.querySelector("#commandMetrics");
const topMatchCardEl = document.querySelector("#topMatchCard");
const watchPlanCountEl = document.querySelector("#watchPlanCount");
const watchPlanEl = document.querySelector("#watchPlan");
const morningCountEl = document.querySelector("#morningCount");
const morningQueueEl = document.querySelector("#morningQueue");
const matchListEl = document.querySelector("#matchList");
const dossierTitleEl = document.querySelector("#dossierTitle");
const dossierScoreEl = document.querySelector("#dossierScore");
const dossierMetaEl = document.querySelector("#dossierMeta");
const pitchModeEl = document.querySelector("#pitchMode");
const insightGridEl = document.querySelector("#insightGrid");
const dataSnapshotEl = document.querySelector("#dataSnapshot");
const dataStatusGridEl = document.querySelector("#dataStatusGrid");
const providerTestGridEl = document.querySelector("#providerTestGrid");
const scheduleValidatorEl = document.querySelector("#scheduleValidator");
const resultValidatorEl = document.querySelector("#resultValidator");
const groupPathGridEl = document.querySelector("#groupPathGrid");
const bracketSummaryEl = document.querySelector("#bracketSummary");
const bracketGridEl = document.querySelector("#bracketGrid");
const standingsSummaryEl = document.querySelector("#standingsSummary");
const standingsGridEl = document.querySelector("#standingsGrid");
const teamLabGridEl = document.querySelector("#teamLabGrid");
const keyFiguresGridEl = document.querySelector("#keyFiguresGrid");
const surpriseRadarEl = document.querySelector("#surpriseRadar");
const sourceStackEl = document.querySelector("#sourceStack");
const analystPillarsEl = document.querySelector("#analystPillars");
const analystVoicesEl = document.querySelector("#analystVoices");
const sourceAutomationEl = document.querySelector("#sourceAutomation");
const sourceAccessEl = document.querySelector("#sourceAccess");
const synthesisModelEl = document.querySelector("#synthesisModel");
const sourceRulesEl = document.querySelector("#sourceRules");
const aiModelCardEl = document.querySelector("#aiModelCard");
const spoilerToggle = document.querySelector("#spoilerToggle");

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function addDays(dateKey, days) {
  const date = new Date(`${dateKey}T12:00:00+02:00`);
  date.setDate(date.getDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDate(dateKey) {
  return new Intl.DateTimeFormat("de-DE", { day: "2-digit", month: "short" }).format(
    new Date(`${dateKey}T12:00:00+02:00`),
  );
}

function getDateKey(match) {
  return match.kickoffGermany.slice(0, 10);
}

function getGermanyTime(match) {
  return match.kickoffGermany.slice(11, 16);
}

function getHour(match) {
  return Number(match.kickoffGermany.slice(11, 13));
}

function isNightMatch(match) {
  const hour = getHour(match);
  return hour < 6 || hour >= 23;
}

function isTodayViewingWindow(match, dateKey) {
  const nextDateKey = addDays(dateKey, 1);
  return match.dateKey === dateKey || (match.dateKey === nextDateKey && getHour(match) < 6);
}

function isTomorrowViewingWindow(match, dateKey) {
  const nextDateKey = addDays(dateKey, 1);
  const afterNextDateKey = addDays(dateKey, 2);
  return (
    (match.dateKey === nextDateKey && getHour(match) >= 6) ||
    (match.dateKey === afterNextDateKey && getHour(match) < 6)
  );
}

function getMatchTeams(match) {
  return match.teams.map((code) => teamByCode.get(code) || { code, name: code, flag: "" });
}

function getGroupId(match) {
  const groupMatch = match.group?.match(/Gruppe\s+([A-L])/i);
  if (groupMatch) return groupMatch[1].toUpperCase();
  return groupByTeamCode.get(match.teams[0])?.id || null;
}

function getGroupForMatch(match) {
  const groupId = getGroupId(match);
  return groupId ? groupById.get(groupId) : null;
}

function getPathImpact(match) {
  const group = getGroupForMatch(match);
  const matchTeams = getMatchTeams(match);
  if (!group) {
    return matchTeams.some((team) => team.focus) ? 74 : 44;
  }

  const teamBoost = matchTeams.some((team) => team.focus) ? 10 : matchTeams.some((team) => team.surprise) ? 6 : 0;
  return clamp(group.pathRelevance + teamBoost, 0, 100);
}

function isPathCommandMatch(match) {
  const hasSurpriseTeam = match.matchTeams.some((team) => team.surprise);
  const hasStrongContext = match.pathImpact >= 93 && match.score >= 68;
  const hasSurprisePath = hasSurpriseTeam && match.score >= 65;
  return match.hasFocusTeam || hasSurprisePath || hasStrongContext;
}

function computeScore(match) {
  const signal = match.signals;
  const pathImpact = getPathImpact(match);
  const providerSignal = providerMappingByMatchId.get(match.id);
  const predictionImpact = providerSignal?.predictionImpact || 0;
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
  const score = weightedTotal / totalWeight - signal.lowValueRisk * 0.18 + predictionImpact;

  return clamp(Math.round(score), 0, 100);
}

function getRecommendation(score) {
  if (score >= 80) return "live";
  if (score >= 70) return "analysis";
  if (score >= 52) return "highlights";
  return "skip";
}

function getDriver(match) {
  const signal = match.signals;
  const drivers = [
    ["Taktik", signal.tactical],
    ["Favorit", signal.focus],
    ["Upset", signal.surprise],
    ["Bedeutung", signal.importance],
    ["Uhrzeit", signal.time],
    ["Weiterkommen", getPathImpact(match)],
    ["Prediction", providerMappingByMatchId.get(match.id)?.predictionImpact ? 62 : 0],
  ].sort((a, b) => b[1] - a[1]);

  return drivers[0][0];
}

function getScoredMatches() {
  return matches
    .map((match) => {
      const score = computeScore(match);
      const category = getRecommendation(score);
      const matchTeams = getMatchTeams(match);
      const dateKey = getDateKey(match);

      return {
        ...match,
        category,
        score,
        state: stateLabels[category],
        dateKey,
        displayDate: formatDate(dateKey),
        germanyTime: getGermanyTime(match),
        matchTeams,
        hasFocusTeam: matchTeams.some((team) => team.focus),
        groupModel: getGroupForMatch(match),
        pathImpact: getPathImpact(match),
        providerSignal: providerMappingByMatchId.get(match.id) || null,
        driver: getDriver(match),
      };
    })
    .sort((a, b) => b.score - a.score || a.kickoffGermany.localeCompare(b.kickoffGermany));
}

function getTeamStrength(code) {
  const team = teamByCode.get(code);
  const profile = profileByCode.get(code);
  const group = groupByTeamCode.get(code);
  const confederationBase = {
    CONMEBOL: 72,
    UEFA: 70,
    CAF: 59,
    CONCACAF: 56,
    AFC: 54,
    OFC: 43,
  };
  const hostBoost = ["CAN", "MEX", "USA"].includes(code) ? 5 : 0;
  const codeTiebreak = [...code].reduce((sum, letter) => sum + letter.charCodeAt(0), 0) % 5;
  const base = Math.max(team?.watchPriority || 0, confederationBase[team?.confederation] || 54);
  const focusBoost = team?.focus ? 8 : 0;
  const surpriseBoost = team?.surprise ? 5 : 0;
  const confidenceBoost = profile?.confidence ? (profile.confidence - 55) * 0.45 : 0;
  const pathBoost = group?.pathRelevance ? (group.pathRelevance - 58) * 0.08 : 0;

  return clamp(base + hostBoost + focusBoost + surpriseBoost + confidenceBoost + pathBoost + codeTiebreak, 35, 108);
}

function createStandingRow(code) {
  const team = teamByCode.get(code) || { code, name: code, flag: "" };
  return {
    code,
    team,
    played: 0,
    wins: 0,
    draws: 0,
    losses: 0,
    goalsFor: 0,
    goalsAgainst: 0,
    goalDifference: 0,
    points: 0,
    projectedPoints: 0,
    projectedGoalDifference: 0,
    strength: getTeamStrength(code),
    mode: "projected",
  };
}

function getResultMap() {
  return new Map((results?.matches || []).map((result) => [result.matchId, result]));
}

function addActualResult(homeRow, awayRow, homeGoals, awayGoals) {
  homeRow.played += 1;
  awayRow.played += 1;
  homeRow.goalsFor += homeGoals;
  homeRow.goalsAgainst += awayGoals;
  awayRow.goalsFor += awayGoals;
  awayRow.goalsAgainst += homeGoals;

  if (homeGoals > awayGoals) {
    homeRow.wins += 1;
    awayRow.losses += 1;
    homeRow.points += 3;
  } else if (awayGoals > homeGoals) {
    awayRow.wins += 1;
    homeRow.losses += 1;
    awayRow.points += 3;
  } else {
    homeRow.draws += 1;
    awayRow.draws += 1;
    homeRow.points += 1;
    awayRow.points += 1;
  }

  homeRow.mode = "actual";
  awayRow.mode = "actual";
}

function addProjectedResult(homeRow, awayRow) {
  const difference = homeRow.strength - awayRow.strength;
  const homeWin = clamp(0.42 + difference / 180, 0.18, 0.68);
  const awayWin = clamp(0.42 - difference / 180, 0.18, 0.68);
  const draw = clamp(1 - homeWin - awayWin, 0.22, 0.32);
  const homePoints = 3 * homeWin + draw;
  const awayPoints = 3 * awayWin + draw;
  const goalSwing = difference / 42;

  homeRow.projectedPoints += homePoints;
  awayRow.projectedPoints += awayPoints;
  homeRow.projectedGoalDifference += goalSwing;
  awayRow.projectedGoalDifference -= goalSwing;
  homeRow.goalsFor += 1.35 + Math.max(0, goalSwing) * 0.35;
  awayRow.goalsFor += 1.35 + Math.max(0, -goalSwing) * 0.35;
  homeRow.goalsAgainst += 1.35 + Math.max(0, -goalSwing) * 0.35;
  awayRow.goalsAgainst += 1.35 + Math.max(0, goalSwing) * 0.35;
}

function finalizeStandingRow(row) {
  const totalPoints = row.points + row.projectedPoints;
  const totalGoalDifference = row.goalsFor - row.goalsAgainst;
  return {
    ...row,
    pointsValue: totalPoints,
    goalDifference: totalGoalDifference,
    displayPoints: row.mode === "actual" ? String(row.points) : totalPoints.toFixed(1),
    displayGoalDifference: totalGoalDifference >= 0 ? `+${totalGoalDifference.toFixed(1)}` : totalGoalDifference.toFixed(1),
  };
}

function getGroupStandings() {
  const resultMap = getResultMap();

  return groups.map((group) => {
    const rows = new Map(group.teams.map((code) => [code, createStandingRow(code)]));
    const groupMatches = matches.filter((match) => getGroupId(match) === group.id);

    for (const match of groupMatches) {
      const [homeCode, awayCode] = match.teams;
      const homeRow = rows.get(homeCode);
      const awayRow = rows.get(awayCode);
      const result = resultMap.get(match.id);

      if (result?.status === "final" && Number.isFinite(result.homeGoals) && Number.isFinite(result.awayGoals)) {
        addActualResult(homeRow, awayRow, result.homeGoals, result.awayGoals);
      } else {
        addProjectedResult(homeRow, awayRow);
      }
    }

    const table = [...rows.values()].map(finalizeStandingRow).sort((a, b) => {
      return (
        b.pointsValue - a.pointsValue ||
        b.goalDifference - a.goalDifference ||
        b.goalsFor - a.goalsFor ||
        b.strength - a.strength ||
        a.code.localeCompare(b.code)
      );
    });

    return {
      group,
      table,
      hasActualResults: table.some((row) => row.mode === "actual"),
      topMatch: getScoredMatches()
        .filter((match) => getGroupId(match) === group.id)
        .sort((a, b) => b.score - a.score)[0],
    };
  });
}

function getThirdPlaceProjection(groupStandings) {
  return groupStandings
    .map(({ group, table }) => ({ group: group.id, ...table[2] }))
    .sort((a, b) => b.pointsValue - a.pointsValue || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor)
    .map((row, index) => ({ ...row, thirdRank: index + 1, advances: index < 8 }));
}

function createQualificationModel() {
  const groupStandings = getGroupStandings();
  const thirdPlaceProjection = getThirdPlaceProjection(groupStandings);
  const groupMap = new Map(groupStandings.map((standing) => [standing.group.id, standing]));
  const thirdMap = new Map(thirdPlaceProjection.map((row) => [row.group, row]));

  return {
    groupStandings,
    thirdPlaceProjection,
    groupMap,
    thirdMap,
  };
}

function resolveDirectSlot(slot, qualificationModel) {
  const match = slot.match(/^([12])([A-L])$/);
  if (!match) return null;

  const rank = Number(match[1]);
  const group = qualificationModel.groupMap.get(match[2]);
  const row = group?.table[rank - 1];
  if (!row) return null;

  return {
    slot,
    type: rank === 1 ? "Gruppensieger" : "Gruppenzweiter",
    group: match[2],
    confidence: "projected",
    row,
  };
}

function resolveThirdPlaceSlot(slot, qualificationModel) {
  const match = slot.match(/^3([A-L]+)$/);
  if (!match) return null;

  const allowedGroups = [...match[1]];
  const candidates = allowedGroups
    .map((groupId) => qualificationModel.thirdMap.get(groupId))
    .filter(Boolean)
    .sort((a, b) => {
      if (a.advances !== b.advances) return Number(b.advances) - Number(a.advances);
      return b.pointsValue - a.pointsValue || b.goalDifference - a.goalDifference || b.goalsFor - a.goalsFor;
    });
  const row = candidates[0];
  if (!row) return null;

  return {
    slot,
    type: row.advances ? `Dritter #${row.thirdRank}` : `Dritter #${row.thirdRank} Risiko`,
    group: row.group,
    allowedGroups,
    confidence: row.advances ? "projected" : "risk",
    row,
  };
}

function resolveProgressionSlot(slot, qualificationModel, resolvedMatches) {
  const match = slot.match(/^([WL])(\d+)$/);
  if (!match) return null;

  const source = resolvedMatches.get(Number(match[2]));
  const isWinner = match[1] === "W";
  const sourceRows = source?.resolvedSlots.map((resolved) => resolved.row).filter(Boolean) || [];
  if (!sourceRows.length) {
    return {
      slot,
      type: isWinner ? "Sieger offen" : "Verlierer offen",
      confidence: "pending",
      row: null,
    };
  }

  const sortedRows = sourceRows.slice().sort((a, b) => b.strength - a.strength || b.pointsValue - a.pointsValue);
  const row = isWinner ? sortedRows[0] : sortedRows.at(-1);

  return {
    slot,
    type: isWinner ? `Sieger M${match[2]}` : `Verlierer M${match[2]}`,
    confidence: "cascade",
    row,
  };
}

function resolveSlot(slot, qualificationModel, resolvedMatches) {
  return (
    resolveDirectSlot(slot, qualificationModel) ||
    resolveThirdPlaceSlot(slot, qualificationModel) ||
    resolveProgressionSlot(slot, qualificationModel, resolvedMatches) || {
      slot,
      type: "offen",
      confidence: "pending",
      row: null,
    }
  );
}

function getResolvedKnockout() {
  const qualificationModel = createQualificationModel();
  const resolvedMatches = new Map();

  const resolved = knockout
    .slice()
    .sort((a, b) => a.matchNumber - b.matchNumber)
    .map((match) => {
      const resolvedSlots = match.slots.map((slot) => resolveSlot(slot, qualificationModel, resolvedMatches));
      const resolvedMatch = { ...match, resolvedSlots };
      resolvedMatches.set(match.matchNumber, resolvedMatch);
      return resolvedMatch;
    });

  return {
    matches: resolved,
    qualificationModel,
  };
}

function getTodayCommandMatches() {
  return getScoredMatches()
    .filter((match) => isTodayViewingWindow(match, preferences.baseDate))
    .sort((a, b) => getViewingOrder(a) - getViewingOrder(b));
}

function getViewingOrder(match) {
  const dateOffset = match.dateKey === preferences.baseDate ? 0 : 24 * 60;
  const [hours, minutes] = match.germanyTime.split(":").map(Number);
  return dateOffset + hours * 60 + minutes;
}

function getBaseFilteredMatches(scoredMatches) {
  const today = preferences.baseDate;
  const tomorrow = addDays(today, 1);

  if (activeFilter === "today") return scoredMatches.filter((match) => isTodayViewingWindow(match, today));
  if (activeFilter === "tomorrow") return scoredMatches.filter((match) => isTomorrowViewingWindow(match, today));
  if (activeFilter === "focus") return scoredMatches.filter((match) => match.hasFocusTeam);
  if (activeFilter === "path") return scoredMatches.filter(isPathCommandMatch);
  if (activeFilter === "night") {
    return scoredMatches.filter((match) => {
      const hour = getHour(match);
      return hour < 6 || hour >= 23;
    });
  }
  if (activeFilter === "low-value") {
    return scoredMatches.filter((match) => match.category === "skip" || match.signals.lowValueRisk >= 35);
  }

  return scoredMatches;
}

function getVisibleMatches() {
  const baseMatches = getBaseFilteredMatches(getScoredMatches());
  if (activeCategory === "all") return baseMatches;
  return baseMatches.filter((match) => match.category === activeCategory);
}

function renderFocusTeams() {
  focusTeamsEl.innerHTML = focusTeams
    .map(
      (team) => `
        <span class="team-chip" title="${team.style}">
          ${renderFlag(team)}
          ${team.code}
        </span>
      `,
    )
    .join("");
}

function renderControlStats() {
  const scoredMatches = getScoredMatches();
  const liveCount = scoredMatches.filter((match) => match.category === "live").length;
  const skipCount = scoredMatches.filter((match) => match.category === "skip").length;
  const topScore = Math.max(...scoredMatches.map((match) => match.score));
  const dailyMatches = getTodayCommandMatches();
  const topMatch = [...dailyMatches].sort((a, b) => b.score - a.score)[0] || scoredMatches[0];
  const nightMatches = dailyMatches.filter(isNightMatch);
  const focusToday = dailyMatches.filter((match) => match.hasFocusTeam).length;

  if (topMatch) {
    const [home, away] = topMatch.matchTeams;
    heroMissionEl.textContent = `${formatDate(preferences.baseDate)}: ${home.code}-${away.code} führt den Radar an`;
    orbitSignalEl.textContent = `Spielwert ${topMatch.score}/100 · ${topMatch.driver} · ${getWatchAction(topMatch.category)}`;
  }

  heroStatusRailEl.innerHTML = [
    ["Heute", dailyMatches.length, "Spiele im Tagesfenster"],
    ["Live", liveCount, "Pflichtspiele gesamt"],
    ["Nacht", nightMatches.length, "spoiler-sensibel"],
    ["Fokus", focusToday, "Watchlist-Bezug"],
  ]
    .map(
      ([label, value, detail]) => `
        <span>
          <strong>${value}</strong>
          ${label}
          <small>${detail}</small>
        </span>
      `,
    )
    .join("");

  heroSignalStackEl.innerHTML = (topMatch ? [topMatch, ...dailyMatches.filter((match) => match.id !== topMatch.id)] : dailyMatches)
    .slice(0, 3)
    .map((match) => {
      const [home, away] = match.matchTeams;
      return `
        <button class="hero-signal ${match.category}" type="button" data-match="${match.id}">
          <span>${match.germanyTime}</span>
          <strong>${home.code}-${away.code}</strong>
          <em>Spielwert ${match.score}/100 · ${match.driver}</em>
        </button>
      `;
    })
    .join("");

  heroSignalStackEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "today";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  controlStatsEl.innerHTML = [
    ["Datenstand", metadata.snapshotDate],
    ["Live-Spiele", liveCount],
    ["Skip-Kandidaten", skipCount],
    ["Top-Spielwert", topScore],
  ]
    .map(
      ([label, value]) => `
        <div class="control-stat">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");
}

function getDataLevelLabel(level) {
  const labels = {
    real: "Echt",
    mixed: "Mixed",
    model: "Modell",
    seed: "Seed",
  };

  return labels[level] || "Seed";
}

function getStageLabel(stage) {
  const labels = {
    "round-of-32": "Round of 32",
    "round-of-16": "Achtelfinale",
    "quarter-final": "Viertelfinale",
    "semi-final": "Halbfinale",
    "third-place": "Platz 3",
    final: "Finale",
  };

  return labels[stage] || stage;
}

function renderDataStatus() {
  dataSnapshotEl.textContent = `${metadata.tournament} · ${metadata.format} · Stand ${metadata.snapshotDate}. Routine-Imports bleiben bewusst in den Details.`;
  dataStatusGridEl.innerHTML = dataStatus
    .map(
      (item) => `
        <article class="data-card ${item.tone}">
          <span class="data-label">${item.label}</span>
          <strong>${item.value}</strong>
          <p>${item.detail}</p>
          <span class="confidence">
            <span style="width: ${item.confidence}%"></span>
          </span>
        </article>
      `,
    )
    .join("");
}

function renderProviderTests() {
  if (!providerTestGridEl || !providerTests?.providers?.length) return;

  providerTestGridEl.innerHTML = providerTests.providers
    .map((provider) => {
      const testedAt = provider.testedAt
        ? new Date(provider.testedAt).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" })
        : "noch nicht";
      const topCoverage = provider.coverage.slice(0, 8);
      const advancedCoverage = provider.coverage.slice(8);
      const mappingSummary =
        providerMapping?.provider === provider.id || providerMapping?.provider === "sportmonks"
          ? providerMapping
          : null;

      return `
        <article class="provider-test-card">
          <div class="provider-test-head">
            <div>
              <span class="data-badge mixed">Testphase</span>
              <h3>${provider.label}</h3>
              <p>${providerTests.summary}</p>
            </div>
            <div class="provider-test-score">
              <strong>${provider.fixtures}</strong>
              <span>Fixtures</span>
            </div>
          </div>
          <div class="provider-test-meta">
            <span><strong>${provider.status}</strong><small>Status</small></span>
            <span><strong>${testedAt}</strong><small>Letzter Probe-Lauf</small></span>
            ${
              mappingSummary
                ? `<span><strong>${mappingSummary.coverage.mapped}/${mappingSummary.coverage.localMatches}</strong><small>Mapping</small></span>
                   <span><strong>${mappingSummary.coverage.predictions}</strong><small>Predictions</small></span>`
                : ""
            }
          </div>
          <div class="provider-coverage-grid">
            ${topCoverage
              .map(
                (item) => `
                  <span class="${item.tone}">
                    <strong>${item.label}</strong>
                    <em>${item.count}/${item.total}</em>
                    <small>${item.detail}</small>
                  </span>
                `,
              )
              .join("")}
          </div>
          <div class="provider-advanced-row">
            ${advancedCoverage
              .map(
                (item) => `
                  <span class="${item.tone}">
                    <strong>${item.label}</strong>
                    <em>${item.count}/${item.total}</em>
                  </span>
                `,
              )
              .join("")}
          </div>
          <div class="provider-next-grid">
            <div>
              <strong>Was wir damit bauen</strong>
              <ul class="cue-list">
                ${provider.productUse.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
            <div>
              <strong>Nächste Prüfzeitpunkte</strong>
              <ul class="cue-list">
                ${provider.nextChecks.map((item) => `<li>${item}</li>`).join("")}
              </ul>
            </div>
          </div>
          ${
            mappingSummary
              ? `<p class="provider-mapping-note">${mappingSummary.summary}</p>`
              : ""
          }
        </article>
      `;
    })
    .join("");
}

function getValidationTone(status) {
  if (status === "ready" || status === "structure-ready") return "real";
  if (status === "partial") return "mixed";
  if (status === "critical") return "seed";
  return "model";
}

function getValidationLabel(status) {
  const labels = {
    "structure-ready": "Structure Ready",
    ready: "Ready",
    partial: "Partial",
    critical: "Critical",
    seed: "Seed",
  };

  return labels[status] || status;
}

function formatPair(pair) {
  return pair.replace("-", " vs ");
}

function formatList(items) {
  if (items.length <= 1) return items.join("");
  return `${items.slice(0, -1).join(", ")} und ${items.at(-1)}`;
}

function renderScheduleValidation() {
  if (!scheduleValidation) return;

  const missingGroups = scheduleValidation.groups.filter((group) => !group.complete);
  const completeGroups = scheduleValidation.groups.filter((group) => group.complete);
  const issueCount =
    scheduleValidation.issues.duplicateFixtures.length +
    scheduleValidation.issues.unknownTeams.length +
    scheduleValidation.issues.invalidGroups.length;
  const warningCount = scheduleValidation.issues.warnings.length;
  const statusTone = getValidationTone(scheduleValidation.status);

  scheduleValidatorEl.innerHTML = `
    <div class="validator-hero ${statusTone}">
      <div>
        <span class="data-badge ${statusTone}">${getValidationLabel(scheduleValidation.status)}</span>
        <h3>Spielplan-Transparenz</h3>
        <p>${scheduleValidation.summary}</p>
      </div>
      <div class="validator-score" style="--coverage: ${scheduleValidation.coverage.tournament}">
        <strong>${scheduleValidation.coverage.tournament}%</strong>
        <span>Turnierstruktur</span>
      </div>
    </div>
    <div class="validator-metrics">
      ${[
        ["Importiert", `${scheduleValidation.imported.totalMatches}/${scheduleValidation.expected.totalMatches}`],
        ["Turnier-Coverage", `${scheduleValidation.coverage.tournament}%`],
        ["Verifiziert", `${scheduleValidation.imported.verifiedGroupMatches}`],
        ["K.o.-Slots", `${scheduleValidation.imported.knockoutMatches}/${scheduleValidation.expected.knockoutMatches}`],
        ["Komplette Gruppen", `${scheduleValidation.imported.completeGroups}/${scheduleValidation.expected.groups}`],
        ["Kritische Issues", issueCount],
      ]
        .map(
          ([label, value]) => `
            <div class="validator-metric">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
    <div class="group-coverage-grid">
      ${scheduleValidation.groups
        .map(
          (group) => `
            <article class="group-coverage-card ${group.complete ? "complete" : ""}">
              <div>
                <strong>Gruppe ${group.id}</strong>
                <span>${group.imported}/${group.expected} Spiele</span>
              </div>
              <span class="confidence">
                <span style="width: ${group.coverage}%"></span>
              </span>
              ${
                group.missingPairs.length
                  ? `<small>Fehlt: ${group.missingPairs.map(formatPair).slice(0, 3).join(", ")}${
                      group.missingPairs.length > 3 ? " ..." : ""
                    }</small>`
                  : `<small>Vollstaendig importiert.</small>`
              }
            </article>
          `,
        )
        .join("")}
    </div>
    <div class="validator-next">
      <strong>Nächster Import-Fokus</strong>
      <p>${
        missingGroups.length
          ? `Zuerst Gruppen ${formatList(missingGroups.map((group) => group.id))} vervollständigen. Komplett sind aktuell: ${
              formatList(completeGroups.map((group) => group.id)) || "noch keine"
            }.`
          : scheduleValidation.imported.knockoutMatches === scheduleValidation.expected.knockoutMatches
            ? "Turnierstruktur ist komplett. Als Nächstes Ergebnisse, Tabellen und Third-Place-Mapping andocken."
            : "Gruppenphase ist komplett; als Nächstes K.o.-Platzhalter und Bracket-Logik einführen."
      }</p>
    </div>
  `;
}

function getResultValidationTone(status) {
  if (status === "synced") return "real";
  if (status === "critical") return "seed";
  if (status === "blocked") return "mixed";
  return "model";
}

function getResultValidationLabel(status) {
  const labels = {
    synced: "Sync aktiv",
    waiting: "Wartet",
    blocked: "Setup offen",
    critical: "Konflikt",
    "not-run": "Nicht geprueft",
  };

  return labels[status] || status;
}

function renderResultValidation() {
  if (!resultValidation || !resultValidatorEl) return;

  const tone = getResultValidationTone(resultValidation.status);
  const issueCount =
    resultValidation.issues.unknownMatches.length +
    resultValidation.issues.invalidScores.length +
    resultValidation.issues.duplicateResults.length +
    resultValidation.issues.teamMismatches.length;
  const overrides = results?.summary?.overrides || 0;
  const sourceLabel = resultValidation.source?.sourceLabel || results?.sourceLabel || "Keine Quelle";
  const generatedAt = resultValidation.source?.generatedAt
    ? new Date(resultValidation.source.generatedAt).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" })
    : "noch nie";

  resultValidatorEl.innerHTML = `
    <div class="validator-hero ${tone}">
      <div>
        <span class="data-badge ${tone}">${getResultValidationLabel(resultValidation.status)}</span>
        <h3>Ergebnis-Sync</h3>
        <p>${resultValidation.summary}</p>
      </div>
      <div class="validator-score" style="--coverage: ${resultValidation.coverage.groupCoverage}">
        <strong>${resultValidation.coverage.totalResults}</strong>
        <span>Finale Resultate</span>
      </div>
    </div>
    <div class="validator-metrics">
      ${[
        ["Quelle", sourceLabel],
        ["Letzter Sync", generatedAt],
        ["Gruppen", `${resultValidation.coverage.groupResults}/${matches.length}`],
        ["K.o.", `${resultValidation.coverage.knockoutResults}/${knockout.length}`],
        ["Overrides", overrides],
        ["Issues", issueCount],
      ]
        .map(
          ([label, value]) => `
            <div class="validator-metric">
              <span>${label}</span>
              <strong>${value}</strong>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function getSlotGroups(slot) {
  const groupLetters = slot.match(/[A-L]/g) || [];
  return [...new Set(groupLetters)];
}

function isVariableSlot(slot) {
  return slot.startsWith("3") || slot.startsWith("W") || slot.startsWith("L");
}

function getSlotImpact(slot) {
  const slotGroups = getSlotGroups(slot);
  if (!slotGroups.length) return 52;
  return Math.max(...slotGroups.map((groupId) => groupById.get(groupId)?.pathRelevance || 45));
}

function slotHasFocusPath(slot) {
  return getSlotGroups(slot).some((groupId) => groupById.get(groupId)?.teams.some((code) => teamByCode.get(code)?.focus));
}

function renderResolvedSlot(resolvedSlot) {
  const { slot, row, type, confidence } = resolvedSlot;
  const team = row?.team;
  const focus = team?.focus || slotHasFocusPath(slot);
  return `
    <span class="bracket-slot ${focus ? "focus-slot" : ""} ${isVariableSlot(slot) ? "variable-slot" : ""} ${confidence}-slot">
      <strong>${team ? `${renderFlag(team)} ${team.code}` : slot}</strong>
      <small>${slot} · ${type}</small>
      ${row ? `<em>${row.displayPoints} Pkt · ${row.displayGoalDifference}</em>` : ""}
    </span>
  `;
}

function getBracketImpact(match) {
  const roundBoost = {
    "round-of-32": 8,
    "round-of-16": 12,
    "quarter-final": 18,
    "semi-final": 24,
    "third-place": 10,
    final: 30,
  }[match.round] || 8;
  const focusBoost = match.slots.some(slotHasFocusPath) ? 16 : 0;
  const variablePenalty = match.slots.some((slot) => slot.startsWith("3")) ? -3 : 0;
  const slotImpact = Math.max(...match.slots.map(getSlotImpact));
  return Math.round(clamp(slotImpact * 0.72 + roundBoost + focusBoost + variablePenalty, 0, 100));
}

function getResolvedTeams(match) {
  return match.resolvedSlots.map((resolved) => resolved.row?.team).filter(Boolean);
}

function getKnockoutScore(match) {
  const resolvedTeams = getResolvedTeams(match);
  const [home, away] = resolvedTeams;
  const roundWeight = {
    "round-of-32": 8,
    "round-of-16": 13,
    "quarter-final": 18,
    "semi-final": 24,
    "third-place": 8,
    final: 30,
  }[match.round] || 8;
  const focusBoost = resolvedTeams.some((team) => team.focus) ? 16 : 0;
  const surpriseBoost = resolvedTeams.some((team) => team.surprise) ? 9 : 0;
  const qualityAverage = resolvedTeams.length
    ? resolvedTeams.reduce((sum, team) => sum + getTeamStrength(team.code), 0) / resolvedTeams.length
    : 54;
  const tensionBoost = home && away ? clamp(18 - Math.abs(getTeamStrength(home.code) - getTeamStrength(away.code)) * 0.33, 0, 18) : 0;
  const pathImpact = getBracketImpact(match);

  return Math.round(clamp(qualityAverage * 0.34 + pathImpact * 0.36 + roundWeight + focusBoost + surpriseBoost + tensionBoost, 0, 100));
}

function getKnockoutCategory(score) {
  if (score >= 82) return "live";
  if (score >= 72) return "analysis";
  if (score >= 58) return "highlights";
  return "skip";
}

function getStyleContrast(home, away) {
  const homeProfile = getTeamProfile(home);
  const awayProfile = getTeamProfile(away);
  const homeIdentity = homeProfile?.identity || home.style || "Teamprofil wird erweitert.";
  const awayIdentity = awayProfile?.identity || away.style || "Teamprofil wird erweitert.";

  return `${home.code}: ${homeIdentity} Gegen ${away.code}: ${awayIdentity}`;
}

function getUpsetRisk(match) {
  const [home, away] = getResolvedTeams(match);
  if (!home || !away) return 42;

  const strengthGap = Math.abs(getTeamStrength(home.code) - getTeamStrength(away.code));
  const surpriseBoost = [home, away].some((team) => team.surprise) ? 16 : 0;
  const thirdPlaceBoost = match.resolvedSlots.some((slot) => slot.slot.startsWith("3")) ? 8 : 0;
  const roundBoost = match.round === "round-of-32" || match.round === "round-of-16" ? 8 : 3;

  return Math.round(clamp(72 - strengthGap * 1.2 + surpriseBoost + thirdPlaceBoost + roundBoost, 18, 94));
}

function getKnockoutWatchCues(match) {
  const [home, away] = getResolvedTeams(match);
  if (!home || !away) return ["Teams stehen erst nach der Gruppenphase fest.", "In Tabellen & Szenarien beobachten, wer weiterkommt und gegen wen es danach geht."];

  const profileCues = getWatchCueList(home, away).slice(0, 2);
  const upsetRisk = getUpsetRisk(match);
  const focusCue = [home, away].some((team) => team.focus)
    ? "Fokus-Team: frühe Spielkontrolle, Restverteidigung und möglichen nächsten Gegner beachten."
    : "Neutraler K.o.-Weg: nur live priorisieren, wenn Tempo, Pressing oder Upset-Signal früh sichtbar werden.";
  const upsetCue =
    upsetRisk >= 70
      ? "Upset-Zone: der nominell kleinere Gegner kann über Stilkontrast oder Drittplatz-Dynamik echte Hebel haben."
      : "Upset-Risiko moderat: eher auf saubere Dominanzmuster und Spielkontrolle achten.";

  return [...profileCues, focusCue, upsetCue].slice(0, 3);
}

function renderKnockoutDossier(match) {
  const resolvedTeams = getResolvedTeams(match);
  const [home, away] = resolvedTeams;
  const score = getKnockoutScore(match);
  const category = getKnockoutCategory(score);
  const upsetRisk = getUpsetRisk(match);

  if (!home || !away) {
    return `
      <div class="ko-dossier">
        <span class="data-badge model">Gegner offen</span>
        <p>Teams sind noch nicht aufgelöst. Die App zeigt hier später, wer weiterkommt und gegen wen es danach geht.</p>
      </div>
    `;
  }

  return `
    <div class="ko-dossier ${getWatchClass(category)}">
      <div class="ko-dossier-top">
        <span class="data-badge model">${getWatchAction(category)}</span>
        <strong>${score}/100</strong>
      </div>
      <p>${getStyleContrast(home, away)}</p>
      <div class="ko-dossier-metrics">
        <span><strong>${upsetRisk}</strong><small>Upset</small></span>
        <span><strong>${getBracketImpact(match)}</strong><small>Finalweg</small></span>
        <span><strong>${Math.round(Math.abs(getTeamStrength(home.code) - getTeamStrength(away.code)))}</strong><small>Gap</small></span>
      </div>
      <ul>
        ${getKnockoutWatchCues(match).map((cue) => `<li>${cue}</li>`).join("")}
      </ul>
    </div>
  `;
}

function renderBracket() {
  if (!knockout?.length) return;

  const resolvedKnockout = getResolvedKnockout();
  const resolvedMatches = resolvedKnockout.matches;
  const orderedRounds = ["round-of-32", "round-of-16", "quarter-final", "semi-final", "third-place", "final"];
  const knockoutByRound = new Map(orderedRounds.map((round) => [round, resolvedMatches.filter((match) => match.round === round)]));
  const focusPathMatches = resolvedMatches.filter((match) => match.resolvedSlots.some((resolved) => resolved.row?.team?.focus)).length;
  const variableSlots = resolvedMatches.filter((match) => match.slots.some((slot) => slot.startsWith("3"))).length;
  const resolvedTeamSlots = resolvedMatches.flatMap((match) => match.resolvedSlots).filter((resolved) => resolved.row).length;
  const topImpact = Math.max(...resolvedMatches.map(getBracketImpact));

  bracketSummaryEl.innerHTML = [
    ["K.o.-Spiele", knockout.length],
    ["Aufgelöste Slots", `${resolvedTeamSlots}/${knockout.length * 2}`],
    ["Variable Third-Place", variableSlots],
    ["Fokus-Matches", focusPathMatches],
    ["Top-Hebel", topImpact],
  ]
    .map(
      ([label, value]) => `
        <div class="bracket-metric">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");

  bracketGridEl.innerHTML = orderedRounds
    .map((round) => {
      const roundMatches = knockoutByRound.get(round) || [];
      return `
        <section class="bracket-round">
          <div class="panel-title">
            <span>${getStageLabel(round)}</span>
            <strong>${roundMatches.length}</strong>
          </div>
          <div class="bracket-match-list">
            ${roundMatches
              .map(
                (match) => `
                  <article class="bracket-match ${match.resolvedSlots.some((resolved) => resolved.row?.team?.focus) ? "focus-bracket" : ""}">
                    <div class="bracket-match-top">
                      <span>Match ${match.matchNumber}</span>
                      <strong>${getBracketImpact(match)}</strong>
                    </div>
                    <div class="bracket-slots">
                      ${match.resolvedSlots.map(renderResolvedSlot).join('<span class="versus">vs</span>')}
                    </div>
                    <p>${formatDate(match.kickoffGermany.slice(0, 10))} · ${match.kickoffGermany.slice(11, 16)} · ${match.venue}</p>
                    ${renderKnockoutDossier(match)}
                    <small>${match.sourceNote}</small>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderGroupPaths() {
  groupPathGridEl.innerHTML = groups
    .map((group) => {
      const groupTeams = group.teams.map((code) => teamByCode.get(code) || { code, name: code, flag: "" });
      const hasFocus = groupTeams.some((team) => team.focus);
      const hasSurprise = groupTeams.some((team) => team.surprise);
      const groupMatches = getScoredMatches()
        .filter((match) => getGroupId(match) === group.id)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      return `
        <article class="group-path-card ${hasFocus ? "focus-group" : hasSurprise ? "surprise-group" : ""}">
          <div class="group-path-top">
            <span class="group-letter">${group.id}</span>
            <span>
              <span class="data-badge ${group.sourceLevel}">${getDataLevelLabel(group.sourceLevel)}</span>
              <h3>Gruppe ${group.id}</h3>
              <small>${hasFocus ? "Fokus-Team im Blick" : hasSurprise ? "Surprise-Team im Blick" : "Weiterkommen im Blick"}</small>
            </span>
            <strong>${group.pathRelevance}</strong>
          </div>
          <div class="group-teams">
            ${groupTeams
              .map(
                (team) => `
                  <span class="${team.focus ? "focus-team" : team.surprise ? "surprise-team" : ""}">
                    ${renderFlag(team)}
                    ${team.code}
                  </span>
                `,
              )
              .join("")}
          </div>
          <p>${group.watchStrategy}</p>
          <div class="path-note">
            <strong>Wer kommt weiter und gegen wen?</strong>
            <span>${group.pathNote}</span>
            <small>${group.modelPath}</small>
          </div>
          <div class="group-fixtures">
            <strong>Wichtigste Spiele</strong>
            ${
              groupMatches.length
                ? groupMatches
                    .map((match) => {
                      const [home, away] = match.matchTeams;
                      return `<button type="button" data-match="${match.id}">
                        <span>${match.displayDate} · ${match.germanyTime}</span>
                        <strong>${home.code} vs ${away.code}</strong>
                        <em>${match.score}/100 · ${getWatchAction(match.category)} · Weiterkommen ${match.pathImpact}</em>
                      </button>`;
                    })
                    .join("")
                : `<small>Detaillierte Spielplan-Daten folgen.</small>`
            }
          </div>
        </article>
      `;
    })
    .join("");

  groupPathGridEl.querySelectorAll("button[data-match]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "all";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderStandings() {
  const groupStandings = getGroupStandings();
  const thirdPlaceProjection = getThirdPlaceProjection(groupStandings);
  const actualResultCount = results?.matches?.filter((result) => result.status === "final").length || 0;
  const projectedMode = actualResultCount === 0;
  const directQualifiers = groupStandings.flatMap(({ table }) => table.slice(0, 2));
  const thirdQualifiers = thirdPlaceProjection.filter((row) => row.advances);
  const focusQualifiers = [...directQualifiers, ...thirdQualifiers].filter((row) => row.team.focus).length;

  standingsSummaryEl.innerHTML = [
    ["Modus", projectedMode ? "Projektion" : "Live + Modell"],
    ["Direkt weiter", directQualifiers.length],
    ["Best Thirds", `${thirdQualifiers.length}/8`],
    ["Fokus weiter", focusQualifiers],
  ]
    .map(
      ([label, value]) => `
        <div class="standings-metric">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");

  standingsGridEl.innerHTML = `
    ${groupStandings
      .map(({ group, table, hasActualResults, topMatch }) => {
        const thirdRow = thirdPlaceProjection.find((row) => row.group === group.id);

        return `
          <article class="standing-card ${table.some((row) => row.team.focus) ? "focus-standing" : ""}">
            <div class="standing-card-top">
              <span class="group-letter">${group.id}</span>
              <span>
                <h3>Gruppe ${group.id}</h3>
                <small>${hasActualResults ? "echte Resultate aktiv" : "Modellprojektion"}</small>
              </span>
              <strong>${group.pathRelevance}</strong>
            </div>
            <div class="standing-table" role="table" aria-label="Tabelle Gruppe ${group.id}">
              <div class="standing-row heading" role="row">
                <span>Team</span>
                <span>Sp</span>
                <span>TD</span>
                <span>Pkt</span>
              </div>
              ${table
                .map((row, index) => {
                  const direct = index < 2;
                  const bestThird = index === 2 && thirdRow?.advances;
                  const status = direct ? "Direkt" : bestThird ? `3. #${thirdRow.thirdRank}` : index === 2 ? `3. #${thirdRow.thirdRank}` : "Out";

                  return `
                    <div class="standing-row ${direct ? "direct-row" : bestThird ? "third-row" : ""}" role="row">
                      <span>
                        <b class="rank-badge">${index + 1}</b>
                        ${renderFlag(row.team)}
                        <strong>${row.code}</strong>
                        <em class="${direct ? "status-direct" : bestThird ? "status-third" : "status-out"}">${status}</em>
                      </span>
                      <span>${row.played || "-"}</span>
                      <span>${row.displayGoalDifference}</span>
                      <span>${row.displayPoints}</span>
                    </div>
                  `;
                })
                .join("")}
            </div>
            <div class="standing-note">
              <strong>Wer kommt weiter und gegen wen?</strong>
              <span>
                ${topMatch ? `${topMatch.matchTeams[0].code}-${topMatch.matchTeams[1].code} ist aktuell der hoechste Hebel.` : "Noch kein Topspiel erkannt."}
              </span>
            </div>
          </article>
        `;
      })
      .join("")}
    <article class="standing-card third-place-board">
      <div class="standing-card-top">
        <span class="group-letter">3</span>
        <span>
          <h3>Best Thirds</h3>
          <small>Top 8 kommen weiter</small>
        </span>
        <strong>8/12</strong>
      </div>
      <div class="third-place-list">
        ${thirdPlaceProjection
          .map(
            (row) => `
              <div class="${row.advances ? "third-safe" : "third-risk"}">
                <span><b class="rank-badge">${row.thirdRank}</b> ${renderFlag(row.team)} ${row.code} · Gruppe ${row.group}</span>
                <strong>${row.displayPoints}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    </article>
  `;
}

function renderSummary() {
  const visibleMatches = getVisibleMatches();
  const groups = [
    ["Live", visibleMatches.filter((match) => match.category === "live").length],
    ["Analyse", visibleMatches.filter((match) => match.category === "analysis").length],
    ["Highlights", visibleMatches.filter((match) => match.category === "highlights").length],
    ["Skip", visibleMatches.filter((match) => match.category === "skip").length],
  ];
  const activeLabel = filters.find((filter) => filter.id === activeFilter)?.label || "Alle";

  summaryLineEl.textContent = `${visibleMatches.length} Spiele · ${activeLabel}`;
  summaryGridEl.innerHTML = groups
    .map(
      ([label, value]) => `
        <div class="summary-card">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");

  activeDateChipEl.innerHTML = `
    <span>${activeLabel}</span>
    <strong>${activeFilter === "tomorrow" ? formatDate(addDays(preferences.baseDate, 1)) : formatDate(preferences.baseDate)} + Nacht</strong>
  `;
}

function renderFilters() {
  filtersEl.innerHTML = filters
    .map(
      (filter) => `
        <button class="filter-button ${activeFilter === filter.id ? "active" : ""}" type="button" data-filter="${filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  filtersEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      renderAllDynamic();
    });
  });
}

function renderCategoryFilters() {
  categoryFiltersEl.innerHTML = categoryFilters
    .map(
      (filter) => `
        <button class="filter-button ${activeCategory === filter.id ? "active" : ""}" type="button" data-category="${filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  categoryFiltersEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      activeCategory = button.dataset.category;
      renderAllDynamic();
    });
  });
}

function renderScoreControls() {
  scoreControlsEl.innerHTML = preferences.controls
    .map(
      (control) => `
        <label class="score-control">
          <span>
            <strong>${control.label}</strong>
            <small>${control.description}</small>
          </span>
          <input
            type="range"
            min="${control.min}"
            max="${control.max}"
            step="${control.step}"
            value="${weights[control.id]}"
            data-weight="${control.id}"
          />
          <em>${weights[control.id].toFixed(2)}</em>
        </label>
      `,
    )
    .join("");

  scoreControlsEl.querySelectorAll("input").forEach((input) => {
    input.addEventListener("input", () => {
      weights[input.dataset.weight] = Number(input.value);
      input.closest(".score-control").querySelector("em").textContent = weights[input.dataset.weight].toFixed(2);
      renderComputedViews();
    });
  });
}

function getWatchClass(category) {
  if (category === "skip") return "skip";
  if (category === "highlights") return "highlights";
  if (category === "analysis") return "analysis";
  return "";
}

function getWatchLabel(category) {
  const labels = {
    live: "Live",
    analysis: "Analyse",
    highlights: "Highlights",
    skip: "Skip",
  };

  return labels[category] || "Check";
}

function getScoreTone(score) {
  if (score >= 80) return "elite";
  if (score >= 70) return "strong";
  if (score >= 52) return "medium";
  return "low";
}

function getWatchAction(category) {
  const actions = {
    live: "Live schauen",
    analysis: "Später analysieren",
    highlights: "Highlights reichen",
    skip: "Skip",
  };

  return actions[category] || "Check";
}

const flagThemeMap = {
  ARG: ["#74acdf", "#ffffff", "#f6b40e"],
  BRA: ["#009b3a", "#ffdf00", "#002776"],
  ESP: ["#aa151b", "#f1bf00", "#aa151b"],
  GER: ["#000000", "#dd0000", "#ffce00"],
  ENG: ["#ffffff", "#cf142b", "#ffffff"],
  FRA: ["#0055a4", "#ffffff", "#ef4135"],
  MAR: ["#c1272d", "#006233", "#c1272d"],
  JPN: ["#ffffff", "#bc002d", "#ffffff"],
  NOR: ["#ba0c2f", "#ffffff", "#00205b"],
  TUR: ["#e30a17", "#ffffff", "#e30a17"],
  CUW: ["#002b7f", "#f9e814", "#002b7f"],
  CRO: ["#ff0000", "#ffffff", "#171796"],
  ALG: ["#006233", "#ffffff", "#d21034"],
  URU: ["#ffffff", "#0038a8", "#fcd116"],
  QAT: ["#ffffff", "#8d1b3d", "#8d1b3d"],
  SUI: ["#d52b1e", "#ffffff", "#d52b1e"],
  HAI: ["#00209f", "#d21034", "#ffffff"],
  SCO: ["#0065bd", "#ffffff", "#0065bd"],
  NED: ["#ae1c28", "#ffffff", "#21468b"],
  CIV: ["#f77f00", "#ffffff", "#009e60"],
  ECU: ["#ffdd00", "#034ea2", "#ed1c24"],
  MEX: ["#006847", "#ffffff", "#ce1126"],
  RSA: ["#007a4d", "#ffb612", "#de3831"],
  KOR: ["#ffffff", "#c60c30", "#003478"],
  CZE: ["#ffffff", "#d7141a", "#11457e"],
  CAN: ["#ff0000", "#ffffff", "#ff0000"],
  BIH: ["#002395", "#fecb00", "#002395"],
  USA: ["#b22234", "#ffffff", "#3c3b6e"],
  PAR: ["#d52b1e", "#ffffff", "#0038a8"],
  AUS: ["#00008b", "#ffffff", "#ff0000"],
  TUN: ["#e70013", "#ffffff", "#e70013"],
  SWE: ["#006aa7", "#fecc00", "#006aa7"],
  BEL: ["#000000", "#ffd90c", "#ef3340"],
  EGY: ["#ce1126", "#ffffff", "#000000"],
  IRN: ["#239f40", "#ffffff", "#da0000"],
  NZL: ["#00247d", "#ffffff", "#cc142b"],
  CPV: ["#003893", "#ffffff", "#cf2027"],
  KSA: ["#006c35", "#ffffff", "#006c35"],
  SEN: ["#00853f", "#fdef42", "#e31b23"],
  IRQ: ["#ce1126", "#ffffff", "#000000"],
  AUT: ["#ed2939", "#ffffff", "#ed2939"],
  JOR: ["#000000", "#ffffff", "#007a3d"],
  POR: ["#006600", "#ff0000", "#ffcc00"],
  UZB: ["#1eb6e7", "#ffffff", "#00923f"],
  COL: ["#fcd116", "#003893", "#ce1126"],
  COD: ["#007fff", "#f7d618", "#ce1021"],
  GHA: ["#ce1126", "#fcd116", "#006b3f"],
  PAN: ["#ffffff", "#005293", "#d21034"],
};

function renderFlag(team) {
  const colors = flagThemeMap[team.code] || ["#ffffff", "#1d8f4f", "#122018"];

  return `
    <span class="flag-badge" style="--flag-a: ${colors[0]}; --flag-b: ${colors[1]}; --flag-c: ${colors[2]};" aria-hidden="true">
      <span class="flag-code">${team.code}</span>
    </span>
  `;
}

function getRecommendationReason(match) {
  const [home, away] = match.matchTeams;
  const categoryText = {
    live: "Live schauen",
    analysis: "später analysieren",
    highlights: "Highlights reichen",
    skip: "skippen",
  }[match.category];

  return `${categoryText}: ${home.name} vs ${away.name} bekommt Spielwert ${match.score}/100. Haupttreiber: ${match.driver}. ${match.analysis.key}`;
}

function getSkipReasons(match) {
  const reasons = [];
  if (match.signals.focus < 45) reasons.push("geringe persönliche Relevanz");
  if (match.signals.tactical < 55) reasons.push("niedriger Taktikwert");
  if (match.signals.entertainment < 55) reasons.push("geringe Attraktivitätsprognose");
  if (match.signals.lowValueRisk >= 35) reasons.push("erhöhtes Low-Value-Risiko");
  if (match.pathImpact < 55) reasons.push("geringe Wirkung auf Weiterkommen und nächsten Gegner");
  if (isNightMatch(match) && match.score < 80) reasons.push("schlechte Uhrzeit");
  return reasons.length ? reasons : ["Spielwert liegt unter deiner Live-Schwelle"];
}

function getThreeWatchCues(match) {
  const [home, away] = match.matchTeams;
  return [
    ...getWatchCueList(home, away),
    match.analysis.key,
    `Nach dem Spiel prüfen: Hat der Treiber "${match.driver}" wirklich entschieden?`,
  ].slice(0, 3);
}

function renderDailyCommandCenter() {
  const dailyMatches = getTodayCommandMatches();
  const topMatch = [...dailyMatches].sort((a, b) => b.score - a.score)[0];
  const liveCount = dailyMatches.filter((match) => match.category === "live").length;
  const analysisCount = dailyMatches.filter((match) => match.category === "analysis").length;
  const skipCount = dailyMatches.filter((match) => match.category === "skip").length;
  const nightMatches = dailyMatches.filter(isNightMatch);

  if (!topMatch) {
    dailyBriefingTextEl.textContent = "Für das aktuelle Tagesfenster liegen noch keine Spiele vor.";
    return;
  }

  const [topHome, topAway] = topMatch.matchTeams;
  dailyBriefingTextEl.textContent = `${formatDate(preferences.baseDate)} + Nacht: Heute führt ${topHome.name} vs ${topAway.name} den Watch Plan an. ${liveCount} live, ${analysisCount} Analyse, ${skipCount} Skip.`;

  commandMetricsEl.innerHTML = [
    ["Top-Spiel", `${topHome.code}-${topAway.code}`],
    ["Live", liveCount],
    ["Analyse", analysisCount],
    ["Nacht", nightMatches.length],
  ]
    .map(
      ([label, value]) => `
        <div class="command-metric">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `,
    )
    .join("");

  topMatchCardEl.innerHTML = `
    <div class="top-match-header">
      <span class="data-badge ${topMatch.sourceLevel}">${getDataLevelLabel(topMatch.sourceLevel)}</span>
      <span class="watch-label ${getWatchClass(topMatch.category)}">${getWatchLabel(topMatch.category)}</span>
    </div>
    <div class="top-match-main">
      <span>${topHome.code}</span>
      <strong>${topMatch.score}</strong>
      <span>${topAway.code}</span>
    </div>
    <p class="${isNightMatch(topMatch) ? "spoiler-sensitive" : ""}">${getRecommendationReason(topMatch)}</p>
    <ul class="cue-list">
      ${getThreeWatchCues(topMatch)
        .map((cue) => `<li>${cue}</li>`)
        .join("")}
    </ul>
  `;

  watchPlanCountEl.textContent = `${dailyMatches.length} Spiele`;
  watchPlanEl.innerHTML = dailyMatches
    .map((match) => {
      const [home, away] = match.matchTeams;
      const skipReasons = match.category === "skip" ? getSkipReasons(match) : [];
      return `
        <button class="watch-plan-item ${match.category}" type="button" data-match="${match.id}">
          <span class="watch-time">${match.germanyTime}</span>
          <span class="watch-fixture">
            <strong>${home.code} vs ${away.code}</strong>
            <small class="${isNightMatch(match) ? "spoiler-sensitive" : ""}">${getWatchAction(match.category)} · Spielwert ${match.score}/100 · ${match.driver}</small>
            ${
              skipReasons.length
                ? `<em>Skip, weil: ${skipReasons.join(", ")}</em>`
                : `<em>${match.tags.slice(0, 2).join(" · ")}</em>`
            }
          </span>
        </button>
      `;
    })
    .join("");

  watchPlanEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "today";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  morningCountEl.textContent = `${nightMatches.length} Nachtspiele`;
  morningQueueEl.innerHTML =
    nightMatches
      .map((match) => {
        const [home, away] = match.matchTeams;
        return `
          <article class="morning-item">
            <span>${match.germanyTime}</span>
            <strong>${home.code} vs ${away.code}</strong>
            <p class="spoiler-sensitive">${getWatchAction(match.category)} · Spielwert ${match.score}/100 · ${match.analysis.key}</p>
          </article>
        `;
      })
      .join("") || `<p class="empty-copy">Keine Nachtspiele im aktuellen Tagesfenster.</p>`;
}

function getTeamProfile(team) {
  return profileByCode.get(team.code);
}

function getProfileLevel(profile) {
  if (!profile) return "ohne Profil";
  return getDataLevelLabel(profile.level);
}

function getTeamProfileSummary(team) {
  const profile = getTeamProfile(team);
  if (!profile) {
    return `${team.name}: Noch kein detailliertes Teamprofil. Die App nutzt vorerst Match-Signale und Fokuswerte.`;
  }

  return `${team.name}: ${profile.identity}`;
}

function getMatchupLine(home, away) {
  const homeProfile = getTeamProfile(home);
  const awayProfile = getTeamProfile(away);

  if (homeProfile && awayProfile) {
    return `${home.name}: ${homeProfile.bestAgainst} · ${away.name}: ${awayProfile.dangerAgainst}`;
  }

  if (homeProfile) return `${home.name}: ${homeProfile.bestAgainst}`;
  if (awayProfile) return `${away.name}: ${awayProfile.bestAgainst}`;
  return "Noch kein detailliertes Team-Matchup. Profil-Daten werden schrittweise ergänzt.";
}

function getWatchCueList(home, away) {
  const cues = [getTeamProfile(home), getTeamProfile(away)]
    .filter(Boolean)
    .flatMap((profile) => profile.watchCues.slice(0, 2));

  return cues.length ? cues.slice(0, 4) : ["Auf Ballverluste, Pressinghöhe und Restverteidigung achten."];
}

function getDossierBriefing(match, home, away) {
  const homeProfile = getTeamProfile(home);
  const awayProfile = getTeamProfile(away);
  const context = match.groupModel ? match.groupModel.pathNote : "Wer weiterkommt und gegen wen es danach geht, ist noch modelliert.";
  const homeIdentity = homeProfile?.identity || `${home.name} wird aktuell über Matchsignale eingeordnet.`;
  const awayIdentity = awayProfile?.identity || `${away.name} wird aktuell über Matchsignale eingeordnet.`;

  return `${home.code}-${away.code} ist ein ${getWatchAction(match.category).toLowerCase()}-Spiel, weil ${match.driver} der stärkste Treiber ist. ${homeIdentity} Gegenbild: ${awayIdentity} ${context}`;
}

function getKeyBattle(home, away) {
  const homeProfile = getTeamProfile(home);
  const awayProfile = getTeamProfile(away);

  return {
    title: `${home.code} Ballbesitz vs ${away.code} Zugriff`,
    left: homeProfile?.bestAgainst || "progressive Struktur und zweite Bälle",
    right: awayProfile?.dangerAgainst || "Konterfenster und Strafraumdruck",
  };
}

function getTacticalTriggers(match, home, away) {
  const [homeProfile, awayProfile] = [getTeamProfile(home), getTeamProfile(away)];
  const profileCues = [homeProfile, awayProfile].filter(Boolean).flatMap((profile) => profile.watchCues.slice(0, 2));
  const generic = [
    `Wenn ${match.driver} früh sichtbar wird, steigt der Live-Wert.`,
    "Nach Ballverlusten sofort auf Restverteidigung und erste Anschlussläufe achten.",
    "Standards und zweite Bälle als Low-Noise-Signal notieren.",
  ];

  return [...profileCues, ...generic].slice(0, 5);
}

function getDecisionMatrix(match) {
  return [
    ["Live-Schwelle", match.score >= 80 ? "erreicht" : "nicht erreicht", match.score],
    ["Taktikwert", match.signals.tactical >= 72 ? "hoch" : match.signals.tactical >= 58 ? "mittel" : "niedrig", match.signals.tactical],
    ["Weiterkommen", match.pathImpact >= 80 ? "kritisch" : match.pathImpact >= 62 ? "relevant" : "gering", match.pathImpact],
    ["Low-Value", match.signals.lowValueRisk >= 35 ? "beachten" : "kontrolliert", 100 - match.signals.lowValueRisk],
  ];
}

function getEvidencePillars(match) {
  const pillarIds =
    match.signals.tactical >= 70
      ? ["statsbomb", "skillcorner", "wyscout"]
      : match.signals.importance >= 70
        ? ["opta", "wyscout", "scisports"]
        : ["opta", "statsbomb", "wyscout"];

  return pillarIds
    .map((id) => analystSources.pillars.find((pillar) => pillar.id === id))
    .filter(Boolean);
}

function getEvidenceVoices(match) {
  const voiceIds =
    match.signals.tactical >= 70
      ? ["athletic-tactics", "spielverlagerung", "coaches-voice"]
      : match.hasFocusTeam
        ? ["opta-analyst", "athletic-tactics", "coaches-voice"]
        : ["opta-analyst", "total-football-analysis", "athletic-tactics"];

  return voiceIds
    .map((id) => analystSources.voices.find((voice) => voice.id === id))
    .filter(Boolean);
}

function getSourceAutomationMode(match) {
  if (match.category === "skip") {
    return analystSources.automationPlan.find((item) => item.id === "low-value");
  }
  if (match.hasFocusTeam || match.score >= 78 || match.signals.tactical >= 70) {
    return analystSources.automationPlan.find((item) => item.id === "focus-analysis");
  }
  return analystSources.automationPlan.find((item) => item.id === "hard-data");
}

function getSynthesisVerdict(match) {
  const dataStrength = match.sourceLevel === "real" ? 82 : match.sourceLevel === "mixed" ? 58 : 36;
  const tacticStrength = Math.max(36, match.signals.tactical);
  const videoStrength = match.signals.tactical >= 72 ? 54 : 32;
  const contextStrength = match.hasFocusTeam ? 62 : 42;
  const score = Math.round(
    dataStrength * 0.38 + videoStrength * 0.28 + tacticStrength * 0.24 + contextStrength * 0.1,
  );

  if (score >= 72) {
    return { label: "Stark belegbar", score, tone: "real" };
  }
  if (score >= 54) {
    return { label: "Plausibel, aber Review nötig", score, tone: "mixed" };
  }
  return { label: "Hypothese / Seed", score, tone: "seed" };
}

function renderSourceSynthesisPanel(match) {
  const automation = getSourceAutomationMode(match);
  const verdict = getSynthesisVerdict(match);
  const synthesisRows = analystSources.synthesisModel || [];

  return `
    <div class="insight-card source-synthesis-card">
      <span class="briefing-kicker">Analyse-Synthese</span>
      <div class="synthesis-head">
        <h3>Daten, Taktik und Stimmen zusammenführen</h3>
        <span class="data-badge ${verdict.tone}">${verdict.label}</span>
      </div>
      <p>
        ${automation?.whatHappens || "Die App kombiniert Datenanker, Taktikquellen und Kontextstimmen nach Trust-Regeln."}
      </p>
      <div class="synthesis-status-row">
        <span><strong>${automation?.mode || "Halbautomatisch"}</strong><small>Modus</small></span>
        <span><strong>${verdict.score}/100</strong><small>Belegkraft</small></span>
        <span><strong>${automation?.userAction || "Optional aktualisieren"}</strong><small>Nutzeraktion</small></span>
      </div>
      <div class="synthesis-layer-grid">
        ${synthesisRows
          .map(
            (row) => `
              <span>
                <strong>${row.label}</strong>
                <em style="--layer: ${row.weight}"></em>
                <small>${row.rule}</small>
              </span>
            `,
          )
          .join("")}
      </div>
    </div>
  `;
}

function getAdvancedMetricPlan(match) {
  return [
    {
      label: "xG / Chance Quality",
      status: match.sourceLevel === "real" ? "bereit" : "Provider später",
      detail: "Prueft, ob das Ergebnis zur Chancenqualitaet passt oder nur Scoreboard-Rauschen ist.",
      value: match.signals.importance,
    },
    {
      label: "PPDA / Pressingdruck",
      status: "Modellanker",
      detail: "Soll Pressinghoehe, Zugriff und passive Phasen im Spielverlauf trennen.",
      value: match.signals.tactical,
    },
    {
      label: "Field Tilt / Territory",
      status: "Provider später",
      detail: "Zeigt, wer das Spiel wirklich in gefaehrlichen Zonen haelt.",
      value: Math.round((match.signals.importance + match.pathImpact) / 2),
    },
    {
      label: "Line-Breaking / 360",
      status: "Premium später",
      detail: "Erklaert Paesse und Annahmen, die normale Eventdaten kaum sichtbar machen.",
      value: match.signals.tactical,
    },
  ];
}

function getPostMatchChecks(match, home, away) {
  return [
    `Hat ${match.driver} tatsaechlich den Spielverlauf gepraegt?`,
    `Passte die Chancenqualitaet zur Empfehlung ${getWatchLabel(match.category)}?`,
    `Wurde ${home.code}-${away.code} durch Ballverluste, Standards oder offene Raeume entschieden?`,
    `Muss der Spielwert nach echten Ergebnis- und Eventdaten neu kalibriert werden?`,
  ];
}

function getPostMatchReport(match) {
  return (postMatchReports?.reports || []).find((report) => report.matchId === match.id) || null;
}

function getPostMatchReportStatus(report) {
  if (!report) return "Blueprint";
  const labels = {
    draft: "Draft",
    "provider-synced": "Provider Sync",
    reviewed: "Reviewed",
  };
  return labels[report.status] || report.status;
}

function renderPostMatchReportPanel(match, home, away) {
  const report = getPostMatchReport(match);
  const metricDefinitions = postMatchReports?.metricDefinitions || [];

  if (!report) {
    return `
      <div class="insight-card report-hub-card">
        <span class="briefing-kicker">Post-Match Report Hub</span>
        <h3>Report-Blueprint ist vorbereitet</h3>
        <p>${postMatchReports?.sourceNote || "Echte Post-Match-Daten werden nach finalen Ergebnissen ergänzt."}</p>
        <div class="report-status-row">
          <span><strong>${getPostMatchReportStatus(report)}</strong><small>Status</small></span>
          <span><strong>${postMatchValidation?.coverage?.reports || 0}</strong><small>Reports</small></span>
          <span><strong>${metricDefinitions.length}</strong><small>Metriken</small></span>
        </div>
        <ul class="report-blueprint-list">
          ${metricDefinitions
            .slice(0, 5)
            .map((metric) => `<li><strong>${metric.label}</strong><span>${metric.providerTarget}</span></li>`)
            .join("")}
        </ul>
      </div>
    `;
  }

  return `
    <div class="insight-card report-hub-card reviewed">
      <span class="briefing-kicker">Post-Match Report Hub</span>
      <h3>${home.code}-${away.code}: Analyse-Audit</h3>
      <p>${report.summary || "Report liegt vor und wartet auf redaktionelle Auswertung."}</p>
      <div class="report-status-row">
        <span><strong>${getPostMatchReportStatus(report)}</strong><small>Status</small></span>
        <span><strong>${report.recommendationAudit?.postMatchScore ?? "-"}</strong><small>Post Score</small></span>
        <span><strong>${report.recommendationAudit?.verdict || "offen"}</strong><small>Verdict</small></span>
      </div>
      <ul class="report-blueprint-list">
        ${(report.patterns || []).map((pattern) => `<li><strong>${pattern.label}</strong><span>${pattern.note}</span></li>`).join("")}
      </ul>
    </div>
  `;
}

function renderMatches() {
  const visibleMatches = getVisibleMatches();

  if (!visibleMatches.some((match) => match.id === selectedMatchId) && visibleMatches[0]) {
    selectedMatchId = visibleMatches[0].id;
  }

  matchListEl.innerHTML =
    visibleMatches
      .map((match) => {
        const [home, away] = match.matchTeams;
        const active = match.id === selectedMatchId ? "active" : "";
        const scoreTone = getScoreTone(match.score);

        return `
          <button class="match-card ${active} ${match.category}" type="button" data-match="${match.id}">
            <span class="match-main">
              <span class="match-card-topline">
                <span class="match-state">
                  <span class="state-dot"></span>
                  ${match.state} · ${match.displayDate} · ${match.germanyTime}
                </span>
                <span class="data-badge ${match.sourceLevel || "seed"}">${getDataLevelLabel(match.sourceLevel)}</span>
              </span>
              <span class="teams">
                <span class="team-side">${renderFlag(home)}<strong>${home.code}</strong><small>${home.name}</small></span>
                <span class="versus">vs</span>
                <span class="team-side away"><strong>${away.code}</strong>${renderFlag(away)}<small>${away.name}</small></span>
              </span>
              <span class="match-signal-strip">
                <span><strong>${match.driver}</strong> Treiber</span>
                <span><strong>${match.pathImpact}</strong> Weiterkommen</span>
                <span><strong>${match.signals.tactical}</strong> Taktik</span>
              </span>
              <p class="match-reason">${getRecommendationReason(match)}</p>
              ${
                match.category === "skip"
                  ? `<p class="skip-reasons">Skip, weil: ${getSkipReasons(match).join(", ")}.</p>`
                  : ""
              }
              <span class="match-tags">
                  ${match.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </span>
            </span>
            <span class="match-score ${scoreTone}">
              <span class="score-ring ${scoreTone}" style="--score: ${match.score}">
                <span>${match.score}</span>
              </span>
              <span class="watch-label ${getWatchClass(match.category)}">${getWatchLabel(match.category)}</span>
            </span>
          </button>
        `;
      })
      .join("") ||
    `<div class="empty-state">
      <strong>Keine Spiele in diesem Filter.</strong>
      <p>Lockere die Empfehlung oder wechsle auf "Alle".</p>
    </div>`;

  matchListEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      renderMatches();
      renderDossier();
    });
  });
}

function renderDossier() {
  const selectedMatch =
    getScoredMatches().find((match) => match.id === selectedMatchId) || getVisibleMatches()[0] || getScoredMatches()[0];
  if (!selectedMatch) return;

  selectedMatchId = selectedMatch.id;
  const [home, away] = selectedMatch.matchTeams;
  dossierTitleEl.textContent = `${home.name} vs ${away.name}`;
  dossierTitleEl.closest(".dossier").dataset.recommendation = selectedMatch.category;
  dossierScoreEl.style.setProperty("--score", selectedMatch.score);
  dossierScoreEl.className = `score-ring ${getScoreTone(selectedMatch.score)}`;
  dossierScoreEl.querySelector("span").textContent = selectedMatch.score;
  pitchModeEl.textContent = selectedMatch.tags[1] || "Taktik";
  const keyBattle = getKeyBattle(home, away);
  const tacticalTriggers = getTacticalTriggers(selectedMatch, home, away);
  const decisionMatrix = getDecisionMatrix(selectedMatch);
  const evidencePillars = getEvidencePillars(selectedMatch);
  const evidenceVoices = getEvidenceVoices(selectedMatch);
  const metricPlan = getAdvancedMetricPlan(selectedMatch);
  const postMatchChecks = getPostMatchChecks(selectedMatch, home, away);

  dossierMetaEl.innerHTML = [
    `${selectedMatch.displayDate}`,
    `${selectedMatch.germanyTime} Deutschland`,
    selectedMatch.venue,
    selectedMatch.state,
    selectedMatch.group,
    `Daten: ${getDataLevelLabel(selectedMatch.sourceLevel)}`,
  ]
    .map((item) => `<span class="meta-pill">${item}</span>`)
    .join("");

  insightGridEl.innerHTML = `
    <div class="insight-card tactical-briefing">
      <span class="briefing-kicker">Analysten-Story</span>
      <h3>Warum dieses Spiel zählt</h3>
      <p>${getDossierBriefing(selectedMatch, home, away)}</p>
      <div class="briefing-tags">
        <span>${selectedMatch.driver}</span>
        <span>${getWatchLabel(selectedMatch.category)}</span>
        <span>Weiterkommen ${selectedMatch.pathImpact}</span>
      </div>
    </div>
    <div class="insight-card key-battle-card">
      <span class="briefing-kicker">Key Battle</span>
      <h3>${keyBattle.title}</h3>
      <div class="battle-board">
        <span><strong>${home.code}</strong>${keyBattle.left}</span>
        <em>gegen</em>
        <span><strong>${away.code}</strong>${keyBattle.right}</span>
      </div>
    </div>
    <div class="insight-card trigger-card">
      <span class="briefing-kicker">Live Trigger</span>
      <h3>Woran du früh erkennst, ob es kippt</h3>
      <ol class="trigger-list">
        ${tacticalTriggers.map((trigger) => `<li>${trigger}</li>`).join("")}
      </ol>
    </div>
    <div class="insight-card decision-card">
      <span class="briefing-kicker">Decision Matrix</span>
      <h3>Live, Analyse oder Skip?</h3>
      <div class="decision-grid">
        ${decisionMatrix
          .map(
            ([label, verdict, value]) => `
              <span>
                <small>${label}</small>
                <strong>${verdict}</strong>
                <em>${value}/100</em>
              </span>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="insight-card score-signals">
      <span class="briefing-kicker">Empfehlungslogik</span>
      <h3>Warum diese Empfehlung?</h3>
      <div class="metric-list">
        ${[
          ["Bedeutung", selectedMatch.signals.importance],
          ["Taktik", selectedMatch.signals.tactical],
          ["Attraktivität", selectedMatch.signals.entertainment],
          ["Fokus", selectedMatch.signals.focus],
          ["Upset", selectedMatch.signals.surprise],
          ["Uhrzeit", selectedMatch.signals.time],
          ["Weiterkommen", selectedMatch.pathImpact],
          ["Prediction", selectedMatch.providerSignal?.predictionImpact ? 62 : 0],
        ]
          .map(
            ([label, value]) => `
              <div class="metric-row">
                <span>${label}</span>
                <span class="metric-track"><span class="metric-fill" style="width: ${value}%"></span></span>
                <strong>${value}</strong>
              </div>
            `,
          )
          .join("")}
      </div>
    </div>
    ${
      selectedMatch.providerSignal
        ? `<div class="insight-card provider-signal-card">
            <span class="briefing-kicker">Provider-Signal</span>
            <h3>Sportmonks-Mapping</h3>
            <p>${selectedMatch.providerSignal.providerName} ist mit Provider-ID ${selectedMatch.providerSignal.providerId} gemappt.</p>
            <div class="provider-signal-row">
              <span><strong>${selectedMatch.providerSignal.predictionAvailable ? "bereit" : "offen"}</strong><small>Prediction</small></span>
              <span><strong>+${selectedMatch.providerSignal.predictionImpact || 0}</strong><small>Score-Bonus</small></span>
              <span><strong>${selectedMatch.providerSignal.confidence}%</strong><small>Mapping</small></span>
            </div>
          </div>`
        : ""
    }
    <div class="insight-card profile-insight">
      <span class="briefing-kicker">Matchup Lens</span>
      <h3>Team-Matchup</h3>
      <p>${getTeamProfileSummary(home)}</p>
      <p>${getTeamProfileSummary(away)}</p>
      <p>${getMatchupLine(home, away)}</p>
    </div>
    <div class="insight-card">
      <span class="briefing-kicker">Risiko</span>
      <h3>Was kann kippen?</h3>
      <p>${selectedMatch.analysis.risk}</p>
      <p>${selectedMatch.analysis.player}</p>
    </div>
    <div class="insight-card">
      <span class="briefing-kicker">Weiterkommen & Gegner</span>
      <h3>Wer kommt weiter und gegen wen?</h3>
      <p>${
        selectedMatch.groupModel
          ? selectedMatch.groupModel.pathNote
          : "Für dieses Spiel liegt noch keine detaillierte Weiterkommen-und-Gegner-Projektion vor."
      }</p>
      <p>Wirkung auf Weiterkommen und nächsten Gegner: ${selectedMatch.pathImpact}/100. ${
        selectedMatch.groupModel ? selectedMatch.groupModel.modelPath : ""
      }</p>
    </div>
    <div class="insight-card">
      <span class="briefing-kicker">Einordnung</span>
      <h3>Woher kommt diese Analyse?</h3>
      <p>${selectedMatch.analysis.source} ${selectedMatch.sourceNote}</p>
    </div>
    <div class="insight-card evidence-card">
      <span class="briefing-kicker">Belege</span>
      <h3>Worauf stützt sich die Analyse?</h3>
      <div class="evidence-stack">
        ${evidencePillars
          .map(
            (pillar) => `
              <a href="${pillar.url}" target="_blank" rel="noreferrer">
                <span>${pillar.layer}</span>
                <strong>${pillar.name}</strong>
                <em>${pillar.integration}</em>
              </a>
            `,
          )
          .join("")}
      </div>
    </div>
    ${renderSourceSynthesisPanel(selectedMatch)}
    <div class="insight-card analyst-voice-card">
      <span class="briefing-kicker">Serioese Stimmen</span>
      <h3>Welche Analysten wuerden zaehlen?</h3>
      <div class="voice-mini-list">
        ${evidenceVoices
          .map(
            (voice) => `
              <a href="${voice.url}" target="_blank" rel="noreferrer">
                <strong>${voice.name}</strong>
                <span>${voice.type} · Trust ${voice.trust}</span>
              </a>
            `,
          )
          .join("")}
      </div>
    </div>
    <div class="insight-card metric-plan-card">
      <span class="briefing-kicker">Advanced Metrics</span>
      <h3>Was später automatisch validiert wird</h3>
      <div class="advanced-metric-list">
        ${metricPlan
          .map(
            (metric) => `
              <span>
                <strong>${metric.label}</strong>
                <small>${metric.status}</small>
                <em style="--metric: ${metric.value}"></em>
                <p>${metric.detail}</p>
              </span>
            `,
          )
          .join("")}
      </div>
    </div>
    ${renderPostMatchReportPanel(selectedMatch, home, away)}
    <div class="insight-card post-match-card">
      <span class="briefing-kicker">Nach dem Spiel</span>
      <h3>Validierungsfragen</h3>
      <ul class="cue-list">
        ${postMatchChecks.map((check) => `<li>${check}</li>`).join("")}
      </ul>
    </div>
    <div class="insight-card">
      <span class="briefing-kicker">Action</span>
      <h3>Empfehlung</h3>
      <p>${getRecommendationReason(selectedMatch)}</p>
    </div>
  `;
}

function renderTeamLab() {
  const preferredCodes = new Set([...focusTeams.map((team) => team.code), ...surpriseTeams.map((team) => team.code)]);
  const profileCards = teams
    .filter((team) => preferredCodes.has(team.code) && getTeamProfile(team))
    .sort((a, b) => Number(b.focus || b.surprise) - Number(a.focus || a.surprise) || b.watchPriority - a.watchPriority);

  teamLabGridEl.innerHTML = profileCards
    .map((team) => {
      const profile = getTeamProfile(team);
      const status = team.focus ? "Fokus-Team" : "Surprise";
      const watchlistPriority = team.watchPriority || profile.confidence;

      return `
        <article class="team-lab-card">
          <div class="team-lab-top">
            <span class="team-lab-flag">${renderFlag(team)}</span>
            <span>
              <span class="data-badge ${profile.level}">${getProfileLevel(profile)}</span>
              <h3>${team.name}</h3>
              <small>${status} · ${team.confederation}</small>
            </span>
            <span class="watchlist-priority-meter" title="Watchlist-Priorität: persönliche Beobachtungsrelevanz, kein objektives Teamranking.">
              <strong>${watchlistPriority}</strong>
              <small>Watchlist</small>
            </span>
          </div>
          <p class="team-score-note">Diese Zahl zeigt, wie aufmerksam WM Radar ${team.name} beobachten soll. Teamstärke, Momentum, Attraktivität, Überraschungspotenzial und Datenlage werden später getrennt bewertet.</p>
          <p>${profile.identity}</p>
          <div class="phase-grid">
            <span><strong>Aufbau</strong>${profile.buildUp}</span>
            <span><strong>Pressing</strong>${profile.pressing}</span>
            <span><strong>Umschalten</strong>${profile.transition}</span>
            <span><strong>Schwachstelle</strong>${profile.weakness}</span>
          </div>
          <div class="watch-cues">
            <strong>Watch-Cues</strong>
            <ul class="cue-list">
              ${profile.watchCues.map((cue) => `<li>${cue}</li>`).join("")}
            </ul>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderKeyFigures() {
  if (!keyFiguresGridEl) {
    return;
  }

  const preferredCodes = new Set([...focusTeams.map((team) => team.code), ...surpriseTeams.map((team) => team.code)]);
  const entries = teams
    .filter((team) => preferredCodes.has(team.code) && keyFiguresByTeam.has(team.code))
    .sort((a, b) => Number(b.focus || b.surprise) - Number(a.focus || a.surprise) || b.watchPriority - a.watchPriority)
    .map((team) => ({ team, figures: keyFiguresByTeam.get(team.code).figures }));

  keyFiguresGridEl.innerHTML = entries
    .map(
      ({ team, figures }) => `
        <article class="key-figure-card">
          <div class="key-figure-team">
            <span class="team-lab-flag">${renderFlag(team)}</span>
            <span>
              <span class="data-badge seed">Seed</span>
              <h3>${team.name}</h3>
              <small>${figures.length} Schlüsselfiguren · wird im Turnier fortgeschrieben</small>
            </span>
          </div>
          <div class="key-figure-list">
            ${figures
              .map(
                (figure) => `
                  <section class="key-figure-item">
                    <div class="key-figure-name">
                      <strong>${figure.name}</strong>
                      <span>${figure.role} · ${figure.lens}</span>
                    </div>
                    <p><b>Erwartung</b>${figure.expectation}</p>
                    <p><b>Worauf achten?</b>${figure.watch}</p>
                    <p><b>Verlauf</b>${figure.development}</p>
                  </section>
                `,
              )
              .join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSurpriseRadar() {
  surpriseRadarEl.innerHTML = surpriseTeams
    .map(
      (team) => `
        <article class="radar-card">
          <div>
            <div class="radar-score">
              <span class="flag" aria-hidden="true">${team.flag}</span>
              <strong>${team.score}</strong>
            </div>
            <h3>${team.team}</h3>
            <p>${team.reason}</p>
          </div>
          <div class="sparkline" aria-label="Form- und Attraktivitätstrend">
            ${team.spark.map((value) => `<span style="height: ${value}%"></span>`).join("")}
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSources() {
  sourceStackEl.innerHTML = sources
    .map(
      (source) => `
        <article class="source-card">
          <span class="source-grade">${source.grade}</span>
          <span>
            <h3>${source.title}</h3>
            <p>${source.text}</p>
          </span>
          <span class="quality-bar" aria-label="Qualität ${source.quality} von 100">
            <span style="width: ${source.quality}%"></span>
          </span>
        </article>
      `,
    )
    .join("");
}

function renderAnalystDesk() {
  if (!analystSources) return;

  analystPillarsEl.innerHTML = analystSources.pillars
    .map(
      (pillar) => `
        <article class="analyst-pillar-card">
          <div class="analyst-pillar-top">
            <span>
              <small>${pillar.layer}</small>
              <h3>${pillar.name}</h3>
            </span>
            <strong style="--score: ${pillar.quality}">${pillar.quality}</strong>
          </div>
          <p>${pillar.bestFor}</p>
          <div class="analyst-signal-row">
            ${pillar.signals.map((signal) => `<span>${signal}</span>`).join("")}
          </div>
          <div class="analyst-note">
            <strong>Wofür nutzen?</strong>
            <span>${pillar.watchFor}</span>
          </div>
          <div class="analyst-note muted-note">
            <strong>Blinder Fleck</strong>
            <span>${pillar.blindSpot}</span>
          </div>
          <a href="${pillar.url}" target="_blank" rel="noreferrer">${pillar.integration}</a>
        </article>
      `,
    )
    .join("");

  if (sourceAutomationEl) {
    sourceAutomationEl.innerHTML = analystSources.automationPlan
      .map(
        (item) => `
          <article class="workflow-card">
            <span>${item.mode}</span>
            <h3>${item.label}</h3>
            <p>${item.whatHappens}</p>
            <small>${item.cadence}</small>
            <em>${item.userAction}</em>
          </article>
        `,
      )
      .join("");
  }

  if (sourceAccessEl) {
    sourceAccessEl.innerHTML = analystSources.accessModel
      .map(
        (item) => `
          <article class="access-card">
            <h3>${item.label}</h3>
            <p>${item.use}</p>
            <small>${item.examples}</small>
            <em>${item.risk}</em>
          </article>
        `,
      )
      .join("");
  }

  if (synthesisModelEl) {
    synthesisModelEl.innerHTML = analystSources.synthesisModel
      .map(
        (item) => `
          <article class="synthesis-model-card">
            <div>
              <strong>${item.label}</strong>
              <small>${item.weight}% Gewicht</small>
            </div>
            <span style="--layer: ${item.weight}"></span>
            <p>${item.rule}</p>
          </article>
        `,
      )
      .join("");
  }

  analystVoicesEl.innerHTML = analystSources.voices
    .slice()
    .sort((a, b) => b.trust - a.trust)
    .map(
      (voice) => `
        <article class="voice-card">
          <div class="voice-score" style="--score: ${voice.trust}">
            <span>${voice.trust}</span>
          </div>
          <span>
            <small>${voice.type}</small>
            <h3>${voice.name}</h3>
            <p>${voice.bestFor}</p>
            <em>${voice.useWhen}</em>
            <a href="${voice.url}" target="_blank" rel="noreferrer">Quelle ansehen</a>
          </span>
        </article>
      `,
    )
    .join("");

  sourceRulesEl.innerHTML = analystSources.rules
    .map(
      (rule) => `
        <article class="source-rule-card">
          <strong>${rule.label}</strong>
          <p>${rule.rule}</p>
          <span class="quality-bar" aria-label="Regelgewicht ${rule.weight} von 100">
            <span style="width: ${rule.weight}%"></span>
          </span>
        </article>
      `,
    )
    .join("");

  const primaryModel = analystSources.aiModels[0];
  aiModelCardEl.innerHTML = primaryModel
    ? `
      <span class="data-badge model">Research</span>
      <h3>${primaryModel.name}</h3>
      <p>${primaryModel.role}</p>
      <p>${primaryModel.bestFor}</p>
      <small>${primaryModel.limitation}</small>
      <a href="${primaryModel.url}" target="_blank" rel="noreferrer">Paper ansehen</a>
    `
    : "";
}

function renderAllDynamic() {
  renderDailyCommandCenter();
  renderGroupPaths();
  renderStandings();
  renderControlStats();
  renderSummary();
  renderFilters();
  renderCategoryFilters();
  renderScoreControls();
  renderMatches();
  renderDossier();
}

function renderComputedViews() {
  renderDailyCommandCenter();
  renderGroupPaths();
  renderStandings();
  renderControlStats();
  renderSummary();
  renderMatches();
  renderDossier();
}

function setupSpoilerMode() {
  spoilerToggle.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("spoiler-mode");
    spoilerToggle.setAttribute("aria-pressed", String(enabled));
    spoilerToggle.querySelector("strong").textContent = enabled ? "aktiv" : "frei";
  });
}

function setupPwa() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

renderFocusTeams();
renderDataStatus();
renderProviderTests();
renderResultValidation();
renderScheduleValidation();
renderBracket();
renderSurpriseRadar();
renderSources();
renderAnalystDesk();
renderAllDynamic();
renderTeamLab();
renderKeyFigures();
setupSpoilerMode();
setupPwa();
