import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.email === formData.email && user.password === formData.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            required
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            required
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
        <button type="submit" className="auth-button">Login</button>
      </form>
      <p>Don't have an account? <Link to="/register">Register here</Link></p>
      <p>Forgot your password? <Link to="/forgot-password">Reset here</Link></p>
    </div>
  );
};

export default Login;