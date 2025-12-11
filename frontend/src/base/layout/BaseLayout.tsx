// src/base/layout/BaseLayout.tsx
import type { BaseLayoutProps } from '@base/layout/baseLayoutTypes';

export function BaseLayout({ header, sidebar, children }: BaseLayoutProps) {
  return (
    <>
      <div className="layout-app">
        {header}

        <div className="flex flex-1">
          {/* 左サイドバー（デスクトップ用） */}
          {sidebar && <aside className="hidden md:block">{sidebar}</aside>}

          <div className="layout-main">
            <main className="layout-main-content-only">{children}</main>
          </div>
        </div>
      </div>
    </>
  );
}
