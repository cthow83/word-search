// check-coverage.js
// This script checks the coverage/coverage-final.json file and fails if any global threshold is not met.

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import process from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const thresholds = {
  lines: 100,
  statements: 100,
  functions: 100,
  branches: 100,
};

const coveragePath = path.join(__dirname, "coverage", "coverage-final.json");

if (!fs.existsSync(coveragePath)) {
  console.error("Coverage summary file not found:", coveragePath);
  process.exit(1);
}

const coverage = JSON.parse(fs.readFileSync(coveragePath, "utf-8"));

// Aggregate coverage across all files
const metrics = {
  lines: { covered: 0, total: 0 },
  statements: { covered: 0, total: 0 },
  functions: { covered: 0, total: 0 },
  branches: { covered: 0, total: 0 },
};

for (const file of Object.values(coverage)) {
  if (!file.s || !file.f || !file.b) continue;
  // Statements
  metrics.statements.covered += Object.values(file.s).filter(
    (v) => v > 0,
  ).length;
  metrics.statements.total += Object.values(file.s).length;
  // Functions
  metrics.functions.covered += Object.values(file.f).filter(
    (v) => v > 0,
  ).length;
  metrics.functions.total += Object.values(file.f).length;
  // Branches
  metrics.branches.covered += Object.values(file.b)
    .flat()
    .filter((v) => v > 0).length;
  metrics.branches.total += Object.values(file.b).flat().length;
  // Lines (approximate: use statements as lines)
  metrics.lines.covered += Object.values(file.s).filter((v) => v > 0).length;
  metrics.lines.total += Object.values(file.s).length;
}

let failed = false;
for (const [metric, threshold] of Object.entries(thresholds)) {
  const { covered, total } = metrics[metric];
  const pct = total === 0 ? 100 : (covered / total) * 100;
  if (pct < threshold) {
    console.error(
      `Coverage for ${metric} is ${pct.toFixed(2)}%, which is below the required ${threshold}%.`,
    );
    failed = true;
  } else {
    console.log(
      `Coverage for ${metric} is ${pct.toFixed(2)}% (required: ${threshold}%)`,
    );
  }
}
if (failed) {
  process.exit(1);
} else {
  console.log("All coverage thresholds met.");
}
