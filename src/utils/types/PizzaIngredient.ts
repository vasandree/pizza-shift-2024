import type { Ingredients } from './Enums';

export interface PizzaIngredient {
  name: Ingredients;
  cost: number;
  img: string;
}
