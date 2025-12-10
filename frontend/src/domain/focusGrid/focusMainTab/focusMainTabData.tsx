import type { FocusMainTabId } from '@app-types/tabs/FocusMainTabId';
import type { BaseTabItem } from '@base/tabs/baseTabsTypes';
import { LayoutGrid, LayoutDashboard, Table, Timer, Calendar } from 'lucide-react';

export const MAIN_TABS: BaseTabItem[] = [
  {
    id: 'matrix',
    label: '4象限マトリクス',
    icon: <LayoutGrid className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'board',
    label: 'カンバンボード',
    icon: <LayoutDashboard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'table',
    label: 'テーブル一覧',
    icon: <Table className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'timeline',
    label: 'タイムライン',
    icon: <Timer className="h-4 w-4" aria-hidden="true" />,
    disabled: true,
    badge: '準備中',
  },
  {
    id: 'calendar',
    label: 'カレンダー',
    icon: <Calendar className="h-4 w-4" aria-hidden="true" />,
    disabled: true,
    badge: '準備中',
  },
];

// タブID -> パス
export const TAB_ROUTE_MAP: Record<FocusMainTabId, string> = {
  matrix: '/focus-grid-board/matrix',
  board: '/focus-grid-board/board',
  table: '/focus-grid-board/table',
  timeline: '/focus-grid-board/timeline', // ルート未定義
  calendar: '/focus-grid-board/calender', // ルート未定義
};
