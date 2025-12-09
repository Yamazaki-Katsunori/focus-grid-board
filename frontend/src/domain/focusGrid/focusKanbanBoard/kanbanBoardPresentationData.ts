import type { StatusColumnDef } from '@domain/focusGrid/focusKanbanBoard/FocusKanbanBoardTypes';

// --- カンバンボードのステータスカラム -----------
export const KANBAN_STATUS_COLUMNS: StatusColumnDef[] = [
  { id: 'inbox', title: '受信箱', status: 'inbox' },
  { id: 'todo', title: 'ToDo', status: 'todo' },
  { id: 'doing', title: '進行中', status: 'doing' },
  { id: 'waiting', title: '保留中', status: 'waiting' },
  { id: 'done', title: '完了', status: 'done' },
];
