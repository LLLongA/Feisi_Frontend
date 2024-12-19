import React, { useState } from 'react';
import './UserReview.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';

const UserReview = () => {
    const navigate = useNavigate();

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

    const handleUserReviewHistoryClick = () => {
        navigate('/userreviewhistory');
    };

    const handleapimanageClick = () => {
        navigate('/apimanage');
    };

    const handledetailClick = () => {
        navigate('/userreviewdetail');
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
                    <button className="button grey" onClick={handleUserReviewHistoryClick}>历史记录</button>
                    </div>

                    <div className='rightcontain'>
                    <div className="buttons-container">
                        <button className="button blue">通过选中项</button>
                        <button className="button red">驳回选中项</button>
                        <input className="search-container"type="text" placeholder="搜索..." />

                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th>姓名</th>
                                <th>部门</th>
                                <th>职位</th>
                                <th>申请理由</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>刘梦涵</td>
                                <td>互联网产品部</td>
                                <td>产品经理实习生</td>
                                <td>我是产品经理实习生...</td>
                                <td>
                                    <span className="link" onClick={handledetailClick}>详情</span>
                                    <span className="link pass">通过</span>
                                    <span className="link reject">驳回</span>
                                </td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>新用户</td>
                                <td>111111</td>
                                <td>产品经理实习生</td>
                                <td>**********</td>
                                <td>
                                    <span className="link" onClick={handledetailClick}>详情</span>
                                    <span className="link pass">通过</span>
                                    <span className="link reject">驳回</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>








            </div>
        </div>
    );
};

export default UserReview;
