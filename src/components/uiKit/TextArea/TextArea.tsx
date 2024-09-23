import type { TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import styles from './TextArea.module.scss';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ error, ...props }, ref) => {
  return (
    <div className={styles.textarea_wrapper}>
      <textarea ref={ref} className={styles.textarea} {...props} />
    </div>
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };
