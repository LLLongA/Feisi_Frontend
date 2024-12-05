import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import home from './public/home_icon.png';

const HomePage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="left-icon">
          <img src={home} alt="Home" />
        </div>
        <div className="right-icons">
          <img src="/path/to/settings-icon.png" alt="Settings" />
          <img src="/path/to/notifications-icon.png" alt="Notifications" />
          <img src="/path/to/profile-icon.png" alt="Profile" />
        </div>
      </nav>
      <div className="content">
        <div className="card">文本转音频</div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
};

export default HomePage;
