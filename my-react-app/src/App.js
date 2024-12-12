import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import TextToSpeechPage from './TextToSpeechPage'; 
import ProfilePage from './ProfilePage';
import ApplyPage from './ApplyPage'; 
import ApplyHistoryPage from './ApplyHistoryPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/text-to-speech" element={<TextToSpeechPage />} /> 
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/apply" element={<ApplyPage />} />
          <Route path="/applyhistory" element={<ApplyHistoryPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
