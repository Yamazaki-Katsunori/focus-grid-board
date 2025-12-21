// src/base/sidebar/hooks/useSidebarItemClick.ts
import { useCallback } from 'react';
import type { BaseSidebarItemType } from '@base/sidebar/baseSidebarTpyes';

export function useSidebarItemClick(item: BaseSidebarItemType, onClick?: (id: string) => void) {
  return useCallback(() => {
    if (item.disabled) return;
    onClick?.(item.id);
  }, [item, onClick]);
}
