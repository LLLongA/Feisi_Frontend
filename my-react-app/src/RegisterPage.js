// src/LoginPage.js
import React from 'react';
import { Link } from 'react-router-dom';

import './RegisterPage.css';

const RegisterPage = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>注册账号</h2>
        <form>
          <input type="text" placeholder="姓名" required />
          <input type="password" placeholder="密码" required />
          <input type="password" placeholder="确认密码" required />
          <select defaultValue="" required>
            <option value="" disabled>所在部门</option>
            <option value="部门1">部门1</option>
            <option value="部门2">部门2</option>
            <option value="部门3">部门3</option>
          </select>
          <input type="text" placeholder="职位" required />
          <input type="email" placeholder="邮箱" required />
          <textarea placeholder="申请理由" required></textarea>
          <button type="submit">注册账号</button>
        </form>
        <div className="login-link">
          <Link to="/">返回登录</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
