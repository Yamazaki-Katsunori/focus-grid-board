import type { BaseBadgeProps } from '@base/badge/baseBadgeTypes';
import { classNames } from '@lib/classNames';

export function BaseBadge({ variant = 'muted', children }: BaseBadgeProps) {
  return <span className={classNames(`badge badge--${variant}`)}>{children}</span>;
}
