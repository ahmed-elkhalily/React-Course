import { NavLink } from "react-router";
function App() {
  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <NavLink to="/about-us">About Us</NavLink>
      </div>
      <div>
        <NavLink to="/users">Users</NavLink>
      </div>
    </div>
  );
}

export default App;
