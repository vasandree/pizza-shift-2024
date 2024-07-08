import { PizzaCard } from '@/components/systemComponents';
import { Typography } from '@/components/uiKit';
import { useFetchPizzas } from '@/utils/hooks';
import type { Pizza } from '@/utils/types';

import styles from './MainPage.module.scss';

export const MainPage = () => {
  const pizzas = useFetchPizzas();

  if (pizzas.loading) {
    return <Typography variant='h1'>Loading...</Typography>;
  }
  if (pizzas.error) {
    return <Typography variant='h1'>Error!</Typography>;
  }

  return (
    <div className={styles.main_page}>
      {pizzas.data !== null &&
        pizzas.data.map((pizza: Pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
    </div>
  );
};
