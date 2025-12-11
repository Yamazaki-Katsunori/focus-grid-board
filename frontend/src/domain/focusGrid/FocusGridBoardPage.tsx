import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { FocusMainTabs } from './focusMainTab/FocusMainTabs';
import { ApiHealthCheck } from '../../components/ApiHealthCheck';
import { Outlet } from 'react-router';
import { AppSidebar } from '@domain/layout/AppSidebar';
import { useState } from 'react';

export function FocusGridBoardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <BaseLayout
      header={<AppHeader onToggleSidebar={handleToggleSidebar} />}
      sidebar={<AppSidebar isOpen={isSidebarOpen} />}
    >
      <FocusMainTabs />

      {/* 仮でサーチ */}
      <div className="mt-2">
        <search>test search</search>
      </div>

      <div className="mt-4">
        <Outlet />
      </div>

      {/* Laravel api checks */}
      <div className="layout-main-grid mt-4">
        <section className="mt-8">
          <h1>Laravel + React DevContaienr Template</h1>
          <ApiHealthCheck />
        </section>
      </div>
    </BaseLayout>
  );
}
