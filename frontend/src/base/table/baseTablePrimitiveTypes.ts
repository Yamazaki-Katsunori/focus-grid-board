import type { HTMLAttributes, ReactNode, TableHTMLAttributes, TdHTMLAttributes } from 'react';

export type BaseTableProps = TableHTMLAttributes<HTMLTableElement>;

export type BaseTableHeadProps = HTMLAttributes<HTMLTableSectionElement>;

export type BaseTableBodyProps = HTMLAttributes<HTMLTableSectionElement>;

export type BaseTableRowProps = HTMLAttributes<HTMLTableRowElement>;

export type BaseTableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  isHead?: boolean;
};

export type BaseTableColumnKey = string;

export type BaseTableColumn = {
  key: BaseTableColumnKey;
  header: string;
  align?: 'left' | 'center' | 'right';
  width?: string;
};

export type BaseTableRowList = Record<BaseTableColumnKey, ReactNode>;
