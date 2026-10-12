import fs from "node:fs";
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
const requiredStages = ["Build", "Push", "Provision", "Configure", "Deploy", "Verify"];
const missingStages = requiredStages.filter((stage) => !doc.toLowerCase().includes(stage.toLowerCase()));
if (missingStages.length) {
  console.error("Missing deployment stages:", missingStages.join(", "));
  process.exit(2);
}
if (!/HTTP status: 200/.test(health) || !/Verification result: VERIFIED/.test(health)) {
  console.error("The last captured live health response is not a verified HTTP 200.");
  process.exit(3);
}
console.log("Required deployment log and evidence files are present; health evidence is a verified HTTP 200 response.");
