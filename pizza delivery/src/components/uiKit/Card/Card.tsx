import type { FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './Card.module.scss';

interface CardProps {
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
}
// как пофиксить?
// ESLint: Avoid non-native interactive elements. If using native HTML is not possible, add an appropriate role and support for tabbing, mouse, keyboard, and touch inputs to an interactive content element. (jsx-a11y/no-static-element-interactions)
export const Card: FC<CardProps> = ({ className, children, onClick }) => (
  <div className={clsx(styles.card, className)} onClick={onClick}>
    {children}
  </div>
);
