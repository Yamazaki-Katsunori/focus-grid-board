// src/domain/focusGrid/demoTaskData.ts
import type { BaseTableColumn } from '@base/table/baseTablePrimitiveTypes';
import type { Task } from '@shared/task/TaskTypes';
import type { TaskRow } from '@shared/task/forTaskDisplayTypes';
import { toTaskRow } from '@shared/task/taskPresentation';

export const COLUMNS: BaseTableColumn[] = [
  { key: 'title', header: 'タスク', width: '40%' },
  { key: 'priority', header: '優先度', width: '12%' },
  { key: 'status', header: 'ステータス', width: '14%' },
  { key: 'due', header: '期限', width: '12%' },
  { key: 'category', header: 'カテゴリ', width: '14%' },
];

// ★ 正の Task 型で仮データを定義
export const DEMO_TASKS: Task[] = [
  {
    id: '1',
    title: 'ガイド登録フォームの項目見直し',
    mainText: 'フォーム項目の必須・任意を整理し、ガイド登録の離脱を減らす。',
    status: 'doing',
    priority: 'high',
    quadrant: 'notUrgentImportant',

    scheduledStartDate: '2025-01-10',
    estimatedCompletionDate: '2025-01-12',
    due: '今週中',
    estimatedMinutes: 120,
    completedAt: undefined,

    category: '仕様',
    tag: '設計',
    filter: 'thisWeek',

    createdAt: '2025-01-08T10:00:00Z',
    updatedAt: '2025-01-09T09:30:00Z',
    orderIndex: 1,
    isArchived: false,
  },
  {
    id: '2',
    title: 'FocusGrid マトリクスUI プロト作成',
    mainText: '4象限マトリクスの初期プロトタイプを Storybook 上で確認できる状態にする。',
    status: 'todo',
    priority: 'medium',
    quadrant: 'notUrgentNotImportant',

    scheduledStartDate: '2025-01-13',
    estimatedCompletionDate: '2025-01-20',
    due: '来週',
    estimatedMinutes: 240,
    completedAt: undefined,

    category: 'UI/UX',
    tag: '実装',
    filter: 'next',

    createdAt: '2025-01-09T11:00:00Z',
    updatedAt: '2025-01-09T11:00:00Z',
    orderIndex: 2,
    isArchived: false,
  },
  {
    id: '3',
    title: '観光ガイド申請メール文言の調整',
    mainText: '申請結果メールのテンプレート文言を読みやすく・誤解のない表現に修正する。',
    status: 'waiting',
    priority: 'low',
    quadrant: 'urgentImportant',

    scheduledStartDate: '2025-01-11',
    estimatedCompletionDate: '2025-01-11',
    due: '未定',
    estimatedMinutes: 60,
    completedAt: undefined,

    category: '文面',
    tag: 'コピー',
    filter: 'inbox',

    createdAt: '2025-01-08T08:30:00Z',
    updatedAt: '2025-01-08T08:30:00Z',
    orderIndex: 3,
    isArchived: false,
  },
];

// ★ テーブル用の ROWS は Task から生成
export const ROWS: TaskRow[] = DEMO_TASKS.map(toTaskRow);
