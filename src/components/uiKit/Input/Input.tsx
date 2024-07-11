import type { InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(styles.input, className, { [styles.disabled]: props.disabled })}
        {...props}
        placeholder={placeholder}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
