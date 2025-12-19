import { Fragment, useState } from "react";

// components
import { NavLink } from "react-router";

// styles
import "./NavBar.css";

export function Navbar({ mode }) {
  const [showSignup, setShowSignup] = useState(false);

  function changeShowSignup() {
    setShowSignup((prev) => !prev);
  }

  return (
    <Fragment>
      <div className={`navbar ${mode === "dark" ? "dark-bg" : ""}`}>
        <ul>
          <li className={`nav-item ${mode === "dark" ? "dark-text" : ""}`}>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className={`nav-item ${mode === "dark" ? "dark-text" : ""}`}>
            <NavLink to={"/about"}>About</NavLink>
          </li>
        </ul>
        <ul>
          <button onClick={changeShowSignup}>Signup</button>
        </ul>
      </div>
      {showSignup && <section>Signup Section</section>}
    </Fragment>
  );
}
