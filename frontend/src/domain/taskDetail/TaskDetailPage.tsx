// src/domain/taskDetail/TaskDetailPage.tsx
import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { TaskDetailView } from '@domain/taskDetail/TaskDetailView';
import type { TaskDetail } from '@domain/taskDetail/taskDetailTypes';

// 一旦モックデータ（あとで API から取得）
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
  quadrant: 'notUrgentNotImportant',
  createdAt: '2025-12-01 10:00',
  updatedAt: '2025-12-03 18:30',
};

export function TaskDetailPage() {
  return (
    <BaseLayout header={<AppHeader />} sidebar={null}>
      <div className="flex min-h-[60vh] items-start justify-center">
        <div className="border-border-subtle bg-bg-surface w-full max-w-2xl rounded-xl border p-6 shadow-sm">
          <TaskDetailView task={MOCK_TASK} />
        </div>
      </div>
    </BaseLayout>
  );
}
