import { cases } from "../data/cases/index.js";

const relationships = ["支持", "反証", "保留"];
const findings = [];

function ids(links) {
  return links.map((link) => link.id).join(", ") || "-";
}

console.log("=== Claim / EvidenceLink Balance ===");

for (const caseData of cases) {
  const links = caseData.evidenceLinks || [];
  const claims = caseData.claims || [];

  console.log(`\n## ${caseData.warCase.id}`);
  console.log("| claimId | type | 支持 | 反証 | 保留 | links |");
  console.log("| --- | --- | ---: | ---: | ---: | --- |");

  for (const claim of claims) {
    const claimLinks = links.filter((link) => link.claimId === claim.id);
    const counts = Object.fromEntries(
      relationships.map((relationship) => [
        relationship,
        claimLinks.filter((link) => link.relationship === relationship).length,
      ]),
    );

    console.log(
      `| ${claim.id} | ${claim.type || "-"} | ${counts["支持"]} | ${counts["反証"]} | ${counts["保留"]} | ${ids(claimLinks)} |`,
    );

    if (claimLinks.length === 0) {
      findings.push({ caseId: caseData.warCase.id, claimId: claim.id, type: "unlinked_claim" });
    } else if (counts["支持"] > 0 && counts["反証"] === 0) {
      findings.push({ caseId: caseData.warCase.id, claimId: claim.id, type: "one_sided_claim" });
    } else if (counts["支持"] === 0 && counts["反証"] > 0) {
      findings.push({ caseId: caseData.warCase.id, claimId: claim.id, type: "unsupported_claim" });
    }
  }
}

if (findings.length > 0) {
  console.error("\nClaim balance findings:");
  for (const finding of findings) {
    console.error(`- ${finding.type}: ${finding.caseId} ${finding.claimId}`);
  }
  process.exit(1);
}

console.log("\nClaim balance ok: all claims have both support and counter evidence links");
