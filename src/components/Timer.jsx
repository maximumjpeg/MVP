import React from 'react';
import useTimer from 'easytimer-react-hook';

export default () => {
  const [timer, isTargetAchieved] = useTimer({countdown: true, startValues: {seconds: 5}, target: {seconds: 0}, updateWhenTargetAchieved: true});

  timer.start();

  return <div>{timer.getTimeValues().toString()}</div>;
};