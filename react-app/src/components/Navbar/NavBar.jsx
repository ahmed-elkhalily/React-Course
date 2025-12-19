import { Fragment, useState } from "react";

// components
import { NavLink } from "react-router";
import { NAV_ITEMS } from "../../constants/nav-items";

// styles
import "./NavBar.css";

export function Navbar({ mode }) {
  const [showSignup, setShowSignup] = useState(false);

  function changeShowSignup() {
    setShowSignup((prev) => !prev);
  }

  return (
    <Fragment>
      <div
        className={`navbar ${
          mode === "dark" ? "dark-bg" : mode === "reading" ? "reading-bg" : ""
        }`}
      >
        <ul>
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.label} mode={mode} item={item} />
          ))}
        </ul>
        <button onClick={changeShowSignup}>Signup</button>
      </div>
      {showSignup && <section>Signup Section</section>}
    </Fragment>
  );
}

export function CustomizedNavLink({ to, label }) {
  return <NavLink to={to}>{label}</NavLink>;
}

function NavItem({ mode, item }) {
  return (
    <li className={`nav-item ${mode === "dark" ? "dark-text" : ""}`}>
      <CustomizedNavLink to={item.to} label={item.label} />
    </li>
  );
}
