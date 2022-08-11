import React from 'react';
// this and line 5 allow mounting component to the DOM
import reactDOM from 'react-dom';

import { createRoot } from 'react-dom/client';

import Game from './Game.jsx';

const root = createRoot(document.getElementById("root"));

const App = () => {
  return (
    <div>
      {/* <h1>3D Puzzle Mini Game!</h1>
      <Game /> */}
    </div>
  );
}

root.render(<App />);