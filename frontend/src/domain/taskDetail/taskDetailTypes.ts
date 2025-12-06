// src/domain/taskDetail/taskDetailTypes.ts
import type { TaskStatus, TaskPriority, TaskQuadrant } from '@shared/task/TaskTypes';

export type TaskDetail = {
  id: string;
  title: string;
  mainText: string;
  category: string;
  tag: string;
  filter: string;
  status: TaskStatus;
  priority: TaskPriority;
  quadrant: TaskQuadrant;
  createdAt: string;
  updatedAt: string;
};

export type TaskDetailViewProps = {
  task: TaskDetail;
};
