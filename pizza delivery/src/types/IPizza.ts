import {IPizzaIngredient} from "./IPizzaIngredient.ts";
import {IPizzaSize} from "./IPizzaSize.ts";
import {IPizzaDough} from "./IPizzaDough.ts";


export interface IPizza {
    id: string,
    name: string,
    ingredients: IPizzaIngredient[],
    toppings: IPizzaIngredient[],
    description: string,
    sizes: IPizzaSize[],
    doughs: IPizzaDough[],
    calories: number,
    protein: string,
    totalFat: string,
    carbohydrates: string,
    sodium: string,
    allergens: string[],
    isVegetarian: boolean,
    isGlutenFree: boolean,
    isNew: boolean,
    isHit: boolean,
    img: string
}