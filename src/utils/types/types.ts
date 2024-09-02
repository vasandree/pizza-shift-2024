import type { Pizza, PizzaDough, PizzaIngredient, PizzaSize } from '@api/types.ts';

export interface PizzasInCart {
  pizza: PizzaInCart;
  amount: number;
}

export interface PizzaInCart {
  pizza: Pizza;
  toppings: PizzaIngredient[];
  dough: PizzaDough;
  size: PizzaSize;
  price: number;
}

export interface UpdatePizzaInCart {
  toppings: PizzaIngredient[];
  dough: PizzaDough;
  size: PizzaSize;
  price: number;
}
