import type { ReactNode } from 'react';

export type BaseBadgeProps = {
  variant?: 'muted' | 'blue' | 'green' | 'red';
  children: ReactNode;
};

export type StatusDotProps = {
  color?: 'green' | 'yellow' | 'red' | 'gray';
};
