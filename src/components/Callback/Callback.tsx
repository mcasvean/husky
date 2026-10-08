import { useState, useCallback, useRef } from "react";
import Child from "./Child";

function Callback() {
  console.log('Callback component');

  const [count, setCount] = useState(0);

  // with useCallback
  const handleClick = useCallback(() => {
    console.log('Click...');
  }, []);

  // without useCallback
  // const handleClick = () => {
  //   console.log('Click...');
  // };

  // Check functions equality
  const prevFunction = useRef(handleClick);

  console.log(`Same function: ${prevFunction.current === handleClick}`);

  return (
    <>
      <h4>useCallback()</h4>
      <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
      <Child onClick={handleClick} />
    </>
  );
}

export default Callback;
