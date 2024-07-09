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
import { useState } from 'react';
import { AuthModal } from '@/components/systemComponents';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <nav className={styles.nav}>
              <div className={styles.logo}>
                <LogoIcon />
              </div>
              <Typography variant='p' className={styles.nav_item}>
                <ProfileIcon /> Профиль
              </Typography>
              <Typography variant='p' className={styles.nav_item}>
                <TimerIcon /> Заказы
              </Typography>
            </nav>
          </div>
          <div>
            <nav className={styles.nav}>
              <Typography variant='p' className={styles.nav_item}>
                <CartIcon /> Корзина
              </Typography>
              <Typography variant='p' className={styles.nav_item}>
                <ExitIcon /> Выход
              </Typography>

              {/* todo: add if not auth and auth */}

              <Typography variant='p' className={styles.nav_item} onClick={() => setIsOpen(true)}>
                <EnterIcon /> Вход
              </Typography>
            </nav>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
