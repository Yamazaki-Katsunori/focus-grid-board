// src/domain/focusGrid/TaskTable.tsx
import { StatusDot } from '@base/dot/StatusDot';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableRow,
  BaseTableCell,
} from '@base/table/BaseTablePrimitives';

import type { TaskRow } from '@shared/task/TaskListTypes';
import {
  priorityLabel,
  priorityToColor,
  statusLabel,
  statusToColor,
} from '@shared/task/taskPresentation';

import { COLUMNS, ROWS } from '@domain/focusGrid/demoTaskData';

export function FocusTaskTable() {
  return (
    <div className="data-table-wrapper">
      <div className="data-table__header">
        <h2 className="data-table__caption">FocusGrid Board に登録されたタスク一覧（サンプル）</h2>
      </div>

      <div className="overflow-x-auto">
        <BaseTable className="data-table--compact" aria-label="タスク一覧">
          <BaseTableHead>
            <BaseTableRow>
              {COLUMNS.map((col) => (
                <BaseTableCell key={col.key} isHead style={{ width: col.width, textAlign: 'left' }}>
                  {col.header}
                </BaseTableCell>
              ))}
              {/* メニュー列ヘッダー（ラベルは空でOK） */}
              <BaseTableCell isHead className="data-table__cell--menu">
                メニュー
              </BaseTableCell>
            </BaseTableRow>
          </BaseTableHead>

          <BaseTableBody>
            {ROWS.map((row) => (
              <BaseTableRow key={row.id}>
                {COLUMNS.map((col) => {
                  const value = row[col.key as keyof TaskRow];

                  if (col.key === 'status') {
                    return (
                      <BaseTableCell key={col.key}>
                        <span className="text-text-muted inline-flex items-center gap-1 text-[11px]">
                          <StatusDot color={statusToColor(row.status)} />
                          <span>{statusLabel(row.status)}</span>
                        </span>
                      </BaseTableCell>
                    );
                  }

                  if (col.key === 'priority') {
                    return (
                      <BaseTableCell key={col.key}>
                        <span className="text-text-muted inline-flex items-center gap-1 text-[11px]">
                          <StatusDot color={priorityToColor(row.priority)} />
                          <span>{priorityLabel(row.priority)}</span>
                        </span>
                      </BaseTableCell>
                    );
                  }

                  return <BaseTableCell key={col.key}>{value}</BaseTableCell>;
                })}

                {/* ★ メニュー列（… を中央に） */}
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
    </div>
  );
}
