// src/stories/base/tabs/BaseTabs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';
import { BaseTabs } from '@base/tabs/BaseTabs';
import type { BaseTabItem } from '@base/tabs/baseTabsTypes';

const meta: Meta<typeof BaseTabs> = {
  title: 'Base/Tabs/BaseTabs',
  component: BaseTabs,
  args: {},
};
export default meta;

type Story = StoryObj<typeof BaseTabs>;

const ITEMS: BaseTabItem[] = [
  { id: 'matrix', label: '4象限マトリクス' },
  { id: 'board', label: 'カンバンボード' },
  { id: 'table', label: 'テーブル一覧' },
];

function BaseTabsPlayground(props: React.ComponentProps<typeof BaseTabs>) {
  const [value, setValue] = useState<string>('matrix');

  return (
    <div className="rounded-xl bg-white p-4">
      <BaseTabs {...props} items={ITEMS} value={value} onChange={setValue} />
      <div className="mt-4 text-sm text-slate-600">
        現在のタブ: <code>{value}</code>
      </div>
    </div>
  );
}

export const Default: Story = {
  render: (args) => <BaseTabsPlayground {...args} />,
};
