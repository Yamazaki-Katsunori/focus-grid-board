// src/stories/domain/auth/CreateTaskForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { CreateTaskForm } from '@domain/createTask/CreateTaskForm';

const meta: Meta<typeof CreateTaskForm> = {
  title: 'Domain/CreateTask/CreateTaskForm',
  component: CreateTaskForm,
};

export default meta;
type Story = StoryObj<typeof CreateTaskForm>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md">
      <CreateTaskForm />
    </div>
  ),
};
