import type { TaskRow } from '@shared/task/forTaskDisplayTypes';

export const QUADRANT_ORDER: TaskRow['quadrant'][] = [
  'urgentImportant',
  'urgentNotImportant',
  'notUrgentImportant',
  'notUrgentNotImportant',
];
