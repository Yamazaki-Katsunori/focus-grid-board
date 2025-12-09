// src/base/header/AppHeader.tsx
export function AppHeader() {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        {/* ← 左：ナビ + ハンバーガー */}
        <div className="app-header__left">
          <nav className="app-header__nav">
            <span className="app-header__nav-item">ボード</span>
            <span className="app-header__nav-item">タスク</span>
            <span className="app-header__nav-item">設定</span>
          </nav>

          <button type="button" className="app-header__hamburger" aria-label="メニューを開く">
            <span className="sr-only">メニュー</span>
            <svg viewBox="0 0 24 24" width={18} height={18} aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* → 右：ロゴ + タイトル */}
        <div className="app-header__brand">
          <div className="app-header__logo" />
          <div>
            <div className="app-header__title">FocusGrid Board</div>
            <div className="app-header__subtitle">フォーカスすべきタスクを見える化するボード</div>
          </div>
        </div>
      </div>
    </header>
  );
}
