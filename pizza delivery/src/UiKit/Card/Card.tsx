import {CSSProperties, FC, ReactNode} from 'react';
import styles from '../Card/card.module.scss';
import {getClassName} from "../../helpers";

interface CardProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    onClick?: () => void
}

export const Card: FC<CardProps> = ({className, style, children, onClick}) =>
    (
        <div className={getClassName([className || '', styles.card])} style={style} onClick={onClick}>
            {children}
        </div>
    );