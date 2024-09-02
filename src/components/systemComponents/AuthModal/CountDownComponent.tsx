import { useCountdown } from '@components/AuthModal/useCountdown.ts';

import { Button, Typography } from '@/components/uiKit';

import styles from './AuthModal.module.scss';

interface CountDownComponentProps {
  initialTime: number;
  handleSendNewCode: () => void;
}

export const CountDownComponent = ({ initialTime, handleSendNewCode }: CountDownComponentProps) => {
  const { time, resetTimer } = useCountdown(initialTime);

  return (
    <>
      {time > 0 ? (
        <Typography variant='p' type='secondary' className={styles.resend_code}>
          Запросить код повторно можно через {time} секунд
        </Typography>
      ) : (
        <Button
          variant='secondary'
          onClick={() => {
            handleSendNewCode();
            resetTimer();
          }}
          className={styles.resend_code_btn}
        >
          Отправить код повторно
        </Button>
      )}
    </>
  );
};
