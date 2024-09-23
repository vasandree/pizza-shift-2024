import type { PizzaDough, PizzaIngredient, PizzaSize } from '@/utils/api';

interface Params {
  currentDough: PizzaDough;
  currentSize: PizzaSize;
  ingredients: PizzaIngredient[];
}

export const calculateTotalPizzaPrice = ({
  currentSize,
  currentDough,
  ingredients
}: Params): number => {
  const ingredientsCost = ingredients.reduce((totalCost, ingredient) => {
    return totalCost + ingredient.cost;
  }, 0);

  return currentSize.price + currentDough.price + ingredientsCost;
};
