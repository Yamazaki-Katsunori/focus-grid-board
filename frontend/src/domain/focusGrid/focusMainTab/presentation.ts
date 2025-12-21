import type { FocusMainTabId } from '@app-types/tabs/FocusMainTabId';

// パス名 → タブID
export function getTabIdFromPath(pathname: string): FocusMainTabId {
  if (pathname.startsWith('/focus-grid-board/board')) return 'board';
  if (pathname.startsWith('/focus-grid-board/table')) return 'table';
  if (pathname.startsWith('/focus-grid-board/timeline')) return 'timeline';
  if (pathname.startsWith('/focus-grid-board/calendar')) return 'calendar';
  // /app や /app/matrix は matrix タブ扱い
  return 'matrix';
}
