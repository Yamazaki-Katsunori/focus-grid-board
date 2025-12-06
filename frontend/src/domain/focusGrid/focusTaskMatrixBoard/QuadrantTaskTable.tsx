// src/domain/focusGrid/focusTaskMatrixBoard/QuadrantTaskTable.tsx
import type { QuadrantTaskTableProps } from '@domain/focusGrid/focusTaskMatrixBoard/focusTaskMatrixBoardTypes';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableRow,
  BaseTableCell,
} from '@base/table/BaseTablePrimitives';
import { StatusDot } from '@base/dot/StatusDot';
import {
  priorityLabel,
  priorityToColor,
  statusLabel,
  statusToColor,
} from '@shared/task/taskPresentation';
import type { TaskRow } from '@shared/task/TaskListTypes';

export function QuadrantTaskTable({ items }: QuadrantTaskTableProps) {
  return (
    <div className="overflow-x-auto">
      <BaseTable className="data-table--compact">
        <BaseTableHead>
          <BaseTableRow>
            <BaseTableCell isHead className="w-6 px-1">
              {/* DnD アイコン列（ヘッダーは空でOK） */}
            </BaseTableCell>
            <BaseTableCell isHead className="px-1">
              タスク
            </BaseTableCell>
            <BaseTableCell isHead className="px-1">
              優先度
            </BaseTableCell>
            <BaseTableCell isHead className="px-1">
              ステータス
            </BaseTableCell>
            <BaseTableCell isHead className="px-1">
              期限
            </BaseTableCell>
            <BaseTableCell isHead className="px-1">
              カテゴリ
            </BaseTableCell>
            <BaseTableCell isHead className="w-14 px-1 text-center">
              {/* メニュー列 */}
              メニュー
            </BaseTableCell>
          </BaseTableRow>
        </BaseTableHead>

        <BaseTableBody>
          {items.map((row: TaskRow) => (
            <BaseTableRow key={row.id}>
              {/* DnD ハンドル（今は見た目だけ） */}
              <BaseTableCell className="text-text-muted px-1 text-center align-middle leading-none">
                <button
                  type="button"
                  className="cursor-grab text-lg leading-none"
                  aria-label="タスクをドラッグ"
                >
                  ⋮⋮
                </button>
              </BaseTableCell>

              {/* タスク名 */}
              <BaseTableCell className="align-middle leading-none">
                <div className="text-text-main max-w-56 truncate">{row.title}</div>
              </BaseTableCell>

              {/* 優先度 */}
              <BaseTableCell className="align-middle leading-none">
                <span className="text-text-muted inline-flex items-center gap-1 text-[11px]">
                  <StatusDot color={priorityToColor(row.priority)} />
                  <span>{priorityLabel(row.priority)}</span>
                </span>
              </BaseTableCell>

              {/* ステータス */}
              <BaseTableCell className="align-middle leading-none">
                <span className="text-text-muted inline-flex items-center gap-1 text-[11px]">
                  <StatusDot color={statusToColor(row.status)} />
                  <span>{statusLabel(row.status)}</span>
                </span>
              </BaseTableCell>

              {/* 期限 */}
              <BaseTableCell className="align-middle leading-none">{row.due}</BaseTableCell>

              {/* カテゴリ */}
              <BaseTableCell className="align-middle leading-none">{row.category}</BaseTableCell>

              {/* メニュー */}
              <BaseTableCell className="data-table__cell--menu">
                <div className="data-table__cell--menu-inner">
                  <button
                    type="button"
                    className="text-text-muted hover:text-text-main text-lg leading-none"
                    aria-label="タスクメニュー"
                  >
                    …
                  </button>
                </div>
              </BaseTableCell>
            </BaseTableRow>
          ))}
        </BaseTableBody>
      </BaseTable>
    </div>
  );
}
