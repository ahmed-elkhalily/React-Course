import { NavLink } from "react-router";
import "./NavBar.css";

export function Navbar({ mode }) {
  console.log("children is rendering ");
  return (
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
        <li className={`nav-item ${mode === "dark" ? "dark-text" : ""}`}>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li className={`nav-item ${mode === "dark" ? "dark-text" : ""}`}>
          <NavLink to={"/projects"}>Projects</NavLink>
        </li>
      </ul>
    </div>
  );
}
