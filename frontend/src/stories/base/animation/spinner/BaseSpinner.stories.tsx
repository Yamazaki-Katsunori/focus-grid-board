import type { Meta, StoryObj } from '@storybook/react-vite';

import { BaseSpinner } from '@base/animation/spinner/BaseSpinner';

const meta: Meta<typeof BaseSpinner> = {
  title: 'Base/Animation/Spinner/BaseSpinner',
  component: BaseSpinner,
};

export default meta;
type Story = StoryObj<typeof BaseSpinner>;

export const Default: Story = {
  args: {
    size: 'lg',
  },
};
