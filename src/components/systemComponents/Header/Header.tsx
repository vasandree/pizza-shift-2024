import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { AuthModal } from '@/components/systemComponents';
import { logoutUser } from '@/logic';
import { routes } from '@/utils/consts';
import type { RootState } from '@/utils/redux';
import { fetchUserSession } from '@/utils/redux';

import {
  CartIcon,
  EnterIcon,
  ExitIcon,
  LogoIcon,
  ProfileIcon,
  TimerIcon,
  Typography
} from '../../uiKit';

import styles from './Header.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state: RootState) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserSession({}));
  }, [dispatch]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <nav className={styles.nav}>
              <div
                role='presentation'
                className={styles.logo}
                onClick={() => navigate(routes.root())}
              >
                <LogoIcon />
              </div>
              {user && (
                <>
                  <Typography
                    variant='p'
                    className={styles.nav_item}
                    onClick={() => navigate(routes.profile())}
                  >
                    <ProfileIcon /> Профиль
                  </Typography>
                  <Typography variant='p' className={styles.nav_item}>
                    <TimerIcon /> Заказы
                  </Typography>
                </>
              )}
            </nav>
          </div>
          <div>
            <nav className={styles.nav}>
              <Typography variant='p' className={styles.nav_item}>
                <CartIcon /> Корзина
              </Typography>
              {user ? (
                <Typography variant='p' className={styles.nav_item} onClick={() => logoutUser()}>
                  <ExitIcon /> Выход
                </Typography>
              ) : (
                <Typography variant='p' className={styles.nav_item} onClick={() => setIsOpen(true)}>
                  <EnterIcon /> Вход
                </Typography>
              )}
            </nav>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
