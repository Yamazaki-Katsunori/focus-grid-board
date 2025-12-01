// src/stories/domain/focusGrid/MainTabs.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-vite';

import { FocusMainTabs } from '@domain/focusGrid/MainTabs';

const meta: Meta<typeof FocusMainTabs> = {
  title: 'Domain/FocusGrid/MainTabs',
  component: FocusMainTabs,
};

export default meta;

type Story = StoryObj<typeof FocusMainTabs>;

export const Default: Story = {};
