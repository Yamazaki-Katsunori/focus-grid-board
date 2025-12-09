// src/domain/focusGrid/taskMatrixBoard/TaskMatrixBoard.tsx
import { BaseMatrixBoard } from '@base/matrix/BaseMatrixBoard';
import type { TaskRow } from '@shared/task/forTaskDisplayTypes';
import type { FocusTaskMatrixBoardProps } from '@domain/focusGrid/focusTaskMatrixBoard/focusTaskMatrixBoardTypes';
import { QuadrantTaskTable } from '@domain/focusGrid/focusTaskMatrixBoard/QuadrantTaskTable';
import { buildQuadrantsForMatrixBoard } from '@domain/focusGrid/focusTaskMatrixBoard/taskMatrixBoardPresentation';

export function FocusTaskMatrixBoard({ tasks }: FocusTaskMatrixBoardProps) {
  const quadrants = buildQuadrantsForMatrixBoard(tasks);

  return (
    <BaseMatrixBoard<TaskRow>
      quadrants={quadrants}
      // ★ 各象限を table で描画する
      renderItems={(taskRows) => <QuadrantTaskTable taskRows={taskRows} />}
    />
  );
}
