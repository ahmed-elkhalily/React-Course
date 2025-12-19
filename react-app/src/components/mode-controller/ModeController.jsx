import { Fragment } from "react";
import { MODES } from "../../constants/modes";

export function ModeController({ mode, setMode }) {
  function handleOnChangeSelect(event) {
    const value = event.target.value;
    setMode(value);
  }

  return (
    <Fragment>
      <div>mode: {mode}</div>
      <select value={mode} onChange={handleOnChangeSelect}>
        <option value={MODES.dark}>dark</option>
        <option value={MODES.light}>light</option>
        <option value={MODES.reading}>reading</option>
      </select>
    </Fragment>
  );
}
