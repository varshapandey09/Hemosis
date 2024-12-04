import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios
import loginImage from "../assets/Login-image.jpg"; // Import your image

const Signup = () => {
  const [role, setRole] = useState('user'); // Default role is 'user'
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [location, setLocation] = useState('');
  const [error, setError] = useState(''); // Error state for handling error messages
  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      fullName,
      phone,
      email,
      password,
      role,
      location: role === 'bloodBank' ? location : undefined, // Only include location for blood bank
    };

    try {
      setLoading(true);
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (res.data.success) {
        // Redirect based on the user role
        if (role === 'bloodBank') {
          navigate("/dashboard"); // Redirect blood bank directly to dashboard
        } else {
          navigate("/home"); // Redirect user to home
        }
      } else {
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      setError("An error occurred during signup. Please try again.");
    }
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      {/* Custom Styles */}
      <style>{`
        body {
            background-color: #f5faff;
            font-family: Arial, sans-serif;
        }

        .signup-container {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 70vh;
        }
        .signup-card {
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
            position: relative;
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
        .form-section .additional-links {
            text-align: center;
            font-size: 14px;
            color: #007bff;
            text-decoration: none;
            margin-top: 20px;
        }
        .form-section .additional-links a {
            color: #007bff;
            text-decoration: none;
        }
        .form-section .additional-links a:hover {
            text-decoration: underline;
        }
        .footer-logo {
            position: absolute;
            bottom: 15px;
            right: 15px;
        }
      `}</style>

      {/* Signup Section */}
      <div className="container signup-container">
        <div className="signup-card">
          {/* Image Section */}
          <div className="image-section">
            <img
              src={loginImage} // Placeholder image
              alt="Doctor Illustration"
              className="img-fluid"
            />
          </div>

          {/* Form Section */}
          <div className="form-section">
            <h2>Sign Up</h2>
            <h3>Create a New Account.</h3>

            {/* Role Selection */}
            <div className="form-group">
              <label>Select your role:</label>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="roleUser"
                  name="role"
                  value="user"
                  checked={role === 'user'}
                  onChange={() => setRole('user')}
                />
                <label className="form-check-label" htmlFor="roleUser">
                  User
                </label>
              </div>
              <div className="form-check">
                <input
                  type="radio"
                  className="form-check-input"
                  id="roleBloodBank"
                  name="role"
                  value="bloodBank"
                  checked={role === 'bloodBank'}
                  onChange={() => setRole('bloodBank')}
                />
                <label className="form-check-label" htmlFor="roleBloodBank">
                  Blood Bank
                </label>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              {/* Conditionally Render the Location Field for Blood Banks */}
              {role === 'bloodBank' && (
                <input
                  type="text"
                  className="form-control"
                  placeholder="Blood Bank Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              )}

              {/* Error Message Display */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary">
                {role === 'user' ? 'Create User Account' : 'Create Blood Bank Account'}
              </button>

              {/* Link to Login Page */}
              <div className="additional-links">
                <Link to="/login">
                  Already a member? Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Bootstrap Script */}
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Signup;
