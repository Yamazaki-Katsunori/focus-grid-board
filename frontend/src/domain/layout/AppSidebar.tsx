// src/domain/layout/AppSidebar.tsx
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { BaseSidebar } from '@base/sidebar/BaseSidebar';
import type { BaseSidebarItemType } from '@base/sidebar/baseSidebarTpyes';
import { LayoutDashboard, FilePlus2, Settings, Home } from 'lucide-react';
import type { AppSidebarProps } from '@domain/layout/appSidebarTypes';

// スライダーアイテム
const SIDEBAR_ITEMS: BaseSidebarItemType[] = [
  {
    id: 'home',
    label: 'ホーム',
    icon: <Home className="h-5 w-5" aria-label="true" />,
  },
  {
    id: 'board',
    label: 'ボード',
    icon: <LayoutDashboard className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'new-task',
    label: '新規タスク作成',
    icon: <FilePlus2 className="h-4 w-4" aria-hidden="true" />,
  },
  {
    id: 'settings',
    label: '設定',
    icon: <Settings className="h-4 w-4" aria-hidden="true" />,
    // まだ画面がないなら disabled: true でもOK
    // disabled: true,
  },
];

// URL から activeId を決める 処理
function getActiveSidebarId(pathname: string): string {
  // ルートパスはあなたの環境に合わせて変更してください
  // ここでは /focus-grid-board/... を前提にしています

  // 一旦ホームをボード扱いに
  if (pathname.startsWith('/focus-grid-board/home')) {
    return 'board';
  }

  if (pathname.startsWith('/focus-grid-board/create-task')) {
    return 'create-task';
  }

  if (pathname.startsWith('/focus-grid-board')) {
    return 'board';
  }

  if (pathname.startsWith('/settings')) {
    return 'settings';
  }

  // よく分からないパスはとりあえず board 扱い
  return 'board';
}

export function AppSidebar({ isOpen }: AppSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const activeId = useMemo(() => getActiveSidebarId(location.pathname), [location.pathname]);

  // 開いているときはロゴテキスト / 閉じているときはホームアイコン
  const headerSlot = null;

  // hook
  const handleItemClick = (id: string) => {
    switch (id) {
      case 'board':
        navigate('/focus-grid-board/matrix');
        break;
      case 'new-task':
        // ★ ここは後で "2. タスク新規作成画面へのルーティング" で正式なパスに差し替える
        navigate('/focus-grid-board/tasks/new');
        break;
      case 'settings':
        // 設定画面を作ったらそちらへ
        navigate('/settings');
        break;
      default:
        break;
    }
  };

  return (
    <BaseSidebar
      items={SIDEBAR_ITEMS}
      activeId={activeId}
      isOpen={isOpen}
      onItemClick={handleItemClick}
      headerSlot={headerSlot}
    />
  );
}
