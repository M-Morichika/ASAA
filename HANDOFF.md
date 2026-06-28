# HANDOFF.md

# Automotive Strategy Accountability Audit — Handoff

最終更新: 2026-06-27
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
- cache-busting は 20260627-auto-ev-shift-r12 に統一済み
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
cache-busting ok: 20260627-auto-ev-shift-r12 (9 version markers checked)
```

ブラウザ smoke test では、Toyota / Honda / BYD の3ケース表示、BYD選択、6タブ描画、証拠リンク表示、投資前チェックの未評価ギャップ表示、undefined 表示なし、console warning/error なしを確認済み。

---

## 3. 次にやること

優先順位は、BYDケース追加そのものから、BYDケースの内容精査へ切り替える。

```text
今すぐやる:
BYDケースの内容精査
```

目的。

```text
- BYD追加により、既存の痩せた CANON だけで3社目を登録できることは確認済み
- 次は BYD の証拠URL到達性、評価軸、反証リンク、空白セルの意味を精査する
- 追加仕様ではなく、実ケースでスキーマの過不足を確認する
```

推奨タスク名。

```text
Review third ASAA case: BYD vertical integration strategy
```

対象ケース。

```text
id:
byd-vertical-integration-2021

name:
自動車産業EVシフト 2020年代：BYD 垂直統合・EV集中戦略

scope:
2021年前後以降のEV・電池・垂直統合・中国市場・価格競争・海外展開に関する戦略判断
```

作業順。

```text
1. BYD の公式URL・HKEX PDF・IEAリンクの到達性を確認する
2. BYD の claims / evidenceLinks が片側 claim になっていないか再確認する
3. assessmentCoverage の空白セル説明がUI/文書上十分か確認する
4. 必要なら BYD の証拠を追加する。ただし新規メタ仕様は原則追加しない
5. verify / cache-busting / focused node --check / git diff --check を通す
6. 3ケースでスキーマ過不足を確認する
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

BYDケースでは、全セルを機械的に埋めない。
初期 skeleton では `assessmentCoverage` に out_of_scope / in_scope_unassessed を追加済み。

---

## 5. 後回しにすること

以下は、BYDケースの内容精査が完了するまで原則として後回しにする。

```text
- adversarialReviewGovernance の精緻化
- evidenceHierarchy のUI化
- causalScenarioMap
- scenarioSet
- normalizationFactors
- Compareビュー本格実装
```

扱い。

```text
破棄ではない。
METHOD_APPENDIX の候補層に留める。
BYD追加時に本当に必要になったものだけ昇格を検討する。
```

Compareビューについて。

```text
neutral landing / Compareビューは重要だが、
BYDケースの内容精査前に本格実装しない。
まず3社目追加で、比較設計の実需要を確認する。
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
```

ただし、次の焦点は Toyota / Honda の結論精緻化ではなく、BYDを含む3社目追加後のスキーマ検証である。
