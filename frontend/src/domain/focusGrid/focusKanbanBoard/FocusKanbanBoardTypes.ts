import type { TaskStatus } from '@shared/task/TaskTypes';

export type StatusColumnDef = {
  id: string;
  title: string;
  status: TaskStatus;
};
