import { Button, Modal, QuestionIcon, Typography } from '@/components/uiKit';

import styles from './CancelModal.module.scss';

interface CancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: () => void;
}

export const CancelModal = ({ isOpen, onClose, onSubmit }: CancelModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} className={styles.modal}>
    <div className={styles.modalContainer}>
      <div className={styles.questionIcon}>
        <QuestionIcon />
      </div>
      <Typography variant='h2' className={styles.modalTitle}>
        Отменить заказ?
      </Typography>
      <div className={styles.buttons}>
        <Button variant='secondary' className={styles.secondary} onClick={onSubmit}>
          Отменить
        </Button>
        <Button variant='primary' className={styles.primary} onClick={onClose}>
          Не отменять
        </Button>
      </div>
    </div>
  </Modal>
);
