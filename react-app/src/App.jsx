import { useState } from "react";
import { Navbar } from "./components/Navbar/NavBar";
import { ModeController } from "./components/mode-controller/ModeController";
import "./assets/app.css";

export default function App() {
  const [mode, setMode] = useState("light");
  // test to this component rendering
  console.log("render the parent ");

  function convertMode() {
    if (mode === "light") setMode("dark");
    else setMode("light");
  }
  return (
    <div>
      <Navbar mode={mode} />
      <hr />
      <ModeController mode={mode} convertMode={convertMode} />
    </div>
  );
}
