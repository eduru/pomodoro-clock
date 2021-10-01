import React, { useContext } from "react";
import SetPomodoro from "./components/SetPomodoro";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingContext } from "./context/SettingsContext";
import Button from "./components/Button";

function App() {
  const { pomodoro, executing, setCurrentTimer } = useContext(SettingContext);
  return (
    <div className="container">
      <h1>Pomodoro</h1>
      <small>Stop procrastinating!</small>
      {pomodoro == 0 ? (
        <SetPomodoro />
      ) : (
        <ul className="labels">
          <li>
            <Button
              title="Work"
              activeClass={executing.active === "work" && "active-label"}
              _callback={() => setCurrentTimer("work")}
            />
            <Button
              title="Short"
              activeClass={executing.active === "short" && "active-label"}
              _callback={() => setCurrentTimer("short")}
            />
            <Button
              title="Long"
              activeClass={executing.active === "long" && "active-label"}
              _callback={() => setCurrentTimer("long")}
            />
          </li>
        </ul>
      )}
      {/* <CountdownCircleTimer /> */}
    </div>
  );
}

export default App;
