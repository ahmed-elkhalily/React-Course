import "./App.css";

function App() {
  const todoLIst = [
    {
      title: "Finish My Homework",
      progress: 100,
    },
    {
      title: "Developing Ecommerce App",
      progress: 25,
    },
    {
      title: "Cleaning My Bedroom",
      progress: 0,
    },
  ];
  // list
  return (
    <ul>
      {todoLIst.map((listItem, index) => {
        return (
          <li className="task" key={index}>
            <span className="title">{listItem.title.toUpperCase()}</span>
            <span
              className={`progress ${
                listItem.progress === 100 ? "completed" : "not-yet"
              }`}
            >{`${listItem.progress} %`}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
