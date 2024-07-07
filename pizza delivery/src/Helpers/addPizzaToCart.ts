import { Pizza, PizzaIngredient } from '../types';

interface AddPizzaToCartProps {
  pizza: Pizza;
  toppings: PizzaIngredient[];
  dough: string;
  size: string;
}

export const addPizzaToCart = ({ pizza, toppings, dough, size }: AddPizzaToCartProps) => {
  //implement logic
};
