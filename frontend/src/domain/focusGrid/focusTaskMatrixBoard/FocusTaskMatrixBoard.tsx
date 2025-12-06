// src/domain/focusGrid/taskMatrixBoard/TaskMatrixBoard.tsx
import { BaseMatrixBoard } from '@base/matrix/BaseMatrixBoard';
import type { TaskRow } from '@shared/task/TaskListTypes';
import { quadrantLabel } from '@shared/task/taskPresentation';
import type { FocusTaskMatrixBoardProps } from './focusTaskMatrixBoardTypes';
import { QuadrantTaskTable } from './QuadrantTaskTable';

export function FocusTaskMatrixBoard({ tasks }: FocusTaskMatrixBoardProps) {
  const quadrantOrder: TaskRow['quadrant'][] = [
    'urgentImportant',
    'urgentNotImportant',
    'notUrgentImportant',
    'notUrgentNotImportant',
  ];

  const quadrants = quadrantOrder.map((q) => {
    const qTasks = tasks.filter((t) => t.quadrant === q);
    return {
      id: q,
      title: quadrantLabel(q),
      headerExtra: <span className="text-text-muted text-xs">{qTasks.length}件</span>,
      items: qTasks,
    };
  });

  console.debug(quadrants);
  return (
    <BaseMatrixBoard<TaskRow>
      quadrants={quadrants}
      // ★ 各象限を table で描画する
      renderItems={(items) => <QuadrantTaskTable items={items} />}
    />
  );
}
