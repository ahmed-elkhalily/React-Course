import { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();
  // }, []);

  function consoleTheInputDom() {
    console.log(inputRef);
  }

  function controlDocEle() {
    inputRef.current.append(" This text was appended.", " Another string.");
  }

  return (
    <form>
      <div ref={inputRef} id="div">
        hello
      </div>
      <input />
      <button type="button" onClick={controlDocEle}>
        focus on the input
      </button>
      <button type="button" onClick={consoleTheInputDom}>
        console
      </button>
    </form>
  );
}

export default App;
