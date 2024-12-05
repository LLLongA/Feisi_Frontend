import React from 'react';
import './TextToSpeechPage.css';
import home from './public/home_icon.png';
import settings from './public/settings.png';
import notifications from './public/notifcations.png';
import person from './public/person.png';
import mp3Icon from './public/music.png';

const TextToSpeechPage = () => {
  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="left-icon">
          <img src={home} alt="Home" />
        </div>
        <div className="right-icons">
          <img src={settings} alt="Settings" />
          <img src={notifications} alt="Notifications" />
          <img src={person} alt="Profile" />
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
              <label>性别</label>
              <select>
                <option>全部性别</option>
              </select>
              <label>年龄</label>
              <select>
                <option>全部年龄</option>
              </select>
              <label>风格</label>
              <select>z
                <option>全部风格</option>
              </select>
              <label>语种</label>
              <select>
                <option>全部语种</option>
              </select>
              <label>场景</label>
              <select>
                <option>全部场景</option>
              </select>
            </div>
            <div className="voice-list">
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
              <div className="voice-item">音色m</div>
            </div>
          </div>
        </div>
        <div className="controls">
          <div className="dropdowns">
            <div className="dropdown-item">
              <label htmlFor="language-select">语种</label>
              <select id="language-select">

              </select>
            </div>

            <div className="dropdown-item">
              <label htmlFor="style-select">风格</label>
              <select id="style-select">
              </select>
            </div>
          </div>

          <div className="sliders">
            <div>
              <label>音调</label>
              <input type="range" min="0.1" max="2" step="0.1" />
            </div>
            <div>
              <label>语速</label>
              <input type="range" min="0.5" max="2" step="0.1" />
            </div>
            <div className="volume">
              <label>音量</label>
              <input type="range" min="0" max="100" />
            </div>
          </div>
          <div className="buttons">
            <div className="large-mp3-icon">
              <img src={mp3Icon} alt="MP3 Icon" />
            </div>
            <button className="small-button">立即合成</button>
            <button className="small-button">历史记录</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextToSpeechPage;
