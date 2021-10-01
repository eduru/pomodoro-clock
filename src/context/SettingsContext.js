import React, { useState, createContext } from "react";

export const SettingContext = createContext();

const SettingsContextProvider = (props) => {
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnImate] = useState(false);

  const startTimer = () => {
    setStartAnImate(true);
  };
  const pauseTimer = () => {
    setStartAnImate(false);
  };
  const stopTimer = () => {
    setStartAnImate(false);
  };

  const updateExecute = (updateSettings) => {
    setExecuting(updateSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  return (
    <SettingContext.Provider value={{ stopTimer, updateExecute }}>
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
