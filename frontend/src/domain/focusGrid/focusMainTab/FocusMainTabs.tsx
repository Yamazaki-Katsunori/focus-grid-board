// src/domain/focusGrid/MainTabs.tsx
import { useState } from 'react';
import { BaseTabs } from '@base/tabs/BaseTabs';
import type { BaseTabItem } from '@base/tabs/baseTabsTypes';
import { FocusKanbanBoard } from '@domain/focusGrid/focusKanbanBoard/FocusKanbanBoard';
import { FocusTaskTable } from '@domain/focusGrid/focusTaskTable/FocusTaskTable';

import type { FocusMainTabId } from '@app-types/tabs/FocusMainTabId';
import { FocusTaskMatrixBoard } from '@domain/focusGrid/focusTaskMatrixBoard/FocusTaskMatrixBoard';
import { ROWS } from '@domain/focusGrid/demoTaskData';

// 後で他のところでも使いたくなりそうなので型は export

const MAIN_TABS: BaseTabItem[] = [
  {
    id: 'matrix',
    label: '4象限マトリクス',
    icon: <MatrixIcon />,
  },
  {
    id: 'board',
    label: 'カンバンボード',
    icon: <BoardIcon />,
  },
  {
    id: 'table',
    label: 'テーブル一覧',
    icon: <TableIcon />,
  },
  {
    id: 'timeline',
    label: 'タイムライン',
    icon: <TimelineIcon />,
    disabled: true,
    badge: '準備中',
  },
  {
    id: 'calendar',
    label: 'カレンダー',
    icon: <CalendarIcon />,
    disabled: true,
    badge: '準備中',
  },
];

function MatrixIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="3" width="8" height="8" rx="1.5" />
      <rect x="13" y="3" width="8" height="8" rx="1.5" />
      <rect x="3" y="13" width="8" height="8" rx="1.5" />
      <rect x="13" y="13" width="8" height="8" rx="1.5" />
    </svg>
  );
}

function BoardIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="4" width="4" height="16" rx="1.5" />
      <rect x="10" y="4" width="4" height="16" rx="1.5" />
      <rect x="17" y="4" width="4" height="16" rx="1.5" />
    </svg>
  );
}

function TableIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="4" rx="1" />
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <rect x="3" y="15" width="18" height="4" rx="1" />
    </svg>
  );
}

function TimelineIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <circle cx="6" cy="7" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="18" cy="17" r="2" />
      <path d="M6 7h6l6 5 0 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9h18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 3v4M16 3v4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function FocusMainTabs() {
  const [activeTab, setActiveTab] = useState<FocusMainTabId>('matrix');

  return (
    <div>
      <BaseTabs
        items={MAIN_TABS}
        value={activeTab}
        onChange={(id) => setActiveTab(id as FocusMainTabId)}
        aria-label="メインコンテンツの切り替え"
      />

      <div className="mt-4">
        {activeTab === 'matrix' && <FocusTaskMatrixBoard tasks={ROWS} />}
        {activeTab === 'board' && <FocusKanbanBoard />}
        {activeTab === 'table' && <FocusTaskTable />}
        {activeTab === 'timeline' && <div>タイムラインのコンテンツ（将来）</div>}
        {activeTab === 'calendar' && <div>カレンダーのコンテンツ（将来）</div>}
      </div>
    </div>
  );
}
