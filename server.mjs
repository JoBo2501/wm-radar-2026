import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { extname, join, normalize, resolve } from "node:path";
import { createServer } from "node:http";

const root = resolve(".");
const port = Number(process.env.PORT || 5173);

const types = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
};

function send(res, status, message) {
  res.writeHead(status, { "content-type": "text/plain; charset=utf-8" });
  res.end(message);
}

createServer(async (req, res) => {
  const url = new URL(req.url || "/", `http://localhost:${port}`);
  const route =
    url.pathname === "/"
      ? "index.html"
      : normalize(decodeURIComponent(url.pathname))
          .replace(/^[/\\]+/, "")
          .replace(/^(\.\.[/\\])+/, "");
  const filePath = resolve(join(root, route));

  const fileStat = existsSync(filePath) ? await stat(filePath) : null;
  if (!filePath.startsWith(root) || !fileStat || fileStat.isDirectory()) {
    send(res, 404, "Not found");
    return;
  }

  res.writeHead(200, {
    "cache-control": "no-store",
    "content-type": types[extname(filePath)] || "application/octet-stream",
  });
  createReadStream(filePath)
    .on("error", () => send(res, 500, "Could not read file"))
    .pipe(res);
}).listen(port, () => {
  console.log(`WM Radar 26 listening on http://localhost:${port}`);
});
