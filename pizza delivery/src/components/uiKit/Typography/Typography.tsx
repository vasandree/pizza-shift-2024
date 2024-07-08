import type { CSSProperties, FC, ReactNode } from 'react';
import { clsx } from 'clsx';

import styles from './typography.module.scss';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  type?: 'regular' | 'secondary' | 'success' | 'strong' | 'warning' | 'danger' | 'italic' | 'link';
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
}

export const Typography: FC<TypographyProps> = ({
  variant = 'p',
  type = 'regular',
  className,
  style,
  children,
  onClick
}) => {
  const Component = variant;
  return (
    <Component
      onClick={onClick}
      className={clsx(styles.typography, styles[variant], styles[type], className)}
      style={style}
    >
      {children}
    </Component>
  );
};
