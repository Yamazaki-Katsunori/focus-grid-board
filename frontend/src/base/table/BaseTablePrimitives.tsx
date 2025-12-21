// src/base/table/BaseTable.tsx
import type {
  BaseTableBodyProps,
  BaseTableCellProps,
  BaseTableHeadProps,
  BaseTableProps,
  BaseTableRowProps,
} from '@base/table/baseTablePrimitiveTypes';

import { classNames } from '@lib/classNames';

export function BaseTable(props: BaseTableProps) {
  const { className, ...rest } = props;
  return <table className={classNames('data-table', className)} {...rest} />;
}

export function BaseTableHead(props: BaseTableHeadProps) {
  const { className, ...rest } = props;
  return <thead className={classNames('data-table__head', className)} {...rest} />;
}

export function BaseTableBody(props: BaseTableBodyProps) {
  const { className, ...rest } = props;
  return <tbody className={classNames('data-table__body', className)} {...rest} />;
}

export function BaseTableRow(props: BaseTableRowProps) {
  const { className, ...rest } = props;
  return <tr className={classNames('data-table__row', className)} {...rest} />;
}

export function BaseTableCell(props: BaseTableCellProps) {
  const { className, isHead, ...rest } = props;
  const Tag = isHead ? 'th' : 'td';
  const baseClass = isHead ? 'data-table__cell--head' : 'data-table__cell';

  return <Tag className={classNames(baseClass, className)} {...rest} />;
}
