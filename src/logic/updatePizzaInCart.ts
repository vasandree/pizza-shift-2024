import { store, updatePizza } from '@/utils/redux';
import type { PizzasInCart, UpdatePizzaInCart } from '@/utils/types';

export const updatePizzaInCart = (oldPizza: PizzasInCart, newInfo: UpdatePizzaInCart) =>
  store.dispatch(updatePizza({ oldPizza, updates: newInfo }));
