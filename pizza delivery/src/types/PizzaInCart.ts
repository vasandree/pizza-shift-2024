import {IPizzaIngredient} from "./IPizzaIngredient.ts";
import {IPizzaSize} from "./IPizzaSize.ts";
import {IPizzaDough} from "./IPizzaDough.ts";

export interface PizzaInCart {
    id: string;
    name: string;
    toppings: IPizzaIngredient[]
    size: IPizzaSize;
    doughs: IPizzaDough
}