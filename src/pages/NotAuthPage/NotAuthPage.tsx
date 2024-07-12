import React from 'react';
import { Link } from 'react-router-dom';

import { Typography } from '@/components/uiKit';
import { routes } from '@/utils/consts';

import styles from './NotAuthPage.module.scss';

export const NotAuthPage: React.FC = () => {
  return (
    <div className={styles.not_auth_container}>
      <div className={styles.not_auth_content}>
        <Typography variant='h1'>Доступ запрещён</Typography>
        <img
          src='/public/restrictions.png'
          alt='Not Authenticated'
          className={styles.not_auth_image}
        />
        <Typography variant='p'>
          Вы должны быть авторизированы, чтобы просматривать эту страницу.
        </Typography>
        <Link to={routes.root()}>На главную</Link>
      </div>
    </div>
  );
};
