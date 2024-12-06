import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import home from './public/home_icon.png';
import setting from './public/settings.png';
import notifications from './public/notifcations.png';
import person from './public/person.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="left-icon">
          <img src={home} alt="Home" />
        </div>
        <div className="right-icons">
          <img src={setting} alt="Settings" />
          <img src={notifications} alt="Notifications" />
          <img src={person} alt="Profile" />
        </div>
      </nav>
      <div className="content">
        <Link to="/text-to-speech" className="card">文本转音频</Link>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default HomePage;
