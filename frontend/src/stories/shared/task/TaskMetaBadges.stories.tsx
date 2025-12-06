import type { Meta, StoryObj } from '@storybook/react-vite';

import { TaskMetaBadges } from '@shared/task/TaskMetaBadges';
import type { TaskPriority, TaskStatus } from '@shared/task/TaskTypes';

const meta: Meta<typeof TaskMetaBadges> = {
  title: 'Shared/Task/TaskMetaBadges',
  component: TaskMetaBadges,
};

export default meta;
type Story = StoryObj<typeof TaskMetaBadges>;

const DEFAULT_STATUS: TaskStatus = 'doing';
const DEFAULT_PRIORITY: TaskPriority = 'medium';

export const Default: Story = {
  args: {
    category: '仕様',
    tag: 'フォーム改善',
    filter: '今週中',
    status: DEFAULT_STATUS,
    priority: DEFAULT_PRIORITY,
  },
};

export const InboxLowPriority: Story = {
  args: {
    category: 'Inbox',
    tag: '未整理',
    filter: '未設定',
    status: 'inbox',
    priority: 'low',
  },
};

export const DoneHighPriority: Story = {
  args: {
    category: '仕事',
    tag: 'リリース',
    filter: '完了',
    status: 'done',
    priority: 'high',
  },
};
