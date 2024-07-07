import React, { FC, useEffect } from 'react';
import styles from './modal.module.scss';
import { CrossIcon } from '../../Icons';

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children?: React.ReactNode;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={`${styles.modalOverlay} ${isOpen ? styles.open : ''}`} onClick={handleClose}>
            <div className={`${styles.modalContent} ${isOpen ? styles.open : ''} ${className || ''}`}>
                <button className={styles.closeButton} onClick={onClose}>
                    <CrossIcon />
                </button>
                {children}
            </div>
        </div>
    );
};
