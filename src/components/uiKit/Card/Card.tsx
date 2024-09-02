import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}
export const Card: FC<CardProps> = ({ className, children, onClick }) => (
  <div role='presentation' className={clsx(styles.card, className)} onClick={onClick}>
    {children}
  </div>
);
