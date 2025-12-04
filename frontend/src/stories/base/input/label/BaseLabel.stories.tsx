// src/stories/base/input/BaseLabel.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BaseLabel } from '@base/input/label/BaseLabel';

const meta: Meta<typeof BaseLabel> = {
  title: 'Base/Input/Label',
  component: BaseLabel,
  args: {
    children: 'ユーザー名',
    htmlFor: 'username',
  },
};

export default meta;
type Story = StoryObj<typeof BaseLabel>;

export const Default: Story = {};
