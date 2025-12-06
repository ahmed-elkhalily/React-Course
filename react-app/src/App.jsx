import "./App.css";

function App() {
  const todoLIst = [
    {
      title: "Finish My Homework",
      progress: 100,
    },
    {
      title: "Developing New Web App",
      progress: 52,
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

  function generateProgressClassName(progress) {
    if (progress === 100) return "completed";
    else if (progress > 0) return "onwork";
    else return "not-yet";
  }

  return (
    <ul>
      {todoLIst.map((listItem, index) => {
        return (
          <li className="task" key={index}>
            <span className="title">{listItem.title.toUpperCase()}</span>
            <span
              className={`progress ${generateProgressClassName(
                listItem.progress
              )}`}
            >{`${listItem.progress}%`}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
