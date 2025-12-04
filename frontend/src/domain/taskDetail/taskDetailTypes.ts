// src/domain/taskDetail/taskDetailTypes.ts
export type TaskStatus = 'todo' | 'doing' | 'done';
export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskDetail = {
  id: string;
  title: string;
  mainText: string;
  category: string;
  tag: string;
  filter: string;
  status: TaskStatus;
  priority: TaskPriority;
  createdAt: string;
  updatedAt: string;
};
