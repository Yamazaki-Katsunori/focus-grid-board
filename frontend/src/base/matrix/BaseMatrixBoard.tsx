import type { BaseMatrixBoardProps } from '@base/matrix/baseMatrixBoardTypes';

export function BaseMatrixBoard<T>({
  quadrants,
  renderItem,
  renderItems,
}: BaseMatrixBoardProps<T>) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {quadrants.map((q) => (
        <section key={q.id} className="border-border-subtle bg-bg-surface rounded-xl border p-3">
          <header className="mb-2 flex items-center justify-between">
            <h2 className="text-sm font-semibold">{q.title}</h2>
            {q.headerExtra}
          </header>

          {/* ★ items の描画方法を選べるようにする */}
          {q.items.length === 0 ? (
            <div className="border-border-subtle text-text-muted rounded-lg border border-dashed px-2 py-4 text-center text-[11px]">
              タスクがありません
            </div>
          ) : renderItems ? (
            // TaskMatrixBoard など「テーブルで描きたい」ケースはこちら
            renderItems(q.items)
          ) : renderItem ? (
            // 従来の「カードリスト」スタイルはこちら
            <ul className="space-y-1 text-xs">
              {q.items.map((item, idx) => (
                <li key={idx}>{renderItem(item)}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}
    </div>
  );
}
