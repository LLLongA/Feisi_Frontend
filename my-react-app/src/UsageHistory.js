import React from 'react';
import './UsageHistory.css';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import undo from './public/undo.png';
import { useNavigate } from 'react-router-dom';

const ApplyHistoryPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home'); // 跳转到主页
  };

  const handledetailClick = () => {
    navigate('/usagedetail'); // 跳转到主页
  };

  const handleSettingsClick = () => {
    navigate('/admin'); // 跳转到管理后台
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 跳转到个人中心页面
  };

  const handleNotificationsClick = () => {
    // 显示通知窗口
    alert('显示通知窗口'); // 这是一个简单的示例
  };

  const handleBackClick = () => {
    navigate('/apply'); // 返回申请页面
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
      <div className="main-content1">
        <div className="top-bar">
          <img className="back-button" src={undo} alt="Back" onClick={handleBackClick} />
          <div className="search-container">
            <input type="text" placeholder="搜索..." />
          </div>
        </div>
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>申请时间</th>
                <th>申请模块</th>
                <th>申请理由</th>
                <th>状态</th>
                <th>操作</th>
                <th>审批人</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2024-01-01</td>
                <td>文本转语音</td>
                <td>我是产品经理实...</td>
                <td><span className="status-approved">已通过</span></td>
                <td><a href="" onClick={handledetailClick}>详情</a></td>
                <td>刘梦涵</td>
              </tr>
              <tr>
                <td>2024-01-02</td>
                <td>模块1</td>
                <td>********</td>
                <td><span className="status-rejected">已驳回</span></td>
                <td><a href="">详情</a></td>
                <td>刘梦涵</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApplyHistoryPage;
