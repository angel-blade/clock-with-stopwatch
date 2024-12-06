import React, { useState, useEffect, useRef } from "react";

export const Stopwatch = () => {
  const [isRunning, setisRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setisRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setisRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setisRunning(false);
  }

  function formatTime() {
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let miliseconds = Math.floor((elapsedTime % 1000 / 10));

    minutes = String(minutes).padStart(2, "0")
    seconds = String(seconds).padStart(2, "0")
    miliseconds = String(miliseconds).padStart(2, "0")

    return `${minutes}:${seconds}:${miliseconds}`;
  }



  return (
    <div className="stopwatch-container">
      <span className="stopwatch">{formatTime()}</span>
      <div className="buttons">
        <button className="startButton" onClick={start}>
          Start
        </button>
        <button className="stopButton" onClick={stop}>
          Stop
        </button>
        <button className="resetButton" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
