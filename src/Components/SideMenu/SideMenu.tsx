import React from 'react';
import Me from '../../Assets/me.png';
import './SideMenu.css';
import email from '../../Assets/email.png';
import linkedIn from '../../Assets/linkedin.png';
import gitHub from '../../Assets/github.png';

const SideMenu: React.FC = () => {
  return (
    <div className="sticky-container">
      <div className="side-menu-container">
        <img id="me" src={Me} alt="A very handsome gentleman" />
        <h1>Joshua Hume</h1>
        <p className="side-menu-text">
          Hello. My name is Joshua and I am a Tokyo-based <span style={{ textDecoration: 'line-through' }}>nerd</span>{' '}
          computer programmer. I like making things, breaking things, and putting them back together again. Please have
          a look through my projects.
        </p>
        <h3>Programming</h3>
        <div className="side-menu-text side-menu-list">
          JavaScript ⭐️ TypeScript ⭐️ Ruby ⭐️ Rails ⭐️ Node ⭐ Express ⭐️React ⭐️ SQL ⭐️ Web Audio ⭐️ Phaser
        </div>
        <h3>Cycling‍</h3>
        <div className="side-menu-text">
          Unbeknownst to many I am an adept bicycle mechanic, restorer of vintage bicycles, explorer of back roads, and
          maker of maps.
        </div>
        <h3>Music</h3>
        <div className="side-menu-text">
          I am the founder and sole full-time member of the Tokyo / Austin based experimental music group{' '}
          <a href="https://soundcloud.com/lead-sister-ii">Lead Sister II.</a>
        </div>
        <h3>Contact</h3>
        <div className="sns-box">
          <div
            className="side-menu-text"
            style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between' }}
          >
            <a href="https://www.linkedin.com/in/joshua-hume-0259691ab/" target="_blank" rel="noreferrer">
              <img src={linkedIn} alt="linked" />
            </a>
            <a href="https://github.com/HatAndBread" target="_blank" rel="noreferrer">
              <img src={gitHub} alt="github" />
            </a>
            <a href="mailto: valencelectron@hotmail.com">
              <img src={email} alt="email" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
