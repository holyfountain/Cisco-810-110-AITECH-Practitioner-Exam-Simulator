import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const workspaceRoot = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(workspaceRoot, "app.js");

function formatTimestamp(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}-${hours}-${minutes}`;
}

const source = fs.readFileSync(appJsPath, "utf8");
const nextTimestamp = formatTimestamp(new Date());
const nextSource = source.replace(
  /const APP_LAST_UPDATED = "[0-9]{4}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}";/,
  `const APP_LAST_UPDATED = "${nextTimestamp}";`
);

if (nextSource !== source) {
  fs.writeFileSync(appJsPath, nextSource, "utf8");
  process.stdout.write(`Updated APP_LAST_UPDATED to ${nextTimestamp}\n`);
}