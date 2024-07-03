import { FC } from 'react';
import styles from './header.module.scss';
import {CartIcon, EnterIcon, ExitIcon, LogoIcon, ProfileIcon, TimerIcon} from '../../Icons';
import {Typography} from "../../UiKit";

const Header: FC = () => {

    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__left}>
                    <nav className={styles.header__nav}>
                        <div className={styles.header__logo}>
                            <LogoIcon/>
                        </div>
                        <Typography variant={"p"} className={styles.header__nav_item}><ProfileIcon/> Профиль</Typography>
                        <Typography variant={"p"} className={styles.header__nav_item}><TimerIcon/> Заказы</Typography>
                    </nav>
                </div>
                <div className={styles.header__right}>
                    <nav className={styles.header__nav}>
                        <Typography variant={"p"} className={styles.header__nav_item}><CartIcon /> Корзина</Typography>
                        <Typography variant={"p"} className={styles.header__nav_item}><ExitIcon /> Выход</Typography>

                        {/*todo: add if not auth and auth*/}

                        <Typography variant={"p"} className={styles.header__nav_item}><EnterIcon /> Вход</Typography>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
