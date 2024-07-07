import { FC, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import styles from './button.module.scss';
import { getClassName } from '../../../utils/helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({ className, variant = 'secondary', children, style, ...props }) => (
  <button className={getClassName([styles.button, styles[variant], className || ''])} style={style} {...props}>
    <p>{children}</p>
  </button>
);
