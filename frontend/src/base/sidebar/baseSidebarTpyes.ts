// src/base/sidebar/baseSidebarTypes.ts
import type { ReactNode } from 'react';

export type BaseSidebarItemType = {
  id: string;
  label: string;
  icon?: ReactNode;
  badge?: string;
  disabled?: boolean;
};

export type BaseSidebarHeaderProps = {
  headerSlot?: ReactNode;
  isOpen: boolean;
  onToggle?: () => void;
};

export type BaseSidebarItemProps = {
  item: BaseSidebarItemType;
  isActive: boolean;
  isOpen: boolean;
  onClick?: (id: string) => void;
};

export type BaseSidebarProps = {
  items: BaseSidebarItemType[];
  /** 選択中の項目ID */
  activeId?: string;
  /** クリック時に呼ばれるコールバック */
  onItemClick?: (id: string) => void;

  /** true: 展開 / false: 折りたたみ */
  isOpen: boolean;
  /** 開閉トグル（ボタンを出したい場合に使う） */
  onToggle?: () => void;

  /** サイドバー上部に表示する任意のヘッダー（ロゴなど） */
  headerSlot?: ReactNode;

  className?: string;
};
