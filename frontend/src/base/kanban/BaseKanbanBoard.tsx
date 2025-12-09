// src/base/kanban/BaseKanbanBoard.tsx
import type { BaseKanbanBoardProps } from '@base/kanban/baseKanbanBoardTypes';
import { BaseKanbanCard } from '@base/card/BaseKanbanCard';

export function BaseKanbanBoard({ columns, onCardClick, renderCard }: BaseKanbanBoardProps) {
  return (
    <div className="kanban-board">
      <div className="kanban-board__columns">
        {columns.map((column) => (
          <section key={column.id} className="kanban-column">
            <header className="kanban-column__header">
              <h3 className="kanban-column__title">{column.title}</h3>
              {column.badge && <span className="kanban-column__badge">{column.badge}</span>}
            </header>

            <div className="kanban-column__body">
              {column.cards.map((card) => (
                // ★ wrapper は article/div などにして、クリックをここで拾う
                <article
                  key={card.id}
                  className="kanban-column__item"
                  onClick={onCardClick ? () => onCardClick(card, column) : undefined}
                >
                  {renderCard ? (
                    // ★ カスタム描画（Domain から差し込む）
                    renderCard(card, column)
                  ) : (
                    // ★ デフォルトは BaseKanbanCard
                    <BaseKanbanCard title={card.title} meta={card.meta} quadrant={card.quadrant} />
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
