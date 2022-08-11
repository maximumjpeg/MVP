import React, { useState } from 'react';

const Menu = ( { modal, setModal }) => {
  if (modal) {
    return (
      // menu
      <div className="menu-container">
        <div className="menu">
          <h1>Game</h1>
          <button onClick={e => {setModal(old => (!old))}}>Start</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Menu;