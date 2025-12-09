import type { BaseBadgeProps } from '@base/badge/baseBadgeTypes';

export function BaseBadge({ variant = 'muted', children }: BaseBadgeProps) {
  return <span className={`badge badge--${variant}`}>{children}</span>;
}
