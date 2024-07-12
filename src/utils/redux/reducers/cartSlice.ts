import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { PizzaInCart, PizzasInCart, UpdatePizzaInCart } from '@/utils/types';

export interface CartSlice {
  value: PizzasInCart[];
}

const initialState: CartSlice = {
  value: []
};

const getExistingItem = (items: PizzasInCart[], itemToFind: PizzaInCart) => {
  return items.find(
    (item) =>
      item.pizza.pizza.id === itemToFind.pizza.id &&
      item.pizza.size.name === itemToFind.size.name &&
      item.pizza.dough.name === itemToFind.dough.name &&
      item.pizza.toppings.length === itemToFind.toppings.length &&
      item.pizza.toppings.every((topping, index) => topping.id === itemToFind.toppings[index].id)
  );
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<PizzaInCart>) => {
      const existingItem = getExistingItem(state.value, action.payload);
      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.value.push({ pizza: action.payload, amount: 1 });
      }
    },
    removeOneFromCart: (state, action: PayloadAction<PizzaInCart>) => {
      const existingItem = getExistingItem(state.value, action.payload);
      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
        } else {
          state.value = state.value.filter((item) => item !== existingItem);
        }
      }
    },
    updatePizza: (
      state,
      action: PayloadAction<{ oldPizza: PizzaInCart; updates: UpdatePizzaInCart }>
    ) => {
      const { oldPizza, updates } = action.payload;
      const existingItem = getExistingItem(state.value, oldPizza);
      if (existingItem) {
        if (updates.size) existingItem.pizza.size = updates.size;
        if (updates.dough) existingItem.pizza.dough = updates.dough;
        if (updates.toppings) existingItem.pizza.toppings = updates.toppings;
        if (updates.price) existingItem.pizza.price = updates.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<PizzaInCart>) => {
      state.value = state.value.filter(
        (item) =>
          !(
            item.pizza.pizza.id === action.payload.pizza.id &&
            item.pizza.size.id === action.payload.size.id &&
            item.pizza.dough.id === action.payload.dough.id &&
            item.pizza.toppings.length === action.payload.toppings.length &&
            item.pizza.toppings.every(
              (topping, index) => topping.id === action.payload.toppings[index].id
            )
          )
      );
    },
    clearCart: (state) => {
      state.value = [];
    }
  }
});

export const { addToCart, removeOneFromCart, removeFromCart, updatePizza, clearCart } =
  cartSlice.actions;
export const cartReducer = cartSlice.reducer;
