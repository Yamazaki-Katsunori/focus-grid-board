// src/stories/base/input/BaseInput.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BaseInput } from '@base/input/BaseInput';

const meta: Meta<typeof BaseInput> = {
  title: 'Base/Input/BaseInput',
  component: BaseInput,
  args: {
    type: 'text',
    placeholder: 'ユーザー名',
  },
};

export default meta;
type Story = StoryObj<typeof BaseInput>;

export const Default: Story = {};
