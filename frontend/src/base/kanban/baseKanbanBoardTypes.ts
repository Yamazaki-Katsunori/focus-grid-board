import type { Task } from '@shared/task/TaskTypes';
import type { ReactNode } from 'react';

export type KanbanColumnId = string;

export type KanbanCardData = Pick<
  Task,
  'id' | 'title' | 'status' | 'priority' | 'category' | 'tag' | 'quadrant'
> & {
  meta?: string; // 期限や短い補足を入れる用
};

export type KanbanColumnData = {
  id: KanbanColumnId;
  title: string;
  badge?: ReactNode;
  cards: KanbanCardData[];
};

export type BaseKanbanBoardProps = {
  columns: KanbanColumnData[];
  onCardClick?: (card: KanbanCardData, column: KanbanColumnData) => void;
  renderCard?: (card: KanbanCardData, column: KanbanColumnData) => ReactNode;
};
