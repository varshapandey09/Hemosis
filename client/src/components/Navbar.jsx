import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/Hemosis-Nav.jpeg";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom shadow-sm">
      <div className="container">
        <Link className="navbar-brand" to="/home">
          <img src={logoImage} height="80" alt="Hemosis Logo" />
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
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
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
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-primary me-3" to="/signup">
                Sign Up
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn btn-outline-primary me-3" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                See Availability
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="/services?blood=A+">A+</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=A-">A-</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=B+">B+</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=B-">B-</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=AB+">AB+</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=AB-">AB-</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=O+">O+</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=O-">O-</Link></li>
                <li><Link className="dropdown-item" to="/services?blood=all">All Blood Groups</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
