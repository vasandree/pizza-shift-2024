import { CSSProperties, FC, ReactNode } from 'react';
import styles from '../Card/card.module.scss';

interface CardProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    onClick?: () => void
}

const Card: FC<CardProps> = ({ className, style, children, ...props }) => {
    const classNames = [className || '', styles.card].join(' ').trim();

    return (
        <div className={classNames} style={style} {...props}>
            {children}
        </div>
    );
};

export default Card;
