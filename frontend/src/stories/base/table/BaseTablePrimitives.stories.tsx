// src/stories/base/table/BaseTablePrimitives.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import {
  BaseTable,
  BaseTableHead,
  BaseTableBody,
  BaseTableRow,
  BaseTableCell,
} from '@base/table/BaseTablePrimitives';

type DemoRow = {
  id: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  status: 'todo' | 'doing' | 'done';
};

const ROWS: DemoRow[] = [
  { id: '1', title: 'ガイド登録フォームの項目見直し', priority: 'high', status: 'doing' },
  { id: '2', title: 'FocusGrid マトリクスUI プロト作成', priority: 'medium', status: 'todo' },
  { id: '3', title: '観光ガイド申請メール文言の調整', priority: 'low', status: 'done' },
];

function BaseTableDemo() {
  return (
    <div className="data-table-wrapper">
      <div className="data-table__header">
        <h2 className="data-table__caption">BaseTable プリミティブのデモ</h2>
      </div>

      <BaseTable className="data-table--compact">
        <BaseTableHead>
          <BaseTableRow>
            <BaseTableCell isHead style={{ width: '50%' }}>
              タスク
            </BaseTableCell>
            <BaseTableCell isHead style={{ width: '25%' }}>
              優先度
            </BaseTableCell>
            <BaseTableCell isHead style={{ width: '25%' }}>
              ステータス
            </BaseTableCell>
          </BaseTableRow>
        </BaseTableHead>

        <BaseTableBody>
          {ROWS.map((row) => (
            <BaseTableRow key={row.id}>
              <BaseTableCell>{row.title}</BaseTableCell>
              <BaseTableCell>{row.priority}</BaseTableCell>
              <BaseTableCell>{row.status}</BaseTableCell>
            </BaseTableRow>
          ))}
        </BaseTableBody>
      </BaseTable>
    </div>
  );
}

const meta: Meta<typeof BaseTableDemo> = {
  title: 'Base/Table/BaseTablePrimitives',
  component: BaseTableDemo,
};

export default meta;
type Story = StoryObj<typeof BaseTableDemo>;

export const Default: Story = {};
