import type { Meta, StoryObj } from '@storybook/react-vite';
import { BaseBadge } from '@base/badge/BaseBadge';

const meta: Meta<typeof BaseBadge> = {
  title: 'Base/BaseBadge',
  component: BaseBadge,
  args: {
    children: 'ステータス',
  },
};

export default meta;
type Story = StoryObj<typeof BaseBadge>;

export const Muted: Story = {
  args: {
    variant: 'muted',
  },
};

export const Blue: Story = {
  args: {
    variant: 'blue',
  },
};

export const Green: Story = {
  args: {
    variant: 'green',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
  },
};
