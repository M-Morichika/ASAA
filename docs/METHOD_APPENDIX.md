# METHOD_APPENDIX.md

# Automotive Strategy Accountability Audit — Method Appendix

最終更新: 2026-06-27

---

## 0. このファイルの目的

このファイルは、肥大化した旧 `CANON.md` から詳細仕様・仕様候補・将来拡張案を分離した付録である。

運用上の優先順位は以下。

```text
CANON.md
  必ず守る短い正典。

HANDOFF.md
  次にやることだけ。

METHOD_APPENDIX.md
  詳細仕様・候補・プロトタイプ。

archive/
  肥大化整理前の全文保存。
```

以後、新しい仕様候補は原則として `CANON.md` に直書きしない。  
まずこの付録に入れ、3社目以降のケースで必要性が確認された場合のみ CANON へ昇格する。

---

## 1. CANON昇格ルール

仕様候補は、以下を満たすまで CANON へ昇格しない。

```text
1. 2件以上のケースで必要になった
2. verify / lint / UI / data のいずれかに実装可能性がある
3. ratingReadiness または evidenceLinks の品質を直接改善する
4. 既存フィールドで代替できない
5. 追加しても HANDOFF を肥大化させない
```

---

## 2. 詳細仕様・候補

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

---

## WSA由来・規律輸入候補

この節は、WSA の運用規律を ASAA に逆輸入するための詳細メモである。  
CANON には最小原則のみを残し、詳細はここに置く。

### A. retroactive candidate freeze

以下の仕様候補は、3社目以降で必要性が確認されるまで凍結する。

```text
evidenceHierarchy
normalizationFactors
scenarioSet
causalScenarioMap
comparisonEntryMode
adversarialReviewGovernance の過剰拡張
```

凍結は破棄ではない。  
「候補層に留め、ケースで必要になった時だけ昇格する」という意味である。

### B. settledDecisionLog

ASAA には、決定を閉じる台帳が必要である。

```js
settledDecisionLog: [
  {
    id: "ASAA-SETTLED-001",
    topic: "",
    decision: "",
    status: "settled",
    reopenCondition: "",
    rationale: "",
  },
]
```

初期登録候補。

```text
ASAA-SETTLED-001:
CANON は短く保ち、詳細仕様は METHOD_APPENDIX に置く。

ASAA-SETTLED-002:
新規仕様追加より3社目ケース追加を優先する。

ASAA-SETTLED-003:
反証担保の第一機構は lint。adversarialReview は補助。

ASAA-SETTLED-004:
セルなし、E0、未評価、対象外を区別する。

ASAA-SETTLED-005:
評価形跡と評価品質を混同しない。

ASAA-SETTLED-006:
フレーミング対称と内容対称を混同しない。
```

### C. lint first policy

`adversarialReview` は有用だが、構造的保証ではない。  
常設検査を第一機構とする。

必須検査。

```text
unlinked_claim
one_sided_claim
unsupported_claim
dangling evidenceLink
dangling claimId
dangling assessmentCellId
missing counterpart
counterpart not mutual
```

追加候補。

```text
missing_knockout_cell
coverage_state_missing
stored_status_detected
e0_without_rationale
posthoc_used_as_direct_basis
```

### D. live assessmentCoverage

疎マトリクスでは、空白セルの意味を明示する。

```text
assessed
e0_no_public_trace
in_scope_unassessed
out_of_scope
implementation_pending
```

これは METHOD_APPENDIX 候補に留めず、実装規律として扱う。

### E. status derivation audit

要確認。

```text
- claims.status が保存されていないか
- checklist.status が保存値として使われていないか
- 表示 status が resolveStatus 相当で導出されているか
- statusOverride は例外として明示されているか
```

### F. calibration beta

評価形跡の有無と評価品質を分ける。

```text
評価した形跡がある
評価したが結果的に誤った
評価しなかった
評価したか不明
```

これらを混同しない。  
ASAA では「評価したが妥当でなかった」を安易に第2軸として追加しない。

### G. honest asymmetry

比較ケースは、表示上は対称に扱う。  
しかし、監査項目数や risk surface は企業ごとに異なってよい。

```text
Toyota:
資本配分、HEV収益依存、BEV/SDV集中遅れが中心になり得る。

Honda:
提携依存、資本余力、EV集中の制約性、量販EV採算が中心になり得る。
```

preWarChecklist / claims / evidence / cells / links の数を機械的に揃えない。  
揃える場合は、意図的対称として理由を明示する。

### H. WSA-derived priority order

効く順。

```text
1. 候補凍結と3社目追加
2. settledDecisionLog
3. lint first policy
4. assessmentCoverage のライブ化
5. status derivation audit
6. calibration beta
7. honest asymmetry
8. knockout cellIds 参照検査
9. evidence.type の記述型化
10. temporalFit 冗長性整理
11. claim polarity 維持
```

