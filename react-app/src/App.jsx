import { useState } from "react";

import { Navbar } from "./components/Navbar/NavBar";
import { ModeController } from "./components/mode-controller/ModeController";
import { MODES } from "./constants/modes";

import "./assets/app.css";

export default function App() {
  const [mode, setMode] = useState(MODES.light);

  return (
    <div>
      <Navbar mode={mode} />
      <hr />

      <ModeController mode={mode} setMode={setMode} />
    </div>
  );
}
