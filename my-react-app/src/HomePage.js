import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import home from './public/home_icon.png';
import setting from './public/settings.png';
import notifications from './public/notifications.png'; // 修正拼写错误
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home'); // 跳转到主页
  };

  const handleSettingsClick = () => {
    navigate('/admin'); // 跳转到管理后台
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 跳转到个人中心页面
  };

  const handleNotificationsClick = () => {
    // 显示通知窗口
    // 这里你可以实现一个状态来控制通知窗口的显示
    alert('显示通知窗口'); // 这是一个简单的示例
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="left-icon">
          <img src={home} alt="Home" onClick={handleHomeClick} />
        </div>
        <div className="right-icons">
          <img src={setting} alt="Settings" onClick={handleSettingsClick} />
          <img src={notifications} alt="Notifications" onClick={handleNotificationsClick} />
          <img src={person} alt="Profile" onClick={handleProfileClick} />
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
