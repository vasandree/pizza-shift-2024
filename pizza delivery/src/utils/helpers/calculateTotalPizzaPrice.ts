import {PizzaDough, PizzaIngredient, PizzaSize} from "../types";

interface Props {
    currentSize: PizzaSize;
    currentDough: PizzaDough;
    ingredients: PizzaIngredient[];
}

export const calculateTotalPizzaPrice = ({currentSize, currentDough, ingredients}: Props): number => {

    const ingredientsCost = ingredients.reduce((totalCost, ingredient) => {
        return totalCost + ingredient.cost;
    }, 0);

    return currentSize.price + currentDough.price + ingredientsCost;
};
