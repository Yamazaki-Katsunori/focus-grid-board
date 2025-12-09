import type { KanbanCardData, KanbanColumnData } from '@base/kanban/baseKanbanBoardTypes';
import type { Task } from '@shared/task/TaskTypes';
import { KANBAN_STATUS_COLUMNS } from '@domain/focusGrid/focusKanbanBoard/kanbanBoardPresentationData';
import { toTaskKanbanCard } from '@shared/task/taskPresentation';

// Task[] から KanbanColumnData[] を生成する関数
export function buildKanbanColumnsFromTasks(tasks: Task[]): KanbanColumnData[] {
  return KANBAN_STATUS_COLUMNS.map((col) => {
    const columnTasks = tasks.filter((t) => t.status === col.status);
    const cards: KanbanCardData[] = columnTasks.map(toTaskKanbanCard);

    return {
      id: col.id,
      title: col.title,
      badge: columnTasks.length > 0 ? String(columnTasks.length) : undefined,
      cards,
    };
  });
}
