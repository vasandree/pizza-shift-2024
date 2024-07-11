import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children?: ReactNode;
  className?: string;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'secondary',
  children,
  type = 'button',
  style,
  ...props
}) => (
  <button
    type={type}
    className={clsx(styles.button, styles[variant], className)}
    style={style}
    {...props}
  >
    {children}
  </button>
);
