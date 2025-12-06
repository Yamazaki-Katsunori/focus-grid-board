import type { Meta, StoryObj } from '@storybook/react-vite';
import { FullScreenLoading } from '@case/loding/FullScreenLoding';

const meta: Meta<typeof FullScreenLoading> = {
  title: 'Case/Loding/FullScreenLoading',
  component: FullScreenLoading,
};

export default meta;
type Story = StoryObj<typeof FullScreenLoading>;

export const Default: Story = {};
