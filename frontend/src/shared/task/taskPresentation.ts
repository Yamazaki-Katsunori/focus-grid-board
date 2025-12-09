import type { KanbanCardData } from '@base/kanban/baseKanbanBoardTypes';
import type { Task, TaskPriority, TaskQuadrant, TaskStatus } from '@shared/task/TaskTypes';
import type { TaskRow } from '@shared/task/forTaskDisplayTypes';

export function statusLabel(status: TaskStatus): string {
  switch (status) {
    case 'inbox':
      return 'Inbox';
    case 'todo':
      return '未着手';
    case 'doing':
      return '進行中';
    case 'waiting':
      return '保留';
    case 'done':
      return '完了';
  }
}

export function statusToColor(status: TaskStatus): 'green' | 'yellow' | 'red' | 'gray' {
  switch (status) {
    case 'inbox':
    case 'todo':
      return 'gray';
    case 'doing':
    case 'waiting':
      return 'yellow';
    case 'done':
      return 'green';
    default:
      return 'gray';
  }
}

export function priorityLabel(priority: TaskPriority): string {
  switch (priority) {
    case 'low':
      return '低';
    case 'medium':
      return '中';
    case 'high':
      return '高';
  }
}

export function priorityToColor(priority: TaskPriority): 'green' | 'yellow' | 'red' {
  switch (priority) {
    case 'low':
      return 'green';
    case 'medium':
      return 'yellow';
    case 'high':
      return 'red';
  }
}

export function quadrantLabel(q: TaskQuadrant): string {
  switch (q) {
    case 'urgentImportant':
      return '第1象限（緊急かつ重要）';
    case 'urgentNotImportant':
      return '第2象限（緊急だが重要でない）';
    case 'notUrgentImportant':
      return '第3象限（緊急ではないが重要）';
    case 'notUrgentNotImportant':
      return '第4象限（緊急でも重要でもない）';
  }
}

export function toTaskRow(task: Task): TaskRow {
  return {
    id: task.id,
    title: task.title,
    priority: task.priority,
    status: task.status,
    due: task.due,
    category: task.category,
    tag: task.tag,
    filter: task.filter,
    quadrant: task.quadrant,
  };
}

export function toTaskKanbanCard(task: Task): KanbanCardData {
  return {
    id: task.id,
    title: task.title,
    status: task.status,
    priority: task.priority,
    category: task.category,
    tag: task.tag,
    quadrant: task.quadrant,
    // Kanban 上のサブ情報としては「期限」を表示する想定
    meta: task.due,
  };
}
