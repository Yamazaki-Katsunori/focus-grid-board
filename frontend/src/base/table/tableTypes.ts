import type { ReactNode } from 'react';

export type BaseTableColumnKey = string;

export type BaseTableColumn = {
  key: BaseTableColumnKey;
  header: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
};

export type BaseTableRow = Record<BaseTableColumnKey, ReactNode>;

export type BaseTableProps = {
  columns: BaseTableColumn[];
  rows: BaseTableRow[];
  caption?: string;
};
