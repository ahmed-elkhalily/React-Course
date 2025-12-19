import { useEffect, useState } from "react";

export const Timer = () => {
  const [timeInMSec, setTimeInMSec] = useState(0);
  useEffect(() => {
    console.log("initial rendering only ");

    const timerInterval = setInterval(() => {
      console.log("running");
      setTimeInMSec((prev) => prev + 1);
    }, 1000);

    // clear interval when unmount component
    // to avoid interval running in the background of client side .
    return () => {
      clearInterval(timerInterval);
    };
  }, []);
  return <span>{timeInMSec} sec</span>;
};
