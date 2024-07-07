import {IPizza, IPizzaIngredient} from "../types";

interface AddPizzaToCartProps {
    pizza: IPizza;
    toppings: IPizzaIngredient[];
    dough: string;
    size: string;
}

export const addPizzaToCart = ({pizza, toppings, dough, size}:AddPizzaToCartProps) =>{
    //implement logic
}