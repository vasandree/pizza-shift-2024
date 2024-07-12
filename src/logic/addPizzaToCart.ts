import { addToCart, store } from '@/utils/redux';
import type { PizzaInCart } from '@/utils/types';

export const addPizzaToCart = ({ pizza, toppings, dough, size, price }: PizzaInCart) => {
  store.dispatch(addToCart({ pizza, toppings, dough, size, price }));
};
