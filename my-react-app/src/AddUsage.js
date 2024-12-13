import React from 'react';
import './AddUsage.css';
import homeIcon from './public/home_icon.png';
import settingsIcon from './public/settings.png';
import notificationsIcon from './public/notifications.png';
import personIcon from './public/person.png';
import { useNavigate } from 'react-router-dom';

const AddUsage = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleSettingsClick = () => {
        navigate('/settings');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleNotificationsClick = () => {
        alert('显示通知窗口');
    };

    return (
        <div className="add-usage-container">
            <nav className="navbar">
                <div className="left-icon">
                    <img src={homeIcon} alt="Home" onClick={handleHomeClick} />
                </div>
                <div className="right-icons">
                    <img src={settingsIcon} alt="Settings" onClick={handleSettingsClick} />
                    <img src={notificationsIcon} alt="Notifications" onClick={handleNotificationsClick} />
                    <img src={personIcon} alt="Profile" onClick={handleProfileClick} />
                </div>
            </nav>
            <h1>用量申请</h1>
            <div className="form-container">
                <div className="form-group">
                    <label>申请人信息</label>
                    <span>刘梦涵（互联网产品部-AI学科-产品经理实习生）</span>
                </div>
                <div className="form-group">
                    <label htmlFor="module">申请模块</label>
                    <select id="module">
                        <option value="text-to-speech">语音转文本</option>
                        <option value="module2">模块2</option>
                        <option value="module3">模块3</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>当前剩余用量</label>
                    <div className="usage-section">
                        <div className="usage-info">
                            <span className="current-usage">5000</span>/<span className="total-usage">100000</span> 字符
                        </div>
                        <div className="usage-bar">
                            <div className="usage-bar-filled" style={{ width: '5%' }}></div>
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="new-usage">申请新增用量</label>
                    <input type="text" id="new-usage" placeholder="输入新增用量" />
                    <span>字符</span>
                </div>
                <div className="form-group">
                    <label htmlFor="reason">申请理由</label>
                    <textarea id="reason" placeholder="请在此填写你的申请理由，平台会通知管理员进行审核"></textarea>
                </div>
                <button className="submit-button">提交申请</button>
            </div>
        </div>
    );
};

export default AddUsage;
