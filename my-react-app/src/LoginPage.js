import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>登录</h2>
        <form>
          <input type="email" placeholder="邮箱" required />
          <input type="password" placeholder="密码" required />
          <button type="submit">登录</button>
        </form>
        <div className="links">
          <Link to="/forgot-password" className="forgot-password-link">忘记密码？</Link>
          <Link to="/register" className="register-link">注册</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
