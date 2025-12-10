// src/app/layout/RootLayout.tsx
import { Outlet, useNavigation } from 'react-router';
import { BaseSpinner } from '@base/animation/spinner/BaseSpinner';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <div className="relative min-h-screen">
      {/* ここに header / footer を置きたければ置ける */}

      {/* 子ルートの描画 */}
      <Outlet />

      {/* 画面共通のローディングオーバーレイ */}
      {isLoading && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-black/10">
          {/* 余計な白い箱はなくして、Spinner だけ */}
          <BaseSpinner size="lg" />
        </div>
      )}
    </div>
  );
}
