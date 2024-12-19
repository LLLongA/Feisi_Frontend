import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import TextToSpeechPage from './TextToSpeechPage'; 
import ProfilePage from './ProfilePage';
import ApplyPage from './ApplyPage'; 
import ApplyHistoryPage from './ApplyHistoryPage';
import Detail from './Detail';
import AddUsage from './AddUsage';
import UsageHisotry from './UsageHistory';
import UsageDetail from './UsageDetail';
import History from './History';
import ApiKeys from './ApiKeys';
import AdminPage from './AdminPage';
import HistoryPage from './HistoryPage';
import UserReview from './UserReview';
import SystemSetting from './SystemSetting';
import ApiManage from './ApiManage';
import UsageApplyReview from './UsageApplyReview';
import UserApplyReview from './UserApplyReview';
import UserReviewHistory from './UserReviewHistory';
import ForgetPasswordPage from './ForgotPasswordPage';
import UserReviewDetail from './UserReviewDetail';


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
          <Route path="/detail" element={<Detail />} />
          <Route path="/addusage" element={<AddUsage />} />
          <Route path="/usagehistory" element={<UsageHisotry />} />
          <Route path="/usagedetail" element={<UsageDetail />} />
          <Route path="/history" element={<History />} />
          <Route path="/apikeys" element={<ApiKeys />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/history2" element={<HistoryPage />} />
          <Route path="/userreview" element={<UserReview />} />
          <Route path="/systemsetting" element={<SystemSetting />} />
          <Route path="/apimanage" element={<ApiManage />} />
          <Route path="/usageapplyreview" element={<UsageApplyReview />} />
          <Route path="/userapplyreview" element={<UserApplyReview />} />
          <Route path="/userreviewhistory" element={<UserReviewHistory />} />
          <Route path="/forget" element={<ForgetPasswordPage />} />
          <Route path="/userreviewdetail" element={<UserReviewDetail />} />






        </Routes>
      </div>
    </Router>
  );
}

export default App;
