import React, { useEffect, useState } from 'react';
import { fetchRecipes } from '../apiService';
import smallLogo from '../assets/lunchboxlogosmall.png';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

// </header>
const Login = () => {
  return (
    <div className="accountBox">
      <header className="header">
        <img src={smallLogo} />
        <h1>LunchBox</h1>
        <h2>Log In</h2>
      </header>
      <div className="boxClass">
        <form>
          <input type="text" placeholder="username" className="inputBox" />
          <input type="text" placeholder="password" className="inputBox" />
          <button type="submit"> Login </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
