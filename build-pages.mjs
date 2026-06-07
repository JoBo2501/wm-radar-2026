import { copyFileSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

const outputDir = "docs";
const files = ["index.html", "styles.css", "app.js", "data.js", "manifest.json", "icon.svg", "sw.js"];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const file of files) {
  copyFileSync(file, `${outputDir}/${file}`);
}

writeFileSync(`${outputDir}/.nojekyll`, "\n", "utf8");
console.log(`Created GitHub Pages bundle in ${outputDir}/ from ${files.length} files`);
