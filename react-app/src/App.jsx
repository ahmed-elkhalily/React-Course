import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isTaskValid, setIsTaskValid] = useState(true);

  function addTaskToTodoList(event) {
    event.preventDefault();
    if (!task) {
      setIsTaskValid(false);
      return;
    }

    setIsTaskValid(true);
    setTodoList((prev) => {
      return [...prev, task];
    });

    setTask("");
  }

  return (
    <div>
      <h1 className="heading">My First TODO</h1>
      <form className="form">
        <div className="form-control">
          <label>Task Name</label>
          <input
            className={`input ${!isTaskValid ? "error" : ""}`}
            value={task}
            onChange={(event) => {
              if (task) setIsTaskValid(true);
              setTask(event.target.value);
            }}
            placeholder="please add your task "
          />
          {!isTaskValid ? <small>Task is required</small> : null}
        </div>
        <button onClick={addTaskToTodoList}>Add Task</button>
      </form>
      <hr></hr>
      <div>
        <h4>Task Items</h4>
        <ul>
          {todoList.map((task, index) => {
            return <li key={index}>{task}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
