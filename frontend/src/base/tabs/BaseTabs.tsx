// src/base/tabs/BaseTabs.tsx
import type { BaseTabsProps } from '@base/tabs/baseTabsTypes';

export function BaseTabs({ items, value, onChange, 'aria-label': ariaLabel }: BaseTabsProps) {
  return (
    <div className="tabs">
      <nav className="tabs__list" role="tablist" aria-label={ariaLabel}>
        {items.map((item) => {
          const isActive = item.id === value;
          const isDisabled = item.disabled;

          const classes = [
            'tabs__trigger',
            isActive && 'tabs__trigger--active',
            isDisabled && 'tabs__trigger--disabled',
          ]
            .filter(Boolean)
            .join(' ');

          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              className={classes}
              aria-selected={isActive}
              aria-disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) onChange(item.id);
              }}
            >
              {item.icon && (
                <span className="tabs__icon" aria-hidden="true">
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
              {item.badge && <span className="tabs__badge">{item.badge}</span>}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
