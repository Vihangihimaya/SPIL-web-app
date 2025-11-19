import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FormInput } from '../components/FormInput';
import { FormSelect } from '../components/FormSelect';
import { FormTextarea } from '../components/FormTextarea';
import { OrderItemsTable } from '../components/OrderItemsTable';
import { updateField, addItem, calculateTotals, resetForm } from '../redux/slices/salesOrderSlice';
import { addOrder } from '../redux/slices/ordersSlice';

export function SalesOrderPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const salesOrder = useSelector((state: any) => state.salesOrder);

  const customerOptions = ['Customer A', 'Customer B', 'Customer C'];

  const handleFieldChange = (field: string, value: string) => {
    dispatch(updateField({ field, value }));
  };

  const handleAddItem = () => {
    dispatch(addItem());
  };

  const handleSaveOrder = () => {
    dispatch(calculateTotals());
    
    // Save order to orders list
    const orderData = {
      col1: salesOrder.customerName,
      col2: salesOrder.invoiceNo,
      col3: salesOrder.invoiceDate,
      col4: salesOrder.referenceNo,
      col5: salesOrder.totalIncl.toFixed(2),
      col6: '',
      col7: '',
    };
    
    dispatch(addOrder(orderData));
    dispatch(resetForm());
    navigate('/');
  };

  useEffect(() => {
    dispatch(calculateTotals());
  }, [salesOrder.items, dispatch]);

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
          <div className="flex-1 text-center">Sales Order</div>
        </div>

        {/* Save Order Button */}
        <div className="border-b-2 border-black p-2 bg-gray-100">
          <button
            onClick={handleSaveOrder}
            className="border-2 border-black px-4 py-1 bg-white hover:bg-gray-50 flex items-center gap-2"
          >
            <span className="text-xl">✓</span>
            <span>Save Order</span>
          </button>
        </div>

        {/* Form Content */}
        <div className="p-4 space-y-4">
          {/* Customer Info and Invoice Info */}
          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-2">
              <FormSelect
                label="Customer Name"
                value={salesOrder.customerName}
                onChange={(value) => handleFieldChange('customerName', value)}
                options={customerOptions}
              />
              <FormInput
                label="Address 1"
                value={salesOrder.address1}
                onChange={(value) => handleFieldChange('address1', value)}
              />
              <FormInput
                label="Address 2"
                value={salesOrder.address2}
                onChange={(value) => handleFieldChange('address2', value)}
              />
              <FormInput
                label="Address 3"
                value={salesOrder.address3}
                onChange={(value) => handleFieldChange('address3', value)}
              />
              <FormInput
                label="Suburb"
                value={salesOrder.suburb}
                onChange={(value) => handleFieldChange('suburb', value)}
              />
              <FormInput
                label="State"
                value={salesOrder.state}
                onChange={(value) => handleFieldChange('state', value)}
              />
              <FormInput
                label="Post Code"
                value={salesOrder.postCode}
                onChange={(value) => handleFieldChange('postCode', value)}
              />
            </div>

            {/* Right Column */}
            <div className="space-y-2">
              <FormInput
                label="Invoice No."
                value={salesOrder.invoiceNo}
                onChange={(value) => handleFieldChange('invoiceNo', value)}
              />
              <FormInput
                label="Invoice Date"
                value={salesOrder.invoiceDate}
                onChange={(value) => handleFieldChange('invoiceDate', value)}
                type="date"
              />
              <FormInput
                label="Reference no"
                value={salesOrder.referenceNo}
                onChange={(value) => handleFieldChange('referenceNo', value)}
              />
              <FormTextarea
                label="Note"
                value={salesOrder.note}
                onChange={(value) => handleFieldChange('note', value)}
                rows={6}
              />
            </div>
          </div>

          {/* Add Item Button */}
          <div>
            <button
              onClick={handleAddItem}
              className="border border-black px-4 py-1 bg-white hover:bg-gray-50"
            >
              Add Item
            </button>
          </div>

          {/* Items Table */}
          <OrderItemsTable items={salesOrder.items} />

          {/* Totals */}
          <div className="flex justify-end">
            <div className="w-1/2 space-y-2">
              <div className="flex items-center gap-2">
                <label className="flex-1 text-right">Total Excl</label>
                <input
                  type="text"
                  value={salesOrder.totalExcl.toFixed(2)}
                  readOnly
                  className="w-48 border border-black px-2 py-1 bg-gray-100"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="flex-1 text-right">Total Tax</label>
                <input
                  type="text"
                  value={salesOrder.totalTax.toFixed(2)}
                  readOnly
                  className="w-48 border border-black px-2 py-1 bg-gray-100"
                />
              </div>
              <div className="flex items-center gap-2">
                <label className="flex-1 text-right">Total Incl</label>
                <input
                  type="text"
                  value={salesOrder.totalIncl.toFixed(2)}
                  readOnly
                  className="w-48 border border-black px-2 py-1 bg-gray-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
