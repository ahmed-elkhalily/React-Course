import { useState, useEffect } from "react";
import "./App.css";
import Counter from "./counter";

// component life cycle
// 1. mount
// 2. init
// 3. render
// 4. update
// 5. unmount

function App() {
  const [showError, setShowError] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  }, [count]);

  useEffect(() => {
    console.log("Show Error Message");
  }, [showError]);

  return (
    <div>
      <Counter count={count} setCount={setCount} />
      {showError ? (
        <div style={{ color: "red" }}>you must be positive always !!!</div>
      ) : null}
    </div>
  );
}

export default App;
