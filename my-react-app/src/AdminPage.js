import React, { useState } from 'react';
import './AdminPage.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';
import user from './public/person.png';

const AdminPage = () => {
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
                        <li onClick={handleUserApplyReviewClick}>权限申请审核</li>
                        <li onClick={handleUsageApplyReviewClick}>用量申请审核</li>
                        <li onClick={handleapimanageClick}>API Key 管理</li>
                        <li onClick={handleSystemSettingClick}>系统设置</li>
                    </ul>
                </div>

                <div className='main'>
                    <div className='leftside'>
                        <div className='search1'>
                            <input type='text' placeholder='输入用户名进行搜索' value={searchTerm} onChange={handleSearchChange} />
                        </div>
                        <div className='userList1'>
                            {Array(14).fill().map((_, index) => (
                                <div className='userItem1' key={index}>
                                    <div className="color-block"></div>
                                    <div className="user-info">
                                        <div>姓名</div>
                                        <div>部门-职位</div>
                                    </div>
                                    <div className="arrow-icon">→</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='detailsContainer1'>
                        <div className='userInfo1'>
                            <img src={user} alt="User Icon" />
                            <div className="info">
                                <div>姓名1</div>
                                <div>部门</div>
                                <div>职位</div>
                            </div>
                            <div className="separator"></div>
                            <div className="modules">
                                <div>可用模块</div>
                                <div className="modules-buttons">
                                    <button>文本转语音</button>
                                    <button>模块1</button>
                                    <button>模块2</button>
                                </div>
                            </div>
                        </div>
                        <div className='usageDetails1'>
                            <div className='title'>
                                <h3>剩余用量</h3>
                                <button className='button3' onClick={handleHistoryClick}>历史使用记录</button>
                            </div>

                            <table>
                                <thead>
                                    <tr>
                                        <th>功能</th>
                                        <th>剩余用量</th>
                                        <th>有效期</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>文本转语音</td>
                                        <td>5000/10000 字</td>
                                        <td>2028-12-31</td>
                                    </tr>
                                    <tr>
                                        <td>*****</td>
                                        <td>5000/10000 字</td>
                                        <td>2028-12-31</td>
                                    </tr>
                                    <tr>
                                        <td>*******</td>
                                        <td>5000/10000 小时</td>
                                        <td>2028-12-31</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminPage;
