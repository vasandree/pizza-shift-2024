import { useDispatch } from 'react-redux';
import { useFetchOrdersQuery } from '@api/hooks';

import { OrdersTable } from '@/components/systemComponents';
import { Loader, Typography } from '@/components/uiKit';
import { setOrders } from '@/utils/redux';

import styles from './OrdersPage.module.scss';

export const OrdersPage = () => {
  const { data, isLoading, isError, error } = useFetchOrdersQuery({});
  const dispatch = useDispatch();

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <Typography variant='h1'>{error.message}</Typography>;
  }

  if (data) {
    dispatch(setOrders(data));
    return <div className={styles.tableContainer}>{data && <OrdersTable orders={data} />}</div>;
  }
};
