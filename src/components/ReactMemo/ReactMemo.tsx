import { useState, useCallback } from "react";
import Child from "./Child";

function ReactMemo() {
  console.log('Parent was rendered');

  const [count, setCount] = useState(0);

  // this function is memoized, and the same reference is kept when sending as props
  // that means the Child component will not re-render when count is changed
  const handleClick = useCallback(() => {
    console.log('Click!!!');
  }, []);

  return (
    <>
      <h4>React.memo()</h4>
      <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
      <Child name="Mariusica" onClick={handleClick} />
    </>
  );
}

export default ReactMemo;
