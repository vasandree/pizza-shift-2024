import { useFetchOrdersQuery } from '@api/hooks';

import { OrdersTable } from '@/components/systemComponents';
import { Loader, Typography } from '@/components/uiKit';

import styles from './OrdersPage.module.scss';

export const OrdersPage = () => {
  const { data, isLoading, isError, error } = useFetchOrdersQuery({});

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Typography variant='h1'>{error.message}</Typography>;
  }

  if (data) {
    return <div className={styles.tableContainer}>{data && <OrdersTable orders={data} />}</div>;
  }
};
