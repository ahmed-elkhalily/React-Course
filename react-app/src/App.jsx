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
    return progress === 100 ? "completed" : progress > 0 ? "onwork" : "not-yet";
  }

  return (
    <ul>
      {todoLIst.map((listItem, index) => {
        return (
          <li
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 50,
            }}
            key={index}
          >
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
