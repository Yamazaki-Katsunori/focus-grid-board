import type { BaseBadgeProps, StatusDotProps } from '@base/badge/baseBadgeTypes';

export function BaseBadge({ variant = 'muted', children }: BaseBadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}

export function StatusDot({ color = 'gray' }: StatusDotProps) {
  return <span className={`status-dot status-dot--${color}`} />;
}
