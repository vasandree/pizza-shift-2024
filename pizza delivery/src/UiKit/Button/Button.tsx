import { FC, ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react';
import styles from './button.module.scss';
import { Typography } from '../index.ts';
import { getClassName } from '../../helpers';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary';
  children: ReactNode;
  style?: CSSProperties;
}

export const Button: FC<ButtonProps> = ({ className, variant = 'secondary', children, style, ...props }) => (
  <button className={getClassName([styles.button, styles[variant], className || ''])} style={style} {...props}>
    <Typography variant="p">{children}</Typography>
  </button>
);
