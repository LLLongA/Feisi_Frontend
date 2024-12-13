import React from 'react';
import './UsageHistory.css';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';

const ApplyPage = () => {
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
    alert('显示通知窗口'); // 这是一个简单的示例
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="left-icon">
          <img src={home} alt="Home" onClick={handleHomeClick} />
        </div>
        <div className="right-icons">
          <img src={settings} alt="Settings" onClick={handleSettingsClick} />
          <img src={notifications} alt="Notifications" onClick={handleNotificationsClick} />
          <img src={person} alt="Profile" onClick={handleProfileClick} />
        </div>
      </nav>
      <h1>用量申请</h1>
      <div className="main-content">
        <div className="form-section">
          <div className="form-group">
            <label>申请人信息</label>
            <input type="text" value="刘梦涵（互联网产品部-AI学科-产品经理实习生）" disabled />
          </div>
          <div className="form-group">
            <label>申请模块</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input type="checkbox" id="module1" defaultChecked />
                <label htmlFor="module1">文本转语音</label>
                <p>将文本转换成高保真、个性化的人类声音</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="module2" />
                <label htmlFor="module2">模块***</label>
                <p>**************</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="module3" />
                <label htmlFor="module3">模块****</label>
                <p>**************</p>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="module4" />
                <label htmlFor="module4">模块111</label>
                <p>qwertyuiop<br />asdfghgh</p>
              </div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="reason">申请理由</label>
            <textarea id="reason" placeholder="请在此填写你的申请理由，平台会通知管理员进行审核"></textarea>
          </div>
        </div>
        <div className="status-section">
          <div className="status-item">
            <span>申请状态</span>
            <span className="status-approved">已通过</span>
          </div>
          <div className="status-item">
            <span>审批人</span>
            <span>刘梦涵</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
