import type { ReactNode } from 'react';

export type KanbanColumnId = string;

export type KanbanCardData = {
  id: string;
  title: string;
  meta?: string;
  tag?: string;
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
