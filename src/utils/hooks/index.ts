import { useEffect, useRef, useState } from "react";

interface CountDownProps {
  delay?: number;
  durationInSec?: number;
}

const DEFAULT_COUNT = 30;

export const useCountDown = (countDownOptions?: CountDownProps) => {
  const { delay = 1000, durationInSec = DEFAULT_COUNT } =
    countDownOptions ?? {};
  const [count, setCount] = useState(durationInSec);
  const intervalId = useRef<any>(null);

  const handleResetCount = () => {
    setCount(durationInSec);
  };

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, delay);
  }, []);

  useEffect(() => {
    if (count === 0) clearInterval(intervalId.current);
  }, [count]);

  return {
    count,
    handleResetCount,
  };
};
