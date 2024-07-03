import { FC } from 'react';
import styles from './header.module.scss';
import {CartIcon, EnterIcon, ExitIcon, LogoIcon, ProfileIcon, TimerIcon} from '../../Icons';

const Header: FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <nav className={styles.header__nav}>
                        <div className={styles.header__logo}>
                            <LogoIcon/>
                        </div>
                        <a className={styles.header__nav_item}><ProfileIcon/> Профиль</a>
                        <a className={styles.header__nav_item}><TimerIcon/> Заказы</a>
                    </nav>
                </div>
                <div className={styles.header__right}>
                    <nav className={styles.header__nav}>
                        <a className={styles.header__nav_item}><CartIcon /> Корзина</a>
                        <a className={styles.header__nav_item}><ExitIcon /> Выход</a>

                        {/*todo: add if not auth and auth*/}

                        <a className={styles.header__nav_item}><EnterIcon /> Вход</a>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
