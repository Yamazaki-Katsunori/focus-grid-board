// src/stories/domain/auth/LoginForm.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginForm } from '@domain/auth/LoginForm';

const meta: Meta<typeof LoginForm> = {
  title: 'Domain/Auth/LoginForm',
  component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Default: Story = {
  render: () => (
    <div className="mx-auto max-w-md">
      <LoginForm />
    </div>
  ),
};
