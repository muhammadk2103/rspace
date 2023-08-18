import { useState, useEffect } from 'react';

import './Timer.css';

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let timerInterval;

    if (isRunning) {
      timerInterval = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div className="timer-container">
      <h1 className="timer">Current Time: {time}</h1>
      {isRunning ? (
        <button className="btn-stop" onClick={handleStop}>Stop</button>
      ) : (
        <button className="btn-start" onClick={handleStart}>Start</button>
      )}
    </div>
  );
};

export default Timer;