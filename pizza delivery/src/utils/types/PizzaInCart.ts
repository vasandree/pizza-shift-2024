import type { PizzaDough } from './PizzaDough.ts';
import type { PizzaIngredient } from './PizzaIngredient.ts';
import type { PizzaSize } from './PizzaSize.ts';

export interface PizzaInCart {
  id: string;
  name: string;
  toppings: PizzaIngredient[];
  size: PizzaSize;
  doughs: PizzaDough;
}
