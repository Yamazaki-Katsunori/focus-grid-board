# ER Diagram (focus-grid-board)

この ER 図は、focus-grid-board の「論理設計（叩き台）」を表す。

- Board は画面(View)として扱い、DBに保存しない
- Status / Quadrant / Priority は固定値として扱う（テーブル化しない）
- SavedFilter は現時点では作らない（検索条件はURL query で表現）
- 認証方式未確定のため `owner_key` を採用（後で user_id に移行可能）

## Source
- `ER.mmd` が正本（生成入力）

## Rendered
- `../rendered/ER.svg`
