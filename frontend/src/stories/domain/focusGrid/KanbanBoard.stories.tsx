// src/stories/domain/focusGrid/KanbanBoard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FocusKanbanBoard } from '@domain/focusGrid/focusKanbanBoard/FocusKanbanBoard';

const meta: Meta<typeof FocusKanbanBoard> = {
  title: 'Domain/FocusGrid/KanbanBoard',
  component: FocusKanbanBoard,
};

export default meta;
type Story = StoryObj<typeof FocusKanbanBoard>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl">
      <FocusKanbanBoard />
    </div>
  ),
};
