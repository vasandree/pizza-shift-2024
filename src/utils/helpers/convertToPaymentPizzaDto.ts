import type { CreatePizzaPaymentPizzaDto } from '@/utils/api';
import type { PizzasInCart } from '@/utils/types';

export const convertToPaymentPizzaDto = (
  pizzaInCart: PizzasInCart
): CreatePizzaPaymentPizzaDto[] => {
  const paymentPizzaDto: CreatePizzaPaymentPizzaDto = {
    id: pizzaInCart.pizza.pizza.id,
    name: pizzaInCart.pizza.pizza.name,
    toppings: pizzaInCart.pizza.toppings,
    size: pizzaInCart.pizza.size.name,
    dough: pizzaInCart.pizza.dough.name
  };

  return Array(pizzaInCart.amount).fill(paymentPizzaDto);
};
