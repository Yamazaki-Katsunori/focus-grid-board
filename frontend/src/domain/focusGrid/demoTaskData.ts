import type { BaseTableColumn } from '@base/table/baseTablePrimitiveTypes';
import type { TaskRow } from '@shared/task/TaskListTypes';

export const COLUMNS: BaseTableColumn[] = [
  { key: 'title', header: 'タスク', width: '40%' },
  { key: 'priority', header: '優先度', width: '12%' },
  { key: 'status', header: 'ステータス', width: '14%' },
  { key: 'due', header: '期限', width: '12%' },
  { key: 'category', header: 'カテゴリ', width: '14%' },
];

export const ROWS: TaskRow[] = [
  {
    id: '1',
    title: 'ガイド登録フォームの項目見直し',
    priority: 'high',
    status: 'doing',
    due: '今週中',
    category: '仕様',
    quadrant: 'notUrgentImportant',
  },
  {
    id: '2',
    title: 'FocusGrid マトリクスUI プロト作成',
    priority: 'medium',
    status: 'todo',
    due: '来週',
    category: 'UI/UX',
    quadrant: 'notUrgentNotImportant',
  },
  {
    id: '3',
    title: '観光ガイド申請メール文言の調整',
    priority: 'low',
    status: 'waiting',
    due: '未定',
    category: '文面',
    quadrant: 'urgentImportant',
  },
];
