export type TaskStatus = 'inbox' | 'todo' | 'doing' | 'waiting' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskMetaBadgesProps = {
  category: string;
  tag: string;
  filter: string;
  status: TaskStatus;
  priority: TaskPriority;
};

export type TaskQuadrant =
  | 'urgentImportant'
  | 'urgentNotImportant'
  | 'notUrgentImportant'
  | 'notUrgentNotImportant';
