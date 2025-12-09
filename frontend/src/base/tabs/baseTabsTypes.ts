import type { ReactNode } from 'react';

export type BaseTabId = string;

export type BaseTabItem = {
  id: BaseTabId;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
  badge?: ReactNode;
};

export type BaseTabsProps = {
  items: BaseTabItem[];
  value: BaseTabId;
  onChange: (id: BaseTabId) => void;
  'aria-label'?: string;
};
