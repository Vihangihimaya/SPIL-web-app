import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from '../components/DataTable';
import { updateOrder } from '../redux/slices/ordersSlice';

export function HomePage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const orders = useSelector((state: any) => state.orders.orders);

  const columns = [
    { key: 'col1', label: 'Col 1' },
    { key: 'col2', label: 'Col 2' },
    { key: 'col3', label: 'Col 3' },
    { key: 'col4', label: 'Col 4' },
    { key: 'col5', label: 'Col 5' },
    { key: 'col6', label: 'Col 6' },
    { key: 'col7', label: 'Col 7' },
  ];

  const handleCellChange = (rowId: number, columnKey: string, value: string) => {
    dispatch(updateOrder({ id: rowId, data: { [columnKey]: value } }));
  };

  const handleAddNew = () => {
    navigate('/sales-order');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="border-2 border-black bg-white">
        {/* Header */}
        <div className="border-b-2 border-black p-2 bg-gray-200 flex items-center justify-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
            <div className="w-3 h-3 rounded-full bg-black"></div>
          </div>
          <div className="flex-1 text-center">Home</div>
        </div>

        {/* Add New Button */}
        <div className="border-b-2 border-black p-2 bg-gray-100">
          <button
            onClick={handleAddNew}
            className="border-2 border-black px-4 py-1 bg-white hover:bg-gray-50"
          >
            Add New
          </button>
        </div>

        {/* Table */}
        <div className="p-4">
          <DataTable 
            columns={columns} 
            data={orders} 
            onCellChange={handleCellChange}
          />
        </div>
      </div>
    </div>
  );
}
