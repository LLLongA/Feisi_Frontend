import React, { useState } from 'react';
import './UserReviewDetail.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';
import back from './public/undo.png'

const UserReviewDetail = () => {
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

    const handleUsageApplyReviewClick = () => {
        navigate('/usageapplyreview');
    };

    const handleUserApplyReviewClick = () => {
        navigate('/userapplyreview');
    };

    const handleSystemSettingClick = () => {
        navigate('/systemsetting');
    };

    const handleapimanageClick = () => {
        navigate('/apimanage');
    };

    const handlebackClick = () => {
        navigate('/userreview');
    };



    const handleNotificationsClick = () => {
        alert('显示通知窗口');
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
                        <li onClick={handleUserApplyReviewClick}>权限申请审核</li>
                        <li onClick={handleUsageApplyReviewClick}>用量申请审核 </li>
                        <li onClick={handleapimanageClick}>API Key 管理</li>
                        <li onClick={handleSystemSettingClick}>系统设置</li>
                    </ul>
                </div>

                <div className='maincontainer'>

                    <div className='titlecontain'>

                    <h1>账号审核</h1>
                    </div>

                    <div className='contain1'>
                        <img src={back} className='undo' onClick={handlebackClick}></img>

                        <div className='a'><div className='f'>姓名</div><div>刘梦涵</div></div>
                        <div className='b'><div className='f'>部门</div><div>互联网产品部</div></div>
                        <div className='c'><div className='f'>职位</div><div>产品经理实习生</div></div>
                        <div className='d'><div className='f'>申请理由</div><div>XXXXXXXXXXXXXXXXXXXX</div></div>
                        <div className='e'><button className='blue'>通过</button><button className='red'>驳回</button></div>


                    </div>

                </div>








            </div>
        </div>
    );
};

export default UserReviewDetail;
