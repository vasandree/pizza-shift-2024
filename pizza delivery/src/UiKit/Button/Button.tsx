import {FC, ButtonHTMLAttributes, ReactNode, CSSProperties} from 'react';
import styles from './button.module.scss';
import {Typography} from "../index.ts";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    children: ReactNode;
    style?: CSSProperties
}

const Button: FC<ButtonProps> = ({ variant, children, style, ...props}) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} style={style} {...props}>
            <Typography variant={"p"}>{children}</Typography>
        </button>
    );
};

export default Button;
