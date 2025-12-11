// src/base/sidebar/BaseSidebarItem.tsx
import type { BaseSidebarItemProps } from '@base/sidebar/baseSidebarTpyes';
import { useSidebarItemClick } from '@base/sidebar/hooks/useSidebarItemClick';
import { classNames } from '@lib/classNames';

export function BaseSidebarItem({ item, isActive, isOpen, onClick }: BaseSidebarItemProps) {
  const handleClick = useSidebarItemClick(item, onClick);

  return (
    <button
      key={item.id}
      type="button"
      onClick={handleClick}
      className={classNames(
        'group flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors',
        item.disabled && 'cursor-not-allowed opacity-40',
        !item.disabled && !isActive && 'text-text-muted hover:bg-bg-subtle hover:text-text-default',
        isActive && 'bg-bg-subtle text-text-default font-medium',
      )}
    >
      {item.icon && (
        <span
          className={classNames(
            'flex h-8 w-8 items-center justify-center rounded-md',
            isActive
              ? 'bg-bg-surface-elevated'
              : 'group-hover:bg-bg-surface-elevated bg-transparent',
          )}
        >
          {item.icon}
        </span>
      )}

      {isOpen && <span className="flex-1 truncate text-left">{item.label}</span>}

      {isOpen && item.badge && (
        <span className="bg-bg-surface-elevated text-text-muted inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-semibold">
          {item.badge}
        </span>
      )}
    </button>
  );
}
