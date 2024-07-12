import React, { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { convertToPaymentPizzaDto } from '@helpers/convertToPaymentPizzaDto.ts';
import { InputMask } from '@react-input/mask';

import { CartElement } from '@/components/systemComponents';
import { Button, Form, Input, Typography } from '@/components/uiKit';
import type { CreatePizzaPaymentPersonDto, CreatePizzaPaymentPizzaDto } from '@/utils/api';
import type { RootState } from '@/utils/redux';
import type { PizzasInCart } from '@/utils/types';
import { emailValidation, nameValidation, phoneValidation } from '@/utils/validationRules';

import styles from './CartPage.module.scss';

export const CartPage = () => {
  const [pizzasInOrder, setPizzasInOrder] = useState<CreatePizzaPaymentPizzaDto[]>([]);
  const [personInOrder, setPersonInOrder] = useState<CreatePizzaPaymentPersonDto>(null);
  const [stage, setStage] = useState<'cart' | 'person' | 'card'>('cart');
  const cart = useSelector((state: RootState) => state.cart.value);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const calculateTotalPrice = () => {
      if (stage === 'cart') {
        let total = 0;
        cart.forEach((cartItem: PizzasInCart) => {
          total += cartItem.amount * cartItem.pizza.price;
        });
        setTotalPrice(total);
      }
    };

    calculateTotalPrice();
  }, [cart]);

  const handlePlaceOrder = () => {
    setPizzasInOrder(cart.map(convertToPaymentPizzaDto));
    setStage('person');
  };

  const addPersonToOrder: SubmitHandler<CreatePizzaPaymentPersonDto> = (person) => {
    console.log(person);
    setPersonInOrder(person);
  };

  return (
    <div className={styles.container}>
      {stage === 'cart' && (
        <>
          {cart.length === 0 ? (
            <Typography variant='h2'>Тут пока ничего нет</Typography>
          ) : (
            <>
              <div>
                {cart.map((cartItem: PizzasInCart, index: number) => (
                  <CartElement key={index} pizzaInCart={cartItem.pizza} amount={cartItem.amount} />
                ))}
              </div>
              <div className={styles.bottom_container}>
                <Typography variant='h4'>Стоимость заказа: {totalPrice}₽</Typography>
                <Button variant='primary' onClick={handlePlaceOrder}>
                  Оформить заказ
                </Button>
              </div>
            </>
          )}
        </>
      )}
      {stage === 'person' && (
        <Form key='person' onSubmit={addPersonToOrder}>
          <div className={styles.form_row}>
            <Form.Item
              name='firstname'
              rules={nameValidation}
              label='Имя'
              className={styles.form_item}
            >
              <Input type='text' placeholder='Имя' className={styles.row_input} />
            </Form.Item>
            <Form.Item
              name='lastname'
              label='Фамилия'
              rules={nameValidation}
              className={styles.form_item}
            >
              <Input type='text' placeholder='Фамилия' className={styles.row_input} />
            </Form.Item>
            <Form.Item
              name='middlename'
              label='Отчество'
              rules={nameValidation}
              className={styles.form_item}
            >
              <Input type='text' placeholder='Отчество' className={styles.row_input} />
            </Form.Item>
          </div>
          <Form.Item
            name='phone'
            label='Номер телефона'
            rules={phoneValidation}
            className={styles.form_item}
          >
            <InputMask
              mask='+7 (___) ___-__-__'
              replacement='_'
              component={Input}
              placeholder='Номер телефона'
              className={styles.input}
              onChange={() => setPhone(e.target.value)}
            />
          </Form.Item>
          <div className={styles.form_row}>
            <Form.Item label='Адрес' name='address' className={styles.form_item}>
              <Input type='email' placeholder='Email' className={styles.row_input} />
            </Form.Item>
            <Form.Item label='Адрес' name='address' className={styles.form_item}>
              <Input type='email' placeholder='Email' className={styles.row_input} />
            </Form.Item>
            <Form.Item label='Адрес' name='address' className={styles.form_item}>
              <Input type='email' placeholder='Email' className={styles.row_input} />
            </Form.Item>
          </div>
        </Form>
      )}
    </div>
  );
};
