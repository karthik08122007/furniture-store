import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "dist");
const port = 5173;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
};

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const cleanPath = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    const requestedFile = cleanPath === "/" ? "index.html" : cleanPath.slice(1);
    let filePath = join(root, requestedFile);

    try {
      const bytes = await readFile(filePath);
      response.writeHead(200, { "Content-Type": contentTypes[extname(filePath)] || "application/octet-stream" });
      response.end(bytes);
    } catch {
      filePath = join(root, "index.html");
      const bytes = await readFile(filePath);
      response.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      response.end(bytes);
    }
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    response.end(error instanceof Error ? error.message : "Server error");
  }
}).listen(port, "127.0.0.1", () => {
  console.log(`Furniture store site running at http://127.0.0.1:${port}`);
});
