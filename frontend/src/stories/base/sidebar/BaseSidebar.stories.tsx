import { BaseSidebar } from '@base/sidebar/BaseSidebar';
import type { BaseSidebarItemType } from '@base/sidebar/baseSidebarTpyes';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FilePlus2, LayoutDashboard, Settings } from 'lucide-react';

// 仮でーた
const items: BaseSidebarItemType[] = [
  {
    id: 'board',
    label: 'ボード',
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    id: 'new-task',
    label: '新規タスク作成',
    icon: <FilePlus2 className="h-4 w-4" />,
  },
  {
    id: 'settings',
    label: '設定',
    icon: <Settings className="h-4 w-4" />,
  },
];

const meta: Meta<typeof BaseSidebar> = {
  title: 'Base/Layout/BaseSidebar',
  component: BaseSidebar,
  args: {
    items,
    activeId: 'board',
    isOpen: true,
    headerSlot: <span className="font-semibold">FocusGrid</span>,
  },
};

export default meta;
type Story = StoryObj<typeof BaseSidebar>;

export const Open: Story = {
  args: {
    onItemClick: (id) => console.log(`[BaseSidebar] clicked item: ${id}`),
  },
};

export const Collapsed: Story = {
  args: {
    isOpen: false,
    onItemClick: (id) => console.log(`[BaseSidebar: Collapsed] clicked item: ${id}`),
  },
};
