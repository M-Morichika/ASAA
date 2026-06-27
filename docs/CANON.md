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
2024〜2026年の販売実績・HEV/BEV構成・地域別販売資料

TOY-E-008:
中国EV競争・Tesla/BYD等に関する同時代報道・業界分析
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
Honda / GM, 2023年 量販EV共同開発中止に関する発表・報道

HON-E-005:
Honda, 2024年 電動化・EV投資・次世代EV関連発表

HON-E-006:
Honda, 2025〜2026年 電動化戦略再評価・損失認識・方針修正資料

HON-E-007:
Honda 統合報告書 / 有価証券報告書 / 決算説明資料

HON-E-008:
IEA / BloombergNEF / ACEA 等の当時または同時代のEV市場・電池・規制データ
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
