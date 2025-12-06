import type { BaseKanbanCardProps } from '@base/card/baseKanbanCardTypes';

export function BaseKanbanCard({ title, meta, tag, footer }: BaseKanbanCardProps) {
  return (
    <article className="kanban-card">
      <div className="kanban-card__header">
        <h3 className="kanban-card__title">{title}</h3>
        {meta && <p className="kanban-card__meta">{meta}</p>}
      </div>

      {tag && (
        <div className="kanban-card__tag">
          <span>{tag}</span>
        </div>
      )}

      {footer && <div className="kanban-card__footer">{footer}</div>}
    </article>
  );
}
