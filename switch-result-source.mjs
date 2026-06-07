import { readFileSync, writeFileSync } from "node:fs";

const sourceId = process.argv[2];
if (!sourceId) {
  throw new Error("Bitte Source-ID angeben, z. B. node switch-result-source.mjs football-data");
}

const path = "data/result-sources.json";
const config = JSON.parse(readFileSync(path, "utf8"));
const source = config.sources.find((candidate) => candidate.id === sourceId);
if (!source) {
  throw new Error(`Quelle ${sourceId} nicht gefunden.`);
}

config.activeSource = sourceId;
config.sources = config.sources.map((candidate) => ({
  ...candidate,
  enabled: candidate.id === sourceId || candidate.id === "local-json",
}));

writeFileSync(path, `${JSON.stringify(config, null, 2)}\n`, "utf8");
console.log(`Active result source set to ${source.label}.`);
