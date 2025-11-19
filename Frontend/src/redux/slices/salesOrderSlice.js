import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerName: '',
  address1: '',
  address2: '',
  address3: '',
  suburb: '',
  state: '',
  postCode: '',
  invoiceNo: '',
  invoiceDate: '',
  referenceNo: '',
  note: '',
  items: [],
  totalExcl: 0,
  totalTax: 0,
  totalIncl: 0,
};

export const salesOrderSlice = createSlice({
  name: 'salesOrder',
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state[field] = value;
    },
    addItem: (state) => {
      state.items.push({
        id: Date.now(),
        itemCode: '',
        description: '',
        note: '',
        quantity: 0,
        price: 0,
        tax: 0,
        exclAmount: 0,
        taxAmount: 0,
        inclAmount: 0,
      });
    },
    updateItem: (state, action) => {
      const { id, field, value } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item[field] = value;
        // Recalculate amounts
        if (['quantity', 'price', 'tax'].includes(field)) {
          const qty = parseFloat(item.quantity) || 0;
          const price = parseFloat(item.price) || 0;
          const taxRate = parseFloat(item.tax) || 0;
          
          item.exclAmount = qty * price;
          item.taxAmount = item.exclAmount * (taxRate / 100);
          item.inclAmount = item.exclAmount + item.taxAmount;
        }
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    calculateTotals: (state) => {
      state.totalExcl = state.items.reduce((sum, item) => sum + item.exclAmount, 0);
      state.totalTax = state.items.reduce((sum, item) => sum + item.taxAmount, 0);
      state.totalIncl = state.items.reduce((sum, item) => sum + item.inclAmount, 0);
    },
    resetForm: () => initialState,
  },
});

export const { updateField, addItem, updateItem, removeItem, calculateTotals, resetForm } = salesOrderSlice.actions;
export default salesOrderSlice.reducer;
