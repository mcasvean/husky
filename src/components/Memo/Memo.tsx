import { useState, useMemo } from "react";

function Memo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const expensiveCalculation = useMemo(() => {
    console.log('Calculate...');

    let total = 0;

    for (let i = 0; i < 100000; i++) {
      total += 1;
    }

    return total;
    // if count changes, the value is recalculated
    // if input is changed value is not recalculated
  }, [count]);

  return (
    <>
      <h4>useMemo()</h4>
      <h6>Input: <input value={name} onChange={e => setName(e.target.value)} /></h6>
      <button onClick={() => setCount(prev => prev + 1)}>Count {count}</button>
      <p>{expensiveCalculation}</p>
    </>
  );
}

export default Memo;
