import type { Meta, StoryObj } from '@storybook/react-vite';

import { TaskDetailPage } from '@domain/taskDetail/TaskDetailPage';

const meta: Meta<typeof TaskDetailPage> = {
  title: 'Domain/TaskDetail/TaskDetailPage',
  component: TaskDetailPage,
};

export default meta;
type Story = StoryObj<typeof TaskDetailPage>;

export const Default: Story = {};
