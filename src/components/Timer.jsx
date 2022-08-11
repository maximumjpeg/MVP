import React from 'react';
import useTimer from 'easytimer-react-hook';

export default () => {
  const [timer, isTargetAchieved] = useTimer();

  timer.start({countdown: true, startValues: {seconds: 5}, target: {seconds: 0}});

  return <div>{timer.getTimeValues().toString()}</div>;
};