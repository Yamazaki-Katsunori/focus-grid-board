// src/base/sidebar/BaseSidebarHeader.tsx
import type { BaseSidebarHeaderProps } from '@base/sidebar/baseSidebarTpyes';
import { Menu } from 'lucide-react';

export function BaseSidebarHeader({ headerSlot, isOpen, onToggle }: BaseSidebarHeaderProps) {
  return (
    <div className="flex h-14 items-center justify-between px-3">
      <div className="flex items-center gap-2 overflow-hidden">
        {headerSlot && (
          <div className="text-text-muted truncate text-sm font-semibold">{headerSlot}</div>
        )}
      </div>

      {onToggle && (
        <button
          type="button"
          onClick={onToggle}
          className="text-text-muted hover:bg-bg-subtle flex h-8 w-8 items-center justify-center rounded-md"
          aria-label={isOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
        >
          <Menu className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
