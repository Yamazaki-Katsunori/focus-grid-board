// src/base/table/BaseTable.tsx
import type { BaseTableProps } from '@base/table/tableTypes';

export function BaseTable({ columns, rows, caption }: BaseTableProps) {
  return (
    <div className="data-table-wrapper">
      <table className="data-table">
        {caption && <caption className="data-table__caption">{caption}</caption>}
        <thead className="data-table__head">
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className="data-table__head-cell"
                style={{ textAlign: col.align ?? 'left', width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="data-table__body-row">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className="data-table__body-cell"
                  style={{ textAlign: col.align ?? 'left' }}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
