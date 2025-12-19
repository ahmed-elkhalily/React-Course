import { useState } from "react";
import { Timer } from "./Timer";
import "./App.css";

function App() {
  const [showTimer, setShowTimer] = useState(false);

  return (
    <div>
      {showTimer && <Timer />}
      <button onClick={() => setShowTimer((prev) => !prev)}>
        {showTimer ? "Hide Timer" : "Show Timer"} Component
      </button>
    </div>
  );
}

export default App;
