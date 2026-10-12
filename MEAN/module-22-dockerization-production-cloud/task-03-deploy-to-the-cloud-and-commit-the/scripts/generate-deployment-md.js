const fs = require("node:fs");
const required = [
  "docs/deployment.md",
  "deployment.md",
  "deployment-run.log",
  "capture-evidence.yml",
  "evidence/deployment.md",
  "evidence/health-check.txt",
  "evidence/host-environment.md",
  "evidence/image-push.md"
];
const missing = required.filter((path) => !fs.existsSync(path));
if (missing.length) {
  console.error("Missing task evidence files:", missing.join(", "));
  process.exit(1);
}
const health = fs.readFileSync("evidence/health-check.txt", "utf8");
const doc = fs.readFileSync("docs/deployment.md", "utf8");
const runLog = fs.readFileSync("deployment-run.log", "utf8");
const requiredStages = ["1. Build and validate", "2. Build the versioned container image", "3. Push the versioned container image", "4. Provision the cloud service", "5. Configure host environment", "6. Deploy the application", "7. Verify the live deployment"];
const missingStages = requiredStages.filter((stage) => !doc.toLowerCase().includes(stage.toLowerCase()));
if (missingStages.length) {
  console.error("Missing ordered deployment stages:", missingStages.join(", "));
  process.exit(2);
}
const requiredTimes = [
  "Dependency installation started (UTC):",
  "Dependency installation completed (UTC):",
  "API tests started (UTC):",
  "API tests completed (UTC):",
  "Docker build started (UTC):",
  "Docker build completed (UTC):",
  "Registry push started (UTC):",
  "Registry push completed (UTC):",
  "Provisioned service state/identity verified (UTC):",
  "Blueprint and returned host-configuration values audited (UTC):",
  "Active deployed revision and branch observed (UTC):",
  "Verification completed (UTC):"
];
const missingTimes = requiredTimes.filter((label) => !doc.includes(label));
if (missingTimes.length) {
  console.error("Missing stage timestamps:", missingTimes.join(", "));
  process.exit(3);
}
if (!/Backend URL: https:\/\//.test(health) || !/Checked at \(UTC\): \d{4}-\d\d-\d\dT/.test(health) || !/HTTP status: \d{3}/.test(health) || !/Exact response body:/.test(health)) {
  console.error("Health evidence is missing a real URL, timestamp, HTTP status or response body.");
  process.exit(4);
}
const requiredRunStages = [
  "STEP 1 — BUILD AND TEST",
  "STEP 2 — BUILD CONTAINER IMAGE",
  "STEP 3 — PUSH VERSIONED IMAGE",
  "STEP 4 — PROVISION SERVICE",
  "STEP 5 — CONFIGURE HOST ENVIRONMENT",
  "STEP 6 — DEPLOY",
  "STEP 7 — VERIFY LIVE SERVICE"
];
const missingRunStages = requiredRunStages.filter((stage) => !runLog.includes(stage));
if (missingRunStages.length) {
  console.error("Execution log is missing ordered stages:", missingRunStages.join(", "));
  process.exit(5);
}
console.log("Ordered deployment log, stage timestamps and a real captured health response are present. The live database gate is evaluated separately.");
