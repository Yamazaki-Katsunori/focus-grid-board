// src/base/kanban/BaseKanbanBoard.tsx
import type { BaseKanbanBoardProps } from '@base/kanban/baseKanbanBoardTypes';

export function BaseKanbanBoard({ columns, onCardClick }: BaseKanbanBoardProps) {
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
                <article
                  key={card.id}
                  className="kanban-card"
                  onClick={() => onCardClick?.(card, column)}
                >
                  <div className="kanban-card__title">{card.title}</div>
                  {(card.meta || card.tag) && (
                    <div className="kanban-card__meta">
                      {card.meta && <span>{card.meta}</span>}
                      {card.tag && <span className="kanban-card__tag">{card.tag}</span>}
                    </div>
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
