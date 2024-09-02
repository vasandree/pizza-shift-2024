import { useEffect, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { usePostPizzaPaymentQuery } from '@api/hooks/usePostPizzaPaymentQuery.ts';
import { convertToPaymentPizzaDto } from '@helpers/convertToPaymentPizzaDto.ts';
import { InputMask } from '@react-input/mask';

import { CartElement } from '@/components/systemComponents';
import { Button, EmptyCart, Form, Input, Textarea, Typography } from '@/components/uiKit';
import { SuccessModal } from '@/pages/CartPage/SuccessModal.tsx';
import type {
  CreatePizzaPaymentAddressDto,
  CreatePizzaPaymentDebitCardDto,
  CreatePizzaPaymentDto,
  CreatePizzaPaymentPersonDto,
  CreatePizzaPaymentPizzaDto
} from '@/utils/api';
import type { RootState } from '@/utils/redux';
import { clearCart } from '@/utils/redux';
import type { PizzasInCart } from '@/utils/types';
import { cityValidation, nameValidation, phoneValidation } from '@/utils/validationRules';
import { apartmentValidation } from '@/utils/validationRules/apartmentValidation.ts';
import { cvvValidation } from '@/utils/validationRules/cvvValidation.ts';
import { expiryDateValidation } from '@/utils/validationRules/expiryDateValidation.ts';
import { houseValidation } from '@/utils/validationRules/houseValidation.ts';
import { panValidation } from '@/utils/validationRules/panValidation.ts';

import styles from './CartPage.module.scss';

export const CartPage = () => {
  const [pizzasInOrder, setPizzasInOrder] = useState<CreatePizzaPaymentPizzaDto[]>([]);
  const [personInOrder, setPersonInOrder] = useState<CreatePizzaPaymentPersonDto>(null);
  const [addressInOrder, setAddressInOrder] = useState<CreatePizzaPaymentAddressDto>(null);
  const [successModalIsOpen, setSuccessModalIsOpen] = useState(false);
  const [card, setCard] = useState<CreatePizzaPaymentDebitCardDto>(null);
  const [stage, setStage] = useState<'cart' | 'person' | 'card'>('cart');
  const [priceInModal, setPriceInModal] = useState(0);
  const cart = useSelector((state: RootState) => state.cart.value);
  const user = useSelector((state: RootState) => state.user.value);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  const orderMutation = usePostPizzaPaymentQuery();
  const form = useForm();

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
  }, [stage, cart]);

  useEffect(() => {
    if (stage === 'person' && user) {
      form.setValue('firstname', user.firstname);
      form.setValue('lastname', user.lastname);
      form.setValue('middlename', user.middlename);
      form.setValue('phone', user.phone);
    }
  }, [stage, user]);

  const handlePlaceOrder = () => {
    setPizzasInOrder(cart.flatMap(convertToPaymentPizzaDto));
    setStage('person');
    setPriceInModal(totalPrice);
  };

  const addPersonToOrder: SubmitHandler = (data) => {
    setAddressInOrder({
      street: data.street,
      house: data.house,
      apartment: data.apartment,
      comment: data.comment
    });
    setPersonInOrder({
      firstname: data.firstname,
      lastname: data.lastname,
      middlename: data.middlename,
      phone: data.phone
    });
    setStage('card');
  };

  const handleSubmitOrder: SubmitHandler = (data) => {
    setCard({ pan: data.pan, expireDate: data.expireDate, cvv: data.cvv });
    const order: CreatePizzaPaymentDto = {
      pizzas: pizzasInOrder,
      person: personInOrder,
      debitCard: { pan: data.pan, expireDate: data.expireDate, cvv: data.cvv },
      receiverAddress: addressInOrder
    };
    orderMutation.mutate(
      { params: order },
      {
        onSuccess: () => {
          setSuccessModalIsOpen(true);
          setStage('cart');
          dispatch(clearCart());
        }
      }
    );
  };

  return (
    <div className={styles.container}>
      {stage === 'cart' && (
        <>
          {cart.length === 0 ? (
            <>
              <EmptyCart className={styles.img} />
              <Typography variant='h2'>ОЙ, пусто!</Typography>
              <Typography variant='p' type='secondary'>
                Ваша корзина пуста, откройте «Меню» и выберите понравившийся товар.
              </Typography>
            </>
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
        <>
          <Typography variant='h2'>Введите ваши данные </Typography>
          <Form form={form} key='person' onSubmit={addPersonToOrder}>
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
              />
            </Form.Item>
            <div className={styles.form_row}>
              <Form.Item
                label='Улица'
                rules={cityValidation}
                name='street'
                className={styles.form_item}
              >
                <Input placeholder='Улица' className={styles.row_input} />
              </Form.Item>
              <Form.Item
                label='Дом'
                rules={houseValidation}
                name='house'
                className={styles.form_item}
              >
                <Input placeholder='Дом' className={styles.row_input} />
              </Form.Item>
              <Form.Item
                rules={apartmentValidation}
                label='Квартира'
                name='apartment'
                className={styles.form_item}
              >
                <Input type='number' placeholder='Кваартира' className={styles.row_input} />
              </Form.Item>
            </div>
            <Form.Item name='comment' label='Коммментарий' className={styles.form_item}>
              <Textarea className={styles.textarea} />
            </Form.Item>
            <div className={styles.btn_container}>
              <Button className={styles.btn} variant='secondary' onClick={() => setStage('cart')}>
                Назад
              </Button>
              <Button className={styles.btn} variant='primary' type='submit'>
                Продолжить
              </Button>
            </div>
          </Form>
        </>
      )}
      {stage === 'card' && (
        <>
          <Typography variant='h2'>Введите данные карты для оплаты</Typography>
          <div className={styles.card_form_container}>
            <Form key='card' form={form} onSubmit={handleSubmitOrder}>
              <Form.Item
                rules={panValidation}
                name='pan'
                label='Номер карты'
                className={styles.form_item}
              >
                <InputMask
                  mask='____ ____'
                  replacement='_'
                  component={Input}
                  placeholder='0000 0000'
                  className={styles.card_input}
                />
              </Form.Item>
              <div className={styles.form_row}>
                <Form.Item
                  rules={expiryDateValidation}
                  name='expireDate'
                  label='Срок'
                  className={styles.form_item}
                >
                  <InputMask
                    mask='__/__'
                    replacement='_'
                    component={Input}
                    placeholder='00/00'
                    className={styles.row_input}
                  />
                </Form.Item>
                <Form.Item
                  rules={cvvValidation}
                  name='cvv'
                  label='СVV'
                  className={styles.form_item}
                >
                  <InputMask
                    mask='___'
                    replacement='_'
                    component={Input}
                    placeholder='000'
                    className={styles.row_input}
                  />
                </Form.Item>
                <Button className={styles.btn} variant='primary' type='submit'>
                  Оплатить
                </Button>
              </div>
            </Form>
          </div>
        </>
      )}
      {successModalIsOpen && (
        <SuccessModal
          isOpen={successModalIsOpen}
          onClose={() => setSuccessModalIsOpen(false)}
          order={{
            pizzas: pizzasInOrder,
            person: personInOrder,
            debitCard: card,
            receiverAddress: addressInOrder
          }}
          totalPrice={priceInModal}
        />
      )}
    </div>
  );
};
