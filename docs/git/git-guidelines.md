# Git 運用ガイドライン（focus-grid-board）

> ⚠️ このドキュメントはドラフトです。必要に応じて随時アップデートしていきます。

---

## 1. ブランチ戦略

### 1-1. 基本方針

* `main` ブランチ：常にデプロイ可能な状態を保つ、唯一のメインブランチ
* 機能追加・修正などの作業は、必ず `main` から派生した短命ブランチで行う
* 作業用ブランチは PR マージ後に削除する（GitHub で head ブランチ自動削除を有効化）

### 1-2. ブランチ種別と命名規則

ブランチ名は以下のプレフィックス＋Issue 番号＋概要で構成する。

```text
<type>/<issue番号>-<概要（kebab-case 英語 or ローマ字）>
```

#### プレフィックス（type）一覧

* `feature/` : 新機能・新画面の追加
* `fix/`     : バグ修正
* `refactor/`: リファクタリング（挙動を変えない構造改善）
* `chore/`   : 依存更新・CI 設定・ビルド設定などの雑多作業
* `docs/`    : ドキュメントの追加・修正

#### 命名例

```text
feature/12-focus-grid-board
feature/34-task-quadrant-filter
fix/45-guide-modal-close-bug
refactor/56-task-entity-responsibility
chore/78-update-ci-node-version
docs/90-update-readme-setup
```

※ Issue 番号は GitHub Issue の番号に対応させる。

---

## 2. Issue / PR 運用

### 2-1. Issue 種別

`.github/ISSUE_TEMPLATE/` 配下のテンプレートと対応する種別は以下の通り。

* `feature_request.md` : 機能追加リクエスト（ラベル例: `feature`）
* `bug_report.md`      : バグ報告 / 修正依頼 (Bug / Fix)（ラベル例: `bug`）
* `refactor_request.md`: リファクタ（ラベル例: `refactor`）
* `chore_request.md`   : メンテナンス / 雑多（ラベル例: `chore`）
* `docs_request.md`    : ドキュメント整備（ラベル例: `docs`）

### 2-2. Issue とブランチの対応

* 原則として **1 Issue = 1 ブランチ = 1 PR** を目指す
* ブランチ名には対応する Issue 番号を含める（例: `feature/12-...` ← Issue #12）
* PR 作成時には `Related Issue` セクション等で `#12` のように明記する

### 2-3. PR テンプレート

* `.github/pull_request_template.md` を利用し、以下の項目を必ず記載する

  * 概要
  * 対応内容（チェックリスト形式推奨）
  * 動作確認項目
  * 関連 Issue

---

## 3. コミットメッセージ規約

### 3-1. 基本方針

* **Conventional Commits** をベースにしたプレフィックスを採用する
* メッセージ本文は日本語で OK（将来の自分が読んでわかることを優先）

### 3-2. プレフィックス一覧

* `feat`: 新機能の追加
* `fix`: バグ修正
* `refactor`: リファクタリング（仕様変更なし）
* `docs`: ドキュメントの追加・修正
* `chore`: 依存更新 / 設定変更 / CI・ビルド関連など
* `test`: テストコードの追加・修正
* `style`: フォーマット・スペル修正など（挙動に影響しない変更）

### 3-3. 例

```text
feat: タスクをフォーカスグリッドに追加できるようにする
fix: タスク編集モーダルが ESC で閉じない不具合を修正
refactor: task エンティティの責務を整理
docs: README に開発環境セットアップ手順を追記
chore: ESLint 設定を更新
test: focus grid のフィルタ処理のテストを追加
style: Prettier による自動整形を適用
```

### 3-4. 粒度の目安

* 原則 **1コミット = 1トピック**

  * UI 修正とバグ修正を同じコミットに混ぜない
* テストが通る単位でコミットする

  * `pnpm test` / `phpunit` が失敗しない状態が望ましい

※ 実装中は小さめの WIP コミットをしても OK。必要に応じて `git rebase -i` で整理する。

---

## 4. 開発フロー

### 4-1. 基本フロー（Issue → ブランチ → PR → main）

1. Issue を作成する（テンプレートから選択）
2. `main` から作業ブランチを作成
3. 作業ブランチ上で実装・コミット
4. `main` を最新化し、作業ブランチを rebase して追従
5. GitHub で PR を作成
6. レビュー（セルフレビュー含む）後、**Squash & merge** で `main` に取り込む
7. マージ済みブランチは GitHub により自動削除（設定で有効化）
8. ローカルのマージ済みブランチも適宜削除

### 4-2. ブランチ作成コマンド例

```bash
# main を最新化
git checkout main
git pull origin main

# Issue #12 用のブランチ作成
git checkout -b feature/12-focus-grid-board
```

### 4-3. rebase 運用（作業ブランチ側のみ）

* `main` ブランチの履歴は書き換えない
* 作業ブランチでのみ `git rebase` を使用し、履歴を整理する

```bash
# main を最新化
git checkout main
git pull origin main

# 作業ブランチへ移動
git checkout feature/12-focus-grid-board

# main の最新に追随
git rebase main
# コンフリクトが出たら解消し、
# git add ...
# git rebase --continue

# 履歴を書き換えるため push 時は --force-with-lease を使用
git push --force-with-lease
```

---

## 5. PR と Squash & merge の運用

### 5-1. PR タイトル

* PR タイトルは **Squash & merge 時に main に残るコミットメッセージ**とする
* フォーマット：

```text
<type>: <概要> (#<issue番号>)

例:
feat: FocusGrid Board のタスクカード登録機能を追加 (#12)
fix: タスク編集モーダルが ESC で閉じない不具合を修正 (#34)
refactor: task エンティティの責務を整理 (#56)
```

### 5-2. PR 本文

* `.github/pull_request_template.md` にしたがって記載
* 特に以下を意識する

  * なぜこの変更が必要か（背景・目的）
  * 何をどのように変えたか（対応内容）
  * どう確認したか（動作確認手順）

### 5-3. Issue との自動紐付け

* PR 本文に `Fixes #<issue番号>` などを記載すると、マージ時に Issue が自動で Close される

```text
Fixes #12
```

---

## 6. タグ付けとリリースノート

### 6-1. バージョン戦略（SemVer ベース）

* バージョンは Semantic Versioning（SemVer）をベースに運用する
* 当面は `0.x.y` 系（開発中バージョン）とし、以下のように使い分ける：

  * `0.MINOR.0` : 機能追加・画面追加など、ある程度まとまった変更
  * `0.x.PATCH`: バグ修正や小規模な改善のみ

### 6-2. タグの付け方

```bash
# main が最新であることを確認
git checkout main
git pull origin main

# タグ作成（注釈付きタグ）
git tag -a v0.1.0 -m "Release v0.1.0"

# タグをリモートにプッシュ
git push origin v0.1.0
```

* GitHub の Release 画面で `v0.1.0` を指定し、リリースノートを記載する

### 6-3. CHANGELOG の運用

* `CHANGELOG.md` を用意し、バージョンごとに変更点を記録する

```markdown
# Changelog

## [0.1.0] - 2025-11-28
### Added
- FocusGrid Board のタスクカード登録機能を追加 (#12)
- タスクにフォーカスタグを設定できるようにした (#15)

### Fixed
- タスク編集モーダルが ESC で閉じない不具合を修正 (#18)

---

## [0.0.1] - 2025-11-20
### Added
- Laravel + React 開発環境の初期セットアップ
- 初期の Task モデル・エンティティの実装
```

※ 実際の内容・日付はリリースタイミングに合わせて更新する。

---

## 7. ブランチ削除とクリーンアップ

### 7-1. GitHub 上のブランチ自動削除

* リポジトリ設定で「Automatically delete head branches」を有効化し、
  マージ済みのリモートブランチを自動削除する

### 7-2. ローカルブランチのクリーンアップ

* リモートで削除されたブランチを自動で prune する設定

```bash
git config --global fetch.prune true
```

* `main` にマージ済みのローカルブランチをまとめて削除する例

```bash
# main を最新化
git switch main
git pull origin main

# main にマージ済みのブランチ一覧
git branch --merged main

# main 以外をまとめて削除（実行前に対象を確認すること）
git branch --merged main | grep -v "main" | xargs git branch -d
```

---

## 8. 今後の拡張

* チーム開発化・ステージング環境の追加などのタイミングで、以下を検討する：

  * `develop` / `staging` ブランチの導入
  * リリースブランチ戦略（例: `release/x.y.z`）
  * CI/CD パイプラインとブランチ戦略の連携
* 必要に応じて本ガイドラインを更新し、実態とドキュメントを合わせる。
