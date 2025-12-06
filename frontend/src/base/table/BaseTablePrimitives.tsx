// src/base/table/BaseTable.tsx
import type {
  BaseTableBodyProps,
  BaseTableCellProps,
  BaseTableHeadProps,
  BaseTableProps,
  BaseTableRowProps,
} from '@base/table/baseTablePrimitiveTypes';

export function BaseTable(props: BaseTableProps) {
  const { className, ...rest } = props;
  return <table className={['data-table', className].filter(Boolean).join(' ')} {...rest} />;
}

export function BaseTableHead(props: BaseTableHeadProps) {
  const { className, ...rest } = props;
  return <thead className={['data-table__head', className].filter(Boolean).join(' ')} {...rest} />;
}

export function BaseTableBody(props: BaseTableBodyProps) {
  const { className, ...rest } = props;
  return <tbody className={['data-table__body', className].filter(Boolean).join(' ')} {...rest} />;
}

export function BaseTableRow(props: BaseTableRowProps) {
  const { className, ...rest } = props;
  return <tr className={['data-table__row', className].filter(Boolean).join(' ')} {...rest} />;
}

export function BaseTableCell(props: BaseTableCellProps) {
  const { className, isHead, ...rest } = props;
  const Tag = isHead ? 'th' : 'td';
  const baseClass = isHead ? 'data-table__cell--head' : 'data-table__cell';

  return <Tag className={[baseClass, className].filter(Boolean).join(' ')} {...rest} />;
}
