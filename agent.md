# Agent Notes

## Repeated Audit Checks

When working on case data, evidence links, claims, or assessment coverage, prefer the repository scripts below before doing equivalent checks manually.

```bash
node tools/check-evidence-urls.mjs
node tools/report-case-balance.mjs
node tools/check-assessment-coverage.mjs
```

- Use `tools/check-evidence-urls.mjs` for evidence URL reachability before manually testing individual links.
- Use `tools/report-case-balance.mjs` to inspect support/counter-evidence balance before manually counting claim links.
- Use `tools/check-assessment-coverage.mjs` to inspect blank assessment cells and `assessmentCoverage` before manually reviewing the matrix.
- Use `tools/check-assessment-coverage.mjs --verbose` when the exact blank cells are needed.
- Use `tools/check-assessment-coverage.mjs --strict` only when unexplained blank cells should fail the run.

Keep these scripts as the first pass for repeated checking. Manual review should focus on interpretation, source quality, and decisions the scripts cannot make.

## Objective Subagent Review

At implementation milestones, simulate one or more fresh reviewers with distinct roles such as UI designer, senior engineer, data auditor, or methodology reviewer.

Use this review as an objective second pass, not as a substitute for repository checks. The simulated reviewers should:

- Review the current code and data as if they did not participate in the implementation.
- Prioritize concrete risks, missing evidence, unclear UI states, regression potential, and test gaps.
- Tie findings to files, data fields, commands, or visible UI behavior where possible.
- Avoid generic approval. If no issue is found, state the remaining risk or verification limit.
- Convert actionable findings into either immediate fixes or explicit follow-up tasks.

Run this especially after changes to UI rendering, evidence links, rating readiness, schema validation, or case methodology.

## Context Reset Handoff

When the session becomes long enough that performance may degrade, before progress reaches roughly 30-40% of the practical context budget, prepare a handoff note summarizing the current state.

The handoff note should include:

- Current objective
- Completed work
- Changed files
- Verified commands and results
- Remaining tasks
- Next commands to run
- Design principles and cautions to preserve

After preparing the handoff note, propose a session reset such as `/clear` to the user.
