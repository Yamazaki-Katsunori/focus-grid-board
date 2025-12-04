import type { Meta, StoryObj } from '@storybook/react-vite';
import { LoginPage } from '@domain/auth/LoginPage';

const meta: Meta<typeof LoginPage> = {
  title: 'Domain/Auth/LoginPage',
  component: LoginPage,
};

export default meta;
type Story = StoryObj<typeof LoginPage>;

export const Default: Story = {};
