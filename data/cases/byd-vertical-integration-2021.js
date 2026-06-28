const phases = [
  {
    id: "vertical_integration_strategy_emergence",
    name: "垂直統合・EV集中戦略の形成",
    status: "要検証",
    revisionRoom: "中",
    mainIssue: "電池・車両・部品内製を競争優位として使う判断",
    decision: "電池、半導体、車両開発、主要部品の内製力を背景に、新エネルギー車への集中度を高めた。",
    availableInfo: "中国NEV政策、電池コスト低下期待、LFP/Blade Battery、国内需要拡大、Tesla等との競争。",
    alternatives: ["電池外販と車両事業の分離を優先", "HEV/ICEをより長く維持", "EV集中と垂直統合を同時に進める"],
    revisionNote: "垂直統合は供給制約とコスト競争への強い防御になりうる一方、固定費・地域集中・価格競争への露出も大きくする。",
    auditQuestion: "BYDの垂直統合は合理的な能力構築だったのか、地域・価格競争への過集中だったのか。",
    assumptions: [
      { id: "byd_assumption_battery_integration_advantage", type: "電池・供給網", content: "電池と主要部品を内製できれば、EV量産のコスト・供給安定性で優位を持ちうる。", basis: "E3" },
      { id: "byd_assumption_china_nev_scale", type: "市場需要", content: "中国NEV市場の拡大は、EV集中と量産規模の前提になりうる。", basis: "E3" },
    ],
  },
  {
    id: "blade_battery_platform_execution",
    name: "Blade Battery・e-Platform 実行",
    status: "要注意",
    revisionRoom: "中",
    mainIssue: "技術優位と量産実行",
    decision: "Blade Battery と EV専用プラットフォームを中核に、EVの商品力・安全性・コスト競争力を押し出した。",
    availableInfo: "LFP電池の安全性・コスト特性、EV専用プラットフォーム化、国内NEV競争の激化。",
    alternatives: ["三元系電池中心の高性能路線", "外部サプライヤー活用", "複数電池方式の併用"],
    revisionNote: "技術・量産の公開説明は強いが、採算感応度や過剰能力リスクは公開資料だけでは限定的である。",
    auditQuestion: "電池・プラットフォーム内製の優位を、下方シナリオや価格競争まで含めて評価していたか。",
    assumptions: [
      { id: "byd_assumption_blade_battery_scale", type: "技術・量産", content: "Blade Battery は安全性とコスト競争力を両立し、EV量産を支える可能性がある。", basis: "E3" },
      { id: "byd_assumption_platform_efficiency", type: "開発・生産", content: "EV専用プラットフォームは、製品投入速度とコスト低減に寄与しうる。", basis: "E2" },
    ],
  },
  {
    id: "price_competition_overseas_expansion",
    name: "価格競争・海外展開",
    status: "要注意",
    revisionRoom: "中",
    mainIssue: "中国価格競争と海外展開の耐久力",
    decision: "中国市場での規模拡大を土台に、後年は海外展開も強めたが、価格競争と政策・関税リスクが残る。",
    availableInfo: "中国NEV価格競争、輸出拡大、各国政策・関税、ブランド・販売網構築コスト。",
    alternatives: ["中国集中を維持", "海外展開を前倒し", "価格競争より利益率を優先"],
    revisionNote: "後年の輸出拡大と価格競争は検証材料だが、2021年前後の判断を直接証明しない。",
    auditQuestion: "国内価格競争と海外政策リスクを、当初からどこまで織り込んでいたか。",
    assumptions: [
      { id: "byd_assumption_price_competition_risk", type: "競争", content: "中国NEV市場では価格競争が利益率を圧迫しうる。", basis: "E2" },
    ],
  },
  {
    id: "governance_boundary",
    name: "公開資料限界・別ケース境界",
    status: "保留",
    revisionRoom: "低",
    mainIssue: "公開資料監査と内部判断の切り分け",
    decision: "BYDの急成長を、2021年前後の判断監査と後年の市場成否判定に分けて扱う。",
    availableInfo: "公式発表、年次報告、公開市場データ、後年の市場分析。",
    alternatives: ["成功事例として断定", "中国政策依存として否定", "公開資料上の合理性と未検証リスクを併記"],
    revisionNote: "成長実績は重要だが、取締役会・内部投資審査の詳細までは公開資料から断定しない。",
    auditQuestion: "成功実績を過度に使わず、当時の利用可能情報と内部資料不足をどう分けるか。",
    assumptions: [
      { id: "byd_assumption_internal_documents_gap", type: "公開資料限界", content: "内部投資審査や地域別採算判断は公開資料だけでは確認できない。", basis: "E4" },
    ],
  },
];

const assessmentCells = [
  { id: "byd_cell_market_china_nev_demand", axis: "市場需要・地域差の見積もり", phase: "垂直統合・EV集中戦略の形成", status: "要検証", impact: "高", evidenceStrength: "中", opinion: "中国NEV市場の拡大を前提にしたEV集中は説明可能だが、地域集中と需要下振れ時の修正基準はなお検証対象である。", criteria: ["中国NEV需要拡大を評価しているか", "地域集中リスクを扱っているか"], changeConditions: ["地域別需要シナリオ", "中国外市場への依存分散計画"] },
  { id: "byd_cell_policy_regulatory_dependence", axis: "規制・インフラ・政策依存の見積もり", phase: "垂直統合・EV集中戦略の形成", status: "要検証", impact: "中", evidenceStrength: "弱〜中", opinion: "NEV政策は追い風だが、補助金・規制・関税の変動が海外展開と採算に与える影響は公開資料上限定的である。", criteria: ["中国NEV政策依存を説明しているか", "海外政策・関税リスクを扱っているか"], changeConditions: ["主要国政策別の採算シナリオ", "関税・規制変更時の修正基準"] },
  { id: "byd_cell_battery_cost_supply", axis: "電池・供給網・コストの見積もり", phase: "Blade Battery・e-Platform 実行", status: "要検証", impact: "高", evidenceStrength: "中", opinion: "Blade Battery と垂直統合はコスト・供給面の強い仮説になるが、価格競争下の利益率耐久力は追加検証が必要である。", criteria: ["電池内製の優位を説明しているか", "価格競争下の採算感応度があるか"], changeConditions: ["電池コストの感応度資料", "価格競争時の利益率維持策"] },
  { id: "byd_cell_platform_execution", axis: "SDV・ソフトウェア競争の認識", phase: "Blade Battery・e-Platform 実行", status: "要注意", impact: "高", evidenceStrength: "弱", opinion: "e-Platform の公開説明はあるが、SDV・ソフトウェア競争をどこまで戦略中核として評価していたかは未検証である。", criteria: ["EV専用プラットフォームを説明しているか", "ソフトウェア競争の能力評価があるか"], changeConditions: ["SDV開発体制資料", "車両OS・ソフトウェア収益化の説明"] },
  { id: "byd_cell_capital_price_resilience", axis: "資本配分・収益耐久力", phase: "価格競争・海外展開", status: "要注意", impact: "高", evidenceStrength: "弱〜中", opinion: "垂直統合は価格競争への耐久力を高めうるが、過剰能力・値下げ競争・海外投資負担の下方シナリオは限定的である。", criteria: ["価格競争下の利益率を評価しているか", "過剰能力や海外投資負担を扱っているか"], changeConditions: ["車種別採算資料", "海外販売網投資の回収基準"] },
  { id: "byd_cell_governance_disclosure", axis: "ガバナンス・説明責任・修正基準", phase: "公開資料限界・別ケース境界", status: "要検証", impact: "中", evidenceStrength: "弱", opinion: "公開資料では戦略と実績は確認できるが、内部の代替案比較・撤退基準・地域別採算判断は確認しにくい。", criteria: ["代替案比較を公開しているか", "修正基準と撤退基準を示しているか"], changeConditions: ["取締役会・内部投資審査資料", "価格競争・海外展開の撤退基準"] },
];

const assessmentCoverage = [
  { axis: "提携・外部依存・実行能力", phase: "垂直統合・EV集中戦略の形成", coverage: "out_of_scope", rationale: "初期精査では、外部提携ではなく電池・主要部品・車両の内製判断を中心に扱うため。" },
  { axis: "提携・外部依存・実行能力", phase: "Blade Battery・e-Platform 実行", coverage: "out_of_scope", rationale: "BYDケースの初期 skeleton では、提携依存よりも内製・垂直統合の実行能力を中心に見る。" },
  { axis: "提携・外部依存・実行能力", phase: "価格競争・海外展開", coverage: "in_scope_unassessed", rationale: "海外販売網・現地生産・外部販売チャネル依存は評価対象だが、初期追加時点では未評価とする。" },
  { axis: "提携・外部依存・実行能力", phase: "公開資料限界・別ケース境界", coverage: "out_of_scope", rationale: "このフェーズでは公開資料監査の限界を扱い、提携・外部依存の実行能力評価とは分ける。" },
  { axis: "SDV・ソフトウェア競争の認識", phase: "価格競争・海外展開", coverage: "in_scope_unassessed", rationale: "海外展開時の車両OS・ソフトウェア競争力は評価対象だが、初期精査では到達可能な一次資料をまだ確保していない。" },
];

const evidenceAccessScope = { mode: "public_osint", description: "公開資料・公式発表・取引所開示・公開市場データに基づく外部監査。", limitation: "内部投資審査、地域別採算、価格決定、取締役会議論は通常確認できないため、経営陣の実際の認識は断定しない。" };
const uncertaintyReason = ["internal_documents_unavailable", "outcome_not_mature", "evidence_conflicting"];
const intendedUse = { primary: "research_case_study", secondary: ["strategy_training", "investor_due_diligence"], notFor: ["legal_liability_determination", "investment_recommendation", "definitive_management_blame"] };

const evidence = [
  { id: "BYD-E-001", title: "BYD Annual Report 2021", source: "BYD Company Limited / HKEX disclosure, 2022", sourceUrl: "https://www1.hkexnews.hk/listedco/listconews/sehk/2022/0329/2022032902748.pdf", type: "直接資料", collectionState: "HKEX正式URL確認済み", publishedDate: "2022-03-29", coveragePeriod: "2021", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "primary", temporalFit: "near_direct", independence: "issuer_disclosure", decisionMakerAccess: "clear", weight: "high", rationale: "BYD自身の年次報告・取引所開示であり、2021年時点の事業構造と戦略説明に近い資料として使えるため。" } },
  { id: "BYD-E-002", title: "BYD Announces all its Pure EVs Will now Come With Blade Batteries", source: "BYD official news, Apr. 9, 2021", sourceUrl: "https://www.bydglobal.com/sites/Satellite?c=BydArticle&cid=1514440841838&d=Touch&pagename=BYD_EN%2FBydArticle%2FBYD_ENCommon%2FArticleDetails", type: "直接資料", collectionState: "BYD公式URL確認済み", publishedDate: "2021-04-09", coveragePeriod: "2021", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "primary", temporalFit: "direct", independence: "single_source", decisionMakerAccess: "clear", weight: "high", rationale: "BYD自身の2021年公式発表であり、Blade Battery をEV戦略中核に置く当時資料として直接使えるため。" } },
  { id: "BYD-E-003", title: "BYD Launches e-Platform 3.0", source: "BYD official news, Sep. 8, 2021 / Internet Archive", sourceUrl: "http://web.archive.org/web/20260222000149/https://en.byd.com/news/byd-launches-e-platform-3-0-with-the-new-concept-car-ocean-x/", type: "直接資料", collectionState: "正式アーカイブURL確認済み（現行公式URLは403）", publishedDate: "2021-09-08", coveragePeriod: "2021", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "primary", temporalFit: "direct", independence: "single_source", decisionMakerAccess: "clear", weight: "high", rationale: "BYD自身のEV専用プラットフォーム説明であり、当時の技術・商品戦略を示すため。" } },
  { id: "BYD-E-004", title: "IEA Global EV Outlook 2024", source: "International Energy Agency, 2024", sourceUrl: "https://www.iea.org/reports/global-ev-outlook-2024", type: "外部分析", collectionState: "正式URL確認済み", publishedDate: "2024", coveragePeriod: "2021-2024", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "secondary", temporalFit: "post_hoc", independence: "independent_analysis", decisionMakerAccess: "unclear", weight: "medium", rationale: "後年の外部分析であり、価格競争・市場成長の事後対照には使えるが、2021年判断の直接根拠にはしないため。" } },
  { id: "BYD-E-005", title: "BYD Annual Report 2022", source: "BYD Company Limited / HKEX disclosure, 2023", sourceUrl: "https://www1.hkexnews.hk/listedco/listconews/sehk/2023/0328/2023032802305.pdf", type: "直接資料", collectionState: "HKEX正式URL確認済み（燃油車生産停止の公式開示）", publishedDate: "2023-03-28", coveragePeriod: "2022", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "primary", temporalFit: "post_hoc", independence: "issuer_disclosure", decisionMakerAccess: "clear", weight: "medium", rationale: "2022年報で燃油車生産停止を公式開示しており、EV/NEV集中の実行を示すが、2021年判断の直接証拠ではなく事後資料として扱うため。" } },
  { id: "BYD-E-006", title: "BYD 2023 Annual Report", source: "BYD Company Limited / HKEX disclosure, 2024", sourceUrl: "https://www1.hkexnews.hk/listedco/listconews/sehk/2024/0326/2024032602585.pdf", type: "直接資料", collectionState: "HKEX正式URL確認済み", publishedDate: "2024-03-26", coveragePeriod: "2023", authenticity: "高", interpretiveReliability: "中", evidenceWeight: { sourceProximity: "primary", temporalFit: "post_hoc", independence: "issuer_disclosure", decisionMakerAccess: "clear", weight: "medium", rationale: "後年の公式開示であり、海外展開・競争環境の事後対照には使えるが、2021年判断の直接根拠にはしないため。" } },
];

const claims = [
  { id: "byd_claim_vertical_integration_as_advantage", type: "defense_hypothesis", title: "垂直統合はEV量産の合理的な競争優位だった", summary: "電池・部品・車両の内製は、供給制約とコスト競争への備えとして合理的だった可能性がある。" },
  { id: "byd_claim_market_policy_concentration_risk", type: "audit_issue", title: "中国NEV市場・政策への集中リスク", summary: "中国市場と政策環境への依存が高く、需要・政策・価格競争の下方リスクを過小評価した可能性がある。" },
  { id: "byd_claim_price_competition_margin_risk", type: "audit_issue", title: "価格競争下の利益率・資本耐久力リスク", summary: "垂直統合は値下げ余地を生むが、価格競争が激化すると利益率・投資回収を圧迫しうる。" },
  { id: "byd_claim_public_disclosure_gap", type: "boundary_claim", title: "公開資料だけでは内部判断の深度を断定できない", summary: "年次報告や公式発表は有用だが、内部の代替案比較・撤退基準・地域別採算までは確認できない。" },
];

const linkBase = { relevance: "中", reviewState: "要検証" };
const evidenceLinks = [
  { ...linkBase, id: "BYD-EL-001", evidenceId: "BYD-E-001", claimId: "byd_claim_vertical_integration_as_advantage", assessmentCellId: "byd_cell_battery_cost_supply", claimLabel: "垂直統合はEV量産の合理的な競争優位だった", target: "2021年の事業構造・新エネルギー車戦略", relationship: "支持", timeFit: "間接", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "明白", knownByDecisionMakersBasis: "自社の年次報告であり、経営陣が事業構造を把握していた蓋然性は高い。ただし公開日は2022年である。", canSay: "2021年のBYDが電池・車両・主要部品の統合を戦略上の強みとして説明できる状態にあったことを示す。", cannotSay: "内部でどの代替案を比較し、どの採算基準で投資判断したかまでは示さない。" },
  { ...linkBase, id: "BYD-EL-002", evidenceId: "BYD-E-002", claimId: "byd_claim_vertical_integration_as_advantage", assessmentCellId: "byd_cell_battery_cost_supply", claimLabel: "Blade Battery による内製優位", target: "Blade Battery の全EV搭載方針", relationship: "支持", timeFit: "直接", availableAtDecisionTime: true, availableToAnalysts: true, knownByDecisionMakers: "明白", knownByDecisionMakersBasis: "BYD自身の2021年公式発表であるため。", canSay: "BYDがBlade BatteryをEV戦略の中核として公開説明していたことは確認できる。", cannotSay: "Blade Batteryだけで価格競争・過剰能力・海外政策リスクまで十分に検証済みだったとは言えない。" },
  { ...linkBase, id: "BYD-EL-003", evidenceId: "BYD-E-003", claimId: "byd_claim_vertical_integration_as_advantage", assessmentCellId: "byd_cell_platform_execution", claimLabel: "e-Platform による商品・量産実行力", target: "e-Platform 3.0 の公式説明", relationship: "支持", timeFit: "直接", availableAtDecisionTime: true, availableToAnalysts: true, knownByDecisionMakers: "明白", knownByDecisionMakersBasis: "BYD自身の2021年公式発表であるため。", canSay: "EV専用プラットフォームによる効率・性能・商品展開の説明は確認できる。", cannotSay: "SDV・ソフトウェア競争で十分な組織能力があったことまでは示さない。" },
  { ...linkBase, id: "BYD-EL-010", evidenceId: "BYD-E-004", claimId: "byd_claim_vertical_integration_as_advantage", assessmentCellId: "byd_cell_capital_price_resilience", claimLabel: "垂直統合優位の価格競争下での限界", target: "事後対照: 中国EV市場の価格競争", relationship: "反証", timeFit: "事後", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "不明", knownByDecisionMakersBasis: "2024年公開の後年資料であり、2021年時点の内部認識を直接示さない。", canSay: "後年の価格競争は、垂直統合だけで利益率・投資回収リスクを完全に相殺できるとは限らないことを示す検証材料になる。", cannotSay: "価格競争の存在だけで、垂直統合戦略そのものが不合理だったとは断定できない。" },
  { ...linkBase, id: "BYD-EL-004", evidenceId: "BYD-E-004", claimId: "byd_claim_market_policy_concentration_risk", assessmentCellId: "byd_cell_market_china_nev_demand", claimLabel: "中国NEV市場・政策への集中リスク", target: "事後対照: 中国EV市場成長と価格競争", relationship: "支持", timeFit: "事後", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "不明", knownByDecisionMakersBasis: "2024年公開の後年資料であり、2021年時点の内部認識を直接示さない。", canSay: "中国市場の急成長と価格競争は、BYDの戦略が市場環境に強く接続していたことを検証する材料になる。", cannotSay: "2021年時点でBYDが後年の価格競争を具体的に予見していたとは断定できない。" },
  { ...linkBase, id: "BYD-EL-005", evidenceId: "BYD-E-004", claimId: "byd_claim_price_competition_margin_risk", assessmentCellId: "byd_cell_capital_price_resilience", claimLabel: "価格競争下の利益率・資本耐久力リスク", target: "事後対照: 価格競争・電池コスト・市場成熟", relationship: "支持", timeFit: "事後", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "不明", knownByDecisionMakersBasis: "2024年公開の後年資料であり、2021年時点の内部認識を直接示さない。", canSay: "後年の価格競争は、垂直統合の優位と同時に利益率圧迫リスクを検証する事後対照になる。", cannotSay: "価格競争の存在だけで、2021年の垂直統合判断が不合理だったとは言えない。" },
  { ...linkBase, id: "BYD-EL-006", evidenceId: "BYD-E-005", claimId: "byd_claim_market_policy_concentration_risk", assessmentCellId: "byd_cell_policy_regulatory_dependence", claimLabel: "EV/NEV集中の不可逆性と政策依存", target: "2022年報における燃油車生産停止の公式開示", relationship: "反証", timeFit: "事後", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "不明", knownByDecisionMakersBasis: "2023年公開の2022年報であり、2021年時点の内部認識を直接示さない。", canSay: "燃油車生産停止の公式開示は、EV/NEV集中が実行されたことを示す。", cannotSay: "実行されたことだけで、中国政策・需要・価格競争リスクが十分に評価されていたとは言えない。" },
  { ...linkBase, id: "BYD-EL-007", evidenceId: "BYD-E-006", claimId: "byd_claim_price_competition_margin_risk", assessmentCellId: "byd_cell_capital_price_resilience", claimLabel: "後年実績による価格競争リスクの相殺可能性", target: "事後対照: 後年の売上・海外展開", relationship: "反証", timeFit: "事後", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "不明", knownByDecisionMakersBasis: "2024年公開の後年資料であり、2021年時点の内部認識を直接示さない。", canSay: "後年の事業拡大は、価格競争リスクが少なくとも短期的に戦略を破綻させなかった可能性を示す。", cannotSay: "後年成長だけで、投資判断時点の採算検証が十分だったとは言えない。" },
  { ...linkBase, id: "BYD-EL-008", evidenceId: "BYD-E-001", claimId: "byd_claim_public_disclosure_gap", assessmentCellId: "byd_cell_governance_disclosure", claimLabel: "公開資料だけでは内部判断の深度を断定できない", target: "年次報告の公開資料限界", relationship: "支持", timeFit: "間接", availableAtDecisionTime: false, availableToAnalysts: true, knownByDecisionMakers: "明白", knownByDecisionMakersBasis: "自社開示であり経営陣の把握は明白だが、公開日は2022年である。", canSay: "公開資料から事業方針と主要リスク説明は読める。", cannotSay: "取締役会での代替案比較、撤退基準、価格決定プロセスまでは確認できない。" },
  { ...linkBase, id: "BYD-EL-009", evidenceId: "BYD-E-002", claimId: "byd_claim_public_disclosure_gap", assessmentCellId: "byd_cell_governance_disclosure", claimLabel: "公式技術発表と内部検討の差", target: "Blade Battery 公式発表の限界", relationship: "反証", timeFit: "直接", availableAtDecisionTime: true, availableToAnalysts: true, knownByDecisionMakers: "明白", knownByDecisionMakersBasis: "BYD自身の2021年公式発表であるため。", canSay: "少なくとも技術・安全性・商品戦略に関する公開説明は存在する。", cannotSay: "公開説明があることを、内部で十分な代替案比較があったことと同一視できない。" },
];

const preWarChecklist = [
  { id: "byd_pw_market_china_nev_demand", name: "市場需要・地域差の見積もり", category: "市場需要", exAnteEvaluability: "高", evaluationDifficulty: "中", actuallyEvaluated: "限定的", auditQuestion: "中国NEV需要、地域集中、海外展開余地をどこまで評価していたか。", evidenceBasis: "中国NEV市場拡大とEV集中の説明は確認できるが、地域集中の下方シナリオは限定的。", linkedCells: ["byd_cell_market_china_nev_demand"], linkedAssumptions: ["byd_assumption_china_nev_scale"], linkedEvidenceLinks: ["BYD-EL-001", "BYD-EL-004"], counterPoint: "中国市場の成長を過大評価した可能性、または政策依存を軽く見た可能性は残る。" },
  { id: "byd_pw_policy_regulatory_dependence", name: "規制・インフラ・政策依存の見積もり", category: "規制・インフラ", exAnteEvaluability: "高", evaluationDifficulty: "中", actuallyEvaluated: "不明", auditQuestion: "NEV政策、補助金、海外関税・規制変化をどこまで戦略に反映したか。", evidenceBasis: "政策環境の重要性は高いが、初期 skeleton では公開資料上の評価形跡を十分に確認できていない。", noEvidenceReason: "政策・関税リスクに関する内部評価資料未収集", linkedCells: ["byd_cell_policy_regulatory_dependence"], linkedAssumptions: ["byd_assumption_china_nev_scale"], linkedEvidenceLinks: ["BYD-EL-006"], nextEvidenceActionType: "collect_primary_source", counterPoint: "公開資料上の不足であり、内部未検討とは断定しない。" },
  { id: "byd_pw_battery_supply_cost", name: "電池・供給網・コストの見積もり", category: "電池", exAnteEvaluability: "高", evaluationDifficulty: "高", actuallyEvaluated: "形跡あり", auditQuestion: "Blade Battery、電池内製、供給網、コスト競争力をどこまで評価したか。", evidenceBasis: "Blade Battery と年次報告から、電池・供給網の戦略的位置づけは確認できる。", linkedCells: ["byd_cell_battery_cost_supply"], linkedAssumptions: ["byd_assumption_battery_integration_advantage", "byd_assumption_blade_battery_scale"], linkedEvidenceLinks: ["BYD-EL-001", "BYD-EL-002", "BYD-EL-010"], counterPoint: "価格競争下の利益率や過剰能力リスクまでは別途検証が必要である。" },
  { id: "byd_pw_platform_sdv_execution", name: "SDV・ソフトウェア競争の認識", category: "SDV", exAnteEvaluability: "中", evaluationDifficulty: "高", actuallyEvaluated: "限定的", auditQuestion: "EV専用PF、ソフトウェア、車両OS競争をどこまで扱ったか。", evidenceBasis: "e-Platform の説明は確認できるが、SDV競争やソフトウェア組織能力の評価は限定的。", linkedCells: ["byd_cell_platform_execution"], linkedAssumptions: ["byd_assumption_platform_efficiency"], linkedEvidenceLinks: ["BYD-EL-003"], counterPoint: "プラットフォーム説明だけでSDV能力が十分だったとは言えない。" },
  { id: "byd_pw_capital_price_resilience", name: "資本配分・収益耐久力", category: "資本配分", exAnteEvaluability: "高", evaluationDifficulty: "高", actuallyEvaluated: "限定的", auditQuestion: "値下げ競争、過剰能力、海外投資負担、利益率耐久力をどこまで評価したか。", evidenceBasis: "垂直統合は耐久力の仮説になるが、価格競争下の採算感応度は公開資料上限定的。", linkedCells: ["byd_cell_capital_price_resilience"], linkedAssumptions: ["byd_assumption_price_competition_risk"], linkedEvidenceLinks: ["BYD-EL-005", "BYD-EL-007"], counterPoint: "後年の成長は強い反証材料になりうるが、2021年時点の採算検証を直接示さない。" },
  { id: "byd_pw_governance_disclosure_process", name: "ガバナンス・説明責任・修正基準", category: "ガバナンス", exAnteEvaluability: "中", evaluationDifficulty: "高", actuallyEvaluated: "不明", auditQuestion: "代替案、下方シナリオ、撤退基準、地域別採算をどこまで説明したか。", evidenceBasis: "公開資料上、内部意思決定の深度は確認できない。内部で検討されていなかったとは断定しない。", noEvidenceReason: "内部意思決定資料未収集または未公開", statusOverride: { value: "要検証", provisional: true, rationale: "取締役会・内部投資審査・地域別採算資料が未公開であり、公式資料と年次報告に依存するため。" }, linkedCells: ["byd_cell_governance_disclosure"], linkedAssumptions: ["byd_assumption_internal_documents_gap"], linkedEvidenceLinks: ["BYD-EL-008", "BYD-EL-009"], nextEvidenceActionType: "collect_primary_source", counterPoint: "公開説明責任上の限界はあるが、内部未検討とは断定できない。" },
];

export const bydVerticalIntegrationCase = {
  warCase: {
    id: "byd-vertical-integration-2021",
    conflict: "自動車産業EVシフト（2020年代）",
    name: "自動車産業EVシフト 2020年代：BYD 垂直統合・EV集中戦略",
    auditedActor: "BYD 経営陣・取締役会",
    opponentActor: "Toyota / Honda など既存OEM経営陣",
    scope: "2021年前後以降のEV・電池・垂直統合・中国市場・価格競争・海外展開に関する戦略判断",
    primaryResponsibility: "EV需要見積もり、電池・供給網内製、価格競争、海外展開、資本配分、投資家説明の責任",
    uncertainty: "中",
    rating: "未確定",
    ratingNote: "成長実績は強いが、内部投資審査・地域別採算・価格競争時の撤退基準が未公開であり、rating は確定しない。",
  },
  overviewOpinion: "BYDの垂直統合・EV集中戦略は、2021年前後の中国NEV市場拡大、Blade Battery、電池・車両の内製力を前提にすれば、供給制約と価格競争に備えた合理的な能力構築として説明可能である。\n\nただし、中国市場・政策環境への集中、価格競争下の利益率、海外展開時の規制・関税リスク、SDV・ソフトウェア競争への対応については、公開資料だけでは下方シナリオや撤退基準を十分に確認できない。\n\n現時点では、BYDを成功事例として断定しない。合理的な垂直統合仮説と、地域集中・価格競争・公開資料限界の監査仮説の双方が成立する。",
  issues: [
    { name: "垂直統合による電池・供給網優位仮説", status: "要検証" },
    { name: "中国NEV市場・政策集中と価格競争リスク", status: "要注意" },
    { name: "公開資料だけでは内部判断の深度を断定できない境界", status: "保留" },
  ],
  counterHypotheses: [
    "垂直統合とBlade Batteryは、EV量産のコスト・供給安定性を高める合理的戦略だった。",
    "中国市場・政策環境・価格競争への集中により、利益率と資本耐久力の下方リスクを抱えた可能性がある。",
    "後年の成長実績だけでは、2021年前後の内部判断が十分だったことを直接証明できない。",
  ],
  evidenceAccessScope,
  uncertaintyReason,
  intendedUse,
  adversarialReview: {
    prosecution: [
      { claimId: "byd_claim_market_policy_concentration_risk", strongestArgument: "BYDのEV集中は、中国NEV市場と政策環境への依存が高く、価格競争・政策変更への下方リスクを抱えていた可能性がある。", strongestEvidenceLinks: ["BYD-EL-004"], caveat: "後年の市場分析は事後対照であり、2021年時点の内部認識を直接示さない。" },
      { claimId: "byd_claim_price_competition_margin_risk", strongestArgument: "垂直統合は価格競争への耐久力を高めうる一方、値下げ競争が激化すれば利益率と投資回収を圧迫しうる。", strongestEvidenceLinks: ["BYD-EL-005"], caveat: "価格競争の存在だけで当初判断の不合理性は断定できない。" },
    ],
    defense: [
      { claimId: "byd_claim_vertical_integration_as_advantage", strongestArgument: "電池・車両・主要部品の垂直統合とBlade Batteryは、EV量産の供給安定性とコスト競争力を支える合理的な戦略だった可能性がある。", strongestEvidenceLinks: ["BYD-EL-001", "BYD-EL-002"], caveat: "技術優位の公開説明は、価格競争下の採算感応度や海外政策リスクの十分な検証を意味しない。" },
    ],
    unresolvedTensions: ["垂直統合による競争優位と過剰能力・価格競争リスクの境界", "中国NEV市場の成長を利用する合理性と政策・地域集中リスクの境界", "後年の成功実績と2021年前後の内部判断深度の差"],
  },
  phases,
  preWarChecklist,
  hypothesisTracking: [{ hypothesis: "垂直統合・EV集中は合理的な能力構築だったが、価格競争・地域集中リスクを抱えていた可能性", checkpoints: [{ phase: "2021年 Blade Battery / e-Platform", status: "技術・供給網優位の公開説明として確認できる。" }, { phase: "2022年 燃油車生産終了", status: "EV/NEV集中の実行を示す近接事後資料。" }, { phase: "2024年以降の価格競争分析", status: "利益率・地域集中リスクを検証する事後対照。" }] }],
  assessmentCells,
  assessmentCoverage,
  evidence,
  claims,
  evidenceLinks,
  ratingBasis: [
    { cellId: "byd_cell_market_china_nev_demand", weight: "高" },
    { cellId: "byd_cell_battery_cost_supply", weight: "高" },
    { cellId: "byd_cell_platform_execution", weight: "中" },
    { cellId: "byd_cell_capital_price_resilience", weight: "高" },
    { cellId: "byd_cell_governance_disclosure", weight: "中" },
  ],
  ratingBasisExclusions: [{ cellId: "byd_cell_policy_regulatory_dependence", reason: "初期 skeleton では政策・関税リスク資料が薄いため、主要 ratingBasis からは一旦外し、追加資料収集対象にする。" }],
  ratingReadiness: { value: "未到達", rationale: "内部投資審査、地域別採算、価格競争時の修正基準が未公開であり、後年実績を2021年前後の直接証拠にしないため。", blockers: ["内部投資審査資料が未公開", "価格競争下の採算感応度が未確認", "海外政策・関税リスクの当時評価が未確認"] },
};

