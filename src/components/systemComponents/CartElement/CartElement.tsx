import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Counter } from '@components/CartElement/Counter.tsx';

import { PizzaModal } from '@/components/systemComponents';
import { CrossIcon, Typography } from '@/components/uiKit';
import { doughsRu, ingredientsRu, sizesRu } from '@/utils/consts';
import { getImage } from '@/utils/helpers';
import { removeFromCart } from '@/utils/redux';
import type { PizzasInCart } from '@/utils/types';

import styles from './CartElement.module.scss';

export const CartElement = ({ pizzaInCart, amount }: PizzasInCart) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { pizza, dough, size, toppings, price } = pizzaInCart;

  const handleDeleteItem = () => {
    dispatch(removeFromCart(pizzaInCart));
  };

  return (
    <div className={styles.cart_item}>
      <img src={getImage(pizza.img)} alt={pizza.name} className={styles.pizza_image} />
      <div className={styles.pizza_details}>
        <Typography variant='h6'>{pizza.name}</Typography>
        <div className={styles.description_container}>
          <Typography variant='p'>
            {sizesRu[size.name]}, {doughsRu[dough.name]}
          </Typography>
          {toppings.length > 0 && (
            <Typography variant='p'>
              Топпинги:{' '}
              {toppings.map((ingredient, index) => (
                <span key={index}>
                  {ingredientsRu[ingredient.name]}
                  {index < toppings.length - 1 ? ' + ' : ''}
                </span>
              ))}
            </Typography>
          )}
        </div>
        <Typography
          variant='p'
          type='secondary'
          onClick={() => setIsOpen(true)}
          className={styles.change_text}
        >
          Изменить
        </Typography>
        <div className={styles.counter_wrapper}>
          <Counter pizzaInCart={pizzaInCart} amount={amount} />
        </div>
        <Typography variant='p'> {price * amount} ₽</Typography>
        <CrossIcon className={styles.cross_icon} onClick={handleDeleteItem} />
      </div>
      <PizzaModal
        pizza={pizza}
        pizzaInCart={pizzaInCart}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};
