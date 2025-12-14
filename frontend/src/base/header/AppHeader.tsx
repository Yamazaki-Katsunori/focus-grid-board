import type { AppHeaderProps } from '@base/header/appHeaderTypes';
import { Menu } from 'lucide-react';

// src/base/header/AppHeader.tsx
export function AppHeader({ onToggleSidebar }: AppHeaderProps) {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        {/* 左：ハンバーガーだけ */}
        <div className="app-header__left">
          <button
            type="button"
            className="app-header__hamburger"
            aria-label="メニューを開く"
            onClick={onToggleSidebar}
          >
            <span className="sr-only">メニュー</span>
            <Menu
              viewBox="0 0 24 24"
              width={18}
              height={18}
              aria-hidden="true"
              d="M4 7h16M4 12h16M4 17h16"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </button>
        </div>

        {/* 中央：ロゴ + タイトル + サブタイトル */}
        <div className="app-header__center">
          <div className="app-header__logo" />
          <div className="app-header__text">
            <div className="app-header__title">FocusGrid Board</div>
            <div className="app-header__subtitle">フォーカスすべきタスクを見える化するボード</div>
          </div>
        </div>

        {/* 右：今は空（将来ユーザーメニューとか） */}
        <div className="app-header__right" />
      </div>
    </header>
  );
}
