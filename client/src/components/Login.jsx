import React from 'react';
import LogImg from '../assets/Login-image.jpg'
const Login = () => {
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
        `}
      </style>

      {/* Main Login Section */}
      <div className="container login-container">
        <div className="login-card">
          {/* Image Section */}
          <div className="image-section">
            <img
              src = {LogImg}
              alt="Doctor Illustration"
              className="img-fluid"
            />
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h2>Welcome to Heamosis</h2>
            <p>Log in to join our cause</p>
            <form>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
              />
              <input type="email" className="form-control" placeholder="Email" />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
              <a href="#" className="forgot-password">
                Forgotten Password?
              </a>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
