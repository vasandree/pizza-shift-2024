import { Link } from 'react-router-dom';
import { OrderStatus } from '@ui/icons';

import type { PizzaOrder } from '@/utils/api';
import { PizzaStatus } from '@/utils/api';
import { routes, statusColors } from '@/utils/consts';

import styles from './OrdersTable.module.scss';

interface OrdersTableProps {
  orders: PizzaOrder[];
}

export const OrdersTable = ({ orders }: OrdersTableProps) => (
  <table className={styles.ordersTable}>
    <thead>
      <tr>
        <th>Статус</th>
        <th>Адрес доставки</th>
        <th>Состав заказа</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {orders.map((order: PizzaOrder) => (
        <tr key={order._id}>
          <td>
            <OrderStatus color={statusColors[order.status]} /> {PizzaStatus[order.status]}
          </td>
          <td>
            {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
            {order.receiverAddress.apartment}
          </td>
          <td> Пицца</td>
          <td>
            <Link to={routes.order(order._id)}>Подробнее</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
