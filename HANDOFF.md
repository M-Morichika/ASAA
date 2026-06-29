# HANDOFF.md

# Automotive Strategy Accountability Audit — Handoff

最終更新: 2026-06-29
状態: slim版

---

## 0. このファイルの役割

このファイルは、再開時に必要な現在状態と次作業だけを記録する。

```text
正典:
docs/CANON.md

詳細仕様・候補:
docs/METHOD_APPENDIX.md

履歴:
docs/HISTORY.md

整理前の全文:
docs/archive/HANDOFF_full_before_slim_20260627.md
```

---

## 1. 現在の実装状態

```text
- Toyota / Honda / BYD の3ケースを登録済み
- 既定ケースは toyota-multi-pathway-2021
- counterpartCaseId は Toyota / Honda 間で双方向リンク済み。BYD は初期 skeleton では対照ケース未指定
- rating は3ケースとも 未確定
- ratingReadiness は3ケースとも 未到達
- cache-busting は 20260627-auto-ev-shift-r16 に統一済み
- Honda evidence 8件に公式URL・正式アーカイブURL・信頼できる報道URLのいずれかを追加済み
- Toyota evidence も公式URL・正式アーカイブURL・信頼できる外部資料URLのいずれかを追加済み
- timeFit: "事後" を正式許容済み
- 第三者評価対応フィールドを導入済み
- 第三者評価対応フィールドはUIに折りたたみ表示済み
- BYD 垂直統合・EV集中ケースを初期 skeleton として追加済み
- BYD は claims / evidence / evidenceLinks / assessmentCells / assessmentCoverage を最小構成で追加済み
- BYD evidence のURL到達性を一巡し、HKEX PDF・BYD公式ページ・正式アーカイブURLへ修正済み
- BYD の4 claims はすべて支持・反証の両側 evidenceLink を持つ状態まで精査済み
- BYD assessmentCoverage は out_of_scope / in_scope_unassessed の説明を補強済み
- 2026-06-29 に BYD evidence 6件のURL到達性を再確認し、すべて 200 OK を確認済み
- 2026-06-29 に BYD assessmentCoverage を経営判断監査UIの折りたたみ表示へ接続済み
- verify.js の cache-busting import を現行版に同期済み
- 繰り返し確認用に tools/check-evidence-urls.mjs, tools/report-case-balance.mjs, tools/check-assessment-coverage.mjs を追加済み
- 2026-06-29 に BYD assessmentCoverage を全空白セルへ補強し、BYD の unexplained blank cell は 0 件になった
- 2026-06-29 に Toyota / Honda assessmentCoverage も全空白セルへ補強し、3ケースすべて unexplained blank cell は 0 件になった
- 2026-06-29 にサブエージェントレビューを反映し、空白セル本体に coverage 種別を表示、summary に未評価/対象外件数を表示、coverage 一覧を種別別にグループ化済み
- tools/check-assessment-coverage.mjs は strict 時に既存セル coverage 矛盾も失敗扱いにし、既知軸チェックを追加済み
- tools/check-evidence-urls.mjs は reachable / access-restricted / unavailable を分けて集計するよう更新済み
- 2026-06-29 に BYD claims を Toyota / Honda と同じ id,text,type 形式へ統一済み
- 2026-06-29 に lintCaseMethodology へ ratingReadiness の形チェックと到達条件チェックを追加済み
- ratingReadiness が "到達" を名乗る場合、主要セル数、支持・反証、判断時点証拠、G2/G3 ギャップを検査する
- ratingReadiness が "未到達" の場合も、blocker または実データ上のギャップがない場合は警告する
- 2026-06-29 に Compare ビューを追加済み
- Compare ビューは新規メタ仕様を増やさず、ratingReadiness / ratingBasis / preWarChecklist / assessmentCoverage / evidenceLinks から3ケース横断表を生成する
- Context Reset Handoff 運用を agent.md に追加済み。長期セッションでは性能低下前に引き継ぎ文を作成し、/clear を提案する
- 実装の節目で UIデザイナー / シニアエンジニア / データ監査者 / 方法論レビュアー等のサブエージェント視点をシミュレートし、客観レビューを行う運用を agent.md に追加済み
```

---

## 2. 検証状態

直近確認済み。

```bash
node verify.js
```

結果。

```text
ALL CHECKS PASSED
```

直近確認済み。

```bash
node tools/check-cache-busting.mjs
```

結果。

```text
cache-busting ok: 20260627-auto-ev-shift-r16 (9 version markers checked)
```

直近確認済み。

```bash
node tools/report-case-balance.mjs
```

結果。

```text
Claim balance ok: all claims have both support and counter evidence links
```

直近確認済み。

```bash
node tools/check-assessment-coverage.mjs --strict
```

結果。

```text
Assessment coverage check ok (strict): 0 error(s), 0 warning(s)
```

直近確認済み。

```bash
node tools/check-evidence-urls.mjs
```

結果。

```text
Evidence URL check ok: 23 reachable, 1 access-restricted, 0 unavailable
```

補足: Reuters の HON-E-004 は 401 を返すが、アクセス制限・bot対策として WARN 扱い。404/ネットワークエラーは失敗扱い。

ブラウザ smoke test では、Toyota / Honda / BYD の3ケース表示、3ケースそれぞれの assessmentCoverage 折りたたみ表示、空白セル上の coverage 種別表示、summary の未評価/対象外件数表示、BYD選択、6タブ描画、証拠リンク表示、投資前チェックの未評価ギャップ表示、undefined 表示なし、console warning/error なしを確認済み。

直近の Compare ビュー確認。

```text
2026-06-29 に in-app Browser で実ブラウザ確認済み。

デスクトップ幅:
- Compare タブから compare-table 表示あり
- compare-case-button 3行
- Honda / BYD 表示あり
- Compare 行ボタンから BYD へ切替後も Compare 表示を維持
- BYD 切替後、ヘッダーと active row が BYD に更新
- undefined 表示なし

モバイル幅 390x844:
- Compare 表は内部横スクロール
- ページ全体の横 overflow なし
- compare-table 3行
- undefined 表示なし
- console warning/error なし
```

直近確認済み。

```bash
node --check data/auditSchema.js
node --check app.js
node --check ui/renderers.js
git diff --check
```

結果。

```text
構文エラーなし。
git diff --check は空白エラーなし。LF→CRLF warning のみ。
```

---

## 3. 次にやること

優先順位は、Compare 実ブラウザ確認から、ratingReadiness blocker の実データ改善へ切り替える。

```text
今すぐやる:
ratingReadiness blocker の実データ改善に着手する
```

目的。

```text
- Toyota / Honda / BYD は assessmentCoverage により全空白セルの意味を説明済み
- ratingReadiness の到達条件は lintCaseMethodology に最低限接続済み
- Compare ビューは既存データから3ケース横断表を表示済み
- Compare ビューは実ブラウザで見た目・操作・レスポンシブを確認済み
- ratingReadiness blockers は「追加一次資料収集」「既存証拠リンク追加」「公開資料限界として維持」に分類済み
- 次は分類済みタスクのうち、既存証拠リンク追加と ratingBasis 直接根拠整理から着手する
```

推奨タスク名。

```text
Improve ratingReadiness evidence gaps
```

対象ケース。

```text
target:
toyota-multi-pathway-2021
honda-ev-concentration-2021

focus:
Toyota / Honda / BYD 横断での ratingReadiness blocker 実データ改善
```

作業順。

```text
1. node verify.js / tools 3本で現状の床を確認する
2. Toyota / Honda の既存証拠リンク追加と ratingBasis 直接根拠整理を先に確認する
3. BYD は G3 の byd_pw_policy_regulatory_dependence と、主要セル5件の不足を優先する
4. 新規メタ仕様は原則追加しない
5. verify / cache-busting / report-case-balance / check-assessment-coverage --strict / git diff --check を通す
```

2026-06-29 の blocker 分解。

```text
共通 blocker: 取締役会・内部投資審査資料が未公開
分類: 公開資料限界として維持
理由: 公開資料から直接解消しにくい。ratingReadiness 未到達の正当 blocker として残す。

共通 blocker: 2021年判断と後年結果の因果接続が未確定
分類: 既存証拠リンク追加 / ratingBasis 直接根拠の整理
理由: 後年結果は事後対照に留め、判断時点資料があるセルへ直接根拠を寄せる必要がある。

共通 blocker: 主要リスクの公開評価形跡が限定的
分類: 追加一次資料収集
理由: preWarChecklist の高/中 evaluability 項目に限定的・不明が残る。

Toyota 次タスク:
- toy_cell_capital_resilience に反証 evidenceLink を追加できるか確認
- toy_cell_governance_disclosure に支持 evidenceLink を追加できるか確認
- toy_cell_battery_cost_supply の事後対照リンクを ratingBasis 直接根拠から外せるか確認
- G2: regulatory / battery / SDV / capital / governance の公開評価形跡を追加探索

Honda 次タスク:
- hon_cell_sdv_execution に反証 evidenceLink を追加できるか確認
- hon_cell_governance_disclosure に反証 evidenceLink を追加できるか確認
- hon_cell_battery_cost_supply に判断時点 evidence を追加できるか確認
- hon_cell_alliance_execution_risk の事後対照リンクを ratingBasis 直接根拠から外せるか確認
- G2: market / regulatory / battery / SDV / capital / governance の公開評価形跡を追加探索

BYD 次タスク:
- byd_cell_market_china_nev_demand に反証と判断時点 evidence を追加できるか確認
- byd_cell_battery_cost_supply に反証 evidence を追加できるか確認
- byd_cell_platform_execution に反証 evidence を追加できるか確認
- byd_cell_capital_price_resilience に判断時点 evidence を追加できるか確認
- byd_cell_governance_disclosure の事後対照リンクを ratingBasis 直接根拠から外せるか確認
- G3: byd_pw_policy_regulatory_dependence は政策・関税リスクの当時評価資料を優先探索
```

---
## 4. BYD追加と同時に確認すること

BYDケース精査中に、以下を同時確認する。

### 4.1 status が保存値に戻っていないか

確認観点。

```text
- claims.status のような保存値が復活していないか
- checklist.status が手入力状態になっていないか
- 表示 status が resolveStatus 相当の導出処理で決まっているか
- statusOverride がある場合、例外として明示されているか
```

原則。

```text
status は保存しない。
表示状態はデータから実行時に導出する。
```

### 4.2 lint が反証担保の第一機構になっているか

確認観点。

```text
- unlinked_claim が検出されるか
- one_sided_claim が検出されるか
- unsupported_claim が検出されるか
- dangling evidenceLink / claimId / assessmentCellId が検出されるか
- counterpartCaseId の双方向性が検査されるか
```

原則。

```text
lint が床。
adversarialReview は補助。
```

BYDケースでは、`adversarialReview` を厚く書くより、lint が片側 claim を検出できる状態を優先済み。現在 `node verify.js` は BYD を含めて通過している。

### 4.3 assessmentCoverageで「セルなし」と「E0」を区別できるか

確認観点。

```text
セルなし:
評価対象外、未実装、または未評価の可能性がある。

E0:
in-scope かつ公開資料上の評価形跡を確認できない。

in_scope_unassessed:
評価対象だが、まだ評価していない。

out_of_scope:
当該ケースの責任範囲外。

implementation_pending:
実装未了。
```

原則。

```text
セルがない ≠ E0
E0 ≠ 未収集
未収集 ≠ 形跡なし
```

BYDケースでは、全セルを機械的に埋めず、`assessmentCoverage` で out_of_scope / in_scope_unassessed を明示済み。

---

## 5. 後回しにすること

以下は、3ケース横断のスキーマ過不足確認が完了するまで原則として後回しにする。

```text
- adversarialReviewGovernance の精緻化
- evidenceHierarchy のUI化
- causalScenarioMap
- scenarioSet
- normalizationFactors
- neutral landing 本格実装
```

扱い。

```text
破棄ではない。
METHOD_APPENDIX の候補層に留める。
3ケース精査で本当に必要になったものだけ昇格を検討する。
```

Compareビューについて。

```text
Compareビューは最小実装済み。
既存データから横断表を出す段階に留め、新規メタ仕様は増やしていない。
次は実ブラウザ確認と、比較で見えた blocker の実データ改善を優先する。
neutral landing はまだ本格実装しない。
```

## 6. 次回実装時の注意

```text
- 未確定は正当な結論であり得るが、常に未確定になるなら設計不全を疑う。
- KO条件だけでなく ratingReadiness 到達条件を実装する。
- Toyota multi-pathway と Honda EV集中を、純粋な自由選択として扱わない。
- 戦略選択と構造的キャパシティ制約を分ける。
- 公式資料は一次資料だが、IRナラティブとしての開示バイアスを持つ可能性がある。
- 公開資料にあることを、内部で十分検討したことと同一視しない。
- 2021年時点の合理的期待ベースラインを置く。
- Compareビューまたは neutral landing は、フレーミング効果対策として優先度を上げる。
```

---

## 7. 禁止事項

```text
- app.js にケースデータを直書きしない
- 旧戦争ケースを新リポジトリへ混ぜない
- 後年資料を2021年判断の直接証拠にしない
- 公開資料にないことを内部未検討と断定しない
- 公開資料にあることを内部十分検討と断定しない
- Toyota = 正解 / Honda = 失敗 としない
- counterpartCaseId を片方向だけにしない
- evidenceLinks の canSay / cannotSay を空欄にしない
```

---

## 8. 現時点の結論

```text
Toyota:
合理的なリアルオプション戦略仮説と、
BEV・SDV転換遅れ仮説の双方が成立する。

Honda:
合理的な先行コミットメント仮説と、
EV需要・提携依存・実行能力の過大評価仮説の双方が成立する。

BYD:
垂直統合・EV集中による供給網/コスト優位仮説と、
中国NEV市場・政策集中、価格競争、公開資料限界の監査仮説の双方が成立する。
```

ただし、次の焦点は結論断定ではなく、Compare ビュー確認と ratingReadiness blocker の実データ改善である。
