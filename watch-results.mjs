import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function getArg(name, fallback) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : fallback;
}

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: "inherit", shell: false });
    child.on("exit", (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${command} ${args.join(" ")} exited with ${code}`));
    });
  });
}

function printStatus() {
  const results = readJson("data/results.json");
  const validation = readJson("data/result-validation.json");
  const stamp = new Date().toLocaleString("de-DE", { dateStyle: "short", timeStyle: "medium" });

  console.log("");
  console.log(`[${stamp}] Ergebnis-Sync`);
  console.log(`Quelle: ${results.sourceLabel || results.activeSource || "unbekannt"}`);
  console.log(
    `Provider-Matches: ${results.summary?.providerMatches ?? 0} | Sync: ${results.summary?.synced ?? 0} | Final: ${
      results.summary?.final ?? 0
    } | Live: ${results.summary?.live ?? 0}`,
  );
  console.log(`Validierung: ${validation.status} | Issues: ${validation.issues?.unknownMatches?.length ?? 0}`);
  console.log(validation.summary);
}

async function runOnce() {
  await run("node", ["sync-results.mjs"]);
  await run("node", ["validate-results.mjs"]);
  await run("node", ["build-data.mjs"]);
  await run("node", ["build-standalone.mjs"]);
  printStatus();
}

const intervalMinutes = Number(getArg("minutes", null)) || readJson("data/results.json").pollMinutes || 10;
let stopped = false;

process.on("SIGINT", () => {
  stopped = true;
  console.log("");
  console.log("Resultat-Poller beendet.");
  process.exit(0);
});

console.log(`WM Radar Ergebnis-Poller gestartet. Intervall: ${intervalMinutes} Minuten. Beenden mit Ctrl+C.`);

while (!stopped) {
  try {
    await runOnce();
  } catch (error) {
    console.error(`Sync-Fehler: ${error.message}`);
  }

  await new Promise((resolve) => setTimeout(resolve, intervalMinutes * 60 * 1000));
}
