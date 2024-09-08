import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { PizzaOrder } from '@/utils/api';

export interface OrdersSlice {
  value: PizzaOrder[];
}

const initialState: OrdersSlice = {
  value: []
};

const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<PizzaOrder[]>) => {
      state.value = action.payload;
    }
  }
});

export const { setOrders } = ordersSlice.actions;
export const ordersReducer = ordersSlice.reducer;
