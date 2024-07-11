import React, { useEffect, useState } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { usePatchUserProfileQuery } from '@api/hooks';

import { Button, Form, Input, Typography } from '@/components/uiKit';
import type { UpdateProfileDto, UpdateProfileProfileDto } from '@/utils/api';
import type { RootState } from '@/utils/redux';
import { updateUser } from '@/utils/redux';
import { cityValidation, emailValidation, nameValidation } from '@/utils/validationRules';

import styles from './ProfilePage.module.scss';

export const ProfilePage = () => {
  const user = useSelector((state: RootState) => state.user.value);
  const form = useForm();
  const mutateProfile = usePatchUserProfileQuery();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (isEditing) {
      form.setValue('firstname', user?.firstname);
      form.setValue('lastname', user?.lastname);
      form.setValue('middlename', user?.middlename);
      form.setValue('email', user?.email);
      form.setValue('city', user?.city);
    }
  }, [isEditing, user, form]);

  const handleSubmit: SubmitHandler<UpdateProfileProfileDto> = (values) => {
    const params: UpdateProfileDto = { profile: values, phone: user?.phone };
    mutateProfile.mutate(
      { params, config: {} },
      {
        onSuccess: (data) => {
          if (data) {
            dispatch(updateUser(values));
            setIsEditing(false);
          }
        }
      }
    );
  };
  return (
    <div className={styles.profile_container}>
      <Typography className={styles.title} variant='h1'>
        Профиль
      </Typography>
      {isEditing ? (
        <Form form={form} onSubmit={handleSubmit}>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Телефон:
            </Typography>
            <Typography variant='p'>{user?.phone}</Typography>
          </div>
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
          <Form.Item name='email' rules={emailValidation} label='Email'>
            <Input type='email' placeholder='Email' className={styles.input} />
          </Form.Item>
          <Form.Item name='city' rules={cityValidation} label='Город'>
            <Input type='text' placeholder='Город' className={styles.input} />
          </Form.Item>
          <div className={styles.btn_container}>
            <Button variant='primary' type='submit'>
              Сохранить
            </Button>
            <Button variant='secondary' type='button' onClick={() => setIsEditing(false)}>
              Отменить
            </Button>
          </div>
        </Form>
      ) : (
        <>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Телефон:
            </Typography>
            <Typography variant='p'>{user?.phone}</Typography>
          </div>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Имя:
            </Typography>
            <Typography variant='p'>{user?.firstname || 'N/A'}</Typography>
          </div>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Фамилия:
            </Typography>
            <Typography variant='p'>{user?.lastname || 'N/A'}</Typography>
          </div>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Отчество:
            </Typography>
            <Typography variant='p'>{user?.middlename || 'N/A'}</Typography>
          </div>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Email:
            </Typography>
            <Typography variant='p'>{user?.email || 'N/A'}</Typography>
          </div>
          <div className={styles.profile_item}>
            <Typography type='strong' variant='p'>
              Город:
            </Typography>
            <Typography variant='p'>{user?.city || 'N/A'}</Typography>
          </div>
          <Button onClick={() => setIsEditing(true)} variant='secondary'>
            Редактировать
          </Button>
        </>
      )}
    </div>
  );
};
