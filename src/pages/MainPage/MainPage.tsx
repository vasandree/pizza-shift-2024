import { PizzaCard } from '@/components/systemComponents';
import { Typography } from '@/components/uiKit';
import type { Pizza } from '@/utils/api';
import styles from './MainPage.module.scss';
import { useFetchPizzas } from '@api/hooks/useFetchPizzas.ts';

export const MainPage = () => {
  const { data, isLoading, isError, error } = useFetchPizzas();

  if (isLoading) {
    return <Typography variant='h1'>Loading...</Typography>;
  }
  if (isError) {
    return <Typography variant='h1'>{error.message}</Typography>;
  }

  return (
    <div className={styles.main_page}>
      {data && data.map((pizza: Pizza) => <PizzaCard key={pizza.id} pizza={pizza} />)}
    </div>
  );
};
