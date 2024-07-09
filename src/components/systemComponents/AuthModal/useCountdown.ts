import { useState, useEffect, useRef } from 'react';

export const useCountdown = (initialTime: number) => {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (time > 0) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [time]);

  const resetTimer = () => {
    setTime(initialTime);
  };

  return { time, resetTimer, setTime };
};
