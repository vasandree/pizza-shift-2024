import { configureStore } from '@reduxjs/toolkit';

import { cartReducer, userReducer } from '@/utils/redux/reducers';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
