// src/app/layout/RootLayout.tsx
import { Outlet, useNavigation } from 'react-router';
import { FullScreenLoading } from '@case/loding/FullScreenLoding';

export function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === 'loading' || navigation.state === 'submitting';

  return (
    <div className="relative min-h-screen">
      {/* ここに header / footer を置きたければ置ける */}

      {/* 子ルートの描画 */}
      <Outlet />

      {/* 画面共通のローディングオーバーレイ */}
      {isLoading && <FullScreenLoading />}
    </div>
  );
}
