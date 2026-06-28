# docs/HISTORY.md

# Automotive Strategy Accountability Audit — History

最終更新: 2026-06-27

---

## 0. このファイルの目的

このファイルは、**Automotive Strategy Accountability Audit** の履歴を記録する。

正典資料は以下。

```text
docs/CANON.md
```

現在状態と次作業は以下。

```text
HANDOFF.md
```

この `HISTORY.md` には、作業の由来、設計判断、旧 War Accountability Audit から継承した要素、企業ケースとしての分岐経緯を書く。

---

## 1. H-001: 旧 War Accountability Audit からの分岐

旧プロジェクトは、戦争責任監査を目的とする Web アプリだった。

中核思想は以下だった。

```text
開戦前に、その時点で利用可能だった情報だけを使って、
継戦能力・勝算・社会耐久力・政権リスクを記録し、
戦後に為政者の説明責任と歴史判断を検証できるようにする。
```

この思想を企業戦略監査へ転用することを決定した。

読み替え。

```text
戦争責任監査
→ 企業巨大戦略監査

開戦判断
→ 戦略転換・巨額投資・事業ポートフォリオ転換の判断

継戦能力
→ 投資継続能力・収益耐久力・供給網・開発組織

勝算
→ 市場競争力・技術実行力・規制適応力

政権リスク
→ 経営陣・取締役会・株主・資本市場・組織内部のガバナンスリスク
```

---

## 2. H-002: 企業戦略監査版の初期対象をEVシフトに決定

企業戦略監査の初期対象として、自動車産業のEVシフトを選んだ。

理由。

```text
- 巨額投資を伴う
- 市場需要の不確実性が高い
- 規制・政策依存が大きい
- 電池・ソフトウェア・供給網の制約がある
- 企業ごとの戦略差が明確
- 公開資料が比較的豊富
- ただし内部意思決定資料は入手困難
```

初期 conflict。

```js
"自動車産業EVシフト（2020年代）"
```

---

## 3. H-003: Toyota / Honda 対照ケース構造を採用

初期ケースとして以下2件を採用した。

```text
主ケース:
Toyota Multi-Pathway Strategy 2021–

対照ケース:
Honda EV Concentration Strategy 2021–
```

対比の中心。

```text
Toyota:
HEV / PHEV / BEV / FCEV / 水素 / 内燃機関改良を併存させる multi-pathway 戦略。

Honda:
EV / FCEV への明確な移行目標を掲げる集中度の高い電動化戦略。
```

この対比は、勝者・敗者の対比ではない。

正しい位置づけ。

```text
同一産業ショックに対する異なる資本配分仮説の対照。
```

---

## 4. H-004: Honda単独ケースではなくToyota主ケースを優先

当初、HondaのEV戦略失敗評価が候補になった。

ただし、Honda単独では後知恵評価に寄りやすい。

問題。

```text
- GM提携中止
- EV戦略再評価
- 損失認識
- 2030年目標の下方修正
```

これらは事後対照として重要だが、2021年判断の直接証拠にはならない。

そのため、Toyotaを主ケース、Hondaを対照ケースとした。

理由。

```text
- Toyotaは現在進行形の戦略監査に向く
- Hondaは事後的な戦略再評価ケースとして対照性が高い
- 「Toyota正解 / Honda失敗」ではなく、両者の仮説を比較できる
- ビジネス読者に、監査フレームの価値を示しやすい
```

---

## 5. H-005: I-9 軽量ボタン導線を企業ケースに転用

旧 War Accountability Audit では、`counterpartCaseId` による対照ケース導線が実装済みだった。

企業版でもこれを利用する。

方針。

```text
- 新規 Compare ビューは初期実装では作らない
- 既存の counterpart ボタンで相互に切り替える
- Toyota の Assessment を見ながら Honda 側へ反転できる
- Honda の Assessment を見ながら Toyota 側へ反転できる
```

企業ケースでは、将来的にUI文言を以下へ寄せる余地がある。

```text
⇄ 対照戦略を見る
⇄ Honda EV集中戦略を見る
⇄ Toyota multi-pathway戦略を見る
```

ただし初期実装では既存UIを優先する。

---

## 6. H-006: 3ファイル構成を採用

旧 `HANDOFF.md` は以下が混在していた。

```text
- 正典思想
- 現在構成
- 実装履歴
- 未了タスク
- 次セッション手順
```

これにより、再開時に「今やること」が埋もれる問題があった。

企業版では以下の3ファイル構成に分けることを決定した。

```text
HANDOFF.md
  現在状態と次の具体的手順のみ。

docs/CANON.md
  正典資料。設計思想、監査原則、データ構造、命名規則。

docs/HISTORY.md
  履歴。決定経緯、旧スキームからの継承、作業記録。
```

---

## 7. H-007: クリーンフォルダ方針を採用

企業版は、旧戦争ケースを含む既存リポジトリへ直接追加するのではなく、クリーンフォルダで開始する方針とした。

コピーするもの。

```text
index.html
app.js
styles.css
verify.js
data/auditSchema.js
data/cases/index.js
ui/renderers.js
```

コピーしないもの。

```text
既存の戦争ケースファイル
旧 HANDOFF.md
```

理由。

```text
- 戦争ケースと企業ケースを混在させない
- 初期ケースを Toyota / Honda の2本に限定する
- 既存スキームだけを利用する
- データと履歴のノイズを減らす
```

必要なら旧 `HANDOFF.md` は以下に退避する。

```text
docs/REFERENCE_WAR_HANDOFF.md
```

---

## 8. H-008: UI名称は初期実装では変更しない

旧UIには以下の6タブがある。

```text
Overview
Timeline
Pre-War
Assessment
Evidence
Audit Opinion
```

企業版でも初期実装では変更しない。

理由。

```text
- 既存レンダラをそのまま使える
- UI変更による副作用を避ける
- まずケースデータの成立性を確認する
```

読み替えは `docs/CANON.md` に記録する。

```text
Pre-War = 戦略表明前・大規模投資前チェック
warCase = strategyCase
opponentActor = counterpart strategy actor
```

---

## 9. H-009: 初期 rating は未確定とする

Toyota / Honda とも、初期 rating は未確定とする。

理由。

```text
- 2030年前後の成否が未確定
- EVシフトは現在進行中
- 後年結果を2021年判断の直接証拠にできない
- 企業内部資料が公開されていない
- 両ケースとも合理的仮説と監査上の懸念が併存する
```

初期結論。

```text
Toyota:
合理的なリアルオプション戦略仮説と、
BEV・SDV転換遅れ仮説の双方が成立する。

Honda:
合理的な先行コミットメント仮説と、
EV需要・提携依存・実行能力の過大評価仮説の双方が成立する。
```

---

## 10. H-010: 後知恵禁止ルールを企業ケース用に明文化

企業ケースでは、後年資料が豊富であるため、後知恵評価に流れやすい。

以下を直接根拠にしない。

```text
2025年以降のHonda戦略再評価
2026年以降の損失認識
GM共同開発中止
Toyotaの後年販売実績
HEV好調
BEV比率の低さ
将来の2030年目標達成/未達
```

これらは以下として扱う。

```text
事後対照
検証資料
当初仮説の帰結を考える材料
```

2021年判断の直接証拠にはしない。

---

## 11. H-011: 企業内部資料不足の表現を決定

企業ケースでは、内部資料が通常公開されない。

そのため、以下の表現を採用する。

```text
公開資料上、評価形跡を確認できない。
内部で検討されていなかったとは断定できない。
```

禁止表現。

```text
内部評価なし
取締役会が検討していなかった
経営陣は何も考えていなかった
どんぶり勘定だった
```

これらは内部資料がない限り断定しない。

---

## 12. H-012: 初期 phases を決定

両ケース同型で以下4フェーズに決定した。

```text
Phase 1:
EVシフト認識・戦略表明

Phase 2:
電池・SDV・提携・供給網設計

Phase 3:
需要変化・競争激化・戦略修正

Phase 4:
長期競争力・別ケース境界
```

目的。

```text
Toyota / Honda のAssessment Matrixを同じ局面で比較できるようにする。
```

---

## 13. H-013: 初期 Pre-War Checklist を決定

企業ケースでは6項目に圧縮した。

```text
market_demand_forecast
regulatory_infrastructure_risk
battery_supply_cost
sdv_software_capability
capital_allocation_resilience
governance_disclosure_process
```

狙い。

```text
- 市場
- 規制
- 電池
- ソフトウェア
- 資本配分
- ガバナンス
```

を最小限で押さえる。

---

## 14. H-014: 初期 Assessment 軸を決定

初期Assessment軸は7つ。

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

全セルを埋める必要はない。

---

## 15. H-015: Toyota claims を決定

Toyota側の初期 claims は以下7件。

```text
toy_claim_multi_pathway_as_real_option
toy_claim_hybrid_profit_funded_transition
toy_claim_regional_demand_correctly_segmented
toy_claim_bev_sdv_delay_risk
toy_claim_china_competition_underestimated
toy_claim_solid_state_expectation_risk
toy_claim_strategy_outcome_unresolved
```

分類。

```text
counter_claim: 4
audit_issue: 3
```

狙い。

```text
Toyota擁護:
multi-pathwayはリアルオプション戦略。

Toyota批判:
multi-pathwayはBEV/SDV遅れのレトリックだった可能性。
```

---

## 16. H-016: Honda claims を決定

Honda側の初期 claims は以下7件。

```text
hon_claim_ev_concentration_as_forward_commitment
hon_claim_external_alliance_as_capability_bridge
hon_claim_ev_demand_profitability_overestimated
hon_claim_alliance_dependency_underestimated
hon_claim_sdv_battery_execution_gap
hon_claim_reassessment_not_simple_failure
hon_claim_internal_documents_unavailable
```

分類。

```text
counter_claim: 4
audit_issue: 3
```

狙い。

```text
Honda擁護:
EV/FCEV集中は合理的な先行コミットメント。

Honda批判:
需要・提携依存・実行能力の過大評価があった可能性。
```

---

## 17. H-017: 初期 evidence 方針を決定

Toyota / Honda とも、初期 evidence は8件前後に抑える。

分類。

```text
直接資料:
企業公式発表、事業説明、統合報告書、決算説明。

同時代外部資料:
IEA、BloombergNEF、ACEA、業界報道など。

事後資料:
販売実績、戦略再評価、提携中止、損失認識。
```

ただし、事後資料は2021年判断の直接根拠にしない。

---

## 18. H-018: cache-busting 方針を決定

初期 cache-busting 文字列は以下。

```text
20260627-auto-ev-shift
```

対象。

```text
index.html
app.js
data/cases/index.js
ui/renderers.js
```

旧プロジェクトで問題になった二重ロードを避けるため、必ず同期する。

---

## 19. H-019: 検証手順を継承

旧プロジェクトの検証手順を企業版にも継承する。

必須。

```bash
node --check app.js
node --check data/auditSchema.js
node --check data/cases/index.js
node --check data/cases/toyota-multi-pathway-2021.js
node --check data/cases/honda-ev-concentration-2021.js
node --check ui/renderers.js
node verify.js
```

確認対象。

```text
validateCaseRegistry(cases) === []
validateCaseReferences(caseData) === []
lintCaseMethodology(caseData) === []
```

---

## 20. H-020: 今後の候補

初期実装後の候補。

```text
1. Compare ビュー新設
2. UI文言を企業ケース向けに変更
3. Pre-War タブ名を Strategy Readiness 等に変更
4. Toyota / Honda の evidence 出典精密化
5. 2021年時点の市場予測・電池価格予測のWeb調査
6. 公式資料に基づく evidenceLinks 強化
7. 企業ケース用 rating taxonomy の検討
8. 自動車以外の企業戦略ケース追加
```

ただし、初期実装では手を広げない。

---

## 21. H-021: 凍結事項

初期実装では以下を凍結する。

```text
- Compare ビュー
- UIタブ名変更
- データ構造名 warCase の改名
- 既存レンダラの大幅改修
- rating 確定
- 2030年以降の勝敗予測
- 各車種単位の詳細評価
- 個別サプライヤー契約の採算監査
```

---

## 22. H-022: 初期実装の完了条件

初期実装完了条件。

```text
- Toyota case file が存在する
- Honda case file が存在する
- data/cases/index.js が2ケースのみ登録
- DEFAULT_CASE_ID が toyota-multi-pathway-2021
- counterpartCaseId が双方向
- node --check が通る
- node verify.js が通る
- ブラウザで6タブ表示が崩れない
- counterpart button が双方向に動く
- console error / warning が 0
```

---

## 23. H-023: 旧戦争監査との関係

企業版は、旧 War Accountability Audit を否定するものではない。

関係。

```text
War Accountability Audit:
極限状態の国家意思決定監査。

Automotive Strategy Accountability Audit:
企業の巨大戦略判断監査。
```

共通するもの。

```text
- 反証を隠さない
- canSay / cannotSay
- ex-ante / ex-post
- evidenceLinks
- claims
- assessmentCells
- ratingBasis
- counterpartCaseId
- lintCaseMethodology
```

異なるもの。

```text
- 対象が国家ではなく企業
- 相手は敵ではなく対照戦略
- Pre-War は戦略表明前チェック
- 政権リスクはガバナンスリスク
- 戦争責任ではなく経営判断責任
```

---

## 24. H-024: 現時点の最終判断

現時点の設計判断。

```text
3ファイル構成を採用する。

HANDOFF.md:
現在状態と次作業。

docs/CANON.md:
正典資料。

docs/HISTORY.md:
履歴。
```

この構成により、次セッションやCodexが旧 `HANDOFF.md` の長大な履歴に引きずられず、企業戦略監査のクリーン実装を開始できる。

---

## 25. H-025: 評価ルーブリック導入方針を追加

今後のブラッシュアップに向けて、以下3つの考え方を導入する方針とした。

```text
1. 「形跡」の段階的定義
2. 依存関係の表現
3. 総合ランク算出の透明化
```

ただし、導入順は調整した。

当初案。

```text
- 形跡の段階的定義
- 依存関係のマトリクス化
- 加重平均・プライオリティ制
```

採用した導入順。

```text
Phase A:
形跡レベル E0〜E4

Phase B:
ratingReadiness と KO基準

Phase C:
dependencyRules

Phase D:
scorePrototype
```

理由。

```text
加重平均を先に導入すると、証拠が薄い段階でも数値だけが一人歩きする。
そのため、まず「格付け可能な証拠状態か」を ratingReadiness で判定し、KO基準で後知恵依存や反証欠落を排除する。
```

---

## 26. H-026: 形跡レベル E0〜E4 を定義

公開資料上の評価形跡を E0〜E4 で表す方針とした。

```text
E0:
公開資料上、評価形跡を確認できない。

E1:
関連語彙はあるが、具体的な下方シナリオや撤退基準がない。

E2:
リスク認識や対応方針はあるが、数値・時期・責任主体・代替案が限定的。

E3:
リスク、対応策、資本配分、代替シナリオの一部が確認できる。

E4:
複数資料により、リスク認識・代替案・実行計画・修正基準が確認できる。
```

重要な留保。

```text
Eレベルは「内部で本当に検討したか」の断定ではない。
企業ケースでは、公開監査上の確認可能性を表す。
```

---

## 27. H-027: ratingReadiness と KO基準を採用

rating をすぐ確定せず、まず ratingReadiness を判定する方針とした。

```text
未到達:
rating 確定不可。

限定的:
暫定 rating は可能だが、留保条件を明記。

到達:
ratingBasis の主要セルが接地し、反証リンクもある。
```

ノックアウト基準。

```text
KO-1: 後知恵依存
KO-2: 反証欠落
KO-3: 内部資料不足の断定
KO-4: 主要リスク未評価
KO-5: canSay / cannotSay 欠落
KO-6: counterpart 非対称
KO-7: 時点性混同
```

---

## 28. H-028: dependencyRules を仕様候補に追加

項目間の依存関係を表すため、`dependencyRules` を仕様候補として追加した。

目的。

```text
市場需要、電池、SDV、提携依存、資本配分などを独立評価だけでなく、複合リスクとして扱えるようにする。
```

初期実装では UI 化しない。まずケースデータ上の任意フィールドとして扱う。

---

## 29. H-029: scorePrototype は説明補助に限定

加重平均スコアは、rating の自動算出ではなく説明補助とする方針にした。

原則。

```text
ratingReadiness が未到達
→ score を表示しない、または prototype と明示。

KO基準に該当
→ score が高くても rating を上げない。

score
→ rating の理由を説明する補助であり、自動格付けではない。
```

この判断により、疑似客観性を避けつつ、将来的な説明力を確保する。

## 30. H-030: 第三者評価を受けた認識論的骨格の強化

実装後のAIによる第三者評価で、フレームワークの有用性は高いが、実装依存の課題があると評価された。

評価された強み。

```text
- ex-ante 制約の厳守
- 後知恵バイアスへの明示的対抗
- 7タブ構造による時系列・反証構造の可視化
```

指摘された主な弱点。

```text
1. 「利用可能な情報」の境界問題
2. リスク軸間の相互作用問題
3. 「未確定」の認識論的地位
4. 反証証拠を隠さないための運用担保
5. 利用文脈の不明確さ
```

この評価を受け、CANON / HANDOFF / HISTORY に認識論的骨格の強化項目を追加する方針とした。

---

## 31. H-031: evidenceAccessScope を追加

「公開情報のみを扱うのか、内部資料を含むのか」が曖昧だという批判に対応するため、`evidenceAccessScope` を追加する方針とした。

採用する監査モード。

```text
public_osint:
公開資料・同時代報道・公開市場データのみ。

internal_available:
社内資料・取締役会資料・投資審査資料を含む。

retrospective_reconstruction:
後年資料・回顧・報道を使った再構成。
```

初期 Toyota / Honda ケースは `public_osint` とする。

---

## 32. H-032: evidenceWeight と uncertaintyReason を追加

証拠の重み付けと、未確定理由の明示が必要と判断した。

`evidenceWeight` では以下を扱う。

```text
sourceProximity
temporalFit
independence
decisionMakerAccess
weight
rationale
```

`uncertaintyReason` では以下を扱う。

```text
case_not_selected
evidence_insufficient
evidence_conflicting
internal_documents_unavailable
outcome_not_mature
scope_boundary_unresolved
methodology_under_revision
```

Toyota / Honda の初期値は以下。

```js
uncertaintyReason: [
  "internal_documents_unavailable",
  "outcome_not_mature",
  "evidence_conflicting",
]
```

---

## 33. H-033: adversarialReview を追加

「反証証拠を隠さない」を運用として担保するため、`adversarialReview` を追加する方針とした。

構造。

```text
prosecution:
監査上の懸念・批判側の最強主張。

defense:
当該戦略を擁護する最強主張。

unresolvedTensions:
現時点で決着できない論点。
```

これにより、単に evidenceLinks に反証を持つだけでなく、批判側・擁護側の最強主張を監査意見に接続できるようにする。

---

## 34. H-034: intendedUse を追加

利用文脈が曖昧だという批判に対応するため、`intendedUse` を追加する方針とした。

初期 Toyota / Honda ケースの標準値。

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

この指定により、本ツールは法的責任認定、投資推奨、経営者個人の断罪を目的としないことを明示する。

---

## 35. H-035: 次回実装優先順位を決定

次回のケースデータ更新では、以下の順で追加する。

```text
1. evidenceAccessScope
2. uncertaintyReason
3. intendedUse
4. evidenceWeight
5. adversarialReview
```

理由。

```text
evidenceAccessScope と uncertaintyReason は、第三者評価が指摘した認識論的曖昧さを最も直接的に解消する。
evidenceWeight と adversarialReview は重要だが、既存 evidenceLinks との接続設計が必要なため第2段階とする。
intendedUse はUIへの表示がなくても、ケースメタ情報としてすぐ追加できる。
```

---

## 36. H-036: 第三者評価対応フィールドをケースデータへ導入

第三者評価で指摘された認識論的骨格の弱点に対応するため、Toyota / Honda 両ケースへ以下を導入した。

```text
evidenceAccessScope
uncertaintyReason
intendedUse
evidenceWeight
adversarialReview
```

導入方針。

```text
- evidenceAccessScope は public_osint とし、内部資料を見ていない外部監査であることを明示する。
- uncertaintyReason は internal_documents_unavailable / outcome_not_mature / evidence_conflicting を初期値とする。
- intendedUse は research_case_study を primary とし、法的責任認定・投資推奨・経営者断罪を notFor とする。
- evidenceWeight は各 evidence に持たせ、sourceProximity / temporalFit / decisionMakerAccess / weight / rationale を明示する。
- adversarialReview は批判側・擁護側の最強主張と unresolvedTensions を記録する。
```

この変更は UI 追加ではなく、まずケースデータの監査メタ情報を強化するものとした。

---

## 37. H-037: HON-E-004 に信頼できる報道URLを追加

Honda/GM 量販EV共同開発中止について、Honda または GM の単独公式発表URLは確認できなかったため、`HON-E-004` には Reuters の 2023年10月25日報道URLを採用した。

この evidence は引き続き事後資料として扱う。

```text
- 2021年判断の直接証拠ではない
- 提携依存リスクの事後対照として使う
- 公式発表URLが後日確認できた場合は差し替え候補とする
```

---

## 38. H-038: Toyota 後年販売資料・中国EV競争資料を正式URL付きに更新

Toyota evidence のうち、代表資料のままだった `TOY-E-007` と `TOY-E-008` を正式URL付き出典へ更新した。

```text
TOY-E-007:
Toyota 公式の 2024年 Sales, Production, and Export Results を採用。後年販売実績・電動車販売データを含む事後対照として扱う。

TOY-E-008:
IEA Global EV Outlook 2024 の Trends in electric cars を採用。中国EV市場の販売集中、価格競争、輸出増を示す外部資料として扱う。
```

どちらも 2021年判断の直接証拠ではなく、`availableAtDecisionTime: false` または間接的な外部観測として扱う。

---

## 39. H-039: timeFit に事後を正式追加

後年資料を `timeFit: "間接"` で代用していた状態を解消し、`lintCaseMethodology` の許容値に `事後` を追加した。

実装方針。

```text
- timeFit: "直接" は availableAtDecisionTime: true を必須とする。
- timeFit: "事後" は availableAtDecisionTime: false を必須とする。
- 後年資料リンクは timeFit: "事後" として、2021年判断の直接根拠ではなく事後対照であることを明示する。
```

---

## 40. H-040: 第三者評価対応フィールドを UI に折りたたみ表示

ケースデータに導入済みだった第三者評価対応フィールドを、UI から確認できるようにした。

```text
- 戦略概要に監査境界を追加し、evidenceAccessScope / uncertaintyReason / intendedUse を表示する。
- 戦略概要に反対側レビューを追加し、adversarialReview の批判側・擁護側・未決着論点を表示する。
- 証拠リンク詳細に証拠重みを追加し、evidenceWeight を表示する。
```

通常表示を圧迫しないよう、いずれも折りたたみ表示とした。

---

## 41. H-041: IEA 2026 電池資料を事後対照 evidence として追加

Toyota / Honda 両ケースに IEA Global EV Outlook 2026 の Electric vehicle batteries を追加した。

```text
TOY-E-009 / HON-E-009:
IEA Global EV Outlook 2026, EV用電池価格低下・LFP普及・地域別価格差に関する事後対照資料。
```

この資料は 2026年公開の後年資料であるため、`timeFit: "事後"`、`availableAtDecisionTime: false` として扱う。

用途は以下に限定する。

```text
- 2021年判断の直接根拠ではなく、後年の電池コスト・量産採算環境を再評価する材料
- Toyota / Honda の電池・供給網・コスト評価セルの補強
- BNEF / Goldman Sachs の商業データを本文の中心に置かないための公的・公開ソース代替
```

あわせて cache-busting を `20260627-auto-ev-shift-r10` に更新した。

## 42. H-042: 第三者評価2を受けた比較標準化方針

第三者評価2で、Toyota / Honda 中心の現状では、評価軸が企業固有文脈に依存する危険が指摘された。

対応方針。

```text
crossCompanyTemplate を追加し、業界横断で使える共通評価軸を定義する。
ただし、同じ軸で比較しても、同じ重みで裁かない。
```

採用する共通軸。

```text
market_demand_forecast
regulatory_infrastructure_risk
battery_supply_cost
sdv_software_capability
capital_allocation_resilience
alliance_dependency_execution
governance_disclosure_process
```

---

## 43. H-043: normalizationFactors を仕様候補に追加

企業規模・地域差・事業構造の差を補正するため、`normalizationFactors` を仕様候補に追加した。

対象。

```text
companyScale
regionalExposure
legacyProfitEngine
capitalCapacity
technologyInternalization
```

初期段階では数値補正係数ではなく、分類と理由付けとして扱う。

理由。

```text
企業規模や地域ポートフォリオを無視すると、Toyota / Honda / Tesla / BYD / VW などを機械的に横並び評価してしまう。
ただし補正は免責ではなく、比較条件の注記である。
```

---

## 44. H-044: evidenceHierarchy を追加

証拠リンクで一次資料・二次資料・事後資料・推測が混在する問題に対応するため、`evidenceHierarchy` を追加する方針とした。

階層。

```text
A: 一次資料
B: 同時代二次資料
C: 後年分析・事後資料
D: 推測・弱いシグナル
```

`evidenceHierarchy` は出典階層を表し、`evidenceWeight` はその証拠が claim / assessmentCell にどの程度効くかを表す。

重要な留保。

```text
A資料は一次資料を意味するが、真実性が無条件に高いわけではない。
企業公式資料には自己正当化やIR目的のバイアスがあり得る。
```

---

## 45. H-045: causalScenarioMap と scenarioSet を仕様候補に追加

戦略の因果構造が見えにくいという指摘に対応するため、`causalScenarioMap` と `scenarioSet` を仕様候補に追加した。

`causalScenarioMap` の目的。

```text
市場需要、規制、電池コスト、SDV能力、提携依存、投資タイミング、資本配分、競争地位の関係を明示する。
```

`scenarioSet` の目的。

```text
2021年時点で合理的に想定できた複数未来を明示し、
どの未来をどの程度重く見たかを監査する。
```

代表シナリオ。

```text
BEV急速普及シナリオ:
Honda有利、Toyota遅れリスク。

地域分断・緩慢普及シナリオ:
Toyota有利、Honda投資過多リスク。
```

初期実装では図示せず、まず Audit Opinion の主要因果連鎖として扱う。

---

## 46. H-046: gapEscalationProtocol を追加

未評価ギャップを常に中立扱いすると、重大な説明責任不足が埋もれる。

そのため、`gapEscalationProtocol` を追加する方針とした。

昇格レベル。

```text
G0: 中立的未評価
G1: 要追加資料
G2: 監査上の懸念
G3: rating制約
```

昇格条件。

```text
- リスク重要度が high
- evidenceHierarchy A または B の資料で評価形跡がない
- E0 または E1 が継続している
- counterpart case では同軸の評価形跡がある
- 後年資料で当該リスクが顕在化している
```

---

## 47. H-047: informationRequest を追加資料要求プロセスとして採用

未評価ギャップを放置しないため、`informationRequest` を追加資料要求プロセスとして採用する方針とした。

目的。

```text
資料がないので中立、ではなく、
資料がないが重要なので追加要求、という状態を記録する。
```

基本項目。

```text
id
targetGap
requestedMaterial
reason
priority
status
```

これにより、公開資料上の限界を明示しつつ、監査上必要な追加資料を管理できる。

## 48. H-048: adversarialReview の最強主張非対称問題を追加

追加レビューで、`adversarialReview` の「最強主張」には運用上の非対称問題があると指摘された。

問題。

```text
批判者は擁護側の最強論拠を弱く提示する誘因がある。
擁護者は批判側の最強論拠を弱く提示する誘因がある。
単一著者が両側を書く場合も、初期仮説による選択バイアスが残る。
```

対応として、`adversarialReviewGovernance` を CANON に追加した。

主な追加要素。

```text
steelmanStandard
reviewerProtocol
sourceEvidenceLinks
selectionRationale
asymmetryRisk
```

初期公開版では単一著者レビューが前提となるため、`asymmetryRisk: "medium"` 以上を既定とする。

---

## 49. H-049: 疎マトリクスの空白セル問題を追加

追加レビューで、疎マトリクスの空白セルが以下のどれを意味するのか不明確だと指摘された。

```text
1. in-scope だが未評価
2. in-scope かつ評価したが公開証拠なし
3. out-of-scope
4. 実装未了
```

対応として、`assessmentCoverage` を CANON に追加した。

coverageState。

```text
assessed
e0_no_public_trace
in_scope_unassessed
out_of_scope
implementation_pending
```

これにより、「セルが存在しない」と「セルがE0」を明確に区別する。

---

## 50. H-050: Toyota主ケース / Honda対照ケースのフレーミング効果を追加

追加レビューで、Toyota を主ケース、Honda を対照ケースとする設計には、読者の注意配分を歪めるフレーミング効果があると指摘された。

問題。

```text
DEFAULT_CASE_ID が Toyota のため、多くのユーザーは Toyota から読み始める。
Honda が副次的な比較対象に見える可能性がある。
Toyota が基準、Honda が逸脱という印象を与えるリスクがある。
```

対応として、`symmetricComparisonEntry` と `comparisonEntryMode` を CANON に追加した。

中期方針。

```text
Compareビューは単なる便利機能ではなく、主ケース/対照ケースの認知的非対称性を緩和する設計要素と位置づける。
```

初期実装では `single_default` を許容するが、`framingRisk: "medium"` とし、Overview などで以下を明示する。

```text
Toyota から表示を開始することは、Toyota を基準または正解とみなすものではない。
本ケース群は、同一産業ショックに対する異なる戦略仮説の対照である。
```

## 51. H-051: メタ枠組みの過剰化リスクを追加

再追加レビューで、CANON が44章、HISTORY が50件、仕様候補が多数に膨張する一方、実ケースが Toyota / Honda の2件にとどまる点が最重要懸念として指摘された。

この状態は、定規を磨き続けて、まだ2本しか測っていない状態である。

対応。

```text
frameworkScopeDiscipline を CANON に追加。
stopRule を定義。
次の優先作業を3社目ケース追加へ変更。
```

基本方針。

```text
仕様を増やす前に、次の企業を測る。
```

---

## 52. H-052: ratingReadiness の積極的到達条件を追加

再追加レビューで、KO基準と gapEscalation が抑制方向に働き、rating: 未確定 が恒久化する疑いが指摘された。

対応として、`ratingReadinessPositiveCriteria` を追加した。

到達条件の例。

```text
主要7軸のうち5軸以上が A/B 資料で評価可能。
主要claimに支持・反証・保留が接続されている。
ratingBasis が事後資料を直接根拠にしていない。
G3ギャップが0。
G2ギャップが1以下。
```

これにより、禁止条件だけでなく、到達条件も明示する。

---

## 53. H-053: 戦略選択と構造的キャパシティ制約の分離を追加

再追加レビューで、Toyota / Honda の戦略差は単なる選択ではなく、構造的キャパシティの差かもしれないと指摘された。

対応として、`strategyChoiceVsCapacityConstraint` を追加した。

目的。

```text
その企業は何を選んだのか。
その企業は何を選べなかったのか。
選べなかったことを経営責任として問えるのか。
```

Toyota の multi-pathway は資本余力と HEV収益力を前提にした選択であり、Honda の EV集中は制約下での集中だった可能性がある。

---

## 54. H-054: OSINT監査の開示バイアスを追加

再追加レビューで、public_osint 監査は公開資料が豊富な企業を有利にするバイアスがあると指摘された。

既存の原則。

```text
公開資料にない ≠ 内部未検討
```

追加する逆方向の原則。

```text
公開資料にある ≠ 内部で十分検討した
```

対応として、`disclosureBiasGuard` と `disclosureBias` を追加した。

フラグ。

```text
IR_motivated
post_hoc_justification_risk
selective_disclosure
narrative_richness_bias
```

公式資料でも、これらに該当する場合は evidenceWeight を自動的に高くしない。

---

## 55. H-055: rationalExpectationBaseline を追加

再追加レビューで、2021年時点の合理的意思決定者ベースラインが欠けていると指摘された。

対応として、`rationalExpectationBaseline` を追加した。

目的。

```text
Toyota / Honda の需要見積もりや戦略仮説が、
当時の専門家コンセンサスから上振れ・下振れしていたかを測る。
```

代表ソース候補。

```text
2021年時点の IEA Global EV Outlook
2021年時点の BloombergNEF バッテリー価格・EV普及予測
EU / 中国 / 米国の当時の規制計画
同時代のアナリストコンセンサス
同時代の少数派警告
```

---

## 56. H-056: initialStateClarity と compareViewPriority を追加

再追加レビューで、初期描画の `暫定 --` と DEFAULT_CASE_ID が Toyota のままである点が信頼性とフレーミングに影響すると指摘された。

対応。

```text
initialStateClarity を追加し、ローディング・ケース未選択・rating未確定・評価不能・実装未了を分ける。
compareViewPriority を追加し、Compareビューをフレーミング効果緩和の中期優先課題へ格上げする。
```

最小実装候補。

```text
neutral landing:
初期表示で Toyota / Honda を左右対称に並べ、
どちらから読むかをユーザーに選ばせる。
```

Compareビューは便利機能ではなく、認識論的ガードとして扱う。

---

## 57. H-057: CANON / HANDOFF の肥大化整理

再追加レビューを受け、CANON / HANDOFF 自体の肥大化が目立つため、文書構造を整理した。

整理前の問題。

```text
- CANON が詳細仕様・候補・プロトタイプを抱え込みすぎていた
- HANDOFF が次作業だけでなく詳細設計メモを含み始めていた
- 仕様候補が増える一方で、実ケースは Toyota / Honda の2件にとどまっていた
```

対応。

```text
CANON.md:
短い正典に圧縮。必ず守る原則だけを残す。

HANDOFF.md:
再開に必要な現在状態・検証状態・次作業だけに圧縮。

docs/METHOD_APPENDIX.md:
E0〜E4、ratingReadiness、dependencyRules、evidenceWeight、adversarialReview、
gapEscalationProtocol、comparisonEntryMode などの詳細仕様を退避。

docs/archive/:
整理前の全文を保存。
```

今後の原則。

```text
CANON に直接追加しない。
新規仕様候補はまず METHOD_APPENDIX に置く。
3社目以降のケースで必要性が確認されたものだけ CANON へ昇格する。
```

---

## 58. H-058: WSA由来の運用規律をASAAへ逆輸入

追加コメントを受け、WSA と ASAA の関係を再整理した。

判断。

```text
WSA → ASAA は、薄い親から厚い子へ進化したのではない。
むしろ、8ケースを痩せた正典で回している WSA の運用規律を、
2ケースで spec 肥大した ASAA へ戻す必要がある。
```

対応。

```text
- CANON に WSA由来の運用規律を追加
- HANDOFF の次作業を、仕様追加から3社目ケース追加へ変更
- METHOD_APPENDIX に WSA由来・規律輸入候補を追加
- evidenceHierarchy / normalizationFactors / scenarioSet / causalScenarioMap / comparisonEntryMode を候補層に凍結
```

重要な方針。

```text
仕様を増やす前に、次の企業を測る。
```

---

## 59. H-059: settledDecisionLog と lint first policy を採用

ASAA には、決定を閉じる台帳が不足していた。
そのため、レビューのたびに仕様が追加され、論点が閉じない構造になっていた。

対応。

```text
settledDecisionLog を METHOD_APPENDIX に追加。
重要判断は settled とし、reopenCondition がない限り蒸し返さない。
```

また、「反証を隠さない」の第一機構は `adversarialReview` ではなく、常設 lint であると再定義した。

```text
lint が床。
adversarialReview は天井。
```

---

## 60. H-060: honest asymmetry と calibration beta を採用

Toyota / Honda のケース構造が完全対称であることは、人工的な対称性を生む可能性がある。

対応。

```text
フレーミングは対称にする。
内容構造は非対称でよい。
```

また、WSA の校正βに相当する規律として、評価形跡の有無と評価品質を混同しない方針を追加した。

```text
扱う:
当時、評価した形跡があるか。

慎重に扱う:
その評価が後年から見て正しかったか。
```

ASAA は、評価品質を安易に第2軸として追加しない。

---

## 61. H-061: HANDOFFをBYDケース追加優先へ更新

ユーザー指示により、HANDOFF の次作業を BYD ケース追加中心へ更新した。

反映内容。

```text
今すぐやる:
BYDケース追加

同時に確認:
status が保存値に戻っていないか
lint が反証担保の第一機構になっているか
assessmentCoverage で「セルなし」と「E0」を区別できるか

後回し:
adversarialReviewGovernance の精緻化
evidenceHierarchy のUI化
causalScenarioMap
scenarioSet
normalizationFactors
Compareビュー本格実装
```

この更新により、ASAA は仕様追加ではなく、3社目ケースによるスキーマ検証へ進む。


---

## 62. H-062: BYD 垂直統合・EV集中ケースを追加

HANDOFF の方針に従い、3社目ケースとして `byd-vertical-integration-2021` を追加した。

反映内容。

```text
- data/cases/byd-vertical-integration-2021.js を追加
- data/cases/index.js に BYD を登録
- cache-busting を 20260627-auto-ev-shift-r12 に更新
- BYD の phases / assessmentCells / claims / evidence / evidenceLinks / preWarChecklist を初期 skeleton として追加
- BYD は counterpartCaseId を未指定にし、Toyota / Honda の双方向 counterpart 関係を維持
- assessmentCoverage に out_of_scope / in_scope_unassessed を入れ、セルなしとE0を混同しないようにした
```

検証結果。

```text
node --check data\cases\byd-vertical-integration-2021.js
node verify.js
node tools\check-cache-busting.mjs
```

結果。

```text
ALL CHECKS PASSED!
cache-busting ok: 20260627-auto-ev-shift-r12 (9 version markers checked)
```

初回 lint では `byd_claim_vertical_integration_as_advantage` が支持のみの片側 claim として検出された。対応として、価格競争・過剰能力リスクを同 claim の反証リンク `BYD-EL-010` として追加した。

次にやること。

```text
BYD追加後のブラウザ smoke test
BYD証拠URLの到達性確認
BYDの評価軸・assessmentCoverage・反証リンクの内容精査
```

ブラウザ smoke test も実施した。

```text
http://127.0.0.1:8123/index.html
- ケースセレクタに Toyota / Honda / BYD の3件表示
- BYD を選択可能
- BYD 見出し・監査主体が表示
- 6タブ表示
- counterpart nav は BYD では非表示
- undefined 表示なし
- console warning/error なし
```

---

## 63. H-063: BYD 証拠URLと coverage を精査

BYD ケース追加後の内容精査として、証拠URLの到達性と claim / evidenceLink の反証バランスを確認した。

反映内容。

```text
- BYD-E-001 の HKEX URL を BYD Annual Report 2021 の正しいPDFへ修正
- BYD-E-002 を到達可能な BYD 公式 Blade Battery ページへ修正
- BYD-E-003 は現行公式URLが 403 のため、正式アーカイブURLへ切り替え
- BYD-E-005 は到達不能な公式ニュースURLではなく、燃油車生産停止を確認できる BYD Annual Report 2022 の HKEX PDFへ切り替え
- BYD-E-006 の HKEX URL を BYD Annual Report 2023 の正しいPDFへ修正
- assessmentCoverage を補強し、セルなし / 対象外 / in_scope_unassessed の区別を明示
- cache-busting を 20260627-auto-ev-shift-r12 に更新
```

確認結果。

```text
claim / evidenceLink は4 claimsすべて支持・反証の両側リンクあり。
BYD Annual Report 2021 / 2022 / 2023 は HKEX PDF本文で BYD 資料であることを確認済み。
Blade Battery 公式ページと IEA Global EV Outlook 2024 は到達確認済み。
e-Platform 3.0 は現行公式URLが403のため、Internet Archive の保存URLを採用。
ブラウザ smoke test では、BYD選択、6タブ表示、証拠リンク表示、投資前チェックの未評価ギャップ表示、undefined 表示なし、console warning/error なしを確認済み。
```
