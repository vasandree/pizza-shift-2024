import {PizzaIngredient} from './PizzaIngredient.ts';
import {PizzaSize} from './PizzaSize.ts';
import {PizzaDough} from './PizzaDough.ts';

export interface PizzaInCart {
    id: string;
    name: string;
    toppings: PizzaIngredient[];
    size: PizzaSize;
    doughs: PizzaDough;
}
