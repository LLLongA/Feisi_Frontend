import React from 'react';
import './TextToSpeechPage.css';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifcations.png';
import person from './public/person.png';
import music from './public/music3.png';
import download from './public/download2.png';
import history from './public/history2.png';
import play from './public/play2.png';
import { useNavigate } from 'react-router-dom';

const TextToSpeechPage = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/home'); // 跳转到主页
  };

  const handleSettingsClick = () => {
    navigate('/admin'); // 跳转到管理后台
  };

  const handleProfileClick = () => {
    navigate('/profile'); // 跳转到个人中心页面
  };

  const handleNotificationsClick = () => {
    // 显示通知窗口
    // 这里你可以实现一个状态来控制通知窗口的显示
    alert('显示通知窗口'); // 这是一个简单的示例
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
      <div className="main-content">
        <h1>文本转语音</h1>
        <div className="text-to-speech">
          <div className="input-area">
            <p>在此输入文本或将TXT文本文件拖到此处进行识别。</p>
            <p>单条文字最长K个字符，总长度最长K个字符。</p>
            <p>请确认TXT文档为UTF-8编码，否则会导致识别失败。</p>
          </div>
          <div className="voice-options">
            <div className="search">
              <input type="text" placeholder="按名称搜索" />
            </div>
            <div className="filters">
              <select>
                <option>全部性别</option>
              </select>
              <select>
                <option>全部年龄</option>
              </select>
              <select>
                <option>全部风格</option>
              </select>
              <select>
                <option>全部语种</option>
              </select>
              <select>
                <option>全部场景</option>
              </select>
            </div>
            <div className="voice-list">
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
              <div className="voice-item">
                <div className="play-icon-container">
                  <img src={play} alt="Play" className="play-icon" />
                </div>
                <span>音色m</span>
                <div className="color-blocks">
                  <div className="color-block"></div>
                  <div className="color-block"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="controls-buttons-container">
          <div className="controls">
            <div className="dropdowns">
              <div className="dropdown-item">
                <label htmlFor="language-select">语种</label>
                <select id="language-select"></select>
              </div>
              <div className="dropdown-item">
                <label htmlFor="style-select">风格</label>
                <select id="style-select"></select>
              </div>
            </div>
            <div className="sliders">
              <div>
                <label>音调</label>
                <input type="range" min="0.1" max="2" step="0.1" />
                <span className="range-value">0.1-2</span>
              </div>
              <div>
                <label>语速</label>
                <input type="range" min="0.5" max="2" step="0.1" />
                <span className="range-value">0.5-2</span>
              </div>
              <div className="volume">
                <label>音量</label>
                <input type="range" min="0" max="100" />
                <span className="range-value">0-100</span>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div className="left-buttons">
              <button className="small-button">
                <img src={play} alt="icon1" className="icon" />
                立即合成
              </button>
              <button className="small-button">
                <img src={history} alt="icon2" className="icon" />
                历史记录
              </button>
            </div>
            <div className="right-buttons">
              <button className="icon-button1">
                <img src={music} alt="icon3" className="icon" />
              </button>
              <div className="bottom-buttons">
                <button className="icon-button2">
                  <img src={play} alt="icon4" className="icon" />
                </button>
                <button className="icon-button3">
                  <img src={download} alt="icon5" className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechPage;
