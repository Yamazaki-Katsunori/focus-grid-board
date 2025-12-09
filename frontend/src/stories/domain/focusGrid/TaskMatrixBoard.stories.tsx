// src/stories/domain/focusGrid/FocusTaskMatrixBoard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { FocusTaskMatrixBoard } from '@domain/focusGrid/focusTaskMatrixBoard/FocusTaskMatrixBoard';

import { ROWS } from '@domain/focusGrid/demoTaskData';

const meta: Meta<typeof FocusTaskMatrixBoard> = {
  title: 'Domain/FocusGrid/FocusTaskMatrixBoard',
  component: FocusTaskMatrixBoard,
};

export default meta;
type Story = StoryObj<typeof FocusTaskMatrixBoard>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-5xl">
      <FocusTaskMatrixBoard tasks={ROWS} />
    </div>
  ),
};
