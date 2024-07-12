import { useDispatch } from 'react-redux';

import { addToCart, removeOneFromCart } from '@/utils/redux';
import type { PizzaInCart } from '@/utils/types';

import styles from './Counter.module.scss';

interface CounterProps {
  pizzaInCart: PizzaInCart;
  amount: number;
}

export const Counter = ({ pizzaInCart, amount }: CounterProps) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(addToCart(pizzaInCart));
  };

  const handleDecrement = () => {
    dispatch(removeOneFromCart(pizzaInCart));
  };

  return (
    <div className={styles.counter_container}>
      <button type='button' onClick={handleDecrement} className={styles.counter_button}>
        -
      </button>
      <div className={styles.counter_display}>{amount}</div>
      <button type='button' onClick={handleIncrement} className={styles.counter_button}>
        +
      </button>
    </div>
  );
};
