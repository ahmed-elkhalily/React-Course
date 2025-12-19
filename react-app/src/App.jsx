import { useEffect, useRef, useState } from "react";
import "./App.css";

function fetchUserFromEndpoint() {
  const user = {
    name: "ahmed",
    age: "25",
  };
  return user;
}

function App() {
  const [value, setValue] = useState({
    name: "",
    age: "",
  });
  const initValRef = useRef(null);

  useEffect(() => {
    const user = fetchUserFromEndpoint();
    initValRef.current = user;
    setValue(user);
  }, []);

  function disableButton() {
    // name is not change (and) age is not change -> disable
    if (
      value.name === initValRef.current?.name &&
      value.age === initValRef.current?.age
    )
      return true;
    else return false;
  }

  return (
    <form>
      <input
        value={value.name}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            name: e.target.value,
          }))
        }
      />
      <input
        value={value.age}
        onChange={(e) =>
          setValue((prev) => ({
            ...prev,
            age: e.target.value,
          }))
        }
      />
      <button disabled={disableButton()}>Submit</button>
    </form>
  );
}

export default App;
