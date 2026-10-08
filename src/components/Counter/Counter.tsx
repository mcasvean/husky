import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(0);
  const [showCounter, setShowCounter] = useState(false);

  const onClick = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  const handleResize = () => {
    console.log(window.innerWidth);
  }

  const counterContent = (
    <>
      <button onClick={() => setShowCounter(prev => !prev)}>{showCounter ? "Hide" : "Show"} Counter</button>
      {
        showCounter
          ? <>
            <h3>Count: {count}</h3>
            <button onClick={onClick}>+</button>
            <h2>Time: {time}</h2>
          </>
          : null
      }
    </>
  );

  useEffect(() => {
    if (!showCounter) {
      setTime(0);
      return;
    }

    const interval = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, [showCounter]);

  return (
    <>
      {counterContent}
    </>
  );
}

export default Counter;
