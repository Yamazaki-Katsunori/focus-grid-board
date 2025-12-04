// src/domain/taskDetail/TaskDetailView.tsx
import { quadrantLabel, type TaskDetailViewProps } from '@domain/taskDetail/taskDetailTypes';
import { TaskMetaBadges } from '@shared/task/TaskMetaBadges';

export function TaskDetailView({ task }: TaskDetailViewProps) {
  return (
    <article className="space-y-4">
      {/* タイトル + タグ類 */}
      <header className="space-y-2">
        <h1 className="text-lg font-semibold">{task.title}</h1>
        <TaskMetaBadges
          category={task.category}
          tag={task.tag}
          filter={task.filter}
          status={task.status}
          priority={task.priority}
        />
        <div className="text-text-muted text-[11px]">
          <span>現在の像限: {quadrantLabel(task.quadrant)}</span>
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
