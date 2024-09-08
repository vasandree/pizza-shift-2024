import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { OrderCard } from '@/components/systemComponents';
import { Loader } from '@/components/uiKit';
import type { PizzaOrder } from '@/utils/api';
import type { RootState } from '@/utils/redux';

import styles from './OrderPage.module.scss';

const findOrder = (orders: PizzaOrder[], orderId: string) => {
  return orders.find((order: PizzaOrder) => order._id === orderId);
};

export const OrderPage = () => {
  const [order, setOrder] = useState<PizzaOrder | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const orders = useSelector((state: RootState) => state.orders.value);
  const { orderId } = useParams<{ orderId: string }>();

  useEffect(() => {
    if (orderId) {
      const foundOrder = findOrder(orders, orderId);
      setOrder(foundOrder);
      setIsLoading(false);
    }
  }, [orderId, orders]);

  if (isLoading) {
    return <Loader />;
  }

  if (order && !isLoading)
    return (
      <div className={styles.cardContainer}>
        <OrderCard order={order} />
      </div>
    );

  if (!order && !isLoading) return <p>Not found</p>;
};
