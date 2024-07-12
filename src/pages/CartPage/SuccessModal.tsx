import React from 'react';
import { Link } from 'react-router-dom';

import { Modal, SuccessIcon, Typography } from '@/components/uiKit';
import type { CreatePizzaPaymentDto, CreatePizzaPaymentPizzaDto } from '@/utils/api';
import { doughsRu, ingredientsRu, routes, sizesCm, sizesRu } from '@/utils/consts';

import styles from './SuccessModal.module.scss';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: void;
  order?: CreatePizzaPaymentDto;
  totalPrice: number;
}

export const SuccessModal = ({ isOpen, onClose, order, totalPrice }: SuccessModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
    <div className={styles.container}>
      <SuccessIcon />
      <Typography variant='h3'>Оплата прошла успешно!</Typography>
    </div>

    <div className={styles.modal_order}>
      <Typography variant='p' type='secondary'>
        Заказ:
      </Typography>
      {order.pizzas.map((pizza: CreatePizzaPaymentPizzaDto) => (
        <Typography variant='p' key={pizza.id} className={styles.pizza_description}>
          <>
            {pizza.name}, {sizesRu[pizza.size]} {sizesCm[pizza.size]}, {doughsRu[pizza.dough]}{' '}
            {pizza.toppings?.length > 0 && (
              <>
                +{' '}
                {pizza.toppings.map((topping, index) => (
                  <span key={topping.name}>
                    {ingredientsRu[topping.name]}
                    {index < pizza.toppings.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </>
            )}
          </>
        </Typography>
      ))}
    </div>

    <div className={styles.modal_address}>
      <Typography variant='p' type='secondary'>
        Адрес доставки:
      </Typography>
      <Typography variant='p'>
        {' '}
        ул. {order?.receiverAddress.street ?? ''}, {order.receiverAddress.house ?? ''}, кв.{' '}
        {order?.receiverAddress.apartment ?? ''}
      </Typography>
    </div>

    <div className={styles.modal_total}>
      <Typography variant='p' type='secondary'>
        Сумма заказа:
      </Typography>
      <Typography variant='p'>{totalPrice} ₽</Typography>
    </div>
    <div className={styles.container}>
      <Typography variant='p' type='secondary'>
        Вся информация была продублирована в SMS
      </Typography>
      <Link to={routes.root()}>На главную</Link>
    </div>
  </Modal>
);
