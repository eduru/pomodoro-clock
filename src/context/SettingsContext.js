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

  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const setCurrentTimer = (active_state) => {
    updateExecute({ ...executing, active: active_state });
    setTimerTime(executing);
  };

  const updateExecute = (updateSettings) => {
    setExecuting(updateSettings);
    setTimerTime(updateSettings);
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

  const children = ({ remainingTimer }) => {
    const minutes = Math.floor(remainingTimer / 60);
    const seconds = remainingTimer % 60;
    return `${minutes}:${seconds}`;
  };

  return (
    <SettingContext.Provider
      value={{
        pomodoro,
        executing,
        startAnimate,
        startTimer,
        pauseTimer,
        stopTimer,
        SettingsBtn,
        setCurrentTimer,
        updateExecute,
        children,
      }}
    >
      {props.children}
    </SettingContext.Provider>
  );
};

export default SettingsContextProvider;
