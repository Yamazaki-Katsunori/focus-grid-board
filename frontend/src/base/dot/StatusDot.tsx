import type { StatusDotProps } from '@base/dot/statusDotTypes';
import { classNames } from '@lib/classNames';

export function StatusDot({ color = 'gray' }: StatusDotProps) {
  return <span className={classNames(`status-dot status-dot--${color}`)} />;
}
