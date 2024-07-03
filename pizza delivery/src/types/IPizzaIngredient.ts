import {Ingredients} from "./Enums/ingredients.ts";

interface IPizzaIngredient {
    name: Ingredients;
    cost: number;
    img: string
}

export default IPizzaIngredient;