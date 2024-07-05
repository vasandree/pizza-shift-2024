import {CSSProperties, FC, ReactNode} from 'react';
import styles from '../Card/card.module.scss';
import {getClassName} from "../../helpers";

interface CardProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
}

export const Card: FC<CardProps> = ({className, style, children}) =>
    (
        <div className={getClassName([className || '', styles.card])} style={style}>
            {children}
        </div>
    );