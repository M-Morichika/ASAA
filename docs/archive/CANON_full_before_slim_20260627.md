# docs/CANON.md

# Automotive Strategy Accountability Audit — Canon

最終更新: 2026-06-27

---

## 0. このファイルの目的

このファイルは、**Automotive Strategy Accountability Audit** の正典資料である。

ここには、変更しにくい設計思想、監査原則、データ構造、命名規則、時点性ルール、rating方針を書く。

一時的な作業状態や次の作業手順は `HANDOFF.md` に書く。  
履歴や決定経緯は `docs/HISTORY.md` に書く。

---

## 1. プロジェクト概要

このプロジェクトは、旧 **War Accountability Audit** の監査スキームを、自動車産業の企業戦略監査へ転用するものである。

旧プロジェクトは、戦争を「戦後の勝敗」ではなく、開戦前・転換点時点での意思決定監査として扱っていた。

企業版では、これを次のように読み替える。

```text
戦争判断
→ 巨大企業による高リスク・高額・長期の戦略投資判断

開戦前判断
→ 戦略表明前・大規模投資前の経営判断

継戦能力
→ 投資継続能力・収益耐久力・供給網・開発能力

勝算
→ 市場競争力・規制適応・技術実行力・資本効率

政権リスク
→ 経営陣・取締役会・株主・資本市場・組織内部のガバナンスリスク
```

---

## 2. 中核思想

本プロジェクトの中核思想は以下である。

```text
巨大組織が、不確実性の高い環境で、巨額投資・事業転換・組織再配置を行う際、
その時点で利用可能だった情報に基づき、
意思決定プロセス、リスク認識、代替案検討、説明責任を検証する。
```

目的は、後から結果を見て勝者と敗者を決めることではない。

目的は、以下を切り分けることである。

```text
- 当時合理的だった判断
- 当時から危険信号が見えていた判断
- 当時は不確実だったが、後に悪い方向へ展開した判断
- 公開資料からは評価できない判断
- 経営陣の説明責任が不足している判断
```

---

## 3. 監査3原則

すべてのケースで以下を守る。

### 3.1 反証証拠を隠さない

ある主張に都合のよい証拠だけを並べない。

必ず以下を両建てにする。

```text
支持
反証
保留
```

企業ケースであっても、批判側・擁護側のどちらにも寄せすぎない。

例。

```text
Toyota批判:
multi-pathwayはBEV・SDV転換遅れの正当化だった可能性がある。

Toyota擁護:
地域差・インフラ差・電池制約を踏まえたリアルオプション戦略だった可能性がある。

Honda批判:
EV需要・GM提携・量販EV採算を過大評価した可能性がある。

Honda擁護:
将来規制と脱炭素市場を見据えた合理的な先行コミットメントだった可能性がある。
```

---

### 3.2 canSay / cannotSay を分ける

各 evidenceLink では、証拠から安全に言えることと、言えないことを必ず分ける。

```js
canSay: "その証拠から安全に言えること"
cannotSay: "その証拠だけでは言えないこと"
```

例。

```text
証拠:
Hondaの2040年EV/FCEV 100%目標発表。

canSay:
Hondaが2021年時点でEV/FCEVへの長期移行を公式に表明していたことは確認できる。

cannotSay:
その時点で量販EVの採算、GM提携継続性、電池調達、SDV実行能力まで十分に検証されていたとは断定できない。
```

---

### 3.3 後年の結果を当時判断の直接証拠にしない

後年の結果は、当時判断の検証資料にはなる。  
しかし、当時の認識を直接証明するものではない。

以下は直接証拠ではない。

```text
2025年以降のEV需要減速
2025年以降のHonda戦略再評価
2026年以降の損失認識
GM共同開発の中止
Toyotaの後年HEV好調
Toyotaの後年BEV比率の低さ
```

これらは以下として扱う。

```text
timeFit: "事後"
availableAtDecisionTime: false
availableToAnalysts: false
knownByDecisionMakers: "不明"
```

ただし、後年資料が当時資料を引用している場合、その当時資料を別 evidence ID として切り出すことはできる。

---

## 4. 企業ケース固有の注意

企業ケースでは、国家機密文書よりも、次の公開資料が豊富である。

```text
有価証券報告書
統合報告書
決算説明資料
事業説明会資料
プレスリリース
株主総会質疑
中期経営計画
サステナビリティ資料
同時代の業界予測
同時代の経済報道
```

一方で、以下は通常入手困難である。

```text
取締役会議事録
内部投資審査資料
採算見積もり
撤退基準
提携交渉資料
社内反対意見
ソフトウェア開発遅延の内部報告
```

そのため、以下を厳守する。

```text
公開資料上、評価形跡を確認できない。
内部で検討されていなかったとは断定できない。
```

「内部評価なし」と断定してはならない。  
「公開説明責任上、確認できる評価形跡が限定的」と表現する。

---

## 5. 初期 conflict

初期 conflict は以下。

```js
"自動車産業EVシフト（2020年代）"
```

この conflict は、同一産業ショックに対する複数企業の戦略判断を比較するためのグループである。

戦争ケースにおける「同一戦争の両側監査」と同型だが、企業ケースでは敵味方ではない。

企業版では以下の意味で扱う。

```text
同一産業ショックに対する戦略仮説の対照
```

---

## 6. 初期ケース

### 6.1 Toyota Multi-Pathway Strategy

```js
id: "toyota-multi-pathway-2021"
conflict: "自動車産業EVシフト（2020年代）"
name: "自動車産業EVシフト 2020年代：トヨタ multi-pathway 戦略"
auditedActor: "トヨタ自動車 経営陣・取締役会"
opponentActor: "Honda 経営陣・取締役会"
scope: "2021年前後の電動化戦略・multi-pathway 判断・BEV/HEV/水素/SDVへの資本配分"
primaryResponsibility: "需要見積もり、規制対応、電池・SDV能力、資本配分、戦略柔軟性の説明責任"
uncertainty: "中"
rating: "未確定"
counterpartCaseId: "honda-ev-concentration-2021"
```

### 6.2 Honda EV Concentration Strategy

```js
id: "honda-ev-concentration-2021"
conflict: "自動車産業EVシフト（2020年代）"
name: "自動車産業EVシフト 2020年代：Honda EV集中戦略"
auditedActor: "本田技研工業 経営陣・取締役会"
opponentActor: "トヨタ自動車 経営陣・取締役会"
scope: "2021年前後のEV/FCEV集中目標・GM提携・量販EV構想・戦略再評価までの判断"
primaryResponsibility: "EV需要見積もり、提携依存、電池・SDV能力、資本配分、投資家説明の責任"
uncertainty: "中〜高"
rating: "未確定"
counterpartCaseId: "toyota-multi-pathway-2021"
```

---

## 7. 対照ケース設計

対照ケースは、`warCase.counterpartCaseId` で指定する。

要件。

```text
- counterpartCaseId は実在する case id を指す
- 片方向ではなく双方向にする
- 自己参照は禁止
```

正しい例。

```js
// Toyota
counterpartCaseId: "honda-ev-concentration-2021"

// Honda
counterpartCaseId: "toyota-multi-pathway-2021"
```

企業ケースでは、UI文言を可能なら以下に寄せる。

```text
⇄ 対照戦略を見る
⇄ Honda EV集中戦略を見る
⇄ Toyota multi-pathway戦略を見る
```

ただし、初期実装では既存UIの文言を無理に変更しない。

---

## 8. データ構造

各ケースは既存スキームに合わせ、以下の構造を持つ。

```js
export const exampleCase = {
  warCase: {
    id: "",
    conflict: "",
    name: "",
    auditedActor: "",
    opponentActor: "",
    scope: "",
    primaryResponsibility: "",
    uncertainty: "",
    rating: "",
    ratingNote: "",
    counterpartCaseId: "",
  },

  overviewOpinion: "",

  issues: [],
  counterHypotheses: [],
  phases: [],
  preWarChecklist: [],
  hypothesisTracking: [],
  assessmentCells: [],
  evidence: [],
  claims: [],
  evidenceLinks: [],
  ratingBasis: [],
  ratingBasisExclusions: [],
};
```

---

## 9. phases

両ケースとも同型の4フェーズを使う。

```js
[
  {
    id: "ev_shift_recognition_strategy_declaration",
    name: "EVシフト認識・戦略表明",
    mainIssue: "産業転換の読みと初期コミットメント",
  },
  {
    id: "battery_sdv_alliance_supply_chain_design",
    name: "電池・SDV・提携・供給網設計",
    mainIssue: "実行能力と外部依存",
  },
  {
    id: "demand_shift_competition_strategy_adjustment",
    name: "需要変化・競争激化・戦略修正",
    mainIssue: "前提変化への修正能力",
  },
  {
    id: "long_term_competitiveness_boundary",
    name: "長期競争力・別ケース境界",
    mainIssue: "2020年代後半以降の勝敗判定との切り分け",
  },
]
```

---

## 10. Pre-War Checklist

企業ケースでは `Pre-War` を以下に読み替える。

```text
戦略表明前・大規模投資前チェック
```

共通項目。

```text
market_demand_forecast
regulatory_infrastructure_risk
battery_supply_cost
sdv_software_capability
capital_allocation_resilience
governance_disclosure_process
```

意味。

```text
market_demand_forecast:
BEV需要、HEV需要、地域差、価格感度、充電インフラ制約の見積もり。

regulatory_infrastructure_risk:
EU、中国、北米、日本の規制・補助金・充電インフラの不確実性。

battery_supply_cost:
電池価格、調達、内製、全固体電池、現地生産、資源制約。

sdv_software_capability:
EV化をSDV・ソフトウェア競争として扱う能力。

capital_allocation_resilience:
HEV収益、BEV投資、赤字許容、投資回収期間、撤退基準。

governance_disclosure_process:
取締役会・投資家・株主に対するリスク説明、目標修正、代替シナリオ開示。
```

Toyota ID。

```text
toy_pw_market_demand_forecast
toy_pw_regulatory_infrastructure_risk
toy_pw_battery_supply_cost
toy_pw_sdv_software_capability
toy_pw_capital_allocation_resilience
toy_pw_governance_disclosure_process
```

Honda ID。

```text
hon_pw_market_demand_forecast
hon_pw_regulatory_infrastructure_risk
hon_pw_battery_supply_cost
hon_pw_sdv_software_capability
hon_pw_capital_allocation_resilience
hon_pw_governance_disclosure_process
```

---

## 11. Assessment 軸

初期実装では以下7軸を使う。

```text
1. 市場需要・地域差の見積もり
2. 規制・インフラ・政策依存の見積もり
3. 電池・供給網・コストの見積もり
4. SDV・ソフトウェア競争の認識
5. 資本配分・収益耐久力
6. 提携・外部依存・実行能力
7. ガバナンス・説明責任・修正基準
```

疎マトリクスを前提にする。  
7軸×4フェーズの直積をすべて埋める必要はない。

---

## 12. ID命名規則

Toyota。

```text
toy_          checklist, assessmentCells, assumptions
TOY-E-        evidence
TOY-EL-       evidenceLinks
toy_claim_    claims
```

Honda。

```text
hon_          checklist, assessmentCells, assumptions
HON-E-        evidence
HON-EL-       evidenceLinks
hon_claim_    claims
```

既存戦争ケースのID接頭辞とは混ぜない。

---

## 13. claim 方針

### 13.1 Toyota claims

```js
[
  {
    id: "toy_claim_multi_pathway_as_real_option",
    text: "トヨタのmulti-pathway戦略は、地域差・需要不確実性・電池制約を踏まえたリアルオプション戦略だった",
    type: "counter_claim",
  },
  {
    id: "toy_claim_hybrid_profit_funded_transition",
    text: "HEVの収益力を維持することで、BEV・電池・SDV投資の原資と時間を確保した",
    type: "counter_claim",
  },
  {
    id: "toy_claim_regional_demand_correctly_segmented",
    text: "トヨタは地域ごとの規制・インフラ・顧客需要の違いを正しく重視していた",
    type: "counter_claim",
  },
  {
    id: "toy_claim_bev_sdv_delay_risk",
    text: "multi-pathway戦略は、BEV・SDV転換遅れを正当化する防衛的レトリックだった可能性がある",
    type: "audit_issue",
  },
  {
    id: "toy_claim_china_competition_underestimated",
    text: "トヨタは中国勢・Tesla等のBEV価格競争とSDV競争の速度を過小評価した可能性がある",
    type: "audit_issue",
  },
  {
    id: "toy_claim_solid_state_expectation_risk",
    text: "全固体電池や次世代電池への期待が、BEV量産競争への対応遅れを覆い隠した可能性がある",
    type: "audit_issue",
  },
  {
    id: "toy_claim_strategy_outcome_unresolved",
    text: "トヨタのmulti-pathway戦略の成否は2030年前後まで未確定であり、現時点で勝敗を断定できない",
    type: "counter_claim",
  },
]
```

### 13.2 Honda claims

```js
[
  {
    id: "hon_claim_ev_concentration_as_forward_commitment",
    text: "HondaのEV/FCEV集中戦略は、脱炭素規制と将来市場を見据えた合理的な先行コミットメントだった",
    type: "counter_claim",
  },
  {
    id: "hon_claim_external_alliance_as_capability_bridge",
    text: "GM等との提携は、自社単独の開発・調達負担を抑える合理的な能力補完だった",
    type: "counter_claim",
  },
  {
    id: "hon_claim_ev_demand_profitability_overestimated",
    text: "HondaはEV需要・収益性・価格競争力を過大評価した可能性がある",
    type: "audit_issue",
  },
  {
    id: "hon_claim_alliance_dependency_underestimated",
    text: "HondaはGM提携など外部依存の不確実性と撤退リスクを過小評価した可能性がある",
    type: "audit_issue",
  },
  {
    id: "hon_claim_sdv_battery_execution_gap",
    text: "Hondaは電池・SDV・量販EVの実行能力に対する説明が不足していた可能性がある",
    type: "audit_issue",
  },
  {
    id: "hon_claim_reassessment_not_simple_failure",
    text: "2025年以降の戦略再評価は、直ちに2021年判断の不合理性を証明するものではない",
    type: "counter_claim",
  },
  {
    id: "hon_claim_internal_documents_unavailable",
    text: "Honda側の取締役会・内部投資審査・提携採算資料は公開されておらず、経営陣の認識断定には制約がある",
    type: "counter_claim",
  },
]
```

---

## 14. evidence 方針

初期実装では、代表出典を少数入れる。

分類を必ず分ける。

```text
直接資料:
企業自身の当時発表、事業説明、公式資料。

同時代外部資料:
当時の市場予測、規制データ、業界分析、報道。

事後資料:
後年の戦略再評価、販売実績、提携解消、損失認識、後年分析。
```

### 14.1 Toyota evidence 候補

```text
TOY-E-001:
Toyota, 2017年 電動車普及・電動化目標関連発表

TOY-E-002:
Toyota, 2021年12月 Battery EV Strategies briefing

TOY-E-003:
Toyota, 2023年 次世代BEV・電池・BEV Factory関連発表

TOY-E-004:
Toyota, 統合報告書 / 有価証券報告書 / 決算説明資料

TOY-E-005:
Toyota, multi-pathway approach に関する公式説明

TOY-E-006:
IEA / BloombergNEF / ACEA 等の当時または同時代のEV市場・電池・規制データ

TOY-E-007:
Toyota, 2024年 Sales, Production, and Export Results

TOY-E-008:
IEA Global EV Outlook 2024, 中国EV市場・価格競争・輸出増に関する分析

TOY-E-009:
IEA Global EV Outlook 2026, EV用電池価格低下・LFP普及・地域別価格差に関する事後対照資料
```

### 14.2 Honda evidence 候補

```text
HON-E-001:
Honda, 2021年 EV/FCEV 2040年100%目標発表

HON-E-002:
Honda, 2021〜2022年 電動化戦略説明会資料

HON-E-003:
Honda / GM, 2022年 量販価格帯EV共同開発発表

HON-E-004:
Honda / GM, 2023年 量販EV共同開発中止に関する Reuters 報道

HON-E-005:
Honda, 2024年 電動化・EV投資・次世代EV関連発表

HON-E-006:
Honda, 2025〜2026年 電動化戦略再評価・損失認識・方針修正資料

HON-E-007:
Honda 統合報告書 / 有価証券報告書 / 決算説明資料

HON-E-008:
IEA / BloombergNEF / ACEA 等の当時または同時代のEV市場・電池・規制データ

HON-E-009:
IEA Global EV Outlook 2026, EV用電池価格低下・LFP普及・地域別価格差に関する事後対照資料
```

---

## 15. evidenceLinks 必須フィールド

すべての evidenceLinks に以下を入れる。

```js
id
evidenceId
claimId
assessmentCellId
claimLabel
target
relationship
reviewState
relevance
timeFit
availableAtDecisionTime
availableToAnalysts
knownByDecisionMakers
knownByDecisionMakersBasis
canSay
cannotSay
```

`relationship` は以下に揃える。

```text
支持
反証
保留
```

---

## 16. 時点性フィールド

### timeFit

```text
直接:
当時判断の直接資料または同時代資料。

間接:
当時状況の再構成に使えるが、直接資料ではない。

事後:
後年結果・後年分析。直接根拠には使わない。
```

### availableAtDecisionTime

```text
true:
当時存在していた資料。

false:
後年に作られた資料。
```

### availableToAnalysts

```text
true:
当時の外部分析者が利用可能だった資料。

false:
当時は外部から利用できなかった、または後年資料。
```

### knownByDecisionMakers

```text
明白:
経営陣・企業自身が発表または直接関与している。

推定:
経営陣が通常認識していた可能性が高いが、直接証拠ではない。

不明:
経営陣が認識していたか確認できない。
```

`knownByDecisionMakersBasis` は必ず文章で入れる。

---

## 17. Toyota evidenceLink 方針

必ず以下を確保する。

```text
1. BEV 30車種・2030年BEV 350万台目標
   - toy_claim_bev_sdv_delay_risk への反証
   - toy_claim_multi_pathway_as_real_option への支持
   - ただし、実行能力・収益性・モデル競争力までは言えない

2. multi-pathway 公式説明
   - toy_claim_regional_demand_correctly_segmented への支持
   - ただし、BEV転換遅れが存在しないとは言えない

3. 後年のHEV好調・地域差
   - toy_claim_multi_pathway_as_real_option への事後対照
   - ただし、2021年判断の正しさを直接証明するものではない

4. 中国EV競争・BEV比率の低さ
   - toy_claim_bev_sdv_delay_risk / toy_claim_china_competition_underestimated への支持
   - ただし、multi-pathway全体の破綻までは言えない

5. 内部資料不足
   - toy_claim_strategy_outcome_unresolved への支持または保留
   - ただし、公開資料から監査不能になるわけではない
```

---

## 18. Honda evidenceLink 方針

必ず以下を確保する。

```text
1. EV/FCEV 2040年100%目標
   - hon_claim_ev_concentration_as_forward_commitment への支持
   - ただし、実行可能性・採算性までは言えない

2. GM共同開発発表
   - hon_claim_external_alliance_as_capability_bridge への支持
   - ただし、提携継続性・量販採算性までは言えない

3. GM共同開発中止
   - hon_claim_alliance_dependency_underestimated への事後対照
   - ただし、2021〜2022年時点の判断不合理性を直接証明するものではない

4. 電動化戦略再評価・損失認識
   - hon_claim_ev_demand_profitability_overestimated への事後対照
   - ただし、需要減速・政策変更・競争変化を事前に完全予測できたとは限らない

5. 内部資料不足
   - hon_claim_internal_documents_unavailable への支持
   - ただし、公開資料・決算資料・報道から監査不能になるわけではない
```

---

## 19. rating 方針

初期実装では、rating は確定しない。

```js
rating: "未確定"
```

理由。

```text
- 2020年代後半〜2030年前後の成否が未確定
- 企業内部資料が公開されていない
- 後年実績を2021年判断の直接証拠にできない
- Toyota / Honda 双方に合理的仮説と監査上の懸念が存在する
```

### 19.1 Toyota 暫定監査意見

```text
トヨタのmulti-pathway戦略は、2021年前後の地域差・電池制約・充電インフラ未成熟・HEV収益力を前提にすれば、単純なBEV一本化より合理的なリアルオプション戦略として説明可能である。

ただし、BEV/SDV/電池コスト競争、とくに中国市場における競争速度が想定を上回る場合、multi-pathwayは「選択肢の保持」ではなく「戦略集中の遅れ」として機能するリスクがある。

現時点では、戦略破綻とも戦略勝利とも断定しない。公開資料からは、合理的なリスク分散仮説と、BEV/SDV遅れ仮説の双方が成立する。
```

### 19.2 Honda 暫定監査意見

```text
HondaのEV/FCEV集中戦略は、2021年前後の脱炭素規制・EV市場拡大・ソフトウェア化を前提にすれば、将来市場に向けた合理的な先行コミットメントとして説明可能である。

ただし、EV需要・収益性・電池コスト・GM提携・SDV実行能力について、公開資料上は十分な下方シナリオや撤退基準を確認しにくい。2025年以降の戦略再評価・損失認識は、少なくとも当初戦略の不確実性が大きかったことを示す事後対照資料となる。

現時点では、2021年判断を単純に失敗と断定しない。公開資料からは、合理的な先行投資仮説と、需要・実行能力の過大評価仮説の双方が成立する。
```

---

## 20. ratingBasis から除外するもの

以下は直接算入しない。

```text
2025年以降のHonda戦略再評価そのもの
2026年以降の損失認識そのもの
GM共同開発中止そのもの
2030年目標の未達見込み
Toyota / Honda の後年販売実績そのもの
将来の最終的な販売成否
```

これらは `ratingBasisExclusions` または Opinion 側で説明する。

---

## 21. lint 方針

`lintCaseMethodology(caseData)` が空になるようにする。

特に以下を避ける。

```text
unlinked_claim:
支持0・反証0・保留0の死蔵クレーム。

one_sided_claim:
支持1件以上・反証0の片側クレーム。

unsupported_claim:
支持0・反証1件以上の藁人形型クレーム。
```

ただし、開発途中で意図的に残す場合は `HANDOFF.md` に明記する。

---

## 22. 検証方針

必須検証。

```bash
node --check app.js
node --check data/auditSchema.js
node --check data/cases/index.js
node --check data/cases/toyota-multi-pathway-2021.js
node --check data/cases/honda-ev-concentration-2021.js
node --check ui/renderers.js
node verify.js
```

ブラウザ確認。

```text
- ケースセレクタ
- optgroup
- counterpart button
- Overview
- Timeline
- Pre-War
- Assessment
- Evidence
- Audit Opinion
- console error/warning 0
- Network tab cache-bust mismatch なし
```

---

## 23. 正典上の禁止事項

```text
- 後知恵で断罪しない
- Toyota = 正解 / Honda = 失敗 と決め打ちしない
- 企業公開資料にないことを内部未検討と断定しない
- 事後資料を ratingBasis の直接根拠にしない
- 反証リンクを省略しない
- canSay / cannotSay を省略しない
- counterpartCaseId を片方向にしない
- 既存戦争ケースのID接頭辞を混ぜない
```

---

## 24. 正典上の推奨事項

```text
- 初期 rating は未確定
- evidence は少数でもよいが、直接・間接・事後を明確化
- claims は支持・反証・保留が成立するよう設計
- assessmentCells は疎マトリクス前提で絞る
- 後年実績は「事後対照」として使う
- 企業内部資料不足は「公開説明責任上の限界」として扱う
```

---

## 25. 評価ルーブリック：形跡レベル E0〜E4

今後のブラッシュアップでは、`actuallyEvaluated` や `evidenceStrength` の判断を属人的にしないため、公開監査上の確認可能性を E0〜E4 で補助的に定義する。

重要：これは「内部で本当に検討したか」の断定ではない。企業ケースでは、公開資料から確認できる評価形跡の強さを表す。

```text
E0: 不明
公開資料上、評価形跡を確認できない。
内部で検討されていなかったとは断定しない。

E1: 弱い形跡
公式資料・報道・説明会に関連語彙はあるが、具体的な下方シナリオ、代替案、撤退基準までは確認できない。

E2: 限定的形跡
公式資料にリスク認識や対応方針はあるが、数値、時期、責任主体、代替案が限定的。

E3: 中程度の形跡
公式資料または同時代資料で、リスク、対応策、資本配分、代替シナリオの一部が確認できる。

E4: 強い形跡
公式資料、決算説明、統合報告書、複数の独立資料により、リスク認識・代替案・実行計画・修正基準が確認できる。
```

### 25.1 既存語彙との対応目安

Eレベルは既存の `actuallyEvaluated` や `evidenceStrength` を置き換えるものではなく、判断補助として使う。

```text
E0:
actuallyEvaluated: "不明"
evidenceStrength: "なし" または "弱"

E1:
actuallyEvaluated: "限定的"
evidenceStrength: "弱"

E2:
actuallyEvaluated: "限定的"
evidenceStrength: "弱〜中"

E3:
actuallyEvaluated: "形跡あり"
evidenceStrength: "中"

E4:
actuallyEvaluated: "形跡あり"
evidenceStrength: "中〜強" または "強"
```

### 25.2 Pre-War Checklist での推奨記述

E0またはE1の場合、以下の文言を優先する。

```text
公開資料上、評価形跡を確認できない。
内部で検討されていなかったとは断定できない。
```

E2以上の場合でも、内部資料がない限り以下を避ける。

```text
経営陣は十分に検討していた。
取締役会で検証済みだった。
内部で反対意見が処理されていた。
```

言えるのは、原則として以下までである。

```text
公開資料上、一定の評価形跡が確認できる。
```

---

## 26. ratingReadiness とノックアウト基準

格付けは、単純な加重平均で先に出さない。まず、格付け可能な証拠状態にあるかを `ratingReadiness` として確認する。

### 26.1 ratingReadiness

```js
ratingReadiness: {
  value: "未到達" | "限定的" | "到達",
  rationale: "...",
  blockers: ["..."],
}
```

推奨意味。

```text
未到達:
主要軸の証拠が不足しており、rating を確定すべきでない。

限定的:
暫定 rating は可能だが、主要な留保条件が残る。

到達:
ratingBasis の主要セルが十分に接地し、反証リンクも確保されている。
```

初期の Toyota / Honda ケースでは、原則として以下にする。

```js
ratingReadiness: {
  value: "未到達",
  rationale: "企業内部資料が未公開であり、2020年代後半以降の戦略成否も未確定であるため。",
  blockers: [
    "取締役会・内部投資審査資料が未公開",
    "2021年判断と後年結果の因果接続が未確定",
    "主要リスクの公開評価形跡が限定的",
  ],
}
```

### 26.2 ノックアウト基準 KO

以下に該当する場合、rating を確定しない、または上位 rating を禁止する。

```text
KO-1: 後知恵依存
ratingBasis の主根拠が事後資料に依存している場合、rating 確定不可。

KO-2: 反証欠落
主要 claim に反証リンクがない場合、rating 確定不可。

KO-3: 内部資料不足の断定
公開資料不足を「内部未検討」と断定している場合、rating 確定不可。

KO-4: 主要リスク未評価
市場需要・電池・SDV・資本配分・ガバナンスのうち、致命軸が未評価の場合、上位 rating 不可。

KO-5: canSay / cannotSay 欠落
主要 evidenceLink に canSay / cannotSay がない場合、rating 確定不可。

KO-6: counterpart 非対称
対照ケース設計で counterpartCaseId が片方向の場合、対照評価を確定不可。

KO-7: 時点性混同
timeFit: "事後" の資料を、2021年判断の直接根拠として扱っている場合、rating 確定不可。
```

### 26.3 rating と score の関係

rating は自動算出値ではなく、監査意見である。

```text
ratingReadiness が未到達
→ rating は "未確定"

ratingReadiness が限定的
→ 暫定 rating は可能。ただし ratingNote に留保を明記。

ratingReadiness が到達
→ score / KO / ACH / evidenceStrength を参考に rating を判断。
```

---

## 27. dependencyRules：依存関係の表現

個別項目を独立評価するだけでは、複合リスクを表現しにくい。そのため、将来的に `dependencyRules` をケースデータへ追加できるようにする。

初期実装では UI 追加は不要。まずはデータ構造候補として `CANON.md` に定義する。

### 27.1 基本構造

```js
dependencyRules: [
  {
    id: "",
    label: "",
    inputs: [],
    rule: "",
    output: "",
    riskAdjustment: "none" | "up" | "down",
    rationale: "",
  },
]
```

### 27.2 Toyota 例

```js
dependencyRules: [
  {
    id: "toy_dep_bev_profitability_pressure",
    label: "BEV需要 × 電池コスト × SDV能力",
    inputs: [
      "toy_pw_market_demand_forecast",
      "toy_pw_battery_supply_cost",
      "toy_pw_sdv_software_capability",
    ],
    rule: "BEV需要を強く見積もるほど、電池コストとSDV能力の評価形跡が弱い場合、収益性リスクを上方補正する。",
    output: "toy_cell_bev_profitability_risk",
    riskAdjustment: "up",
    rationale: "BEVは車両単体の電動化ではなく、電池・ソフトウェア・価格競争の複合戦であるため。",
  },
]
```

### 27.3 Honda 例

```js
dependencyRules: [
  {
    id: "hon_dep_alliance_execution_risk",
    label: "EV集中 × GM提携依存 × 実行能力",
    inputs: [
      "hon_pw_market_demand_forecast",
      "hon_pw_battery_supply_cost",
      "hon_pw_sdv_software_capability",
    ],
    rule: "EV集中度が高く、外部提携依存が高い場合、提携解消時の代替策が確認できなければ実行リスクを上方補正する。",
    output: "hon_cell_alliance_execution_risk",
    riskAdjustment: "up",
    rationale: "集中戦略は成功時のリターンが大きい一方、提携・供給網・SDVのいずれかが崩れた場合の下方リスクが大きい。",
  },
]
```

### 27.4 導入順

```text
Phase A:
CANON.md に dependencyRules 構造を定義。

Phase B:
ケースデータに dependencyRules を任意フィールドとして追加。

Phase C:
Audit Opinion に依存関係の説明だけ表示。

Phase D:
必要になった段階で Matrix / Flowchart UI を追加。
```

---

## 28. scorePrototype：加重平均・プライオリティ制

加重平均スコアは、rating の自動算出ではなく、説明補助として扱う。

導入は最後でよい。証拠が薄い段階で数値だけを出すと、疑似客観性を生む。

### 28.1 基本方針

```text
ratingReadiness が未到達
→ score を表示しない、または prototype と明示する。

ratingReadiness が限定的
→ score は参考値。rating の直接根拠にしない。

ratingReadiness が到達
→ score を rating 説明の補助として使える。
```

### 28.2 scorePrototype 構造案

```js
scorePrototype: {
  enabled: false,
  mode: "explanatory_only",
  axes: [
    {
      id: "market_demand_forecast",
      label: "市場需要・地域差",
      weight: 0.20,
      score: null,
      evidenceLevel: "E0" | "E1" | "E2" | "E3" | "E4",
      rationale: "",
    },
  ],
  knockouts: [],
  totalScore: null,
  scoreCaveat: "このスコアはratingの自動算出ではなく、説明補助である。",
}
```

### 28.3 初期ウエイト案

初期案は以下。ただし固定しない。

```text
市場需要・地域差: 20%
規制・インフラ・政策依存: 15%
電池・供給網・コスト: 20%
SDV・ソフトウェア競争: 15%
資本配分・収益耐久力: 15%
提携・外部依存・実行能力: 10%
ガバナンス・説明責任・修正基準: 5%
```

ガバナンスは5%に見えるが、KO基準では重く扱う。つまり、通常スコアでは軽く、ノックアウトでは重い。

### 28.4 ノックアウト優先

スコアが高くても、KOに該当する場合は rating を上げない。

例。

```text
score: 78
しかし KO-1 後知恵依存あり
→ rating 未確定

score: 82
しかし KO-2 反証欠落あり
→ rating 未確定または上位 rating 不可
```

---

## 29. 段階的導入計画

今後の導入順は以下とする。

```text
Phase A:
形跡レベル E0〜E4 を CANON.md に追加。

Phase B:
ratingReadiness と KO基準を追加。

Phase C:
dependencyRules を任意データ構造として追加。

Phase D:
scorePrototype を説明補助として追加。

Phase E:
必要になった場合のみ UI 化。
```

初期実装では、E0〜E4 と KO基準までを優先する。dependencyRules と scorePrototype は、正典上の仕様候補として定義するが、すぐに UI 実装しない。

## 30. evidenceAccessScope：利用可能情報の境界

第三者評価で指摘された最大論点は、「当時利用可能だった情報」の境界である。

企業ケースでは、以下を明確に分ける。

```text
1. 公開情報として当時利用可能だった資料
2. 経営陣・取締役会が実際にアクセスしていた可能性のある内部資料
3. 後年資料から再構成された当時状況
```

初期 Toyota / Honda ケースは、原則として `public_osint` 監査である。

### 30.1 基本構造

```js
evidenceAccessScope: {
  mode: "public_osint" | "internal_available" | "retrospective_reconstruction",
  description: "",
  limitation: "",
}
```

### 30.2 mode 定義

```text
public_osint:
公開資料・同時代報道・公開市場データのみを扱う。
外部株主・研究者・読者が再現可能な監査モード。
初期 Toyota / Honda ケースはこのモードとする。

internal_available:
社内資料・取締役会資料・投資審査資料・採算見積もりを含む。
事業会社内部レビューや監査委員会レビュー向け。
公開版では通常使用しない。

retrospective_reconstruction:
後年資料・回顧・報道・後年分析を用いて当時判断を再構成する。
ただし、2021年判断の直接証拠としては扱わない。
```

### 30.3 初期ケースでの標準値

```js
evidenceAccessScope: {
  mode: "public_osint",
  description: "公開資料・公式発表・同時代報道・公開市場データに基づく外部監査。",
  limitation: "取締役会資料、内部投資審査、採算見積もり、社内反対意見は通常確認できないため、経営陣の実際の認識は断定しない。",
}
```

### 30.4 禁止事項

```text
- public_osint 監査で「内部では検討していなかった」と断定しない。
- retrospective_reconstruction を ex-ante 直接証拠として扱わない。
- internal_available 資料がないのに、取締役会や経営会議の実態を断定しない。
```

---

## 31. evidenceWeight：証拠の重み付け

E0〜E4 は「評価形跡の確認可能性」を表す。
一方、`evidenceWeight` は、個別証拠の監査上の重みを表す。

同じ E3 でも、企業公式資料、同時代の独立分析、匿名報道、後年分析では重みが異なる。

### 31.1 基本構造

```js
evidenceWeight: {
  sourceProximity: "primary" | "official" | "independent_same_time" | "retrospective" | "anonymous",
  temporalFit: "direct" | "indirect" | "post_hoc",
  independence: "single_source" | "multiple_independent",
  decisionMakerAccess: "clear" | "likely" | "unknown",
  weight: "low" | "medium" | "high",
  rationale: "",
}
```

### 31.2 sourceProximity

```text
primary:
当該企業または当該意思決定主体の一次資料。
例：公式発表、事業説明会資料、有価証券報告書、統合報告書。

official:
企業公式ではあるが、意思決定時点そのものから少し離れた説明資料。
例：後年の公式説明、サステナビリティ資料。

independent_same_time:
同時代の独立外部資料。
例：IEA、BloombergNEF、ACEA、同時代報道、業界分析。

retrospective:
後年分析、後年報道、後年販売実績、後年の戦略再評価。

anonymous:
匿名証言、未確認報道、出所が限定的な情報。
```

### 31.3 temporalFit

```text
direct:
判断時点に存在し、当時判断に直接関係する資料。

indirect:
当時状況の再構成には使えるが、直接資料ではない。

post_hoc:
後年に作られた資料。直接根拠ではなく事後対照として扱う。
```

### 31.4 decisionMakerAccess

```text
clear:
当該企業自身の発表・資料であり、経営陣の接触可能性が明白。

likely:
同時代の主要業界資料・規制資料であり、通常の経営判断で参照された可能性が高い。

unknown:
経営陣が認識していたか確認できない。
```

### 31.5 weight の目安

```text
high:
一次資料または複数独立資料で確認でき、時点性も合う。

medium:
同時代外部資料または公式資料だが、判断への接続が間接的。

low:
後年資料、匿名資料、単独報道、または時点性に制約が大きい。
```

重要：`weight: "high"` でも、`cannotSay` は必ず残す。
高重み証拠は万能証拠ではない。

---

## 32. uncertaintyReason：未確定理由の分類

`rating: "未確定"` は、技術的未確定と認識論的未確定を区別する必要がある。

そのため、各ケースに `uncertaintyReason` を持たせる。

### 32.1 基本構造

```js
uncertaintyReason: [
  "case_not_selected",
  "evidence_insufficient",
  "evidence_conflicting",
  "internal_documents_unavailable",
  "outcome_not_mature",
  "scope_boundary_unresolved",
  "methodology_under_revision",
]
```

### 32.2 定義

```text
case_not_selected:
UI上ケース未選択など、技術的理由により表示できない。

evidence_insufficient:
主要な証拠が不足している。

evidence_conflicting:
支持証拠と反証証拠が拮抗している。

internal_documents_unavailable:
内部資料が未公開で、経営陣の実際の認識を断定できない。

outcome_not_mature:
産業転換や戦略成果がまだ成熟しておらず、成否を判断できない。

scope_boundary_unresolved:
どこまでを当該ケースの責任範囲に含めるか未整理。

methodology_under_revision:
評価ルーブリックや重み付け設計が更新中。
```

### 32.3 Toyota / Honda 初期値

```js
uncertaintyReason: [
  "internal_documents_unavailable",
  "outcome_not_mature",
  "evidence_conflicting",
]
```

この指定により、`未確定` が単なるプレースホルダーではなく、認識論的留保であることを示す。

---

## 33. adversarialReview：構造的反論レビュー

「反証証拠を隠さない」を宣言で終わらせないため、主要ケースには `adversarialReview` を導入できる。

これは、批判側・擁護側の最強主張を明示する構造である。

### 33.1 基本構造

```js
adversarialReview: {
  prosecution: [
    {
      claimId: "",
      strongestArgument: "",
      strongestEvidenceLinks: [],
      caveat: "",
    },
  ],
  defense: [
    {
      claimId: "",
      strongestArgument: "",
      strongestEvidenceLinks: [],
      caveat: "",
    },
  ],
  unresolvedTensions: [],
}
```

### 33.2 prosecution / defense の意味

```text
prosecution:
監査上の懸念・批判側の最強主張。
例：BEV/SDV転換遅れ、EV需要過大評価、提携依存過小評価。

defense:
当該戦略を擁護する最強主張。
例：リアルオプション戦略、先行コミットメント、地域差対応、能力補完。

unresolvedTensions:
現時点で決着できない論点。
```

### 33.3 Toyota 例

```js
adversarialReview: {
  prosecution: [
    {
      claimId: "toy_claim_bev_sdv_delay_risk",
      strongestArgument: "multi-pathway は地域差対応として説明可能だが、中国BEV・SDV競争の速度を過小評価し、戦略集中を遅らせた可能性がある。",
      strongestEvidenceLinks: ["TOY-EL-..."],
      caveat: "ただし、後年のBEV競争激化は2021年判断の直接証拠ではない。",
    },
  ],
  defense: [
    {
      claimId: "toy_claim_multi_pathway_as_real_option",
      strongestArgument: "2021年前後の地域差、電池制約、充電インフラ未成熟、HEV収益力を踏まえると、multi-pathway は合理的なリアルオプション戦略だった可能性がある。",
      strongestEvidenceLinks: ["TOY-EL-..."],
      caveat: "ただし、実行能力やSDV対応の十分性までは断定できない。",
    },
  ],
  unresolvedTensions: [
    "HEV収益による時間稼ぎとBEV/SDV集中遅れの境界",
    "地域差対応と中国市場での競争遅れの切り分け",
  ],
}
```

### 33.4 Honda 例

```js
adversarialReview: {
  prosecution: [
    {
      claimId: "hon_claim_ev_demand_profitability_overestimated",
      strongestArgument: "Honda はEV需要、量販EV採算、GM提携継続性を過大評価した可能性がある。",
      strongestEvidenceLinks: ["HON-EL-..."],
      caveat: "ただし、後年の戦略再評価だけで2021年判断の不合理性を直接証明することはできない。",
    },
  ],
  defense: [
    {
      claimId: "hon_claim_ev_concentration_as_forward_commitment",
      strongestArgument: "脱炭素規制、ZEV政策、将来のEV市場拡大を前提にすれば、EV/FCEV集中は合理的な先行コミットメントだった可能性がある。",
      strongestEvidenceLinks: ["HON-EL-..."],
      caveat: "ただし、電池・SDV・提携依存の下方シナリオが十分に公開説明されていたとは限らない。",
    },
  ],
  unresolvedTensions: [
    "合理的な先行投資と需要・収益性の過大評価の境界",
    "GM提携による能力補完と外部依存リスクの境界",
  ],
}
```

---

## 34. intendedUse：利用文脈の明示

このツールが誰のために何を生み出すのかを明確にする。

同じケースでも、株主向け、社内改善向け、研究向けでは必要な証拠水準と結論形式が異なる。

### 34.1 基本構造

```js
intendedUse: {
  primary: "research_case_study" | "board_review" | "investor_due_diligence" | "strategy_training",
  secondary: [],
  notFor: [],
}
```

### 34.2 用途定義

```text
research_case_study:
研究・教材・公開ケーススタディ向け。
公開資料に基づく再現可能性を重視する。

board_review:
取締役会・社内レビュー向け。
内部資料を含めた意思決定改善に使う。

investor_due_diligence:
株主・投資家が経営陣の説明責任や資本配分を検証するために使う。

strategy_training:
戦略部門・経営企画・MBA教材など、意思決定訓練に使う。
```

### 34.3 notFor

初期公開版では、以下を明示する。

```js
notFor: [
  "legal_liability_determination",
  "investment_recommendation",
  "definitive_management_blame",
]
```

意味。

```text
legal_liability_determination:
法的責任認定には使わない。

investment_recommendation:
株式売買や投資推奨には使わない。

definitive_management_blame:
経営者個人の断罪には使わない。
```

### 34.4 初期 Toyota / Honda ケースの標準値

```js
intendedUse: {
  primary: "research_case_study",
  secondary: [
    "strategy_training",
    "investor_due_diligence",
  ],
  notFor: [
    "legal_liability_determination",
    "investment_recommendation",
    "definitive_management_blame",
  ],
}
```

---

## 35. 第三者評価への対応方針

第三者評価では、以下の批判が示された。

```text
1. 「利用可能な情報」の境界問題
2. 5リスク軸の粒度・相互作用問題
3. 「未確定」の認識論的地位
4. 反証証拠を隠さないための運用担保
5. 利用文脈の不明確さ
```

本 CANON では、以下で対応する。

```text
1. evidenceAccessScope
   公開情報・内部情報・事後再構成を分ける。

2. dependencyRules
   リスク軸間の相互作用を扱う。

3. uncertaintyReason / ratingReadiness
   未確定理由を分類し、格付け可能性を明示する。

4. adversarialReview
   批判側・擁護側の最強主張を構造化する。

5. intendedUse
   研究・教材・投資家検証・社内レビューなどの用途を分ける。
```

これにより、本フレームワークは「何を見ないかの規律」に加えて、「何をどの境界で、どの重みで、どの用途に向けて評価するか」の骨格を持つ。

## 36. crossCompanyTemplate：企業間比較の共通テンプレート

第三者評価2で指摘された通り、Toyota / Honda の2ケースだけでは、評価軸が企業固有文脈に引きずられる危険がある。

今後、BYD、Tesla、日産、VW、GM、現代自動車などへ横展開する場合、業界横断で使える共通テンプレートを持つ必要がある。

### 36.1 基本方針

```text
同じ軸で比較する。
ただし、同じ重みで裁かない。
```

企業規模、地域ポートフォリオ、収益源、技術内製度、既存製品構成、資本余力が異なるため、同じ評価軸を使っても、解釈には補正が必要である。

### 36.2 基本構造

```js
crossCompanyTemplate: {
  industry: "automotive",
  strategicShock: "EV / SDV shift",
  commonAxes: [
    "market_demand_forecast",
    "regulatory_infrastructure_risk",
    "battery_supply_cost",
    "sdv_software_capability",
    "capital_allocation_resilience",
    "alliance_dependency_execution",
    "governance_disclosure_process",
  ],
  requiredComparabilityNotes: [
    "企業規模",
    "主要地域",
    "収益源",
    "技術内製度",
    "既存製品ポートフォリオ",
    "資本余力",
  ],
}
```

### 36.3 運用原則

```text
- 評価軸は共通化する。
- 企業固有事情は comparability notes として明示する。
- 企業固有事情を理由に、反証証拠や主要リスクを省略しない。
- スコア差をそのまま優劣としない。
- ケース間比較は、勝敗判定ではなく戦略仮説の比較とする。
```

---

## 37. normalizationFactors：企業規模・地域差・事業構造の補正

企業間比較では、企業規模や地域ポートフォリオの違いを明示しなければ、機械的な横並び比較になる。

初期段階では、数値補正係数ではなく、分類と理由付けとして扱う。

### 37.1 基本構造

```js
normalizationFactors: {
  companyScale: {
    category: "large_global" | "mid_global" | "regional",
    rationale: "",
  },
  regionalExposure: {
    japan: null,
    northAmerica: null,
    europe: null,
    china: null,
    emergingMarkets: null,
    rationale: "",
  },
  legacyProfitEngine: {
    type: "hybrid_strength" | "ice_dependency" | "ev_native" | "mixed",
    rationale: "",
  },
  capitalCapacity: {
    level: "low" | "medium" | "high",
    rationale: "",
  },
  technologyInternalization: {
    level: "low" | "medium" | "high",
    rationale: "",
  },
}
```

### 37.2 注意

```text
- normalizationFactors は免責ではない。
- 大企業だから遅れてよい、とは言えない。
- 中堅企業だから説明責任が軽くなる、とは言えない。
- 補正は「同じ現象の意味が企業ごとに異なる」ことを明示するために使う。
```

例。

```text
Toyota:
HEV収益力とグローバル地域分散が multi-pathway の合理性を補強する可能性がある。

Honda:
企業規模、四輪事業の収益構造、GM提携依存により、EV集中戦略の実行リスクが相対的に大きくなる可能性がある。
```

---

## 38. evidenceHierarchy：証拠リンクの階層化

既存の `evidenceWeight` は証拠の重みを扱う。  
一方、`evidenceHierarchy` は、読者が直感的に理解しやすい A/B/C/D の証拠階層を与える。

### 38.1 階層定義

```text
A: 一次資料
企業公式資料、決算説明、有価証券報告書、統合報告書、当時の公式発表。

B: 同時代二次資料
当時の報道、業界分析、IEA / BNEF / ACEA 等の外部資料。

C: 後年分析・事後資料
後年の戦略再評価、販売実績、提携中止、後年報道。

D: 推測・弱いシグナル
匿名報道、間接的シグナル、単独観測、推定。
```

### 38.2 基本構造

```js
evidenceHierarchy: {
  level: "A" | "B" | "C" | "D",
  label: "一次資料" | "同時代二次資料" | "後年分析・事後資料" | "推測・弱いシグナル",
  confidence: "low" | "medium" | "high",
  rationale: "",
}
```

### 38.3 evidenceWeight との関係

```text
evidenceHierarchy:
出典の階層・近さを示す。

evidenceWeight:
その証拠が当該 claim / assessmentCell にどの程度効くかを示す。
```

重要：A は「真実性が高い」という意味ではない。  
企業公式資料は一次資料だが、自己正当化、IR目的、選択的開示のバイアスを含む可能性がある。

そのため、A資料でも `cannotSay` は必須である。

---

## 39. causalScenarioMap：戦略の因果構造とシナリオ分析

項目別評価だけでは、「どのリスクがどの戦略判断に影響したか」が見えにくい。

そのため、`dependencyRules` の発展形として、戦略判断の因果構造を `causalScenarioMap` として定義する。

### 39.1 基本構造

```js
causalScenarioMap: {
  nodes: [
    {
      id: "",
      label: "",
      type: "external_condition" | "technology_condition" | "internal_capability" | "strategic_choice" | "outcome_proxy",
    },
  ],
  edges: [
    {
      from: "",
      to: "",
      relation: "",
      rationale: "",
    },
  ],
}
```

### 39.2 自動車EV/SDVシフトでの代表ノード

```js
nodes: [
  { id: "market_demand", label: "市場需要", type: "external_condition" },
  { id: "regulation", label: "規制・補助金", type: "external_condition" },
  { id: "battery_cost", label: "電池コスト", type: "technology_condition" },
  { id: "sdv_capability", label: "SDV能力", type: "internal_capability" },
  { id: "alliance_dependency", label: "提携依存", type: "internal_capability" },
  { id: "investment_timing", label: "投資タイミング", type: "strategic_choice" },
  { id: "capital_allocation", label: "資本配分", type: "strategic_choice" },
  { id: "competitive_position", label: "競争地位", type: "outcome_proxy" },
]
```

### 39.3 代表エッジ

```js
edges: [
  {
    from: "market_demand",
    to: "investment_timing",
    relation: "accelerates_or_delays",
    rationale: "BEV需要の成長速度は投資タイミング判断に影響する。",
  },
  {
    from: "battery_cost",
    to: "capital_allocation",
    relation: "changes_roi",
    rationale: "電池コスト低下はBEV投資の採算性を改善する。",
  },
  {
    from: "sdv_capability",
    to: "competitive_position",
    relation: "constrains_or_enables",
    rationale: "EV競争は車両電動化だけでなく、ソフトウェア更新・UX・データ活用の競争でもある。",
  },
]
```

### 39.4 UI方針

初期実装では、因果マップの図示は必須ではない。

導入順。

```text
Phase A:
データ構造として causalScenarioMap を追加。

Phase B:
Audit Opinion に「主要因果連鎖」としてテキスト表示。

Phase C:
必要になった段階で、フローチャートまたはマトリクスUIを追加。
```

---

## 40. scenarioSet：ex-ante シナリオ分析

ex-ante 監査では、単一未来ではなく、判断時点で合理的に想定できた複数未来を扱う。

### 40.1 基本構造

```js
scenarioSet: [
  {
    id: "",
    name: "",
    decisionTimeView: "",
    implications: [],
    favors: [],
    risks: [],
  },
]
```

### 40.2 自動車EV/SDVシフトの代表シナリオ

```js
scenarioSet: [
  {
    id: "scenario_fast_bev_adoption",
    name: "BEV急速普及シナリオ",
    decisionTimeView: "政策・電池価格・消費者需要が揃い、BEV普及が急速に進む未来。",
    implications: [
      "BEV投資の遅れが競争劣位になる。",
      "SDV能力不足が早期に顕在化する。",
    ],
    favors: ["EV集中戦略", "早期BEV量産", "SDV内製強化"],
    risks: ["multi-pathway の集中遅れ", "HEV収益依存の長期化"],
  },
  {
    id: "scenario_slow_fragmented_adoption",
    name: "地域分断・緩慢普及シナリオ",
    decisionTimeView: "地域差、充電インフラ、価格感度によりBEV普及が分断される未来。",
    implications: [
      "HEV / PHEV 収益維持が合理的になる。",
      "multi-pathway のオプション価値が高まる。",
    ],
    favors: ["multi-pathway", "HEV収益維持", "地域別製品戦略"],
    risks: ["EV集中戦略の投資過多", "提携依存リスク"],
  },
]
```

### 40.3 監査上の使い方

```text
Toyota / Honda のどちらが正しいか、ではなく、
どのシナリオをどの程度重く見たかを監査する。

BEV急速普及シナリオ:
Honda有利、Toyota遅れリスク。

地域分断・緩慢普及シナリオ:
Toyota有利、Honda投資過多リスク。
```

---

## 41. gapEscalationProtocol：未評価ギャップの昇格基準

未評価ギャップを常に中立扱いすると、重大な説明責任不足が埋もれる。

そのため、未評価ギャップの昇格基準を定義する。

### 41.1 基本構造

```js
gapEscalationProtocol: {
  levels: [
    {
      level: "G0",
      label: "中立的未評価",
      condition: "",
    },
    {
      level: "G1",
      label: "要追加資料",
      condition: "",
    },
    {
      level: "G2",
      label: "監査上の懸念",
      condition: "",
    },
    {
      level: "G3",
      label: "rating制約",
      condition: "",
    },
  ],
}
```

### 41.2 昇格レベル

```text
G0: 中立的未評価
公開資料上確認できないが、リスクの重要性が低い、または別資料で補完可能。

G1: 要追加資料
主要リスク軸に関する評価形跡が限定的で、判断根拠の確認が必要。

G2: 監査上の懸念
高重要度リスクについて、公式資料・同時代資料の双方で評価形跡が乏しい。

G3: rating制約
主要リスク軸の評価形跡が欠落し、かつ戦略判断への影響が大きい。
上位 rating を禁止する。
```

### 41.3 昇格条件

```text
- リスク重要度が high
- evidenceHierarchy A または B の資料で評価形跡がない
- E0 または E1 が継続している
- counterpart case では同軸の評価形跡がある
- 後年資料で当該リスクが顕在化している
```

上記のうち複数を満たす場合、G1 → G2 → G3 へ昇格させる。

### 41.4 informationRequest

未評価ギャップは、単なる空欄ではなく、追加資料要求として管理する。

```js
informationRequest: [
  {
    id: "REQ-001",
    targetGap: "",
    requestedMaterial: "",
    reason: "",
    priority: "low" | "medium" | "high",
    status: "unavailable_publicly" | "requested" | "received" | "not_applicable",
  },
]
```

例。

```js
informationRequest: [
  {
    id: "REQ-HON-001",
    targetGap: "hon_pw_alliance_dependency",
    requestedMaterial: "GM提携解消時の代替シナリオ、量販EV採算見積もり、投資審査資料。",
    reason: "EV集中戦略の実行リスク評価に必要。",
    priority: "high",
    status: "unavailable_publicly",
  },
]
```

### 41.5 ratingReadiness との接続

```text
G0:
ratingReadiness には原則影響しない。

G1:
ratingReadiness の blockers に追加候補。

G2:
ratingReadiness を "限定的" 以下に制約する。

G3:
ratingReadiness を "未到達" または上位 rating 不可に制約する。
```

## 42. adversarialReviewGovernance：最強主張の非対称問題

`adversarialReview` は、批判側・擁護側の最強主張を明示するための構造である。  
しかし、「最強主張」を単一著者が選ぶ場合、構造的な非対称問題が残る。

問題。

```text
- 批判者は、擁護側の最強論拠を弱く提示する誘因がある。
- 擁護者は、批判側の最強論拠を弱く提示する誘因がある。
- 単一著者が両側を書く場合でも、著者の初期仮説や関心により片側が弱くなる可能性がある。
```

したがって、`adversarialReview` は「反証を隠さない」ための必要条件ではあるが、十分条件ではない。

### 42.1 steelmanStandard

最強主張は、単なる著者の要約ではなく、以下の基準で記録する。

```js
steelmanStandard: {
  basis: "named_source" | "representative_argument" | "expert_consensus" | "minority_warning" | "internal_counterfactual",
  sourceEvidenceLinks: [],
  selectionRationale: "",
  reviewerRole: "author" | "independent_reviewer" | "domain_expert" | "red_team" | "blue_team",
  confidence: "low" | "medium" | "high",
}
```

### 42.2 最強主張の採用基準

優先順位は以下。

```text
1. 当時存在した著名な懐疑論・擁護論
2. 当時の専門家・業界分析・投資家説明で確認できる代表的論点
3. 企業自身の公式主張
4. 同時代の少数派警告
5. 後年資料から再構成した反実仮想
```

後年再構成の場合は、`timeFit: "事後"` とし、2021年判断の直接証拠にしない。

### 42.3 reviewerProtocol

可能であれば、批判側・擁護側の主張は独立に作る。

```js
reviewerProtocol: {
  mode: "single_author" | "independent_dual_review" | "external_multi_reviewer",
  reviewers: [],
  asymmetryRisk: "low" | "medium" | "high",
  mitigation: "",
}
```

初期公開版では、多くの場合 `single_author` になる。  
その場合、`asymmetryRisk: "medium"` 以上を既定とし、以下を明記する。

```text
本 adversarialReview は単一著者による構造化レビューであり、
外部複数レビュアーによる独立査読ではない。
したがって、最強主張の選定には残余バイアスの可能性がある。
```

### 42.4 adversarialReview の追加必須フィールド案

既存構造を以下のように拡張できる。

```js
adversarialReview: {
  reviewerProtocol: {
    mode: "single_author",
    asymmetryRisk: "medium",
    mitigation: "各 strongestArgument に sourceEvidenceLinks と selectionRationale を付ける。",
  },
  prosecution: [
    {
      claimId: "",
      strongestArgument: "",
      strongestEvidenceLinks: [],
      steelmanBasis: "named_source",
      selectionRationale: "",
      caveat: "",
    },
  ],
  defense: [
    {
      claimId: "",
      strongestArgument: "",
      strongestEvidenceLinks: [],
      steelmanBasis: "official_claim",
      selectionRationale: "",
      caveat: "",
    },
  ],
  unresolvedTensions: [],
}
```

---

## 43. assessmentCoverage：疎マトリクスと空白セルの意味

本プロジェクトは、`assessmentCells` を疎マトリクスとして扱う。  
すべての軸×フェーズを埋める必要はない。

しかし、セルが存在しない場合、読者には以下の区別ができない。

```text
1. in-scope だが未評価
2. in-scope かつ評価したが公開証拠なし
3. out-of-scope
4. 実装未了
```

E0 は「in-scope かつ公開資料上、評価形跡を確認できない」状態を表す。  
したがって、「セルが存在しない」と「セルがE0」は区別しなければならない。

### 43.1 coverageState

各評価軸・フェーズの組み合わせについて、必要に応じて `assessmentCoverage` を持たせる。

```js
assessmentCoverage: [
  {
    axisId: "",
    phaseId: "",
    coverageState: "assessed" | "e0_no_public_trace" | "in_scope_unassessed" | "out_of_scope" | "implementation_pending",
    rationale: "",
    linkedAssessmentCellId: "",
    linkedGapId: "",
  },
]
```

### 43.2 coverageState 定義

```text
assessed:
assessmentCell が存在し、評価済み。

e0_no_public_trace:
in-scope で評価対象だが、公開資料上の評価形跡が確認できない。
E0 として扱う。

in_scope_unassessed:
in-scope だが、まだ評価していない。
未評価ギャップとして管理する。

out_of_scope:
当該ケースの責任範囲外。
空白であっても問題ではない。

implementation_pending:
スキーム上は必要だが、実装作業が未完了。
```

### 43.3 UI 方針

UIでは、空白セルを単なる `—` だけで表示しない。  
少なくとも以下の区別を表示できるようにする。

```text
評価済み
公開資料上確認不能
未評価
対象外
実装待ち
```

初期実装でUI変更が重い場合、`Audit Opinion` または `Pre-War Checklist` に「未評価ギャップ一覧」として表示する。

### 43.4 gapEscalationProtocol との接続

```text
e0_no_public_trace:
gapEscalationProtocol の G0〜G3 判定候補。

in_scope_unassessed:
informationRequest を作成する候補。

out_of_scope:
原則として gapEscalationProtocol の対象外。

implementation_pending:
HANDOFF の未了タスクとして管理する。
```

---

## 44. symmetricComparisonEntry：主ケース/対照ケースのフレーミング効果

Toyota を主ケース、Honda を対照ケースとする設計は、作業上は実用的である。  
しかし、読者の注意配分に非対称なフレーミング効果をもたらす可能性がある。

問題。

```text
- DEFAULT_CASE_ID が Toyota の場合、多くのユーザーは Toyota から読み始める。
- Honda が「副」または「比較対象」として見える可能性がある。
- 「Toyota が基準で Honda が逸脱」という印象を与えるリスクがある。
```

これは、H-003 の「両者の仮説を比較する」という原則と緊張する。

### 44.1 基本方針

```text
比較ケースでは、片方を正準ケース、他方を例外ケースとして扱わない。
主ケース/対照ケースは実装上の入口であり、認識論的優位を意味しない。
```

### 44.2 comparisonEntryMode

```js
comparisonEntryMode: {
  mode: "single_default" | "neutral_landing" | "rotating_default" | "compare_first",
  defaultCaseId: "",
  framingRisk: "low" | "medium" | "high",
  mitigation: "",
}
```

### 44.3 推奨

初期実装では `single_default` でもよい。  
ただし、`framingRisk: "medium"` とし、UIまたは Overview で以下を明示する。

```text
Toyota から表示を開始することは、Toyota を基準または正解とみなすものではない。
本ケース群は、同一産業ショックに対する異なる戦略仮説の対照である。
```

中期的には、以下のいずれかを検討する。

```text
neutral_landing:
ケース選択前に、Toyota / Honda を並列表示する入口画面を置く。

compare_first:
Compareビューを初期表示し、両社を左右対称に提示する。

rotating_default:
訪問ごとに初期ケースを変える。ただし再現性が下がるため推奨度は低い。
```

### 44.4 Compareビューの優先度

第三者評価により、Compareビューは単なる便利機能ではなく、フレーミング効果を緩和するための設計要素と位置づける。

```text
Compareビューの役割:
- Toyota / Honda を並列に提示する。
- 各軸の差分を「優劣」ではなく「戦略仮説の違い」として表示する。
- evidenceHierarchy / uncertaintyReason / gapEscalation を左右対称に比較する。
- 主ケース/対照ケースという認知的非対称性を弱める。
```

したがって、Compareビューは将来候補ではなく、中期優先課題とする。

## 45. frameworkScopeDiscipline：メタ枠組みの過剰化リスク

追加レビューで最も重要な指摘は、メタ枠組みが監査対象を追い越している可能性である。

現状、CANON は多数の章と仕様候補を持つ一方、実ケースは Toyota / Honda の2件にとどまる。  
これは「転用可能な監査の作法」を磨いている状態ではあるが、n=2 のままでは汎用性を検証できない。

### 45.1 原則

```text
作法は、ケース追加によって検証する。
仕様候補は、ケースで必要になった時点で採用する。
```

### 45.2 overSpecificationRisk

```js
overSpecificationRisk: {
  level: "low" | "medium" | "high",
  indicators: [
    "ケース数に比べて仕様候補が過大",
    "rating未確定のケースのみが蓄積している",
    "新ケース追加よりメタ仕様追加が先行している",
    "UI実装されない仕様候補が増えている",
  ],
  mitigation: "",
}
```

### 45.3 stopRule：仕様追加の停止条件

以下に該当する場合、新規フィールド追加を原則停止し、ケース追加または既存ケースの実査へ移る。

```text
- 実ケース数が3未満
- 直近の変更が3回連続で仕様追加のみ
- ratingReadiness が全ケースで未到達のまま
- 新規仕様候補が既存ケースに実装されていない
- 追加仕様のUI表示または検証コマンドが未定義
```

### 45.4 nextCaseFirst 方針

次の優先作業は、仕様候補の追加ではなく、3社目ケースの追加とする。

候補。

```text
BYD:
EVネイティブ / 電池内製 / 中国市場 / 垂直統合の比較軸を検証できる。

Tesla:
EV集中・SDV先行・垂直統合・価格戦略を検証できる。

VW:
欧州規制・IDシリーズ・ソフトウェア遅延・既存ICE企業の転換を検証できる。
```

3社目追加の目的は、ケースを増やすこと自体ではなく、既存スキーマが本当に転用可能かを検査することである。

---

## 46. ratingReadinessPositiveCriteria：rating 到達条件

KO基準、gapEscalation、ratingReadiness は、主に rating を抑制する方向に働く。  
このため、常に `rating: "未確定"` へ流れる設計になっていないかを検査する必要がある。

監査の誠実性は重要だが、常に判断保留する設計は実務的に不活性である。

### 46.1 原則

```text
禁止条件だけでなく、到達条件を書く。
```

### 46.2 ratingReadiness 到達条件

```js
ratingReadinessPositiveCriteria: {
  minimumEvidenceCoverage: {
    requiredAxesCovered: 5,
    totalCoreAxes: 7,
    requiredEvidenceHierarchy: ["A", "B"],
    rationale: "主要7軸のうち5軸以上について、一次資料または同時代二次資料で評価可能であること。",
  },
  adversarialBalance: {
    required: true,
    condition: "主要claimに支持・反証・保留のいずれかが接続され、片側主張だけでratingを構成していないこと。",
  },
  temporalIntegrity: {
    required: true,
    condition: "ratingBasis の主根拠が timeFit: '直接' または '間接' に接地しており、'事後' が直接根拠になっていないこと。",
  },
  gapTolerance: {
    maxG3Gaps: 0,
    maxG2Gaps: 1,
    rationale: "G3が存在する場合は上位rating不可。G2が複数ある場合は原則未到達。",
  },
}
```

### 46.3 到達判定の例

```text
到達:
主要軸の大半が A/B 資料で接地し、反証リンクがあり、G3がなく、事後資料を直接根拠にしていない。

限定的:
主要軸は一定程度接地するが、G2が残る、または内部資料不足により留保が必要。

未到達:
主要軸の証拠が不足、G3がある、後知恵依存がある、または反証リンクが欠落している。
```

### 46.4 rating の役割

```text
rating は断罪ではない。
rating は、監査時点で言えることの明示である。
```

`未確定` は正当な結論であり得るが、常に `未確定` になるなら、フレームワークは判断を放棄している可能性がある。

---

## 47. strategyChoiceVsCapacityConstraint：戦略選択と構造的キャパシティの分離

Toyota / Honda の比較では、両社が対称な主体ではないことに注意する。

Honda が EV集中を「選んだ」のではなく、資本余力・HEV収益力・地域分散・技術内製度の制約により、multi-pathway を採れなかった可能性がある。

つまり、戦略仮説の対照に見えるものが、構造的キャパシティの反映かもしれない。

### 47.1 基本構造

```js
strategyChoiceVsCapacityConstraint: {
  strategicChoice: {
    description: "",
    evidenceLinks: [],
  },
  capacityConstraint: {
    description: "",
    evidenceLinks: [],
  },
  ambiguity: {
    level: "low" | "medium" | "high",
    rationale: "",
  },
}
```

### 47.2 判定軸

```text
戦略選択:
複数の実行可能な選択肢があり、その中から意図的に選んだ可能性が高い。

構造的制約:
資本余力、収益構造、技術内製度、地域展開、提携依存により、選べる選択肢が制約されていた可能性が高い。

混合:
選択と制約が絡み合い、どちらか一方に還元できない。
```

### 47.3 Toyota / Honda への適用

```text
Toyota multi-pathway:
legacyProfitEngine と capitalCapacity に支えられた選択である可能性がある。

Honda EV集中:
制約下での集中、または能力補完のための提携依存であった可能性がある。
```

監査上は、以下を区別する。

```text
- その企業は何を選んだのか
- その企業は何を選べなかったのか
- 選べなかったことを、経営責任として問えるのか
```

---

## 48. disclosureBiasGuard：OSINT監査における開示バイアス

public_osint 監査では、公開資料が豊富な企業が有利に見える危険がある。

CANON 4章では「公開資料にない ≠ 内部未検討」を守っている。  
しかし、逆方向も守る必要がある。

```text
公開資料にある ≠ 内部で十分検討した
```

公式資料は、IR、ブランド、投資家向け説明、事後的正当化の産物であり得る。

### 48.1 disclosureBias

```js
disclosureBias: {
  risk: "low" | "medium" | "high",
  flags: [
    "IR_motivated",
    "post_hoc_justification_risk",
    "selective_disclosure",
    "narrative_richness_bias",
  ],
  rationale: "",
}
```

### 48.2 evidenceWeight への接続

公式資料・一次資料でも、以下に該当する場合は weight を自動的に高くしない。

```text
- IR_motivated
- post_hoc_justification_risk
- selective_disclosure
- narrative_richness_bias
```

例。

```text
Toyota の multi-pathway 公開説明:
一次資料として A だが、IRナラティブとしての自己正当化バイアスを持つ可能性がある。

Honda の公開説明の少なさ:
内部検討不足を意味しない。IR文化・開示方針・資料公開範囲の違いかもしれない。
```

### 48.3 ガード原則

```text
- 開示量を評価形跡そのものと同一視しない。
- 公式資料の豊富さを内部検討の十分性と同一視しない。
- 寡黙な企業を自動的に低評価しない。
- 雄弁な企業を自動的に高評価しない。
```

---

## 49. rationalExpectationBaseline：反実仮想ベースライン

説明責任監査は、暗黙に「当時知り得た情報で、より良く判断できたか」を問う。

そのためには、当時の合理的意思決定者が参照し得た期待値、すなわち `rationalExpectationBaseline` が必要である。

### 49.1 基本構造

```js
rationalExpectationBaseline: {
  decisionTime: "2021",
  sources: [
    {
      id: "",
      title: "",
      sourceType: "IEA" | "BNEF" | "analyst_consensus" | "regulatory_plan" | "industry_report",
      publicationDate: "",
      availabilityAtDecisionTime: true,
      baselineClaim: "",
      evidenceHierarchy: "A" | "B" | "C" | "D",
    },
  ],
  consensusView: "",
  minorityWarnings: [],
  baselineUncertainty: "low" | "medium" | "high",
}
```

### 49.2 用途

```text
- Toyota / Honda の需要見積もりが当時の専門家コンセンサスから上振れ・下振れしていたかを測る。
- EV急速普及シナリオと緩慢普及シナリオの当時 plausibility を比較する。
- 後年結果ではなく、2021年時点の合理的期待を基準点にする。
```

### 49.3 代表的な基準候補

```text
- 2021年時点の IEA Global EV Outlook
- 2021年時点の BloombergNEF バッテリー価格・EV普及予測
- EU / 中国 / 米国の当時の規制計画
- 同時代のアナリストコンセンサス
- 同時代の少数派警告
```

### 49.4 rating への接続

```text
当時の合理的期待から大きく外れた判断:
説明責任が重くなる。

当時の合理的期待の範囲内だった判断:
後年結果が悪くても、直ちに不合理とは言えない。

当時の合理的期待自体が広く不確実だった判断:
rating は限定的または未確定になりやすい。
```

---

## 50. initialStateClarity：初期描画と状態表示

認識論的厳密性を掲げるツールでは、UI上の初期状態も曖昧にしてはならない。

`暫定 --` のような表示は、以下の区別を曖昧にする。

```text
- ローディング中
- ケース未選択
- 評価不能
- rating未確定
- 実装未了
```

### 50.1 UI状態の分類

```js
uiStateClarity: {
  loading: "データ読込中",
  noCaseSelected: "ケース未選択",
  ratingUndetermined: "監査意見：未確定",
  notEvaluable: "評価不能",
  implementationPending: "実装未了",
}
```

### 50.2 表示原則

```text
- ローディング状態と評価不能を分ける。
- ケース未選択と未確定ratingを分ける。
- `--` 単独表示を避ける。
- rating が未確定の場合は、uncertaintyReason を近接表示する。
```

---

## 51. compareViewPriority：Compareビューの優先度変更

Compareビューは、単なる便利機能ではない。

Toyota主ケース / Honda対照ケースという入口の非対称性を緩和し、両者を同一産業ショックに対する並列仮説として提示するための認識論的ガードである。

### 51.1 位置づけ

```text
旧位置づけ:
将来候補・便利機能。

新位置づけ:
フレーミング効果を緩和する中期優先課題。
```

### 51.2 Compareビューで表示すべきもの

```text
- strategyChoiceVsCapacityConstraint
- evidenceHierarchy
- uncertaintyReason
- gapEscalationProtocol
- scenarioSet
- rationalExpectationBaseline
```

### 51.3 最小実装

フルCompareビューが重い場合、まず neutral landing を実装する。

```text
neutral landing:
初期表示で Toyota / Honda を左右対称に並べ、
どちらから読むかをユーザーに選ばせる。

表示文:
本ケース群は、同一産業ショックに対する異なる戦略仮説の対照です。
初期表示順は、優劣または正解を意味しません。
```
