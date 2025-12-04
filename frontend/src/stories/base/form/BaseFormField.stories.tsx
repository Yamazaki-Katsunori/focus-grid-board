// src/stories/base/form/BaseFormField.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';
import { BaseFormField } from '@base/form/formField/BaseFormField';
import { BaseInput } from '@base/input/BaseInput';

const meta: Meta<typeof BaseFormField> = {
  title: 'Base/Form/BaseFormField',
  component: BaseFormField,
  args: {
    label: 'メールアドレス',
    htmlFor: 'email',
    required: true,
    helpText: 'ログインに使用するメールアドレスを入力してください。',
  },
};

export default meta;
type Story = StoryObj<typeof BaseFormField>;

export const Default: Story = {
  render: (args) => (
    <BaseFormField {...args}>
      <BaseInput id="email" type="email" placeholder="example@example.com" />
    </BaseFormField>
  ),
};

export const WithError: Story = {
  args: {
    error: 'メールアドレスを入力してください。',
    helpText: undefined,
  },
  render: (args) => (
    <BaseFormField {...args}>
      <BaseInput id="email" type="email" placeholder="example@example.com" />
    </BaseFormField>
  ),
};
