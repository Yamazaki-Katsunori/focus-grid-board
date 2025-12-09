import type { Meta, StoryObj } from '@storybook/react-vite';

import { BaseLayout } from '@base/layout/BaseLayout';
import { Button } from '@base/button/Button';

const meta: Meta<typeof BaseLayout> = {
  title: 'Base/Layout/BaseLayout',
  component: BaseLayout,
};

export default meta;
type Story = StoryObj<typeof BaseLayout>;

// Story 用の簡易コンポーネントたち
function DemoHeader() {
  return (
    <header className="app-header">
      <div className="app-header__left">
        <span className="app-header__logo">FG</span>
        <span className="app-header__title">FocusGrid Board</span>
      </div>
      <div className="app-header__right">
        <Button variant="ghost">ログアウト</Button>
      </div>
    </header>
  );
}

function DemoSidebar() {
  return (
    <aside className="p-4 text-sm">
      <div className="mb-4 font-semibold">メニュー</div>
      <ul className="color:var(--color-text-muted) space-y-2">
        <li>・ダッシュボード</li>
        <li>・タスク</li>
        <li>・設定</li>
      </ul>
    </aside>
  );
}

function DemoContent() {
  return (
    <div className="space-y-3">
      <h2 className="text-lg font-semibold">レイアウトサンプル</h2>
      <p className="color:var(--color-text-muted) text-sm">
        ここに FocusGrid Board のメインコンテンツが入ります。Tabs や Kanban、Table
        などをこの中に配置していきます。
      </p>
      <div className="border-color:var(--color-border-subtle) bg-color:var(--color-bg-surface) text-color:var(--color-text-muted) h-40 rounded-xl border p-4 text-sm">
        コンテンツの例
      </div>
    </div>
  );
}

export const Default: Story = {
  render: () => (
    <BaseLayout header={<DemoHeader />} sidebar={<DemoSidebar />}>
      <DemoContent />
    </BaseLayout>
  ),
};
