# HANDOFF.md

# Automotive Strategy Accountability Audit — Handoff

最終更新: 2026-06-27

---

## 0. このファイルの目的

このファイルは、**Automotive Strategy Accountability Audit** の再開に必要な現在状態、検証結果、次作業だけを記録する。

詳細な設計原則は `docs/CANON.md` を参照する。  
作業履歴・由来・決定経緯は `docs/HISTORY.md` を参照する。

---

## 1. 現在のプロジェクト状態

### 1.1 プロジェクト名

```text
Automotive Strategy Accountability Audit
```

### 1.2 目的

自動車産業のEVシフトを、後知恵ではなく、当時利用可能だった情報に基づく **ex-ante 経営判断監査**として評価する。

問うべきことは以下。

```text
2021年前後の不確実性下で、各社の経営陣・取締役会は、
市場需要、規制、電池、SDV、資本配分、提携依存、撤退基準を
どこまで合理的に評価していたか。
```

### 1.3 現在の実装状態

初期実装は完了済み。

```text
- Toyota / Honda の2ケースのみ登録済み
- 旧 War Accountability Audit の戦争ケース import は削除済み
- 既定ケースは toyota-multi-pathway-2021
- counterpartCaseId は双方向リンク済み
- rating は両ケースとも 未確定
- cache-busting は 20260627-auto-ev-shift-r7 に統一済み
- UI文言は企業戦略監査向けに自然化済み
- クリック可能な選択領域と静的な説明領域の見た目は分離済み
- 証拠リンク画面の横はみ出しは修正済み
```

---

## 2. 現在のファイル構成

```text
index.html
app.js
styles.css
verify.js

_tools/check-cache-busting.mjs は存在しない。実体は tools/check-cache-busting.mjs。

data/
  auditSchema.js
  cases/
    index.js
    toyota-multi-pathway-2021.js
    honda-ev-concentration-2021.js

ui/
  renderers.js

docs/
  CANON.md
  HISTORY.md

HANDOFF.md
```

実際の `rg --files` 確認済みファイルは以下。

```text
verify.js
ui/renderers.js
tools/check-cache-busting.mjs
styles.css
index.html
HANDOFF.md
docs/HISTORY.md
docs/CANON.md
app.js
data/auditSchema.js
data/cases/toyota-multi-pathway-2021.js
data/cases/index.js
data/cases/honda-ev-concentration-2021.js
```

---

## 3. 登録ケース

### 3.1 Toyota

```text
id: toyota-multi-pathway-2021
conflict: 自動車産業EVシフト（2020年代）
name: 自動車産業EVシフト 2020年代：トヨタ multi-pathway 戦略
auditedActor: トヨタ自動車 経営陣・取締役会
counterpartCaseId: honda-ev-concentration-2021
rating: 未確定
uncertainty: 中
```

実装済み要素。

```text
phases: 4
preWarChecklist: 6
claims: 7
evidence: 8
assessmentCells: 8
evidenceLinks: 14
ratingBasis: 5
ratingReadiness: 未到達
```

### 3.2 Honda

```text
id: honda-ev-concentration-2021
conflict: 自動車産業EVシフト（2020年代）
name: 自動車産業EVシフト 2020年代：Honda EV集中戦略
auditedActor: 本田技研工業 経営陣・取締役会
counterpartCaseId: toyota-multi-pathway-2021
rating: 未確定
uncertainty: 中〜高
```

実装済み要素。

```text
phases: 4
preWarChecklist: 6
claims: 7
evidence: 8
assessmentCells: 8
evidenceLinks: 14
ratingBasis: 5
ratingReadiness: 未到達
```

---

## 4. 現在の設計方針

### 4.1 UIの読み替え

既存データ名・UI名は一部そのまま残している。

```text
Pre-War = 戦略表明前・大規模投資前の評価形跡チェック
warCase = strategyCase 相当
opponentActor = counterpart strategy actor
primaryResponsibility = strategy accountability responsibility
```

`data/auditSchema.js` と `ui/renderers.js` の表示文言は企業戦略向けに調整済み。  
内部データ名は互換性のため一部残しているが、ユーザーに見える主要UIは以下へ読み替えている。

```text
Overview = 戦略概要
Timeline = タイムライン
Pre-War = 投資前チェック
Assessment = 経営判断監査
Evidence = 証拠リンク
Audit Opinion = 監査意見
```

### 4.2 UIの相互作用

クリック可能な領域と、選択結果を説明する領域は見た目を分離済み。

```text
selection-section = クリックで選択が変わる領域
detail-section / selected-detail-section = 選択結果の説明領域
static-section = クリックできない集計・説明領域
```

タイムラインカードはカード全体をクリック可能にしている。  
キーボード操作では Enter / Space で選択を切り替えられる。  
選択処理は `app.js` の `selectTimelinePhase()` が担う。

### 4.3 後知恵禁止

後年資料は、2021年判断の直接証拠にしない。

```text
使える:
- 後年の検証資料
- 事後対照
- 当初仮説がどのような結果に接続したかの説明

使えない:
- 2021年判断の直接証拠
- 経営陣の当時認識の断定
- ratingBasis の直接根拠
```

実装上、後年資料の `evidenceLink` は `target` に `事後対照` を含め、`availableAtDecisionTime: false` として扱っている。  
既存 lint は `timeFit: "事後"` を許容していないため、後年資料リンクの `timeFit` は現状 `間接` としている。

### 4.4 内部資料不足の扱い

以下を断定しない。

```text
公開資料に見えない = 内部で検討していない
```

表現は以下に寄せる。

```text
公開資料上、評価形跡を確認できない。
内部で検討されていなかったとは断定できない。
```

---

## 5. 検証結果

### 5.1 Node validation

直近確認済み。

```bash
node verify.js
```

結果。

```text
=== Running Validations ===
1. validateCaseRegistry:
Errors: 0

2. validateCaseReferences:
- toyota-multi-pathway-2021: 0 errors
- honda-ev-concentration-2021: 0 errors

3. lintCaseMethodology:
- toyota-multi-pathway-2021: 0 errors
- honda-ev-concentration-2021: 0 errors

ALL CHECKS PASSED!
```

### 5.2 Cache-busting

直近確認済み。

```bash
node tools/check-cache-busting.mjs
```

結果。

```text
cache-busting ok: 20260627-auto-ev-shift-r7 (8 version markers checked)
```

### 5.3 Browser smoke test

前セッションで確認済み。

```text
URL: http://127.0.0.1:8123/index.html

確認済み:
- ケースセレクタに Toyota / Honda の2件表示
- optgroup は 自動車産業EVシフト（2020年代）
- Toyota から Honda への counterpart ボタン表示
- Honda から Toyota への counterpart ボタン表示
- 戦略概要 / タイムライン / 投資前チェック / 経営判断監査 / 証拠リンク / 監査意見 描画
- タイムラインカード全体クリックで「選択中」説明が切り替わる
- タイムラインカードは Enter / Space でも選択可能
- 投資前チェックの静的パネルと、経営判断監査のクリック可能マトリクス / 選択中詳細パネルの見た目が分かれる
- 証拠リンク画面の横はみ出しなし
- link-button の不要な矢印なし
- undefined 表示なし
- console warning/error なし
```

### 5.4 ローカルHTTPサーバー

前セッションでは以下が起動していた。

```text
python -m http.server 8123
PID: 11688
```

再開時点でまだ起動中とは限らない。必要なら `http://127.0.0.1:8123/index.html` を開く前にプロセス確認または再起動する。

---

## 6. 次にやること

優先順。

```text
1. Toyota / Honda の evidence を実URL・正式出典付きに精査する
2. 後年資料の timeFit 設計を見直す
3. 必要なら browser smoke test を再実行する
```

---

## 7. 次作業の詳細

### 7.1 証拠リンク表記の統一

主要ナビゲーション、証拠画面見出し、関連説明は `証拠リンク` に統一済み。
内部の evidence graph / claim-evidence link という構造名は、互換性と意味の明確さを優先して急いで改名しない。

### 7.2 evidence の正式出典化

現在の evidence は代表資料ラベルであり、正式URLや文書タイトルの精査は未完了。

次にやる場合は、公式資料を優先する。

```text
Toyota:
- 2017年 電動車普及・電動化目標関連発表
- 2021年12月 Battery EV Strategies briefing
- multi-pathway approach に関する公式説明
- 統合報告書 / 有価証券報告書 / 決算説明資料

Honda:
- 2021年 EV/FCEV 2040年100%目標発表
- 2021〜2022年 電動化戦略説明会資料
- 2022年 Honda/GM 量販価格帯EV共同開発発表
- 2023年 Honda/GM 量販EV共同開発中止に関する発表・報道
- 統合報告書 / 有価証券報告書 / 決算説明資料
```

公式資料が足りない場合のみ、同時代外部資料や後年分析を補助資料として使う。

### 7.3 timeFit 設計

`docs/CANON.md` では `timeFit: "事後"` を想定している。  
一方、現在の `lintCaseMethodology` は `直接` / `間接` のみを valid としている。

次に検討する選択肢。

```text
案A:
lintCaseMethodology の validTimeFits に "事後" を追加する。

案B:
後年資料は引き続き timeFit: "間接" とし、target と availableAtDecisionTime で事後対照を表現する。

推奨:
CANON との整合を優先するなら案A。
ただし変更後は node verify.js とブラウザ確認を必ず実施する。
```

### 7.4 cache-busting checker

現在の確認結果は以下。

```text
cache-busting ok: 20260627-auto-ev-shift-r7 (8 version markers checked)
```

`tools/check-cache-busting.mjs` は `index.html` の `styles.css?v=20260627-auto-ev-shift-r7` も確認対象に含めるよう更新済み。
出力件数は JavaScript import だけではなく stylesheet を含むため、`version markers checked` として数える。

---

## 8. 禁止事項

```text
- app.js にケースデータを直書きしない
- 旧戦争ケースを新リポジトリへ混ぜない
- 後年資料を2021年判断の直接証拠にしない
- 公開資料にないことを内部未検討と断定しない
- Toyota = 正解 / Honda = 失敗 という単純な結論にしない
- rating を初期実装で無理に確定しない
- counterpartCaseId を片方向だけにしない
- evidenceLinks の canSay / cannotSay を空欄にしない
```

---

## 9. 現時点の結論

```text
Toyota:
合理的なリアルオプション戦略仮説と、
BEV・SDV転換遅れ仮説の双方が成立する。

Honda:
合理的な先行コミットメント仮説と、
EV需要・提携依存・実行能力の過大評価仮説の双方が成立する。
```

このプロジェクトの目的は、勝敗判定ではなく、当時の意思決定プロセスとリスク評価の監査である。
