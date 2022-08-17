import React, {useState, useRef, useEffect} from 'react';
// this and line 5 allow mounting component to the DOM
import reactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import Sound from 'react-sound';

import Game from './components/Game.jsx';
import Timer from './components/Timer.jsx';
import Menu from './components/Menu.jsx';
import Score from './components/Score.jsx';



const root = createRoot(document.getElementById("root"));

const App = () => {
  const [modal, setModal] = useState(true);
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');
  const [endGame, setEndGame] = useState(false);

  const earnPoint = () => {
    setScore((o) => {o + 1});
  };

  useEffect(() => {
    // set last score
    var player = {};
    player.name = name;
    player.score = score;
    console.log('name',name)
    localStorage.setItem('last score', JSON.stringify(player));

    // determine if overwriting current high score
    var recent = localStorage.getItem('high score');
    // console.log('recent score', recent.score);

    localStorage.setItem('high score', JSON.stringify(player));

  }, [modal]);
  if (modal) {
    return (
      <Menu modal={modal} setModal={setModal} name={name} setName={setName} />
    );
  }
  if (score === 81) {
    return (
      <div>
        <h1>Game Over</h1>
        <h3>{name}'s Score: {score}</h3>
        <button onClick={(e) => {e.preventDefault(); setModal(false); setScore(0);}}>Reset</button>
      </div>
    );
  } else {
    return (
      <div className = "canvas-container">
        {/* <Sound
          url='./assets/bgm/deepDiver.mp3'
          playStatus={Sound.status.PLAYING}
          volume={25}
          autoLoad={true}
          loop={true}
          playFromPosition={2500}
        /> */}
        {/* <Timer /> */}
        <Score score={score}/>
        <h1>Click all the cubes!</h1>
        <Game score={score} setScore={setScore}/>
      </div>
    );
  }
}

root.render(<App />);