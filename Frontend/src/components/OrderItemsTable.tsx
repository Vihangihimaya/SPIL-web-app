import React from 'react';
import { useDispatch } from 'react-redux';
import { updateItem } from '../redux/slices/salesOrderSlice';

interface OrderItem {
  id: number;
  itemCode: string;
  description: string;
  note: string;
  quantity: number;
  price: number;
  tax: number;
  exclAmount: number;
  taxAmount: number;
  inclAmount: number;
}

interface OrderItemsTableProps {
  items: OrderItem[];
}

export function OrderItemsTable({ items }: OrderItemsTableProps) {
  const dispatch = useDispatch();

  const handleChange = (id: number, field: string, value: string) => {
    dispatch(updateItem({ id, field, value }));
  };

  const columns = [
    { key: 'itemCode', label: 'Item Code' },
    { key: 'description', label: 'Description' },
    { key: 'note', label: 'Note' },
    { key: 'quantity', label: 'Quantity' },
    { key: 'price', label: 'Price' },
    { key: 'tax', label: 'Tax' },
    { key: 'exclAmount', label: 'Excl Amount' },
    { key: 'taxAmount', label: 'Tax Amount' },
    { key: 'inclAmount', label: 'Incl Amount' },
  ];

  return (
    <div className="border border-black">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th key={col.key} className="border border-black p-1 text-left text-sm">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan={9} className="border border-black p-2 bg-gray-100 h-20"></td>
            </tr>
          ) : (
            items.map((item) => (
              <tr key={item.id}>
                <td className="border border-black p-1">
                  <input
                    type="text"
                    value={item.itemCode}
                    onChange={(e) => handleChange(item.id, 'itemCode', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1">
                  <input
                    type="text"
                    value={item.description}
                    onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1">
                  <input
                    type="text"
                    value={item.note}
                    onChange={(e) => handleChange(item.id, 'note', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1">
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleChange(item.id, 'quantity', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1">
                  <input
                    type="number"
                    value={item.price}
                    onChange={(e) => handleChange(item.id, 'price', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1">
                  <input
                    type="number"
                    value={item.tax}
                    onChange={(e) => handleChange(item.id, 'tax', e.target.value)}
                    className="w-full bg-transparent outline-none px-1"
                  />
                </td>
                <td className="border border-black p-1 bg-gray-100">
                  <div className="px-1">{item.exclAmount.toFixed(2)}</div>
                </td>
                <td className="border border-black p-1 bg-gray-100">
                  <div className="px-1">{item.taxAmount.toFixed(2)}</div>
                </td>
                <td className="border border-black p-1 bg-gray-100">
                  <div className="px-1">{item.inclAmount.toFixed(2)}</div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
