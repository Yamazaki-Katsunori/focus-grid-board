// src/domain/focusGrid/TaskTable.tsx
import { BaseTable } from '@base/table/BaseTable';
import type { BaseTableRow, BaseTableColumn } from '@base/table/tableTypes';

const COLUMNS: BaseTableColumn[] = [
  { key: 'title', header: 'タスク', width: '40%' },
  { key: 'priority', header: '優先度', width: '12%' },
  { key: 'status', header: 'ステータス', width: '18%' },
  { key: 'due', header: '期限', width: '18%' },
  { key: 'category', header: 'カテゴリ', width: '12%' },
];

const ROWS: BaseTableRow[] = [
  {
    title: 'ガイド登録フォームの項目見直し',
    priority: '高',
    status: '進行中',
    due: '今週中',
    category: '仕様',
  },
  {
    title: 'FocusGrid マトリクスUI プロト作成',
    priority: '中',
    status: '未着手',
    due: '来週',
    category: 'UI/UX',
  },
  {
    title: '観光ガイド申請メール文言の調整',
    priority: '中',
    status: 'レビュー待ち',
    due: '未定',
    category: '文面',
  },
];

export function FocusTaskTable() {
  return (
    <BaseTable
      columns={COLUMNS}
      rows={ROWS}
      caption="FocusGrid Board に登録されたタスク一覧（サンプル）"
    />
  );
}
