import { BaseBadge, StatusDot } from '@base/badge/BaseBadge';
import type { TaskMetaBadgesProps, TaskPriority, TaskStatus } from '@shared/task/TaskTypes';

function statusToColor(status: TaskStatus): 'green' | 'yellow' | 'red' | 'gray' {
  switch (status) {
    case 'inbox':
    case 'todo':
      return 'gray';
    case 'doing':
    case 'waiting':
      return 'yellow';
    case 'done':
      return 'green';
    default:
      return 'gray';
  }
}

function priorityToColor(priority: TaskPriority): 'green' | 'yellow' | 'red' {
  switch (priority) {
    case 'low':
      return 'green';
    case 'medium':
      return 'yellow';
    case 'high':
      return 'red';
  }
}

export function TaskMetaBadges({ category, tag, filter, status, priority }: TaskMetaBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <BaseBadge variant="blue">カテゴリ: {category}</BaseBadge>
      <BaseBadge variant="green">タグ: {tag}</BaseBadge>
      <BaseBadge variant="muted">フィルター: {filter}</BaseBadge>

      <span className="text-text-muted inline-flex items-center gap-1">
        <StatusDot color={statusToColor(status)} />
        <span>優先度: {status}</span>
      </span>
      <span className="text-text-muted inline-flex items-center gap-1">
        <StatusDot color={priorityToColor(priority)} />
        <span>優先度: {priority}</span>
      </span>
    </div>
  );
}
