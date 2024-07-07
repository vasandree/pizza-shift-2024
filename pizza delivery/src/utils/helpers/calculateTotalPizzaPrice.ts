import {PizzaDough, PizzaIngredient, PizzaSize} from "../../types";

interface Props {
    sizes: PizzaSize[];
    doughs: PizzaDough[];
    currentSize: string;
    currentDough: string;
    ingredients: PizzaIngredient[];
}

export const calculateTotalPizzaPrice = ({ sizes, doughs, currentSize, currentDough, ingredients }: Props): number => {
    const selectedSizePrice = sizes.find(size => size.name === currentSize)?.price || 0;
    const selectedDoughPrice = doughs.find(dough => dough.name === currentDough)?.price || 0;

    const ingredientsCost = ingredients.reduce((totalCost, ingredient) => {
        return totalCost + ingredient.cost;
    }, 0);

    return selectedSizePrice + selectedDoughPrice + ingredientsCost;
};
