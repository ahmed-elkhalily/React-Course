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
          <li key={index}>
            <span>{listItem.title}</span>
            <span>{`${listItem.progress} %`}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default App;
