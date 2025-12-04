import type { Meta, StoryObj } from '@storybook/react-vite';

import { BaseTable } from '@base/table/BaseTable';
import type { BaseTableColumn, BaseTableRow } from '@base/table/tableTypes';

const meta: Meta<typeof BaseTable> = {
  title: 'Base/Table',
  component: BaseTable,
};

export default meta;
type Story = StoryObj<typeof BaseTable>;

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

export const Default: Story = {
  args: {
    columns: COLUMNS,
    rows: ROWS,
    caption: 'Story UI',
  },
};
