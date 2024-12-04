import React, { useState } from 'react';
import LogImg from '../Assets/Login-image.jpg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate form inputs
    if (!email || !password || !phone) {
      setError('Please fill all fields.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', { email, password, phone });
      if (response.data.token) {
        // Assuming response contains a token and redirects to the dashboard
        localStorage.setItem('authToken', response.data.token); // Store token if needed
        navigate('/dashboard');
      } else {
        setError('Invalid credentials.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <>
      {/* Include Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Include Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>

      <style>
        {`
          body {
              background-color: #f5faff;
              font-family: Arial, sans-serif;
          }
          
          .login-container {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 70vh;
          }
          .login-card {
              display: flex;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
              border-radius: 10px;
              overflow: hidden;
              max-width: 900px;
              width: 100%;
          }
          .image-section {
              background-color: #e8f4ff;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 50%;
          }
          .image-section img {
              border-radius: 10px;
              object-fit: cover;
              object-position: center;
          }
          .form-section {
              background-color: #ffffff;
              padding: 40px 30px;
              width: 50%;
          }
          .form-section h2 {
              color: #007bff;
              font-weight: bold;
              margin-bottom: 10px;
          }
          .form-section p {
              color: #6c757d;
              font-size: 16px;
              margin-bottom: 30px;
          }
          .form-section .form-control {
              background-color: #e0f4ff;
              border: none;
              height: 45px;
              border-radius: 8px;
              margin-bottom: 15px;
              padding-left: 15px;
          }
          .form-section .form-control:focus {
              box-shadow: none;
              border: 1px solid #007bff;
          }
          .form-section .btn-primary {
              background-color: #007bff;
              border: none;
              width: 100%;
              padding: 12px;
              font-size: 16px;
              font-weight: bold;
              border-radius: 8px;
              margin-top: 20px;
          }
          .form-section .forgot-password {
              display: block;
              text-align: right;
              font-size: 14px;
              color: #007bff;
              text-decoration: none;
              margin-top: -10px;
              margin-bottom: 20px;
          }
          .form-section .forgot-password:hover {
              text-decoration: underline;
          }
          .form-section .signup-link {
              display: block;
              text-align: center;
              font-size: 14px;
              color: #007bff;
              text-decoration: none;
              margin-top: 20px;
          }
          .form-section .signup-link:hover {
              text-decoration: underline;
          }
        `}
      </style>

      {/* Main Login Section */}
      <div className="container login-container">
        <div className="login-card">
          {/* Image Section */}
          <div className="image-section">
            <img
              src={LogImg}
              alt="Login Illustration"
              className="img-fluid"
            />
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h2>Welcome to Hemosis</h2>
            <p>Log in to join our cause</p>
            
            {/* Display error message if there's any */}
            {error && <div className="alert alert-danger">{error}</div>}
            
            <form onSubmit={handleLogin}>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="#" className="forgot-password">
                Forgotten Password?
              </a>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>

            {/* Link to Sign Up Page */}
            <a href="/signup" className="signup-link">
              Don't have an account? Sign Up
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
