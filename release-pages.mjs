import { spawn } from "node:child_process";
import { readFileSync } from "node:fs";

function hasFlag(name) {
  return process.argv.includes(`--${name}`);
}

function getArg(name, fallback) {
  const prefix = `--${name}=`;
  const match = process.argv.find((arg) => arg.startsWith(prefix));
  return match ? match.slice(prefix.length) : fallback;
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
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

async function main() {
  const shouldCommit = hasFlag("commit");
  const shouldPush = hasFlag("push");
  const message = getArg("message", `Update WM Radar data ${new Date().toISOString().slice(0, 10)}`);

  await run("node", ["normalize-fixtures.mjs"]);
  await run("node", ["validate-schedule.mjs"]);
  await run("node", ["sync-results.mjs"]);
  await run("node", ["validate-results.mjs"]);
  await run("node", ["build-data.mjs"]);
  await run("node", ["build-standalone.mjs"]);
  await run("node", ["build-pages.mjs"]);

  const results = readJson("data/results.json");
  const validation = readJson("data/result-validation.json");
  console.log("");
  console.log("Release bundle ready.");
  console.log(`Quelle: ${results.sourceLabel || results.activeSource}`);
  console.log(
    `Provider-Matches: ${results.summary?.providerMatches ?? 0} | Final: ${results.summary?.final ?? 0} | Live: ${
      results.summary?.live ?? 0
    } | Issues: ${validation.issues?.unknownMatches?.length ?? 0}`,
  );

  if (shouldCommit || shouldPush) {
    await run("git", ["add", "."]);
    await run("git", ["commit", "-m", message]);
  }

  if (shouldPush) {
    await run("git", ["push"]);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
