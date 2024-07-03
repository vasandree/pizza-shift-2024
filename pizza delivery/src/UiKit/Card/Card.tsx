import { CSSProperties, FC, ReactNode } from 'react';
import styles from '../Card/card.module.scss';

interface CardProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

const Card: FC<CardProps> = ({ className, style, children }) => {
    const classNames = [className || '', styles.card].join(' ').trim();

    return (
        <div className={classNames} style={style}>
            {children}
        </div>
    );
};

export default Card;
