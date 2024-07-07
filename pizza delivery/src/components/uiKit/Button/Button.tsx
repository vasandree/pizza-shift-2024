import {FC, ButtonHTMLAttributes, ReactNode} from 'react';
import styles from './Button.module.scss';
import {clsx} from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    children?: ReactNode;
    className?: string;
}

export const Button: FC<ButtonProps> = ({className, variant = 'secondary', children, style, ...props}) => (
    <button className={clsx(styles.button, styles[variant], className)} style={style} {...props}>
        {children}
    </button>
);
