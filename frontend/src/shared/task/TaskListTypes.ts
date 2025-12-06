// src/shared/task/TaskListTypes.ts
import type { TaskPriority, TaskQuadrant, TaskStatus } from '@shared/task/TaskTypes';

export type TaskRow = {
  id: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  due: string;
  category: string;
  tag?: string;
  filter?: string;
  quadrant: TaskQuadrant; // 4象限用に使うなら
};
