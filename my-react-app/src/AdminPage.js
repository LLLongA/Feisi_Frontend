import React, { useState } from 'react';
import './AdminPage.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handleSettingsClick = () => {
        navigate('/admin');
    };

    const handleProfileClick = () => {
        navigate('/profile');
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
                        <li onClick={handleHomeClick}>用户管理</li>
                        <li onClick={handleSettingsClick}>账号审核</li>
                        <li>权限申请审核</li>
                        <li>用量申请审核</li>
                        <li>API Key 管理</li>
                        <li>系统设置</li>
                    </ul>
                </div>

                <div className='maincontainer'>
                    <div className='search1'>
                        <input type='text' placeholder='输入用户名进行搜索' />
                    </div>
                    <div className='userList1'>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>
                        <div className='userItem1'>姓名 - 部门 - 职位</div>

                    </div>
                    <div className='detailsContainer1'>
                        <div className='userInfo1'>
                            <div>姓名1</div>
                            <div>可用模块</div>
                            <button>文本转语音</button>
                            <button>模块1</button>
                        </div>
                        <div className='usageDetails1'>
                            <h3>剩余用量</h3>
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
