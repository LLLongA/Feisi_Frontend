import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>忘记密码</h2>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="邮箱" required />
          <button type="submit">获取验证码</button>
        </form>
        <div className="links">
        <Link to="/" className="forgot-password-link">返回登录</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
