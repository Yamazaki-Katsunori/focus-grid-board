// src/App.tsx
import { BaseLayout } from '@base/layout/BaseLayout';
import { AppHeader } from '@base/header/AppHeader';
// 将来的に @base/sidebar/Sidebar などを import
import { ApiHealthCheck } from './components/ApiHealthCheck';
import { FocusMainTabs } from '@domain/focusGrid/MainTabs';

function App() {
  return (
    <BaseLayout
      header={<AppHeader />}
      // sidebar={<Sidebar />} // 後で作る
    >
      {/* ここに 12 カラムを使ったボード一覧やマトリクスを置いていく */}
      {/* とりあえずはプレースホルダ */}
      <FocusMainTabs />
      <div className="layout-main-grid">
        <section className="rounded-xl bg-white p-4 shadow-sm md:col-span-6">
          メインコンテンツA
        </section>
        <section className="rounded-xl bg-white p-4 shadow-sm md:col-span-6">
          メインコンテンツB
        </section>
      </div>

      {/* Laravel api checks */}
      <h1>Laravel + React DevContaienr Template</h1>
      <ApiHealthCheck />
    </BaseLayout>
  );
}

export default App;
