import { PizzaCard } from '@/components/systemComponents';
import { Typography } from '@/components/uiKit';
import type { Pizza } from '@/utils/types';
import styles from './MainPage.module.scss';
import { useFetchPizzas } from './useFetchPizzas';

export const MainPage = () => {
  const { data, loading, error } = useFetchPizzas();

  if (loading) {
    return <Typography variant='h1'>Loading...</Typography>;
  }
  if (error) {
    return <Typography variant='h1'>Error!</Typography>;
  }

  return (
    <div className={styles.main_page}>
      {data && data.map((pizza: Pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
    </div>
  );
};
