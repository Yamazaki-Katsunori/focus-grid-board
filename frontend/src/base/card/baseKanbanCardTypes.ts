import type { ReactNode } from 'react';

export type BaseKanbanCardProps = {
  title: string;
  meta?: string;
  tag?: string;
  footer?: ReactNode;
};
