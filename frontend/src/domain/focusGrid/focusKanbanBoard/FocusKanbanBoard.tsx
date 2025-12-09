// src/domain/focusGrid/focusKanbanBoard/FocusKanbanBoard.tsx
import { BaseKanbanCard } from '@base/card/BaseKanbanCard';
import { BaseKanbanBoard } from '@base/kanban/BaseKanbanBoard';

import { TaskMetaBadges } from '@shared/task/TaskMetaBadges';

import { DEMO_TASKS } from '../demoTaskData';
import { quadrantLabel } from '@shared/task/taskPresentation';
import { buildKanbanColumnsFromTasks } from './kanbanBoardPresentation';

// DEMO_TASKS から列を構築
const COLUMNS = buildKanbanColumnsFromTasks(DEMO_TASKS);

export function FocusKanbanBoard() {
  return (
    <BaseKanbanBoard
      columns={COLUMNS}
      renderCard={(card) => (
        <BaseKanbanCard
          title={card.title}
          meta={card.meta}
          quadrant={quadrantLabel(card.quadrant)}
          // footer にステータスや優先度を入れても良い
          footer={
            <TaskMetaBadges
              category={card.category}
              tag={card.tag ?? ''}
              filter={'今日やること'} // 仮で quadrant を filter枠に
              status={card.status}
              priority={card.priority}
            />
          }
        />
      )}
    />
  );
}
