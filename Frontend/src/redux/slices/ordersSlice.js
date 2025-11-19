import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [
    { id: 1, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 2, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 3, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 4, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 5, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 6, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
    { id: 7, col1: '', col2: '', col3: '', col4: '', col5: '', col6: '', col7: '' },
  ],
};

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    addOrder: (state, action) => {
      state.orders.unshift({
        id: Date.now(),
        ...action.payload,
      });
    },
    updateOrder: (state, action) => {
      const { id, data } = action.payload;
      const order = state.orders.find(order => order.id === id);
      if (order) {
        Object.assign(order, data);
      }
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(order => order.id !== action.payload);
    },
  },
});

export const { addOrder, updateOrder, deleteOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
