import { Pizza, PizzaIngredient } from '../../types';

interface AddPizzaToCartParams {
  pizza: Pizza;
  toppings: PizzaIngredient[];
  dough: string;
  size: string;
}

export const addPizzaToCart = ({ pizza, toppings, dough, size }: AddPizzaToCartParams) => {
  //implement logic
};
