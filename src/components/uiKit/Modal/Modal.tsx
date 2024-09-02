import type { FC, MouseEvent, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { CrossIcon } from '@ui/icons';
import { clsx } from 'clsx';

import { useHiddenScroll } from './useHiddenScroll.ts';

import styles from './Modal.module.scss';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children?: ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
  useHiddenScroll(isOpen);

  const handleClose = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const modalContent = (
    <div className={clsx(styles.overlay, isOpen ? styles.open : '')} onClick={handleClose}>
      <div className={clsx(styles.content, className, isOpen ? styles.open : '')}>
        <button type='button' className={styles.closeButton} onClick={onClose}>
          <CrossIcon />
        </button>
        {children}
      </div>
    </div>
  );

  return ReactDOM.createPortal(modalContent, document.getElementById('modal-root'));
};
