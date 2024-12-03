import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../Assets/Hemosis-Nav.jpeg";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  // Assuming the user role is stored in localStorage
  const userRole = localStorage.getItem("userRole"); // This could be 'user' or 'bloodBank'
  const isAuthenticated = !!localStorage.getItem("authToken"); // Check if the user is authenticated

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{ borderBottom: "2px solid #0056b3", height: "120px" }}
    >
      <Link className="navbar-brand" to="/">
        <img src={logoImage} height="80rem" alt="nav-logo" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
        

      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse"
        id="navbarNavDropdown"
        style={{
          
          boxShadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
          background: "linear-gradient(180deg, #3ABEF9, #A7E6FF)",
          color: "white",
          height: "52px",
          borderRadius: "52px",
          
        }}
      >
        <ul className="navbar-nav">
          <li className="nav-item" style={{marginright: "50px"}}>
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/services">
              Our Services
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/donate-us">
              Donate Us
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              to="/call-to-action"
              style={{
                display: "inline-block",
                textDecoration: "none",
                textAlign: "center",
                lineHeight: "30px",
                backgroundColor: "#3ABEF9",
                color: "white",
                borderRadius: "25px",
                width: "120px",
                height: "30px",
                borderStyle: "none",
              }}
            >
              Call to Action
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact-us">
              Contact Us
            </Link>
          </li>

          {/* Conditionally render the link to Dashboard or Home based on user role */}
          {isAuthenticated && userRole && (
            <li className="nav-item">
              <Link className="nav-link" to={userRole === "bloodBank" ? "/dashboard" : "/home"}>
                {userRole === "bloodBank" ? "Dashboard" : "Home"}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
