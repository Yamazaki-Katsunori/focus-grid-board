import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateTaskPage } from '@domain/createTask/CreateTaskPage';

const meta: Meta<typeof CreateTaskPage> = {
  title: 'Domain/CreateTask/CreateTaskPage',
  component: CreateTaskPage,
};

export default meta;
type Story = StoryObj<typeof CreateTaskPage>;

export const Default: Story = {};
