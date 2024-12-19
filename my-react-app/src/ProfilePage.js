import React from 'react';
import './ProfilePage.css';
import { Link } from 'react-router-dom';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import profile from './public/profile.png';
import plus from './public/plus.png';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home'); // 跳转到主页
  };

  const handlePlusClick = () => {
    navigate('/apply'); // 跳转到申请
  };

  const handleSettingsClick = () => {
    navigate('/admin'); // 跳转到管理后台
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 跳转到个人中心页面
  };

  const handleModuleClick = () => {
    navigate('/applyhistory'); // 跳转到模块申请记录
  };

  const handleApplyUsageClick = () => {
    navigate('/usagehistory'); // 跳转到模块申请记录
  };

  

  const handleAddUsageClick = () => {
    navigate('/addusage'); // 跳转到模块申请记录
  };

  const handleApikeysClick = () => {
    navigate('/apikeys'); // 跳转到模块申请记录
  };

  const handleNotificationsClick = () => {
    // 显示通知窗口
    // 这里你可以实现一个状态来控制通知窗口的显示
    alert('显示通知窗口'); // 这是一个简单的示例
  };

  return (
    <div className="admin-container">
      <nav className="navbar">
        <div className="left-icon" onClick={handleHomeClick}>
          <img src={home} alt="Home" />
        </div>
        <div className="right-icons">
          <img src={settings} alt="Settings" onClick={handleSettingsClick} />
          <img src={notifications} alt="Notifications" onClick={handleNotificationsClick} />
          <img src={person} alt="Profile" onClick={handleProfileClick} />
        </div>
      </nav>
      
      <div className="admin-content">
        <div className="sidebar">
          <img src={profile} alt="Profile" className="profile-icon" />
          <p>姓名</p>
          <p>部门</p>
          <p>职位</p>
          <p>UserID</p>
          <p>邮箱</p>
          <p>*********@yuaiweiwu.com</p>
          <button className="change-password">修改密码</button>
          <button className="api-keys" onClick={handleApikeysClick} >API Keys</button>
        </div>
        
        <div className="main-content">
          <div className="modules">
            <div className="modules-header">
              <h2 className='small'>可用模块</h2>
              <button className="apply-records" onClick={handleModuleClick}>申请记录</button>
            
            </div>
            <div className="modules-buttons">
              <button>文本转语音</button>
              <button>模块1</button>
              <button>模块*******</button>
              <img src={plus} className='add_module' onClick={handlePlusClick}></img>
            </div>
          </div>
          
          <div className="usage">
            <div className="usage-header">
              <h2 className='
              big'>我的用量</h2>
              <button className="apply-records" onClick={handleApplyUsageClick}>申请记录</button>

              <div className="search">
              <input type="text" placeholder="" />
            </div>
            </div>
            <table className="usage-table">
              <thead>
                <tr>
                  <th>功能</th>
                  <th>剩余用量</th>
                  <th>有效期</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>文本转语音</td>
                  <td>5000/100000 字</td>
                  <td>2028-12-31</td>
                  <td><button onClick={handleAddUsageClick} >申请增加</button></td>
                </tr>
                <tr>
                  <td>****</td>
                  <td>5000/100000 字</td>
                  <td>2028-12-31</td>
                  <td><button>申请增加</button></td>
                </tr>
                <tr>
                  <td>*******</td>
                  <td>5000/100000 小时</td>
                  <td>2028-12-31</td>
                  <td><button>申请增加</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
