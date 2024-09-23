import { useState } from 'react';
import { clsx } from 'clsx';

import { CancelModal } from '@/components/systemComponents';
import { Button, OrderStatus } from '@/components/uiKit';
import type { PizzaOrder } from '@/utils/api';
import { PizzaStatus, putOrderCancel } from '@/utils/api';
import { statusColors } from '@/utils/consts';

import styles from './OrderCard.module.scss';

interface OrderCardProps {
  order: PizzaOrder;
}

export const OrderCard = ({ order }: OrderCardProps) => {
  const { _id, person, receiverAddress, status, cancellable } = order;
  const [isOpen, setIsOpen] = useState(false);

  const cancelOrder = async () => {
    const res = await putOrderCancel({});
    if (res.success) alert('Заказ отменен');
    else alert('Не удалось отменить заказ');
    setIsOpen(false);
  };

  return (
    <div className={styles.orderCard}>
      <div className={styles.orderCard__header}>
        <span>Номер заказа: {_id}</span>
        <span className={clsx(styles.orderStatus)}>
          <OrderStatus color={statusColors[status]} /> {PizzaStatus[status]}
        </span>
      </div>

      <div className={styles.orderCard__person}>
        <h4>Получатель:</h4>
        <p>
          {person.lastname} {person.firstname} {person.middlename}
        </p>
        <p>Телефон: {person.phone}</p>
      </div>

      <div className={styles.orderCard__address}>
        <h4>Адрес доставки:</h4>
        <p>
          г. Томск, ул. {receiverAddress.street} {receiverAddress.house}, кв{' '}
          {receiverAddress.apartment}
        </p>
        {receiverAddress.comment && <p>Комментарий: {receiverAddress.comment}</p>}
      </div>

      <div className={styles.orderCard__content}>
        <h4>Состав заказа</h4>
        <p>Пепперони, средняя 30 см, традиционное тесто + моцарелла, халапеньо</p>
        <p>Сырная, большая 35 см, тонкое тесто</p>
      </div>

      <div className={styles.orderCard__totalPrice}>
        <h4>Сумма заказа</h4>
        <p>1350 ₽</p>
      </div>
      <Button className={styles.cancelBtn} onClick={() => setIsOpen(true)} variant='primary'>
        Отменить заказ
      </Button>
      <CancelModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={() => cancelOrder()}
      />
    </div>
  );
};
