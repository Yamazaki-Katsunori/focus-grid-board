// src/domain/taskDetail/TaskDetailView.tsx
import type { TaskDetail } from '@domain/taskDetail/taskDetailTypes';

type TaskDetailViewProps = {
  task: TaskDetail;
};

export function TaskDetailView({ task }: TaskDetailViewProps) {
  return (
    <article className="space-y-4">
      {/* タイトル + タグ類 */}
      <header className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <h1 className="text-lg font-semibold">{task.title}</h1>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-xs text-slate-700">
            {task.category}
          </span>
        </div>

        <div className="text-text-muted flex flex-wrap items-center gap-2 text-xs">
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5">
            タグ: {task.tag}
          </span>
          <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5">
            フィルター: {task.filter}
          </span>
          <span>ステータス: {task.status}</span>
          <span>優先度: {task.priority}</span>
        </div>

        <div className="text-text-muted text-[11px]">
          <span>作成: {task.createdAt}</span>
          <span className="mx-2">／</span>
          <span>更新: {task.updatedAt}</span>
        </div>
      </header>

      {/* 本文（Markdown 予定だが、今は素のテキスト） */}
      <section className="border-border-subtle bg-bg-surface rounded-xl border p-4">
        <div className="text-text-main text-sm leading-relaxed whitespace-pre-wrap">
          {task.mainText}
        </div>
      </section>
    </article>
  );
}
