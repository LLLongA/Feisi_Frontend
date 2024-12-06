import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import TextToSpeechPage from './TextToSpeechPage'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/text-to-speech" element={<TextToSpeechPage />} /> {/* 新增路由 */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
