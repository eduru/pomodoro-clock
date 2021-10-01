import React, { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountDownAnimation = ({
  key = 1,
  timer = 20,
  animate = true,
  children,
}) => {
  const { stopTimer } = useContext(SeetingContext);
  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      duration={timer * 60}
      colors={("#fe6f6b", 0.33)}
      strokeWidth={6}
      trailColor="#151932"
      onComplete={() => {
        stopAnimate();
      }}
    >
      {{ children }}
    </CountdownCircleTimer>
  );
};

export default CountDownAnimation;
