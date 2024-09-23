import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { usePostAuthOtpQuery, usePostSignInQuery } from '@api/hooks';
import type { CreateOtpDto, OtpResponse, SignInDto } from '@api/types';
import { CountDownComponent } from '@components/AuthModal/CountDownComponent.tsx';
import { InputMask } from '@react-input/mask';

import { Button, Form, Input, Modal, Typography } from '@/components/uiKit';
import { setToken } from '@/utils/helpers';
import { setUser } from '@/utils/redux';
import { otpCodeValidation, phoneValidation } from '@/utils/validationRules';

import styles from './AuthModal.module.scss';

interface AuthModalProps {
  isOpen: boolean;
  setIsOpen: (b: boolean) => void;
}

export const AuthModal = ({ isOpen, setIsOpen }: AuthModalProps) => {
  const [stage, setStage] = useState<'getOtp' | 'enterOtp'>('getOtp');
  const [phone, setPhone] = useState<string>('');
  const [time, setTime] = useState();
  const dispatch = useDispatch();
  const mutateOtp = usePostAuthOtpQuery();
  const mutateSignIn = usePostSignInQuery();
  const form = useForm();

  const onClose = () => {
    setIsOpen(false);
  };

  const sendOtpCode = (params: CreateOtpDto) => {
    mutateOtp.mutate(
      { params },
      {
        onSuccess: (data: OtpResponse) => {
          setPhone(params.phone);
          form.setValue('phone', params.phone);
          setStage('enterOtp');
          setTime(data.retryDelay / 1000);
        }
      }
    );
  };

  const handlePhoneSubmit: SubmitHandler<CreateOtpDto> = (values) => {
    sendOtpCode(values);
  };

  const handleSendNewCode = () => {
    sendOtpCode({ phone });
  };

  const handleOtpSubmit: SubmitHandler<SignInDto> = (values) => {
    mutateSignIn.mutate(
      { params: values },
      {
        onSuccess: (data) => {
          setToken(data.token);
          setPhone('');
          dispatch(setUser(data.user));
          onClose();
        }
      }
    );
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
          <Form key='phone' onSubmit={handlePhoneSubmit} className={styles.form}>
            <Form.Item name='phone' rules={phoneValidation} className={styles.formItem}>
              <InputMask
                mask='+7 (___) ___-__-__'
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
                <InputMask
                  mask='+7 (___) ___-__-__'
                  replacement='_'
                  component={Input}
                  placeholder='Номер телефона'
                  className={styles.input}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Form.Item>
              <Form.Item name='code' rules={otpCodeValidation} className={styles.formItem}>
                <Input placeholder='Проверочный код' className={styles.input} />
              </Form.Item>
              <Button type='submit' variant='primary' className={styles.button}>
                Продолжить
              </Button>
            </Form>
            <CountDownComponent initialTime={time} handleSendNewCode={handleSendNewCode} />
          </>
        )}
      </div>
    </Modal>
  );
};
