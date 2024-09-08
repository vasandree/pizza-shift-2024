import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, ordersReducer, userReducer } from '@/utils/redux/reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    orders: ordersReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
