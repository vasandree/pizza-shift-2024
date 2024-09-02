import type { PizzaDough, PizzaIngredient, PizzaSize } from '@api/types.ts';

export interface PizzaInCart {
  id: string;
  name: string;
  toppings: PizzaIngredient[];
  size: PizzaSize;
  doughs: PizzaDough;
}
