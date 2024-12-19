import React, { useState } from 'react';
import './UserReview.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';
import user from './public/person.png';

const UserReview = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleHistoryClick = () => {
        navigate('/history2');
    };

    const handleSettingsClick = () => {
        navigate('/admin');
    };

    const handleProfileClick = () => {
        navigate('/profile');
    };

    const handleUserReviewClick = () => {
        navigate('/userreview');
    };

    const handleNotificationsClick = () => {
        alert('显示通知窗口');
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };


    return (
        <div className="home-container">
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

            <div className='container'>

            <div className='sidebar'>
                    <ul>
                        <li onClick={handleSettingsClick}>用户管理</li>
                        <li onClick={handleUserReviewClick}>账号审核</li>
                        <li>权限申请审核</li>
                        <li>用量申请审核</li>
                        <li>API Key 管理</li>
                        <li>系统设置</li>
                    </ul>
                </div>
            
                </div>
            </div>
    );
};

export default UserReview;
