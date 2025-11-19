import React from 'react';

interface Column {
  key: string;
  label: string;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  onCellChange?: (rowId: number, columnKey: string, value: string) => void;
}

export function DataTable({ columns, data, onCellChange }: DataTableProps) {
  return (
    <div className="border-2 border-black">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th key={col.key} className="border border-black p-2 text-left">
                <div className="flex items-center gap-1">
                  <span>▼</span>
                  <span>{col.label}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {columns.map((col) => (
                <td key={col.key} className="border border-black p-2">
                  {onCellChange ? (
                    <input
                      type="text"
                      value={row[col.key] || ''}
                      onChange={(e) => onCellChange(row.id, col.key, e.target.value)}
                      className="w-full bg-transparent outline-none"
                    />
                  ) : (
                    row[col.key] || ''
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
