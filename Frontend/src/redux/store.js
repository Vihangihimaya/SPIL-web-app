import { configureStore } from '@reduxjs/toolkit';
import salesOrderReducer from './slices/salesOrderSlice';
import ordersReducer from './slices/ordersSlice';

export const store = configureStore({
  reducer: {
    salesOrder: salesOrderReducer,
    orders: ordersReducer,
  },
});
