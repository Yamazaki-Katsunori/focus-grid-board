// src/stories/domain/focusGrid/TaskTable.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FocusTaskTable } from '@domain/focusGrid/focusTaskTable/FocusTaskTable';

const meta: Meta<typeof FocusTaskTable> = {
  title: 'Domain/FocusGrid/TaskTable',
  component: FocusTaskTable,
};

export default meta;
type Story = StoryObj<typeof FocusTaskTable>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl">
      <FocusTaskTable />
    </div>
  ),
};
