// src/domain/taskDetail/taskDetailTypes.ts
import type { TaskStatus, TaskPriority } from '@shared/task/TaskTypes';

// 4象限用はあとで 2. で足す
export type TaskQuadrant =
  | 'urgentImportant'
  | 'urgentNotImportant'
  | 'notUrgentImportant'
  | 'notUrgentNotImportant';

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
