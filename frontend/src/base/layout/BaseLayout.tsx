// src/base/layout/BaseLayout.tsx
import type { BaseLayoutProps } from '@base/layout/baseLayoutTypes';

export function BaseLayout({ header, sidebar, children }: BaseLayoutProps) {
  return (
    <div className="layout-app">
      {header}
      <div className="layout-main">
        {sidebar ? (
          <div className="layout-main-grid layout-main-grid--with-sidebar">
            <aside className="layout-main-sidebar">{sidebar}</aside>
            <main className="layout-main-content">{children}</main>
          </div>
        ) : (
          <main className="layout-main-content-only">{children}</main>
        )}
      </div>
    </div>
  );
}
