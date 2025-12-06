import type { StatusDotProps } from '@base/dot/statusDotTypes';

export function StatusDot({ color = 'gray' }: StatusDotProps) {
  return <span className={`status-dot status-dot--${color}`} />;
}
