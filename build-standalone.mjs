import { readFileSync, writeFileSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const css = readFileSync("styles.css", "utf8");
const data = readFileSync("data.js", "utf8").replace(/<\/script/gi, "<\\/script");
const js = readFileSync("app.js", "utf8").replace(/<\/script/gi, "<\\/script");
const bodyMatch = html.match(
  /<body>([\s\S]*?)<script src="\.\/data\.js(?:\?[^"]*)?" defer><\/script>\s*<script src="\.\/app\.js(?:\?[^"]*)?" defer><\/script>\s*<\/body>/,
);

if (!bodyMatch) {
  throw new Error("Could not find index.html body content.");
}

const standalone = `<!doctype html>
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="WM Radar 26 ist ein persoenliches Analysten-Cockpit fuer die FIFA Fussball-Weltmeisterschaft 2026." />
    <meta name="theme-color" content="#101411" />
    <title>WM Radar 26</title>
    <style>
${css}
    </style>
  </head>
  <body>${bodyMatch[1]}    <script>
${data}
    </script>
    <script>
${js}
    </script>
  </body>
</html>
`;

writeFileSync("WM-Radar-26.html", standalone, "utf8");
console.log("Created WM-Radar-26.html");
