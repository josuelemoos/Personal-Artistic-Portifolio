const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const docPath = path.join(root, "docs", "PROJECT.md");
const outputPath = path.join(root, "scripts", "content.js");

const doc = fs.readFileSync(docPath, "utf8");
const match = doc.match(
  /<!-- SITE_DATA_START -->\s*([\s\S]*?)\s*<!-- SITE_DATA_END -->/
);

if (!match) {
  throw new Error("SITE_DATA block not found in docs/PROJECT.md.");
}

let data;

try {
  data = JSON.parse(match[1]);
} catch (error) {
  console.error("The JSON inside SITE_DATA has an error:");
  console.error(error.message);
  process.exit(1);
}

const output = `window.PORTFOLIO_DATA = ${JSON.stringify(data, null, 2)};\n`;

fs.writeFileSync(outputPath, output, "utf8");
console.log(`Content synchronized to ${path.relative(root, outputPath)}.`);
