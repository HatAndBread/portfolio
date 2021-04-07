import React from 'react';
import Me from '../../Assets/me.png';
import './SideMenu.css';

const SideMenu: React.FC = () => {
  return (
    <div className="side-menu-container">
      <img id="me" src={Me} alt="A very handsome gentleman" />
      <h1>Joshua Hume</h1>
      <p className="side-menu-text side-menu-list">
        Hello. My name is Joshua and I am a <span style={{ textDecoration: 'line-through' }}>nerd</span> computer
        programmer. I like making things, breaking things, and putting them back together again. Please have a look
        through my projects.
      </p>
      <h3>Programming</h3>
      <div className="side-menu-text side-menu-list">
        JavaScript ⭐️ TypeScript ⭐️ Ruby ⭐️ Rails ⭐️ React ⭐️ SQL ⭐️ Web Audio ⭐️ Phaser
      </div>
      <h3>Cycling‍</h3>
      <div className="side-menu-text side-menu-list">
        Unbeknownst to many I am an adept bicycle mechanic, restorer of vintage bicycles, explorer of back roads, and
        maker of maps.
      </div>
    </div>
  );
};

export default SideMenu;
