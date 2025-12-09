import type { TaskRow } from '@shared/task/forTaskDisplayTypes';
import { QUADRANT_ORDER } from '@domain/focusGrid/focusTaskMatrixBoard/quadrantOrderData';
import { quadrantLabel } from '@shared/task/taskPresentation';

// ★ TaskRow[] から BaseMatrixBoard 用の quadrants を組み立てる関数
export function buildQuadrantsForMatrixBoard(tasks: TaskRow[]) {
  return QUADRANT_ORDER.map((q) => {
    const qTasks = tasks.filter((t) => t.quadrant === q);

    return {
      id: q,
      title: quadrantLabel(q),
      headerExtra: <span className="text-text-muted text-xs">{qTasks.length}件</span>,
      items: qTasks,
    };
  });
}
