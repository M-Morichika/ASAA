import { cases } from "../data/cases/index.js";

const timeoutMs = Number.parseInt(process.env.URL_CHECK_TIMEOUT_MS || "15000", 10);

function withTimeout(signal, ms) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(new Error(`timeout after ${ms}ms`)), ms);
  if (signal) {
    signal.addEventListener("abort", () => controller.abort(signal.reason), { once: true });
  }
  return { signal: controller.signal, clear: () => clearTimeout(timer) };
}

async function fetchStatus(url) {
  const headers = { "user-agent": "ASAA-evidence-url-check/1.0" };
  const attempts = [
    { method: "HEAD", headers },
    { method: "GET", headers: { ...headers, range: "bytes=0-0" } },
  ];

  let lastError = null;
  for (const attempt of attempts) {
    const timeout = withTimeout(null, timeoutMs);
    try {
      const response = await fetch(url, { ...attempt, redirect: "follow", signal: timeout.signal });
      timeout.clear();
      if (attempt.method === "HEAD" && (response.status === 405 || response.status >= 500)) {
        lastError = `${response.status} ${response.statusText}`;
        continue;
      }
      return {
        ok: response.ok || response.status === 401 || response.status === 403,
        accessRestricted: response.status === 401 || response.status === 403,
        method: attempt.method,
        status: response.status,
        statusText: response.statusText,
        finalUrl: response.url,
      };
    } catch (error) {
      timeout.clear();
      lastError = `${error.name}: ${error.message}`;
    }
  }

  return { ok: false, method: "GET", status: "ERR", statusText: lastError || "unknown error", finalUrl: url };
}

const rows = [];
for (const caseData of cases) {
  for (const evidence of caseData.evidence || []) {
    if (!evidence.sourceUrl) {
      rows.push({
        ok: false,
        caseId: caseData.warCase.id,
        evidenceId: evidence.id,
        title: evidence.title,
        status: "MISSING",
        statusText: "sourceUrl is empty",
        sourceUrl: "",
      });
      continue;
    }

    const result = await fetchStatus(evidence.sourceUrl);
    rows.push({
      ...result,
      caseId: caseData.warCase.id,
      evidenceId: evidence.id,
      title: evidence.title,
      sourceUrl: evidence.sourceUrl,
    });
  }
}

const failures = rows.filter((row) => !row.ok);
const restricted = rows.filter((row) => row.accessRestricted);
const reachable = rows.filter((row) => row.ok && !row.accessRestricted);
console.log("=== Evidence URL Check ===");
for (const row of rows) {
  const status = row.accessRestricted ? "WARN" : row.ok ? "OK" : "FAIL";
  console.log(`${status} ${row.status} ${row.caseId} ${row.evidenceId} ${row.title}`);
  if (!row.ok || row.finalUrl !== row.sourceUrl) {
    console.log(`  url: ${row.sourceUrl}`);
    if (row.finalUrl) console.log(`  final: ${row.finalUrl}`);
    if (row.statusText) console.log(`  detail: ${row.statusText}`);
  }
}

if (failures.length > 0) {
  console.error(
    `\nEvidence URL check failed: ${failures.length}/${rows.length} URL(s) unavailable; ${reachable.length} reachable; ${restricted.length} access-restricted`,
  );
  process.exit(1);
}

console.log(
  `\nEvidence URL check ok: ${reachable.length} reachable, ${restricted.length} access-restricted, ${failures.length} unavailable`,
);
