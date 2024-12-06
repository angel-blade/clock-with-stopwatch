import React, { useState, useEffect } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);



  function formatTime() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}`;
  }

    function addZero(n){
    return (n < 10 ? "0" : '') + n
}

  return (
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
  );
};
