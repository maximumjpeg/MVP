import React, {useState, useRef, useEffect} from 'react';
// this and line 5 allow mounting component to the DOM
import reactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import Game from './components/Game.jsx';
import Timer from './components/Timer.jsx';
import Menu from './components/Menu.jsx';
import Score from './components/Score.jsx';



const root = createRoot(document.getElementById("root"));

const App = () => {
  const [modal, setModal] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(score));
  }, [score]);
  if (modal) {
    return (
      <Menu modal={modal} setModal={setModal} />
    );
  } else {
    return (
      <div className = "canvas-container">
        <Timer />
        <Score score={score}/>
        <h1>3D Puzzle Mini Game!</h1>
        <Game score={score} setScore={setScore}/>
      </div>
    );
  }
}

root.render(<App />);