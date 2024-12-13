import React, { useState } from 'react';
import './ApiKeys.css';

import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import { useNavigate } from 'react-router-dom';

const APIKeysPage = () => {
    const navigate = useNavigate();
    const [isModalOpen, setModalOpen] = useState(false);


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

    const handleNewClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleSave = () => {
        // 处理保存逻辑
        alert('保存成功');
        setModalOpen(false);
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
            <h1>我的API Keys</h1>

            <div className="main-content1">
                <div className="filters">
                    <select>
                        <option>启用状态</option>
                        <option>已启用</option>
                        <option>未启用</option>
                    </select>
                    <input type="text" placeholder="按名称或描述搜索" />
                    <button onClick={handleNewClick} className="new-button">新建</button>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>名称</th>
                            <th>启用状态</th>
                            <th>描述</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>API Key 1</td>
                            <td>已启用</td>
                            <td>这是一个描述</td>
                            <td>
                                <a href="#">编辑</a>
                                <span> | </span>
                                <a href="#" style={{ color: 'red' }}>删除</a>
                            </td>
                        </tr>
                        <tr>
                            <td>API Key 2</td>
                            <td>未启用</td>
                            <td>这是另一个描述</td>
                            <td>
                                <a href="#">编辑</a>
                                <span> | </span>
                                <a href="#" style={{ color: 'red' }}>删除</a>
                            </td>
                        </tr>
                        {/* 其他行 */}
                    </tbody>
                </table>
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>新建 API Key</h2>

                        <label>名称</label>
                        <input className="input1" type="text" placeholder="请输入名称" />

                        <label>用途</label>
                        <input className="input2" type="text" placeholder="请输入用途" />

                        <label>Key</label>
                        <input className="input3" type="text" placeholder="请输入 Key" />

                        <label>权限</label>
                        <select>
                            <option className="input4" >全部可用模块</option>
                            {/* 其他选项 */}
                        </select>
                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" /> 文本转语音
                            </label>
                            <label>
                                <input type="checkbox" /> 模块***
                            </label>
                            <label>
                                <input type="checkbox" /> 模块111
                            </label>
                            <label>
                                <input type="checkbox" /> 模块222
                            </label>
                            <label>
                                <input type="checkbox" /> 模块333
                            </label>
                            <label>
                                <input type="checkbox" /> 模块444
                            </label>
                        </div>

                        <div className="modal-buttons">
                            <button onClick={handleSave}>保存</button>
                            <button onClick={handleCloseModal}>取消</button>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
};

export default APIKeysPage;
