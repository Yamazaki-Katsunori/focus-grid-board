import type { ReactNode } from 'react';

export type BaseKanbanCardProps = {
  title: string;
  meta?: string;
  quadrant?: string;
  footer?: ReactNode;
};
