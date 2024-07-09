import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { otpCodeValidation, phoneValidation } from '@/utils/validationRules';
import { Button, Form, Input, Modal, Typography } from '@/components/uiKit';
import type { CreateOtpDto, SignInDto } from '@api/types';

import { CountDownComponent } from '@components/AuthModal/CountDownComponent.tsx';
import { InputMask } from '@react-input/mask';

import styles from './AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
}

export const AuthModal = ({ isOpen, setIsOpen }: AuthModalProps) => {
  const [stage, setStage] = useState<'getOtp' | 'enterOtp'>('getOtp');
  const [phone, setPhone] = useState<string>('');
  const [time, setTime] = useState();
  const form = useForm();

  if (stage === 'enterOtp') form.setValue('phone', phone);

  const handlePhoneSubmit: SubmitHandler<CreateOtpDto> = (data) => {
    console.log(data);
    setPhone(data.phone);
    setStage('enterOtp');
    setTime(120);
  };

  const handleOtpSubmit: SubmitHandler<SignInDto> = (data) => {
    console.log(data);
    onClose();
    setPhone('');
  };

  const handleSendNewCode = () => {
    console.log(phone);
    setTime(120);
  };

  const onClose = () => {
    setIsOpen(false);
    setStage('getOtp');
    setPhone('');
    setTime(120);
  };

  return (
    <Modal className={styles.modal} isOpen={isOpen} onClose={onClose}>
      <div className={styles.stageContainer}>
        <Typography variant='h3' className={styles.title}>
          Авторизация
        </Typography>
        <Typography variant='p' type='secondary' className={styles.subtitle}>
          {stage === 'getOtp'
            ? 'Введите номер телефона для входа в личный кабинет'
            : 'Введите проверочный код для входа в личный кабинет'}
        </Typography>
        {stage === 'getOtp' ? (
          <Form key='phone' onSubmit={handlePhoneSubmit} className={styles.form} form={form}>
            <Form.Item name='phone' rules={phoneValidation} className={styles.formItem}>
              <InputMask
                mask={'+7 (___) ___-__-__'}
                replacement='_'
                component={Input}
                placeholder='Номер телефона'
                className={styles.input}
              />
            </Form.Item>
            <Button type='submit' variant='primary' className={styles.button}>
              Продолжить
            </Button>
          </Form>
        ) : (
          <>
            <Form key='otp' onSubmit={handleOtpSubmit} className={styles.form} form={form}>
              <Form.Item name='phone' rules={phoneValidation} className={styles.formItem}>
                <Input placeholder='Номер телефона' className={styles.input} />
              </Form.Item>
              <Form.Item name='code' rules={otpCodeValidation} className={styles.formItem}>
                <Input placeholder='Проверочный код' className={styles.input} />
              </Form.Item>
              <Button type='submit' variant='primary' className={styles.button}>
                Продолжить
              </Button>
            </Form>
            <CountDownComponent
              initialTime={time}
              handleSendNewCode={handleSendNewCode}
            ></CountDownComponent>
          </>
        )}
      </div>
    </Modal>
  );
};
