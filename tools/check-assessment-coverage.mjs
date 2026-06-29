import { cases } from "../data/cases/index.js";

const strict = process.argv.includes("--strict");
const verbose = process.argv.includes("--verbose");
const validCoverage = new Set([
  "assessed",
  "e0_no_public_trace",
  "in_scope_unassessed",
  "out_of_scope",
  "implementation_pending",
]);

const errors = [];
const warnings = [];
const knownAxes = new Set(
  cases.flatMap((caseData) => (caseData.assessmentCells || []).map((cell) => cell.axis)),
);

function key(axis, phase) {
  return `${axis}\u0000${phase}`;
}

console.log("=== Assessment Coverage Check ===");

for (const caseData of cases) {
  const cells = caseData.assessmentCells || [];
  const coverage = caseData.assessmentCoverage || [];
  const cellAxes = new Set(cells.map((cell) => cell.axis));
  const axes = [...new Set([...cells.map((cell) => cell.axis), ...coverage.map((item) => item.axis)])];
  const phases = [
    ...new Set([
      ...(caseData.phases || []).map((phase) => phase.name),
      ...cells.map((cell) => cell.phase),
      ...coverage.map((item) => item.phase),
    ]),
  ];
  const declaredPhases = new Set((caseData.phases || []).map((phase) => phase.name));
  const cellKeys = new Set(cells.map((cell) => key(cell.axis, cell.phase)));
  const coverageKeys = new Map();

  for (const item of coverage) {
    const itemKey = key(item.axis, item.phase);
    if (coverageKeys.has(itemKey)) {
      errors.push({ type: "duplicate_coverage", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
    }
    coverageKeys.set(itemKey, item);

    if (!validCoverage.has(item.coverage)) {
      errors.push({
        type: "invalid_coverage",
        caseId: caseData.warCase.id,
        axis: item.axis,
        phase: item.phase,
        value: item.coverage,
      });
    }
    if (declaredPhases.size > 0 && !declaredPhases.has(item.phase)) {
      errors.push({ type: "coverage_unknown_phase", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
    }
    if (knownAxes.size > 0 && !knownAxes.has(item.axis)) {
      errors.push({ type: "coverage_unknown_axis", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
    }
    if (cellKeys.has(itemKey) && item.coverage !== "assessed") {
      warnings.push({ type: "coverage_on_existing_cell", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
    }
    if (typeof item.rationale !== "string" || item.rationale.trim() === "") {
      errors.push({ type: "missing_coverage_rationale", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
    }
  }

  const blanks = [];
  for (const axis of axes) {
    for (const phase of phases) {
      const matrixKey = key(axis, phase);
      if (!cellKeys.has(matrixKey)) blanks.push({ axis, phase, coverage: coverageKeys.get(matrixKey) || null });
    }
  }

  const explained = blanks.filter((item) => item.coverage);
  const unexplained = blanks.filter((item) => !item.coverage);
  console.log(
    `- ${caseData.warCase.id}: cells=${cells.length}, blank=${blanks.length}, explained=${explained.length}, unexplained=${unexplained.length}`,
  );

  for (const item of unexplained) {
    warnings.push({ type: "unexplained_blank_cell", caseId: caseData.warCase.id, axis: item.axis, phase: item.phase });
  }
}

if (warnings.length > 0 && verbose) {
  console.log("\nWarnings:");
  for (const warning of warnings) {
    console.log(`- ${warning.type}: ${warning.caseId} ${warning.axis} / ${warning.phase}`);
  }
} else if (warnings.length > 0) {
  console.log("\nWarnings omitted. Re-run with --verbose to list each blank cell.");
}

if (errors.length > 0) {
  console.error("\nAssessment coverage errors:");
  for (const error of errors) {
    console.error(`- ${error.type}: ${error.caseId} ${error.axis} / ${error.phase}${error.value ? ` (${error.value})` : ""}`);
  }
  process.exit(1);
}

if (
  strict &&
  warnings.some((warning) => ["unexplained_blank_cell", "coverage_on_existing_cell"].includes(warning.type))
) {
  console.error("\nAssessment coverage strict check failed: strict warnings remain");
  process.exit(1);
}

const strictNote = strict ? "strict" : "non-strict";
console.log(`\nAssessment coverage check ok (${strictNote}): ${errors.length} error(s), ${warnings.length} warning(s)`);
