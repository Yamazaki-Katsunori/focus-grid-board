// src/case/loading/FullscreenLoading.tsx
import { BaseSpinner } from '@base/animation/spinner/BaseSpinner';

export function FullScreenLoading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/5">
      <div className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 shadow-md">
        <BaseSpinner />
        <span className="text-text-muted text-sm">読み込み中です…</span>
      </div>
    </div>
  );
}
