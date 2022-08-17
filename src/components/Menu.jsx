import React, { useState } from 'react';

const Menu = ( { modal, setModal, name, setName }) => {
  if (modal) {
    return (
      // menu
      <div className="menu-container">
        <div className="menu">
          <h1>Cloudy Cubes</h1>
          <label>your initials?</label><br></br>
          <input autocomplete="off" type="text" name="name" onChange={(e) => {setName(e.target.value)}}></input><br></br>
          <button onClick={e => {setModal(old => (!old));}}>Start</button>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Menu;