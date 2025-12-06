import type { Meta, StoryObj } from '@storybook/react-vite';

import { StatusDot } from '@base/dot/StatusDot';

const meta: Meta<typeof StatusDot> = {
  title: 'Base/StatusDot',
  component: StatusDot,
};

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Green: Story = {
  args: {
    color: 'green',
  },
};

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
};

export const Red: Story = {
  args: {
    color: 'red',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
  },
};
