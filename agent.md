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
