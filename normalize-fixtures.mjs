import { readFileSync, writeFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const fixtures = readJson("data/raw/fixtures.json");
const teams = readJson("data/teams.json");
const groups = readJson("data/groups.json");
const profiles = readJson("data/team-profiles.json");
const overrides = readJson("data/match-overrides.json");

const teamByCode = new Map(teams.map((team) => [team.code, team]));
const groupById = new Map(groups.map((group) => [group.id, group]));
const profileByCode = new Map(profiles.map((profile) => [profile.code, profile]));

function getTimeScore(kickoffGermany) {
  const hour = Number(kickoffGermany.slice(11, 13));
  if (hour >= 18 && hour <= 22) return 94;
  if (hour === 23 || hour === 17) return 78;
  if (hour === 0 || hour === 1) return 48;
  if (hour === 2 || hour === 3) return 28;
  if (hour >= 4 && hour <= 6) return 14;
  return 62;
}

function getTeamValue(team) {
  if (!team) return 48;
  if (team.focus) return team.watchPriority || 92;
  if (team.surprise) return team.watchPriority || 80;
  return team.watchPriority || 55;
}

function getImportance(group, matchTeams, fixture) {
  const focusBoost = matchTeams.some((team) => team.focus) ? 16 : 0;
  const finalDayBoost = fixture.kickoffGermany >= "2026-06-25" ? 9 : 0;
  return clamp(38 + group.pathRelevance * 0.34 + focusBoost + finalDayBoost);
}

function getTactical(matchTeams) {
  const profileCount = matchTeams.filter((team) => profileByCode.has(team.code)).length;
  const profileBoost = profileCount * 10;
  const focusBoost = matchTeams.some((team) => team.focus) ? 7 : 0;
  const surpriseBoost = matchTeams.some((team) => team.surprise) ? 5 : 0;
  return clamp(50 + profileBoost + focusBoost + surpriseBoost);
}

function getEntertainment(matchTeams) {
  const average = matchTeams.reduce((sum, team) => sum + getTeamValue(team), 0) / matchTeams.length;
  const styleBoost = matchTeams.some((team) => team.focus || team.surprise) ? 7 : 0;
  return clamp(average * 0.72 + 24 + styleBoost);
}

function getFocus(matchTeams, group) {
  if (matchTeams.some((team) => team.focus)) return Math.max(...matchTeams.map((team) => getTeamValue(team)));
  if (group.teams.some((code) => teamByCode.get(code)?.focus)) return 72;
  return 24;
}

function getSurprise(matchTeams, group) {
  if (matchTeams.some((team) => team.surprise)) return Math.max(...matchTeams.map((team) => (team.surprise ? getTeamValue(team) : 48)));
  if (group.teams.some((code) => teamByCode.get(code)?.surprise)) return 62;
  return 38;
}

function getLowValueRisk(signals, matchTeams) {
  const focusPresence = matchTeams.some((team) => team.focus || team.surprise);
  const base = 72 - (signals.importance + signals.tactical + signals.entertainment + signals.focus) / 4;
  const focusPenalty = focusPresence ? -8 : 8;
  const timePenalty = signals.time < 30 ? 10 : 0;
  return clamp(base + focusPenalty + timePenalty);
}

function makeDefaultAnalysis(matchTeams, group) {
  const [home, away] = matchTeams;
  const homeProfile = profileByCode.get(home.code);
  const awayProfile = profileByCode.get(away.code);
  const keyCue = homeProfile?.watchCues?.[0] || awayProfile?.watchCues?.[0] || "Score-Signale nach Fokus, Pfad und Uhrzeit beobachten.";
  const riskCue = awayProfile?.dangerAgainst || homeProfile?.weakness || "Low-Value-Risiko entsteht, wenn keine klare taktische Story sichtbar wird.";
  const playerCue = homeProfile?.watchCues?.[1] || awayProfile?.watchCues?.[1] || "Der wichtigste Beobachtungspunkt ist der erste saubere Zugriff im Zentrum.";

  return {
    key: `${home.name} vs ${away.name}: ${keyCue}`,
    risk: riskCue,
    player: playerCue,
    source: `Auto-Modell: aus Teamprofilen, Gruppe ${group.id}, Pfad-Relevanz und Uhrzeit abgeleitet.`,
  };
}

function makeTags(signals, group, matchTeams) {
  const tags = [];
  if (matchTeams.some((team) => team.focus)) tags.push("Fokus-Team");
  if (matchTeams.some((team) => team.surprise)) tags.push("Surprise-Radar");
  if (group.pathRelevance >= 85) tags.push("Pfad-relevant");
  if (signals.tactical >= 78) tags.push("Taktisch spannend");
  if (signals.time <= 30) tags.push("Spoilerfrei");
  return tags.slice(0, 3);
}

const normalized = fixtures.map((fixture) => {
  const group = groupById.get(fixture.group);
  if (!group) throw new Error(`Unknown group ${fixture.group}`);

  const matchTeams = fixture.teams.map((code) => teamByCode.get(code));
  const missing = matchTeams.findIndex((team) => !team);
  if (missing !== -1) throw new Error(`Unknown team ${fixture.teams[missing]}`);

  const dateKey = fixture.kickoffGermany.slice(0, 10);
  const id = `${slug(fixture.teams[0])}-${slug(fixture.teams[1])}-${dateKey}`;
  const signals = {
    importance: getImportance(group, matchTeams, fixture),
    tactical: getTactical(matchTeams),
    entertainment: getEntertainment(matchTeams),
    focus: getFocus(matchTeams, group),
    surprise: getSurprise(matchTeams, group),
    time: getTimeScore(fixture.kickoffGermany),
  };
  signals.lowValueRisk = getLowValueRisk(signals, matchTeams);

  const override = overrides[id] || {};

  return {
    id,
    sourceLevel: fixture.sourceLevel || "mixed",
    fixtureVerified: Boolean(fixture.fixtureVerified),
    analysisLevel: override.analysisLevel || "model",
    scoreSignalsSource: "auto-normalized",
    sourceNote: fixture.sourceNote,
    stage: "group",
    group: `Gruppe ${fixture.group}`,
    kickoffGermany: fixture.kickoffGermany,
    venue: fixture.venue,
    teams: fixture.teams,
    signals,
    tags: override.tags || makeTags(signals, group, matchTeams),
    analysis: override.analysis || makeDefaultAnalysis(matchTeams, group),
  };
});

normalized.sort((a, b) => a.kickoffGermany.localeCompare(b.kickoffGermany) || a.id.localeCompare(b.id));

writeFileSync("data/matches.json", `${JSON.stringify(normalized, null, 2)}\n`, "utf8");
console.log(`Normalized ${normalized.length} fixtures into data/matches.json`);
