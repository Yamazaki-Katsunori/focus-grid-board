import type { Meta, StoryObj } from '@storybook/react-vite';

import { TaskDetailView } from '@domain/taskDetail/TaskDetailView';
import type { TaskDetail } from '@domain/taskDetail/taskDetailTypes';

const meta: Meta<typeof TaskDetailView> = {
  title: 'Domain/TaskDetail/TaskDetailView',
  component: TaskDetailView,
};

const MOCK_TASK: TaskDetail = {
  id: 'task-1',
  title: 'ガイド登録フォームの項目見直し',
  mainText:
    'ガイド登録フォームの必須項目・任意項目を整理する。\n\n- 既存の入力項目を洗い出す\n- 不要な項目を削除\n- ユーザーにとって分かりやすいラベルに変更\n\n完了後は、テストユーザーで実際に入力してもらいフィードバックを集める。',
  category: '仕様',
  tag: 'フォーム改善',
  filter: '今週中',
  status: 'doing',
  priority: 'high',
  createdAt: '2025-12-01 10:00',
  updatedAt: '2025-12-03 18:30',
};

export default meta;
type Story = StoryObj<typeof TaskDetailView>;

export const Default: Story = {
  args: {
    task: MOCK_TASK,
  },
};
