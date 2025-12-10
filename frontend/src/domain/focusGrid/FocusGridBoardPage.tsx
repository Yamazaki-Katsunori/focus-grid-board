import { AppHeader } from '@base/header/AppHeader';
import { BaseLayout } from '@base/layout/BaseLayout';
import { FocusMainTabs } from './focusMainTab/FocusMainTabs';
import { ApiHealthCheck } from '../../components/ApiHealthCheck';

export function FocusGridBoardPage() {
  return (
    <BaseLayout
      header={<AppHeader />}
      // sidebar={<Sidebar />} // 後で作る
    >
      {/* ここに 12 カラムを使ったボード一覧やマトリクスを置いていく */}
      {/* とりあえずはプレースホルダ */}
      <FocusMainTabs />
      <div className="layout-main-grid">
        {/* Laravel api checks */}
        <h1>Laravel + React DevContaienr Template</h1>
        <ApiHealthCheck />
      </div>
    </BaseLayout>
  );
}
