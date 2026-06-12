const data = window.WMRadarData;
const {
  analystSources,
  categoryFilters,
  filters,
  focusTeams,
  groups,
  keyFigures,
  knockout,
  matches,
  metadata,
  postMatchReports,
  preferences,
  providerTests,
  providerMapping,
  results,
  surpriseTeams,
  teamProfiles,
  teams,
} = data;

const teamByCode = new Map(teams.map((team) => [team.code, team]));
const profileByCode = new Map(teamProfiles.map((profile) => [profile.code, profile]));
const keyFiguresByTeam = new Map(keyFigures.map((entry) => [entry.team, entry]));
const providerMappingByMatchId = new Map((providerMapping?.mappings || []).map((mapping) => [mapping.matchId, mapping]));
const postMatchReportByMatchId = new Map((postMatchReports?.reports || []).map((report) => [report.matchId, report]));
const groupById = new Map(groups.map((group) => [group.id, group]));
const groupByTeamCode = new Map(groups.flatMap((group) => group.teams.map((code) => [code, group])));
const zoneLinks = [...document.querySelectorAll(".main-nav a[data-zone]")];
const viewPanels = [...document.querySelectorAll("[data-view]")];
const stateLabels = {
  live: "Pflichtspiel",
  analysis: "Analysewürdig",
  highlights: "Highlights reichen",
  skip: "Bewusst auslassen",
};

let activeFilter = "today";
let activeCategory = "all";
let weights = { ...preferences.weights };
const baselineWeights = { ...preferences.weights };

// "Heute" folgt der echten Uhr (auf das Turnierfenster geklemmt). Der feste Wert
// aus preferences/baseDate dient nur noch als Fallback.
preferences.baseDate = resolveActiveBaseDate(preferences.baseDate);
let selectedMatchId = null;

const focusTeamsEl = document.querySelector("#focusTeams");
const heroMissionEl = document.querySelector("#heroMission");
const heroStatusRailEl = document.querySelector("#heroStatusRail");
const orbitSignalEl = document.querySelector("#orbitSignal");
const controlStatsEl = document.querySelector("#controlStats");
const summaryGridEl = document.querySelector("#summaryGrid");
const summaryLineEl = document.querySelector("#summaryLine");
const filtersEl = document.querySelector("#filters");
const categoryFiltersEl = document.querySelector("#categoryFilters");
const scoreControlsEl = document.querySelector("#scoreControls");
const scoreImpactEl = document.querySelector("#scoreImpact");
const activeDateChipEl = document.querySelector("#activeDateChip");
const dailyBriefingTextEl = document.querySelector("#dailyBriefingText");
const commandMetricsEl = document.querySelector("#commandMetrics");
const topMatchCardEl = document.querySelector("#topMatchCard");
const matchdayStorylinesEl = document.querySelector("#matchdayStorylines");
const watchPlanCountEl = document.querySelector("#watchPlanCount");
const watchPlanEl = document.querySelector("#watchPlan");
const skipPlanCountEl = document.querySelector("#skipPlanCount");
const skipPlanEl = document.querySelector("#skipPlan");
const morningCountEl = document.querySelector("#morningCount");
const morningQueueEl = document.querySelector("#morningQueue");
const matchListEl = document.querySelector("#matchList");
const dossierTitleEl = document.querySelector("#dossierTitle");
const dossierScoreEl = document.querySelector("#dossierScore");
const dossierMetaEl = document.querySelector("#dossierMeta");
const pitchModeEl = document.querySelector("#pitchMode");
const insightGridEl = document.querySelector("#insightGrid");
const tournamentSnapshotGridEl = document.querySelector("#tournamentSnapshotGrid");
const groupPathGridEl = document.querySelector("#groupPathGrid");
const bracketSummaryEl = document.querySelector("#bracketSummary");
const bracketGridEl = document.querySelector("#bracketGrid");
const standingsSummaryEl = document.querySelector("#standingsSummary");
const standingsGridEl = document.querySelector("#standingsGrid");
const teamLabGridEl = document.querySelector("#teamLabGrid");
const keyFiguresGridEl = document.querySelector("#keyFiguresGrid");
const surpriseRadarEl = document.querySelector("#surpriseRadar");
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

function getTournamentDateBounds() {
  const keys = matches
    .map((match) => match.kickoffGermany.slice(0, 10))
    .filter(Boolean)
    .sort();
  return { first: keys[0], last: keys[keys.length - 1] };
}

function resolveActiveBaseDate(fallback) {
  try {
    // Der Matchday rollt um 06:00 Europe/Berlin: Nachtspiele vor 6 Uhr gehoeren
    // noch zum Vortag (siehe isTodayViewingWindow). Deshalb die echte Uhrzeit um
    // 6 Stunden zuruecksetzen, bevor der Tag bestimmt wird.
    const rollover = new Date(Date.now() - 6 * 60 * 60 * 1000);
    const todayKey = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Europe/Berlin",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(rollover);
    const { first, last } = getTournamentDateBounds();
    if (first && todayKey < first) return first;
    if (last && todayKey > last) return last;
    return todayKey;
  } catch {
    return fallback;
  }
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

function computeScoreWithWeights(match, weightSet = weights) {
  const signal = match.signals;
  const pathImpact = getPathImpact(match);
  const providerSignal = providerMappingByMatchId.get(match.id);
  const predictionImpact = providerSignal?.predictionImpact || 0;
  const openingBoost = isOpeningMatch(match) ? 18 : 0;
  const parts = [
    [signal.importance, weightSet.importance],
    [signal.tactical, weightSet.tactical],
    [signal.entertainment, weightSet.entertainment],
    [signal.focus, weightSet.focus],
    [signal.surprise, weightSet.surprise],
    [signal.time, weightSet.time],
    [pathImpact, weightSet.path],
  ];
  const weightedTotal = parts.reduce((sum, [value, weight]) => sum + value * weight, 0);
  const totalWeight = parts.reduce((sum, [, weight]) => sum + weight, 0);
  const score = weightedTotal / totalWeight - signal.lowValueRisk * 0.18 + predictionImpact + openingBoost;

  return clamp(Math.round(score), 0, 100);
}

function computeScore(match) {
  return computeScoreWithWeights(match, weights);
}

function isOpeningMatch(match) {
  return match.id === "mex-rsa-2026-06-11";
}

function getRecommendation(score, match = null) {
  if (match && isOpeningMatch(match)) return score >= 70 ? "live" : "highlights";
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
      const category = getRecommendation(score, match);
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

function hasCompleteScore(result) {
  return Number.isFinite(Number(result?.homeGoals)) && Number.isFinite(Number(result?.awayGoals));
}

function getMatchResult(match) {
  return getResultMap().get(match.id) || null;
}

function getResultLabel(result) {
  if (!hasCompleteScore(result)) return null;

  const score = `${Number(result.homeGoals)}:${Number(result.awayGoals)}`;
  if (result.status === "final") return `Endstand ${score}`;
  if (result.status === "live") return `Live ${score}${result.minute ? ` · ${result.minute}.` : ""}`;
  return null;
}

function getResultTone(result) {
  if (result?.status === "live") return "live";
  if (result?.status === "final") return "final";
  return "pending";
}

function isFinalResult(result) {
  return result?.status === "final" && hasCompleteScore(result);
}

function getResultScore(result) {
  if (!hasCompleteScore(result)) return null;
  return {
    homeGoals: Number(result.homeGoals),
    awayGoals: Number(result.awayGoals),
  };
}

function formatSignedGoalDifference(value) {
  return value > 0 ? `+${value}` : String(value);
}

function getFinalMatchImpact(match, result) {
  const score = getResultScore(result);
  if (!score) return null;

  const [home, away] = getMatchTeams(match);
  const homePoints = score.homeGoals > score.awayGoals ? 3 : score.homeGoals === score.awayGoals ? 1 : 0;
  const awayPoints = score.awayGoals > score.homeGoals ? 3 : score.homeGoals === score.awayGoals ? 1 : 0;

  return {
    home,
    away,
    homeGoals: score.homeGoals,
    awayGoals: score.awayGoals,
    homePoints,
    awayPoints,
    homeGoalDifference: score.homeGoals - score.awayGoals,
    awayGoalDifference: score.awayGoals - score.homeGoals,
    winner: score.homeGoals === score.awayGoals ? null : score.homeGoals > score.awayGoals ? home : away,
    loser: score.homeGoals === score.awayGoals ? null : score.homeGoals > score.awayGoals ? away : home,
  };
}

function getMatchCardScore(match, result) {
  if (!isFinalResult(result)) return match.score;
  const report = getPostMatchReport(match, result);
  return report.recommendationAudit?.postMatchScore ?? match.score;
}

function getMatchCardState(match, result) {
  if (isFinalResult(result)) return `Beendet · ${match.displayDate} · ${match.germanyTime}`;
  return `${match.state} · ${match.displayDate} · ${match.germanyTime}`;
}

function getMatchCardSignals(match, result) {
  const impact = getFinalMatchImpact(match, result);
  if (!impact) {
    return [
      { value: match.driver, label: "Treiber" },
      { value: match.pathImpact, label: "Weiterkommen" },
      { value: match.signals.tactical, label: "Taktik" },
    ];
  }

  return [
    { value: `${impact.homeGoals}:${impact.awayGoals}`, label: "Endstand" },
    { value: `${impact.homePoints}:${impact.awayPoints}`, label: "Punkte" },
    {
      value: `${formatSignedGoalDifference(impact.homeGoalDifference)}/${formatSignedGoalDifference(impact.awayGoalDifference)}`,
      label: "Tordifferenz",
    },
  ];
}

function getMatchCardReason(match, result) {
  const impact = getFinalMatchImpact(match, result);
  if (!impact) return getCompactMatchReason(match);

  if (!impact.winner) {
    return `${impact.home.name} und ${impact.away.name} trennen sich ${impact.homeGoals}:${impact.awayGoals}. Die Karte zeigt Ergebnis-Review; Detaildaten wie xG oder Pressing bleiben offen.`;
  }

  return `${impact.winner.name} gewinnt ${impact.homeGoals}:${impact.awayGoals} gegen ${impact.loser.name}. Die Karte zeigt Ergebnis-Review; Detaildaten wie xG oder Pressing bleiben offen.`;
}

function getMatchCardWatchLabel(match, result) {
  return isFinalResult(result) ? "Auswertung" : getWatchLabel(match.category);
}

function getMatchCardWatchClass(match, result) {
  return isFinalResult(result) ? "final" : getWatchClass(match.category);
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

function getQualificationStatus(row, rank, thirdPlaceProjection) {
  if (rank <= 2) {
    return { label: "direkt weiter", tone: "direct", detail: "Platz 1-2" };
  }

  const thirdRow = rank === 3 ? thirdPlaceProjection.find((entry) => entry.group === row.groupId) : null;
  if (thirdRow?.advances) {
    return { label: `Drittplatzierter #${thirdRow.thirdRank}`, tone: "third", detail: "aktuell weiter" };
  }
  if (rank === 3 && thirdRow) {
    return { label: `Drittplatzierter #${thirdRow.thirdRank}`, tone: "risk", detail: "aktuell gefährdet" };
  }
  return { label: "aktuell raus", tone: "out", detail: `Platz ${rank}` };
}

function getFocusQualificationRows(groupStandings, thirdPlaceProjection) {
  return focusTeams
    .map((focusTeam) => {
      const groupStanding = groupStandings.find(({ table }) => table.some((row) => row.code === focusTeam.code));
      const rowIndex = groupStanding?.table.findIndex((row) => row.code === focusTeam.code) ?? -1;
      if (!groupStanding || rowIndex < 0) return null;
      const row = { ...groupStanding.table[rowIndex], groupId: groupStanding.group.id };
      const rank = rowIndex + 1;
      const status = getQualificationStatus(row, rank, thirdPlaceProjection);
      return { row, rank, status, group: groupStanding.group };
    })
    .filter(Boolean)
    .sort((a, b) => {
      const toneOrder = { direct: 0, third: 1, risk: 2, out: 3 };
      return toneOrder[a.status.tone] - toneOrder[b.status.tone] || a.rank - b.rank || b.row.pointsValue - a.row.pointsValue;
    });
}

function renderTournamentSnapshot() {
  if (!tournamentSnapshotGridEl) return;

  const groupStandings = getGroupStandings();
  const thirdPlaceProjection = getThirdPlaceProjection(groupStandings);
  const actualResultCount = results?.matches?.filter((result) => result.status === "final").length || 0;
  const projectedMode = actualResultCount === 0;
  const focusRows = getFocusQualificationRows(groupStandings, thirdPlaceProjection);
  const focusSafe = focusRows.filter((entry) => ["direct", "third"].includes(entry.status.tone)).length;
  const thirdSafe = thirdPlaceProjection.filter((row) => row.advances).length;
  const topLeverageMatches = getScoredMatches()
    .filter((match) => match.pathImpact >= 66 || match.hasFocusTeam)
    .sort((a, b) => b.pathImpact - a.pathImpact || b.score - a.score)
    .slice(0, 4);
  const tenseGroups = groupStandings
    .map(({ group, table, topMatch }) => {
      const gap = table[1].pointsValue - table[2].pointsValue;
      const third = thirdPlaceProjection.find((row) => row.group === group.id);
      return { group, table, topMatch, gap, third };
    })
    .sort((a, b) => a.gap - b.gap || b.group.pathRelevance - a.group.pathRelevance)
    .slice(0, 3);

  tournamentSnapshotGridEl.innerHTML = `
    <article class="tournament-snapshot-card tournament-mode-card">
      <span class="briefing-kicker">Turnierbild</span>
      <h3>${projectedMode ? "Startprojektion" : "Live-Tabelle"}</h3>
      <p>
        ${projectedMode
          ? "Vor dem ersten Ergebnis zeigt WM Radar, wie die Gruppen aktuell nach Stärke, Pfad und Match Value gelesen werden."
          : `${actualResultCount} finale Ergebnisse sind eingerechnet; offene Spiele bleiben im Ausblick.`}
      </p>
      <div class="snapshot-metrics">
        <span><strong>${focusSafe}/${focusRows.length}</strong><small>Fokus-Teams weiter</small></span>
        <span><strong>${thirdSafe}/8</strong><small>Dritte Plätze</small></span>
        <span><strong>${topLeverageMatches[0]?.pathImpact || "-"}</strong><small>Top-Hebel</small></span>
      </div>
    </article>

    <article class="tournament-snapshot-card focus-road-card">
      <span class="briefing-kicker">Fokus-Teams</span>
      <h3>Wenn jetzt Schluss wäre</h3>
      <div class="focus-road-list">
        ${focusRows
          .map(
            ({ row, rank, status, group }) => `
              <span class="${status.tone}">
                ${renderFlag(row.team)}
                <strong>${row.code}</strong>
                <em>Gruppe ${group.id} · Platz ${rank}</em>
                <small>${status.label}</small>
              </span>
            `,
          )
          .join("")}
      </div>
    </article>

    <article class="tournament-snapshot-card leverage-card">
      <span class="briefing-kicker">Hebelspiele</span>
      <h3>Diese Spiele verändern den Weg</h3>
      <div class="leverage-match-list">
        ${topLeverageMatches
          .map((match) => {
            const [home, away] = match.matchTeams;
            return `
              <button type="button" data-match="${match.id}">
                <span>${match.displayDate} · ${match.germanyTime}</span>
                <strong>${home.code} vs ${away.code}</strong>
                <small>Weiterkommen ${match.pathImpact}/100 · ${getWatchAction(match.category)}</small>
              </button>
            `;
          })
          .join("")}
      </div>
    </article>

    <article class="tournament-snapshot-card tense-group-card">
      <span class="briefing-kicker">Kippgruppen</span>
      <h3>Wo ein Tor besonders viel ändert</h3>
      <div class="tense-group-list">
        ${tenseGroups
          .map(
            ({ group, table, topMatch, gap, third }) => `
              <span>
                <strong>Gruppe ${group.id}</strong>
                <em>${table[1].code} vs ${table[2].code}: ${gap.toFixed(1)} Punkte Abstand</em>
                <small>${third?.code || table[2].code} als Dritter aktuell ${third?.advances ? "weiter" : "gefährdet"}${topMatch ? ` · Hebelspiel ${topMatch.matchTeams[0].code}-${topMatch.matchTeams[1].code}` : ""}</small>
              </span>
            `,
          )
          .join("")}
      </div>
    </article>
  `;

  tournamentSnapshotGridEl.querySelectorAll("button[data-match]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "all";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
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
  const nightMatches = dailyMatches.filter(isNightMatch);
  const focusToday = dailyMatches.filter((match) => match.hasFocusTeam).length;

  heroMissionEl.textContent =
    dailyMatches.length === 1
      ? `${formatDate(preferences.baseDate)}: ein Spiel, eine klare Entscheidung`
      : `${formatDate(preferences.baseDate)}: ${dailyMatches.length} Spiele nach Wert sortiert`;
  orbitSignalEl.textContent = `${liveCount} live · ${nightMatches.length} nachts · ${focusToday} mit Watchlist-Bezug`;

  heroStatusRailEl.innerHTML = [
    ["Heute", dailyMatches.length, "Spiele im Tagesfenster"],
    ["Live", liveCount, "direkt einschalten"],
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

  controlStatsEl.innerHTML = [
    ["Datenstand", metadata.snapshotDate],
    ["Live-Spiele", liveCount],
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
    ["Variable Drittplätze", variableSlots],
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
    ["Beste Dritte", `${thirdQualifiers.length}/8`],
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
                ${topMatch ? `${topMatch.matchTeams[0].code}-${topMatch.matchTeams[1].code} ist aktuell der höchste Hebel.` : "Noch kein Topspiel erkannt."}
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
          <h3>Beste Dritte</h3>
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
    ["Auslassen", visibleMatches.filter((match) => match.category === "skip").length],
  ].filter(([, value]) => value > 0);
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

  renderScoreImpact();
}

function renderScoreImpact() {
  if (!scoreImpactEl) return;

  const scoredMatches = getScoredMatches();
  const selected = scoredMatches.find((match) => match.id === selectedMatchId) || scoredMatches[0];
  const todayMatches = getTodayCommandMatches();
  const topMatch = todayMatches[0];

  if (!selected || !topMatch) {
    scoreImpactEl.innerHTML = "";
    return;
  }

  const baselineScore = computeScoreWithWeights(selected, baselineWeights);
  const currentScore = computeScoreWithWeights(selected, weights);
  const delta = currentScore - baselineScore;
  const deltaText = delta === 0 ? "unverändert" : `${delta > 0 ? "+" : ""}${delta} Punkte`;
  const [topHome, topAway] = topMatch.matchTeams;

  scoreImpactEl.innerHTML = `
    <span>Live-Rückmeldung</span>
    <strong>${selected.matchTeams[0].code}-${selected.matchTeams[1].code}: ${currentScore}/100 (${deltaText})</strong>
    <small>Aktueller Spitzenwert im Tagesfenster: ${topHome.code}-${topAway.code} · ${topMatch.score}/100 · ${getWatchAction(topMatch.category)}.</small>
  `;
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
    skip: "Auslassen",
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
    skip: "Auslassen",
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

function getCompactMatchReason(match) {
  if (isOpeningMatch(match)) return "Eröffnungsspiel: einmal einschalten, Kontext mitnehmen, danach nach Spielbild entscheiden.";
  if (match.category === "skip") return `Eher auslassen: ${getSkipReasons(match).slice(0, 2).join(", ")}.`;
  if (match.category === "highlights") return `${match.driver}: Highlights reichen, wenn die erste Hälfte keinen klaren Zug bekommt.`;
  if (match.category === "analysis") return `${match.driver}: für die spätere Einordnung vormerken.`;
  return `${match.driver}: live relevant.`;
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
  ].slice(0, 3);
}

function getMatchdayStorylines(dailyMatches) {
  const sorted = [...dailyMatches].sort((a, b) => b.score - a.score);
  const livePick = sorted.find((match) => match.category === "live") || sorted[0];
  const analysisPick = sorted.find((match) => match.category === "analysis");
  const pathPick = sorted.find((match) => match.pathImpact >= 72 && match.id !== livePick?.id);
  const upsetPick = sorted.find((match) => match.signals.surprise >= 70 && ![livePick?.id, pathPick?.id].includes(match.id));

  return [
    livePick && {
      label: "Live-Pflicht",
      match: livePick,
      text: `${livePick.driver}: Dieses Spiel hat heute den stärksten Sofortwert.`,
    },
    analysisPick && {
      label: "Später verstehen",
      match: analysisPick,
      text: `${analysisPick.driver}: Nicht zwingend live, aber gut für das Dossier danach.`,
    },
    pathPick && {
      label: "Gruppenhebel",
      match: pathPick,
      text: "Dieses Ergebnis kann den nächsten Gegner oder den Finalweg spürbar verschieben.",
    },
    upsetPick && {
      label: "Überraschungsfenster",
      match: upsetPick,
      text: "Hier lohnt sich ein Blick, wenn das Spiel früh offen bleibt.",
    },
  ]
    .filter(Boolean)
    .filter((item, index, list) => list.findIndex((candidate) => candidate.match.id === item.match.id) === index)
    .slice(0, 3);
}

function renderMatchdayStorylines(dailyMatches) {
  const storylines = getMatchdayStorylines(dailyMatches);
  matchdayStorylinesEl.innerHTML =
    storylines
      .map(({ label, match, text }) => {
        const [home, away] = match.matchTeams;
        return `
          <button class="storyline-item ${match.category}" type="button" data-match="${match.id}">
            <span>${label}</span>
            <strong>${home.code} vs ${away.code}</strong>
            <small>${text}</small>
          </button>
        `;
      })
      .join("") || `<p class="empty-copy">Noch keine Storylines für dieses Tagesfenster.</p>`;

  matchdayStorylinesEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "today";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function renderDailyCommandCenter() {
  const dailyMatches = getTodayCommandMatches();
  const topMatch = [...dailyMatches].sort((a, b) => b.score - a.score)[0];
  const liveCount = dailyMatches.filter((match) => match.category === "live").length;
  const analysisCount = dailyMatches.filter((match) => match.category === "analysis").length;
  const skipCount = dailyMatches.filter((match) => match.category === "skip").length;
  const watchMatches = dailyMatches.filter((match) => match.category !== "skip");
  const skipMatches = dailyMatches.filter((match) => match.category === "skip");
  const nightMatches = dailyMatches.filter(isNightMatch);
  const singleMatchDay = dailyMatches.length <= 1;

  if (!topMatch) {
    dailyBriefingTextEl.textContent = "Für das aktuelle Tagesfenster liegen noch keine Spiele vor.";
    if (matchdayStorylinesEl) matchdayStorylinesEl.innerHTML = "";
    if (skipPlanEl) skipPlanEl.innerHTML = "";
    return;
  }

  const [topHome, topAway] = topMatch.matchTeams;
  const singleLead = isOpeningMatch(topMatch) ? "Eröffnungsspiel" : "Einziges Spiel des Tages";
  dailyBriefingTextEl.textContent = singleMatchDay
    ? `${formatDate(preferences.baseDate)}: ${topHome.name} vs ${topAway.name}. ${singleLead}, Anpfiff ${topMatch.germanyTime} Uhr, einmal bewusst einschalten.`
    : `${formatDate(preferences.baseDate)} + Nacht: ${dailyMatches.length} Spiele, davon ${liveCount} live, ${analysisCount} Analyse, ${skipCount} bewusst auslassen.`;

  commandMetricsEl.innerHTML = (singleMatchDay
    ? [
        ["Anpfiff", topMatch.germanyTime],
        ["Spielwert", topMatch.score],
        ["Empfehlung", getWatchAction(topMatch.category)],
      ]
    : [
        ["Top-Spiel", `${topHome.code}-${topAway.code}`],
        ["Live", liveCount],
        ["Analyse", analysisCount],
        ["Nacht", nightMatches.length],
      ])
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
      <span class="data-badge ${topMatch.category}">${isOpeningMatch(topMatch) ? "Eröffnung" : topMatch.group}</span>
      <span class="watch-label ${getWatchClass(topMatch.category)}">${getWatchLabel(topMatch.category)}</span>
    </div>
    <div class="top-match-main">
      <span>${topHome.code}</span>
      <strong>${topMatch.score}</strong>
      <span>${topAway.code}</span>
    </div>
    <p class="${isNightMatch(topMatch) ? "spoiler-sensitive" : ""}">${getCompactMatchReason(topMatch)}</p>
    <ul class="cue-list">
      ${getThreeWatchCues(topMatch)
        .map((cue) => `<li>${cue}</li>`)
        .join("")}
    </ul>
  `;

  const storylineCard = matchdayStorylinesEl?.closest(".storyline-card");
  if (storylineCard) storylineCard.style.display = singleMatchDay ? "none" : "";
  if (!singleMatchDay) {
    renderMatchdayStorylines(dailyMatches);
  } else if (matchdayStorylinesEl) {
    matchdayStorylinesEl.innerHTML = "";
  }

  const watchPlanCard = watchPlanEl?.closest(".watch-plan-card");
  if (watchPlanCard) watchPlanCard.style.display = singleMatchDay ? "none" : "";
  watchPlanCountEl.textContent = `${watchMatches.length} Empfehlungen`;
  watchPlanEl.innerHTML = watchMatches
    .map((match) => {
      const [home, away] = match.matchTeams;
      return `
        <button class="watch-plan-item ${match.category}" type="button" data-match="${match.id}">
          <span class="watch-time">${match.germanyTime}</span>
          <span class="watch-fixture">
            <strong>${home.code} vs ${away.code}</strong>
            <small class="${isNightMatch(match) ? "spoiler-sensitive" : ""}">${getCompactMatchReason(match)}</small>
            <em>${match.tags.slice(0, 2).join(" · ")}</em>
          </span>
        </button>
      `;
    })
    .join("") || `<p class="empty-copy">Keine Live- oder Analyse-Empfehlung im aktuellen Tagesfenster.</p>`;

  watchPlanEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "today";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  const skipCard = skipPlanEl?.closest(".skip-card");
  if (skipCard) skipCard.style.display = skipMatches.length ? "" : "none";
  skipPlanCountEl.textContent = `${skipMatches.length} Spiele`;
  skipPlanEl.innerHTML =
    skipMatches
      .map((match) => {
        const [home, away] = match.matchTeams;
        return `
          <button class="skip-item" type="button" data-match="${match.id}">
            <span>${match.germanyTime}</span>
            <strong>${home.code} vs ${away.code}</strong>
            <small>${getSkipReasons(match).join(", ")}</small>
          </button>
        `;
      })
      .join("") || `<p class="empty-copy">Heute gibt es keine klaren Spiele zum bewussten Auslassen.</p>`;

  skipPlanEl.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedMatchId = button.dataset.match;
      activeFilter = "today";
      activeCategory = "all";
      renderAllDynamic();
      document.querySelector("#dossier").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  morningCountEl.textContent = `${nightMatches.length} Nachtspiele`;
  const morningCard = morningQueueEl?.closest(".morning-card");
  if (morningCard) morningCard.style.display = nightMatches.length ? "" : "none";
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

  if (isOpeningMatch(match)) {
    return `${home.code}-${away.code} eröffnet die WM. Der sportliche Wert ist nicht maximal, aber Kontext, Atmosphäre und erster Tabellenimpuls reichen für bewusstes Einschalten.`;
  }

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

function getProviderCoverage(field) {
  const sportmonks = providerTests?.providers?.find((provider) => provider.id === "sportmonks");
  return sportmonks?.coverage?.find((item) => item.field === field) || null;
}

function getCoverageStatus(field) {
  const coverage = getProviderCoverage(field);
  if (!coverage) return { label: "offen", detail: "Noch nicht geprüft.", tone: "seed", value: "0/0" };
  return {
    label: coverage.tone === "real" ? "bereit" : coverage.tone === "mixed" ? "teilweise" : "wartet",
    detail: coverage.detail,
    tone: coverage.tone,
    value: `${coverage.count}/${coverage.total}`,
  };
}

function getPreMatchScoutItems(match, home, away) {
  const predictionSummary = match.providerSignal?.predictionSummary;
  const predictionValue = predictionSummary?.preferredOutcome
    ? `${Math.round(Math.max(predictionSummary.preferredOutcome.home, predictionSummary.preferredOutcome.draw, predictionSummary.preferredOutcome.away))}%`
    : "Kontext";
  const prediction = match.providerSignal?.predictionAvailable
    ? {
        label: "Prediction",
        value: predictionValue,
        tone: "real",
        detail: predictionSummary?.preferredOutcome
          ? "Sportmonks liefert konkrete Pre-Match-Wahrscheinlichkeiten; WM Radar zeigt sie als Kontext, nicht als Wahrheit."
          : "Sportmonks liefert ein Prognose-Signal; WM Radar nutzt es nur als kleinen Pre-Match-Impuls.",
      }
    : {
        label: "Prediction",
        value: "ohne Modell",
        tone: "seed",
        detail: "Für dieses Spiel liegt noch kein verwertbarer Modellwert vor.",
      };

  return [
    prediction,
    {
      label: "Anpfiff",
      value: match.germanyTime,
      tone: "real",
      detail: `${match.displayDate} in deutscher Zeit.`,
    },
    {
      label: "Gruppe",
      value: match.group.replace("Gruppe ", ""),
      tone: "real",
      detail: "Erste Tabellenwirkung und mögliche Pfade beginnen hier.",
    },
    {
      label: "Ort",
      value: match.venue.split(" ")[0],
      tone: "mixed",
      detail: match.venue,
    },
  ];
}

function getOutcomeLeader(outcome, home, away) {
  if (!outcome) return null;
  const rows = [
    { label: home.code, value: outcome.home },
    { label: "X", value: outcome.draw },
    { label: away.code, value: outcome.away },
  ].sort((a, b) => b.value - a.value);
  return rows[0];
}

function renderPredictionSummary(match, home, away) {
  const summary = match.providerSignal?.predictionSummary;
  if (!summary?.preferredOutcome && !summary?.topScores?.length) return "";

  const outcome = summary.preferredOutcome;
  const leader = getOutcomeLeader(outcome, home, away);
  const outcomeRows = outcome
    ? [
        [home.code, outcome.home],
        ["Remis", outcome.draw],
        [away.code, outcome.away],
      ]
    : [];

  return `
    <div class="prediction-panel">
      <div class="prediction-panel-head">
        <div>
          <strong>Sportmonks Prediction</strong>
          <small>${summary.modelCount} Modellmärkte · Pre-Match</small>
        </div>
        ${leader ? `<span>${leader.label} ${leader.value}%</span>` : ""}
      </div>
      ${
        outcomeRows.length
          ? `<div class="prediction-outcome-grid">
              ${outcomeRows
                .map(
                  ([label, value]) => `
                    <span>
                      <strong>${label}</strong>
                      <em>${value}%</em>
                      <i style="--prediction: ${value}"></i>
                    </span>
                  `,
                )
                .join("")}
            </div>`
          : ""
      }
      ${
        summary.topScores?.length
          ? `<div class="prediction-scorelines">
              <strong>Wahrscheinlichste Scorelines</strong>
              <div>
                ${summary.topScores
                  .map((item) => `<span><em>${item.score}</em><small>${item.value}%</small></span>`)
                  .join("")}
              </div>
            </div>`
          : ""
      }
      <p>Die Prediction ist ein Pre-Match-Anker. Aufstellung, Spielbild und Live-Daten können sie sofort überstimmen.</p>
    </div>
  `;
}

function renderPreMatchScout(match, home, away) {
  const scoutItems = getPreMatchScoutItems(match, home, away);
  const scoutChecks = [
    "Erste 15 Minuten: Zugriff im Zentrum und Restverteidigung beobachten.",
    `Bei ${home.code} auf Heimdruck und frühe Standards achten; bei ${away.code} auf Konterfenster.`,
    "Prediction nur als Kontext nutzen, nicht als Wahrheit: Das Spielbild bleibt wichtiger.",
    "Bei Fokus-Teams: Schlüsselfiguren mit Rolle, Position und Erwartungsdruck abgleichen.",
  ];

  return `
    <div class="insight-card pre-match-scout-card">
      <span class="briefing-kicker">Vor dem Spiel</span>
      <div class="scout-head">
        <h3>Was wir vor Anpfiff wissen</h3>
        <span class="data-badge ${match.providerSignal ? "mixed" : "seed"}">Sportmonks</span>
      </div>
      <p>
        ${home.name} vs ${away.name}: Die Vorschau verbindet Prognose, Kontext und konkrete Beobachtungspunkte,
        damit aus dem Vorbericht ein klarer Tagesplan wird.
      </p>
      <div class="scout-signal-grid">
        ${scoutItems
          .map(
            (item) => `
              <span class="${item.tone}">
                <strong>${item.label}</strong>
                <em>${item.value}</em>
                <small>${item.detail}</small>
              </span>
            `,
          )
          .join("")}
      </div>
      ${renderPredictionSummary(match, home, away)}
      <div class="scout-checklist">
        <strong>Worauf du achten solltest</strong>
        <ul class="cue-list">
          ${scoutChecks.map((check) => `<li>${check}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
}

function getPostMatchReport(match, result) {
  return postMatchReportByMatchId.get(match.id) || {
    matchId: match.id,
    status: "draft",
    result: {
      homeGoals: Number(result.homeGoals),
      awayGoals: Number(result.awayGoals),
      resultLine: getResultLabel(result) || "Endstand erfasst",
      source: result.source || "unknown",
      updatedAt: result.updatedAt || null,
    },
    summary: `${getResultLabel(result) || "Endstand erfasst"}. Ergebnis ist synchronisiert; detaillierte Provider-Metriken und Video-Review stehen noch aus.`,
    metrics: [],
    patterns: [
      {
        label: "Providerdaten nachziehen",
        note: "xG, Schussqualität, Druckphasen und Eventdaten ergänzen, sobald sie verlässlich verfügbar sind.",
      },
      {
        label: "Pre-Match-Annahme prüfen",
        note: "War der vorher stärkste Treiber im Spielbild wirklich sichtbar oder nur ein Modellartefakt?",
      },
    ],
    recommendationAudit: {
      preMatchScore: match.score,
      postMatchScore: match.score,
      preRecommendation: match.category,
      verdict: "Review offen",
      learning: "Das Ergebnis ist da; die qualitative Auswertung braucht noch Metriken oder Video-Review.",
    },
    analystNotes: ["Automatischer Fallback, bis ein Post-Match-Report generiert wurde."],
  };
}

function getMetricLabel(metric) {
  if (metric.label) return metric.label;
  const labels = {
    shotVolume: "Schussbild",
    territory: "Territorium",
    possession: "Ballbesitz",
    chanceQualityProxy: "Grosschancen",
    pressure: "Pressure Index",
    discipline: "Disziplin",
  };
  return labels[metric.id] || metric.id;
}

function getPostMatchRecommendationLabel(score, match) {
  return getWatchLabel(getRecommendation(score, match));
}

function getHumanVerdict(audit, match) {
  const preLabel = getWatchLabel(audit.preRecommendation || match.category);
  const postLabel = getPostMatchRecommendationLabel(audit.postMatchScore ?? match.score, match);
  if (preLabel === postLabel) return `${preLabel} bleibt plausibel`;
  return `${preLabel} -> ${postLabel}`;
}

function getResultFactLine(match, home, away, result) {
  const homeGoals = Number(result.homeGoals);
  const awayGoals = Number(result.awayGoals);
  if (!Number.isFinite(homeGoals) || !Number.isFinite(awayGoals)) {
    return "Endstand ist erfasst, aber noch nicht vollstaendig lesbar.";
  }
  if (homeGoals === awayGoals) {
    return `${home.code}-${away.code} endet ${homeGoals}:${awayGoals}. Beide Teams nehmen einen Punkt mit.`;
  }
  const winner = homeGoals > awayGoals ? home : away;
  const loser = homeGoals > awayGoals ? away : home;
  return `${winner.name} gewinnt ${homeGoals}:${awayGoals} gegen ${loser.name} und nimmt drei Punkte mit.`;
}

function getGroupImpactLine(match, result) {
  const impact = getFinalMatchImpact(match, result);
  if (!impact) return "Die Tabellenwirkung wird berechnet, sobald ein belastbarer Endstand vorliegt.";

  return `${impact.home.name}: ${impact.homePoints} Punkte, Tordifferenz ${formatSignedGoalDifference(
    impact.homeGoalDifference,
  )}. ${impact.away.name}: ${impact.awayPoints} Punkte, Tordifferenz ${formatSignedGoalDifference(
    impact.awayGoalDifference,
  )}.`;
}

function getUnavailableMetricLabels(metrics) {
  const metricIds = metrics.length ? metrics.map((metric) => metric.id) : ["shotVolume", "territory", "pressure"];
  return metricIds.map((id) => getMetricLabel({ id }));
}

function formatMetricValue(value, unit = "") {
  if (value === null || value === undefined || value === "") return "offen";
  return `${value}${unit}`;
}

function renderPostMatchMetrics(metrics) {
  if (!metrics.length) {
    return `<p>Aktuell liegt nur der Endstand vor. Sobald Sportmonks Statistik-, Event- oder Pressure-Daten liefert, wird diese Karte automatisch zur Spielanalyse.</p>`;
  }

  return `
    <div class="metric-list post-match-facts">
      ${metrics
        .map(
          (metric) => `
            <div class="metric-row comparison-row">
              <span>${getMetricLabel(metric)}</span>
              <span class="metric-track"><span class="metric-fill" style="width: ${metric.value}%"></span></span>
              <strong>${formatMetricValue(metric.homeValue, metric.unit)}:${formatMetricValue(metric.awayValue, metric.unit)}</strong>
              ${metric.note ? `<small>${metric.note}</small>` : ""}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function renderTimelineEvent(event) {
  return `
    <li>
      <strong>${event.minute || ""} ${event.type || "Event"}</strong>
      <span>${event.player || "Unbekannt"}${event.relatedPlayer ? `, Assist: ${event.relatedPlayer}` : ""}${
        event.result ? ` (${event.result})` : ""
      }${event.info ? ` · ${event.info}` : ""}</span>
    </li>
  `;
}

function renderPostMatchTimeline(report) {
  const timeline = report.timeline || [];
  if (!timeline.length) {
    return `<p>Der Provider liefert fuer dieses Spiel noch keine verwertbare Ereignis-Timeline.</p>`;
  }

  return `<ol class="trigger-list event-timeline">${timeline.map(renderTimelineEvent).join("")}</ol>`;
}

function renderAnalysisPatterns(report) {
  const patterns = report.patterns || [];
  if (!patterns.length) {
    return `<p>Noch kein belastbares Muster erkannt.</p>`;
  }

  return `
    <ol class="trigger-list">
      ${patterns.map((pattern) => `<li><strong>${pattern.label}:</strong> ${pattern.note}</li>`).join("")}
    </ol>
  `;
}

function getCoverageTags(report) {
  const coverage = report.dataCoverage || {};
  return [
    coverage.statistics ? "Statistiken synchronisiert" : "Statistiken offen",
    coverage.events ? "Events synchronisiert" : "Events offen",
    coverage.pressure ? "Pressure synchronisiert" : "Pressure offen",
    coverage.xg ? "xG synchronisiert" : "xG nicht geliefert",
  ];
}

function renderPostMatchDossier(match, home, away, result) {
  const report = getPostMatchReport(match, result);
  const audit = report.recommendationAudit || {};
  const resultLine = report.result?.resultLine || getResultLabel(result) || "Endstand erfasst";
  const metrics = report.metrics || [];
  const hasAnalysis = metrics.length || (report.timeline || []).length || (report.patterns || []).length;

  return `
    <div class="insight-card tactical-briefing post-match-summary">
      <span class="briefing-kicker">Nach dem Spiel</span>
      <h3>${resultLine}</h3>
      <p>${report.summary || getResultFactLine(match, home, away, result)}</p>
      <div class="briefing-tags">
        <span>Quelle: ${report.result?.source || result.source || "Sportmonks"}</span>
        <span>${hasAnalysis ? "Analyse synchronisiert" : "Endstand synchronisiert"}</span>
        <span>Update: ${report.result?.updatedAt ? new Date(report.result.updatedAt).toLocaleString("de-DE", { dateStyle: "short", timeStyle: "short" }) : "offen"}</span>
      </div>
    </div>
    <div class="insight-card score-signals post-match-metrics">
      <span class="briefing-kicker">Spielbild</span>
      <h3>Was die Providerdaten zeigen</h3>
      ${renderPostMatchMetrics(metrics)}
      <div class="briefing-tags">
        ${getCoverageTags(report).map((label) => `<span>${label}</span>`).join("")}
      </div>
    </div>
    <div class="insight-card trigger-card post-match-patterns">
      <span class="briefing-kicker">Schlüsselereignisse</span>
      <h3>Wann das Spiel gekippt ist</h3>
      ${renderPostMatchTimeline(report)}
    </div>
    <div class="insight-card decision-card post-match-audit">
      <span class="briefing-kicker">Analyse-Fazit</span>
      <h3>Was daraus folgt</h3>
      ${renderAnalysisPatterns(report)}
    </div>
    <div class="insight-card profile-insight">
      <span class="briefing-kicker">Tabellenwirkung</span>
      <h3>Was das Ergebnis verändert</h3>
      <p>${getGroupImpactLine(match, result)}</p>
      <p>${match.groupModel ? match.groupModel.pathNote : "Die Pfadwirkung wird mit weiteren Ergebnissen klarer."}</p>
    </div>
    <details class="dossier-depth">
      <summary>
        <span>Pre-Match-Annahmen anzeigen</span>
        <small>Nur zur Nachkontrolle, nicht als aktuelle Auswertung.</small>
      </summary>
      <div class="insight-grid depth-grid">
        <div class="insight-card">
          <span class="briefing-kicker">Vorherige These</span>
          <h3>Was vor Anpfiff erwartet wurde</h3>
          <p>${getDossierBriefing(match, home, away)}</p>
        </div>
        <div class="insight-card">
          <span class="briefing-kicker">Kalibrierung</span>
          <h3>Was aus der Empfehlung gelernt wird</h3>
          <p>${getHumanVerdict(audit, match)}. ${audit.learning || "Die Pre-Match-Logik wird gegen Ergebnis und Providerdaten geprüft."}</p>
        </div>
      </div>
    </details>
  `;
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
      ? ["sportmonks-primary", "sportmonks-advanced", "sportmonks-live"]
      : match.signals.importance >= 70
        ? ["sportmonks-primary", "sportmonks-live", "sportmonks-advanced"]
        : ["sportmonks-primary", "sportmonks-live"];

  return pillarIds
    .map((id) => analystSources.pillars.find((pillar) => pillar.id === id))
    .filter(Boolean);
}

function getEvidenceVoices(match) {
  const voiceIds =
    match.signals.tactical >= 70
      ? ["athletic-tactics", "spielverlagerung", "coaches-voice"]
      : match.hasFocusTeam
        ? ["athletic-tactics", "coaches-voice", "spielverlagerung"]
        : ["total-football-analysis", "athletic-tactics", "coaches-voice"];

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
        const result = getMatchResult(match);
        const resultLabel = getResultLabel(result);
        const finalMatch = isFinalResult(result);
        const displayScore = getMatchCardScore(match, result);
        const displayScoreTone = getScoreTone(displayScore);
        const cardSignals = getMatchCardSignals(match, result);

        return `
          <button class="match-card ${active} ${match.category} ${finalMatch ? "final" : ""}" type="button" data-match="${match.id}">
            <span class="match-main">
              <span class="match-card-topline">
                <span class="match-state">
                  <span class="state-dot"></span>
                  ${getMatchCardState(match, result)}
                </span>
                ${
                  resultLabel
                    ? `<span class="result-badge ${getResultTone(result)}">${resultLabel}</span>`
                    : ""
                }
              </span>
              <span class="teams">
                <span class="team-side">${renderFlag(home)}<strong>${home.code}</strong><small>${home.name}</small></span>
                <span class="versus">vs</span>
                <span class="team-side away"><strong>${away.code}</strong>${renderFlag(away)}<small>${away.name}</small></span>
              </span>
              <span class="match-signal-strip">
                ${cardSignals.map((signal) => `<span><strong>${signal.value}</strong> ${signal.label}</span>`).join("")}
              </span>
              <p class="match-reason">${getMatchCardReason(match, result)}</p>
              <span class="match-tags">
                  ${match.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
                </span>
            </span>
            <span class="match-score ${displayScoreTone}">
              <span class="score-ring ${displayScoreTone}" style="--score: ${displayScore}">
                <span>${displayScore}</span>
              </span>
              <span class="watch-label ${getMatchCardWatchClass(match, result)}">${getMatchCardWatchLabel(match, result)}</span>
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
  const selectedResult = getMatchResult(selectedMatch);
  const selectedResultLabel = getResultLabel(selectedResult);
  const isFinalMatch = selectedResult?.status === "final";
  const postMatchReport = isFinalMatch ? getPostMatchReport(selectedMatch, selectedResult) : null;
  dossierTitleEl.textContent = `${home.name} vs ${away.name}`;
  dossierTitleEl.closest(".dossier").dataset.recommendation = selectedMatch.category;
  const dossierScore = postMatchReport?.recommendationAudit?.postMatchScore ?? selectedMatch.score;
  dossierScoreEl.style.setProperty("--score", dossierScore);
  dossierScoreEl.className = `score-ring ${getScoreTone(dossierScore)}`;
  dossierScoreEl.querySelector("span").textContent = dossierScore;
  pitchModeEl.textContent = isFinalMatch ? "Nachspiel-Audit" : selectedMatch.tags[1] || "Taktik";
  const pitchCard = pitchModeEl.closest(".pitch-card");
  if (pitchCard) pitchCard.hidden = isFinalMatch;
  const keyBattle = getKeyBattle(home, away);
  const tacticalTriggers = getTacticalTriggers(selectedMatch, home, away);
  const decisionMatrix = getDecisionMatrix(selectedMatch);
  const evidencePillars = getEvidencePillars(selectedMatch);
  const evidenceVoices = getEvidenceVoices(selectedMatch);

  dossierMetaEl.innerHTML = [
    `${selectedMatch.displayDate}`,
    `${selectedMatch.germanyTime} Deutschland`,
    selectedMatch.venue,
    selectedMatch.state,
    selectedMatch.group,
    selectedResultLabel,
  ]
    .filter(Boolean)
    .map((item) => `<span class="meta-pill">${item}</span>`)
    .join("");

  if (isFinalMatch) {
    insightGridEl.innerHTML = renderPostMatchDossier(selectedMatch, home, away, selectedResult);
    return;
  }

  insightGridEl.innerHTML = `
    <div class="insight-card tactical-briefing">
      <span class="briefing-kicker">Analysten-Story</span>
      <h3>Spiel in einem Satz</h3>
      <p>${getDossierBriefing(selectedMatch, home, away)}</p>
      <div class="briefing-tags">
        <span>${selectedMatch.driver}</span>
        <span>${getWatchLabel(selectedMatch.category)}</span>
        <span>Weiterkommen ${selectedMatch.pathImpact}</span>
      </div>
    </div>
    <div class="insight-card key-battle-card">
      <span class="briefing-kicker">Schlüsselduell</span>
      <h3>${keyBattle.title}</h3>
      <div class="battle-board">
        <span><strong>${home.code}</strong>${keyBattle.left}</span>
        <em>gegen</em>
        <span><strong>${away.code}</strong>${keyBattle.right}</span>
      </div>
    </div>
    ${renderPreMatchScout(selectedMatch, home, away)}
    <div class="insight-card trigger-card">
      <span class="briefing-kicker">Frühe Signale</span>
      <h3>Woran du früh erkennst, ob es kippt</h3>
      <ol class="trigger-list">
        ${tacticalTriggers.map((trigger) => `<li>${trigger}</li>`).join("")}
      </ol>
    </div>
    <div class="insight-card decision-card">
      <span class="briefing-kicker">Empfehlung</span>
      <h3>Live, Analyse oder auslassen?</h3>
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
    <details class="dossier-depth">
      <summary>
        <span>Mehr Analyse anzeigen</span>
        <small>Teamduell, Risiken, Quellenanker und Entscheidungsmatrix.</small>
      </summary>
      <div class="insight-grid depth-grid">
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
    <div class="insight-card profile-insight">
      <span class="briefing-kicker">Teamduell</span>
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
      <h3>Welche Quellen tragen die Einordnung?</h3>
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
    <div class="insight-card analyst-voice-card">
      <span class="briefing-kicker">Seriöse Stimmen</span>
      <h3>Welche Stimmen lohnen sich danach?</h3>
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
      </div>
    </details>
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
          <p class="team-score-note">Diese Zahl zeigt, wie aufmerksam WM Radar ${team.name} im Turnier beobachten soll.</p>
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
              <small>${figures.length} Schlüsselfiguren · Rollen und Druckpunkte</small>
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

function renderAllDynamic() {
  renderDailyCommandCenter();
  renderTournamentSnapshot();
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
  renderTournamentSnapshot();
  renderGroupPaths();
  renderStandings();
  renderControlStats();
  renderSummary();
  renderMatches();
  renderDossier();
  renderScoreImpact();
}

function setupSpoilerMode() {
  spoilerToggle.addEventListener("click", () => {
    const enabled = document.body.classList.toggle("spoiler-mode");
    spoilerToggle.setAttribute("aria-pressed", String(enabled));
    spoilerToggle.querySelector("strong").textContent = enabled ? "aktiv" : "frei";
  });
}

function setupViewNavigation() {
  if (!zoneLinks.length || !viewPanels.length) return;
  const viewByHash = new Map();
  viewPanels.forEach((panel) => {
    panel.querySelectorAll("[id]").forEach((element) => {
      viewByHash.set(`#${element.id}`, panel.dataset.view);
    });
  });
  viewByHash.set("#matches", "today");
  viewByHash.set("#games", "games");
  viewByHash.set("#matchList", "games");
  viewByHash.set("#tournament", "tournament");

  const setActiveZone = (activeView) => {
    zoneLinks.forEach((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      const view = target?.closest("[data-view]")?.dataset.view || "today";
      const isActive = view === activeView;
      link.classList.toggle("is-active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const showView = (view, options = {}) => {
    const nextView = viewPanels.some((panel) => panel.dataset.view === view) ? view : "today";
    viewPanels.forEach((panel) => {
      panel.hidden = panel.dataset.view !== nextView;
    });
    setActiveZone(nextView);
    document.body.dataset.activeView = nextView;

    if (options.hash) history.replaceState(null, "", options.hash);
    if (options.scrollTarget) {
      options.scrollTarget.scrollIntoView({ behavior: options.instant ? "auto" : "smooth", block: "start" });
    }
  };

  const navigateToHash = (hash, instant = false) => {
    if (!hash || hash === "#top") {
      showView("today", { hash: "#top", scrollTarget: document.querySelector("#top"), instant });
      return;
    }

    const view = viewByHash.get(hash) || "today";
    const scrollTarget = hash === "#games" ? document.querySelector("#matchList") : document.querySelector(hash);
    showView(view, { hash, scrollTarget, instant });
  };

  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      event.preventDefault();
      navigateToHash(hash);
    });
  });

  navigateToHash(window.location.hash || "#matches", true);
}

function setupPwa() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  }
}

renderFocusTeams();
renderBracket();
renderSurpriseRadar();
renderAllDynamic();
renderTeamLab();
renderKeyFigures();
setupSpoilerMode();
setupViewNavigation();
setupPwa();
