import { Fragment } from "react";

export function ModeController({ mode, convertMode }) {
  console.log("mode conroller is rendering ");
  return (
    <Fragment>
      <div>mode: {mode}</div>
      <button onClick={convertMode}>Convert Mode</button>
    </Fragment>
  );
}
