import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { FocusMainTabs } from './focusMainTab/FocusMainTabs';
import { ApiHealthCheck } from '../../components/ApiHealthCheck';
import { Outlet } from 'react-router';

export function FocusGridBoardPage() {
  return (
    <BaseLayout
      header={<AppHeader />}
      // sidebar={<Sidebar />} // 後で作る
    >
      {/* ここに 12 カラムを使ったボード一覧やマトリクスを置いていく */}
      {/* とりあえずはプレースホルダ */}
      <FocusMainTabs />
      {/* 仮でサーチ */}
      <div className="mt-2">
        <search>test search</search>
      </div>
      <div className="mt-4">
        <Outlet />
      </div>

      <div className="layout-main-grid mt-4">
        {/* Laravel api checks */}
        <section className="mt-8">
          <h1>Laravel + React DevContaienr Template</h1>
          <ApiHealthCheck />
        </section>
      </div>
    </BaseLayout>
  );
}
