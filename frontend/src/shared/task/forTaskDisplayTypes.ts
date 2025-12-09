// src/shared/task/forTaskDisplay.ts
import type { Task } from '@shared/task/TaskTypes';

export type TaskRow = Pick<
  Task,
  'id' | 'title' | 'priority' | 'status' | 'due' | 'category' | 'tag' | 'filter' | 'quadrant'
>;
