import { BaseBadge } from '@base/badge/BaseBadge';
import { StatusDot } from '@base/dot/StatusDot';
import type { TaskMetaBadgesProps } from '@shared/task/TaskTypes';
import { statusToColor, priorityToColor } from '@shared/task/taskPresentation';

export function TaskMetaBadges({ category, tag, filter, status, priority }: TaskMetaBadgesProps) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs">
      <span className="text-text-muted inline-flex items-center">
        <StatusDot color={statusToColor(status)} />
        <span>ステータス: {status}</span>
      </span>
      <span className="text-text-muted inline-flex items-center gap-1">
        <StatusDot color={priorityToColor(priority)} />
        <span>優先度: {priority}</span>
      </span>

      <div className="flex flex-wrap items-center gap-2 text-xs">
        <BaseBadge variant="blue">カテゴリ: {category}</BaseBadge>
        <BaseBadge variant="green">タグ: {tag}</BaseBadge>
        <BaseBadge variant="muted">フィルター: {filter}</BaseBadge>
      </div>
    </div>
  );
}
