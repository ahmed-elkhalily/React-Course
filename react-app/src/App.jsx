import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const status =
    countRef.current < count
      ? "value inc. ↑↑↑↑"
      : countRef.current === count
      ? "value eq. ==="
      : "value dec.↓↓↓↓↓";

  return (
    <div>
      <div>count: {count}</div>
      <div>{status}</div>
      <button
        onClick={() => {
          countRef.current = count;
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          countRef.current = count;
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
