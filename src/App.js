import React, { useContext } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function App() {
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Stop procrastinating!</small>
      <SetPomodoro />
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
