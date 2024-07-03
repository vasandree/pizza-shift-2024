import { FC, ButtonHTMLAttributes } from 'react';
import styles from './button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    label: string;
}

const Button: FC<ButtonProps> = ({ variant, label, ...props }) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} {...props}>
            {label}
        </button>
    );
};

export default Button;
