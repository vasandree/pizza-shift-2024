import React, { FC, useEffect, useState } from 'react';
import styles from './modal.module.scss';
import {CrossIcon} from "../../Icons";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children?: any;
}

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    const [isVisible, setIsVisible] = useState(isOpen);

    //todo: make this with function
    const classNames = [
        styles.modalOverlay,
        isOpen ? styles.open : '',
        className || ""
    ].join(' ').trim()


    useEffect(() => {
        if (isOpen) {
            setIsVisible(true);
        } else {
            const timer = setTimeout(() => setIsVisible(false), 200);
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!isVisible) return null;

    const handleClose = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className={classNames} onClick={handleClose}>
            <div className={`${styles.modalContent} ${isOpen ? styles.open : ''}`}>
                <button className={styles.closeButton} onClick={onClose}>
                   <CrossIcon/>
                </button>
                {children}
            </div>
        </div>
    );
};

