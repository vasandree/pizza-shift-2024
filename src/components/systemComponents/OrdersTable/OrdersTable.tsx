import { Typography } from '@/components/uiKit';
import type { PizzaOrder } from '@/utils/api';
import { PizzaStatus } from '@/utils/api';

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
          <td>{PizzaStatus[order.status]}</td>
          <td>
            {order.receiverAddress.street}, {order.receiverAddress.house},{' '}
            {order.receiverAddress.apartment}
          </td>
          <td> Пицца </td>
          <td>
            <a>Подробнее</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
