import { FC, ReactNode} from 'react';
import styles from './Card.module.scss';
import {clsx} from "clsx";

interface CardProps {
    className?: string;
    children?: ReactNode;
    onClick?: () => void
}

export const Card: FC<CardProps> = ({className, children, onClick}) => (
    <div className={clsx( styles.card, className)} onClick={onClick}>
        {children}
    </div>
);