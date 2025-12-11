// src/base/sidebar/BaseSidebar.tsx
import type { BaseSidebarProps } from '@base/sidebar/baseSidebarTpyes';
import { BaseSidebarHeader } from '@base/sidebar/sidebarHeaderSlot/BaseSidebarHeaderSlot';
import { BaseSidebarItem } from '@base/sidebar/sidebarItem/BaseSidebarItem';
import { classNames } from '@lib/classNames';

export function BaseSidebar({
  items,
  activeId,
  onItemClick,
  isOpen,
  onToggle,
  headerSlot,
  className,
}: BaseSidebarProps) {
  const widthClass = isOpen ? 'w-56' : 'w-16';

  return (
    <aside
      className={classNames(
        'border-border-subtle bg-bg-surface flex h-full flex-col border-r transition-[width] duration-200 ease-out',
        widthClass,
        className,
      )}
    >
      {/* 上部ヘッダー（ロゴ + トグルボタンなど） */}
      <BaseSidebarHeader headerSlot={headerSlot} isOpen={isOpen} onToggle={onToggle} />

      {/* ナビゲーション項目 */}
      <nav className="mt-2 flex-1 space-y-1 px-2 pb-3">
        {items.map((item) => (
          <BaseSidebarItem
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            isOpen={isOpen}
            onClick={onItemClick}
          />
        ))}
      </nav>
    </aside>
  );
}
