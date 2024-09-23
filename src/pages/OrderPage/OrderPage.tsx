import { useParams } from 'react-router-dom';
import { useFetchOrderQuery } from '@api/hooks';

import { OrderCard } from '@/components/systemComponents';
import { Loader, Typography } from '@/components/uiKit';

import styles from './OrderPage.module.scss';

export const OrderPage = () => {
  const { orderId } = useParams<{ orderId: string }>();

  const { data, isLoading, isError, error } = useFetchOrderQuery({
    params: orderId,
    config: {}
  });

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Typography variant='h1'>{error.message}</Typography>;
  }

  if (data && !isLoading)
    return (
      <div className={styles.cardContainer}>
        <OrderCard order={data} />
      </div>
    );

  if (!data && !isLoading) return <p>Not found</p>;
};
