import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const Timer = forwardRef(function Timer(props, ref) {
  const [elapsedTime, setErapsedTime] = useState(0);
  const intervalRef = useRef(null);
  function startTimer() {
    intervalRef.current = window.setInterval(() => {
      setErapsedTime(elapsedTime => elapsedTime + 10);
    }, 10);
  }
  function stopTimer() {
    clearInterval(intervalRef.current);
  }
  function clearTimer() {
    clearInterval(intervalRef.current);
    setErapsedTime(0);
  }
  useImperativeHandle(ref, () => {
    return {
      startTimer, stopTimer, clearTimer
    }
  })
  return (
    <p>{Math.floor(elapsedTime / (1000 * 60 * 60))}:{Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60))}:{Math.floor((elapsedTime % (1000 * 60)) / 1000)}:{elapsedTime % 1000}</p>
  )
})

export default Timer;