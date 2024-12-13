import React from 'react';
import './History.css';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifications.png';
import person from './public/person.png';
import undo from './public/undo.png';
import { useNavigate } from 'react-router-dom';

const ApplyHistoryPage = () => {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/home');
    };

    const handledetailClick = () => {
        navigate('/usagedetail');
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

    const handleBackClick = () => {
        navigate('/apply');
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
            <h1>历史记录</h1>

            <div className="main-content1">
                <div className="filters">
                    <select>
                        <option>功能模块</option>
                        {/* 其他选项 */}
                    </select>
                    <select>
                        <option>结果</option>
                        {/* 其他选项 */}
                    </select>
                    <div className="date-container">
                        <label htmlFor="startDate">开始时间</label>
                        <input type="date" id="startDate" defaultValue="2024-08-17" />
                    </div>
                    <div className="date-container">
                        <label htmlFor="endDate">结束时间</label>
                        <input type="date" id="endDate" defaultValue="2024-08-17" />
                    </div>
                </div>


                <table>
                    <thead>
                        <tr>
                            <th>功能模块</th>
                            <th>使用时间</th>
                            <th>结果</th>
                            <th>文件</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.wav</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        <tr>
                            <td>文本转语音</td>
                            <td>2024-01-01</td>
                            <td>成功</td>
                            <td>1111111111111111.zip</td>
                            <td><a href="#">下载</a></td>
                        </tr>
                        {/* 其他行 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ApplyHistoryPage;
