import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery, setBloodGroup, searchBloodBanks } from "../features/searchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { query, bloodGroup } = useSelector((state) => state.search);

  // Handle search query change
  const handleSearchChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  // Handle blood group change
  const handleBloodGroupChange = (e) => {
    dispatch(setBloodGroup(e.target.value));
  };

  // Handle search form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Trigger search with the selected blood group and search query
    if (query || bloodGroup) {
      dispatch(searchBloodBanks({ query, bloodGroup }));
    } else {
      alert("Please provide a location or select a blood group.");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Hemosis
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/donate">
                Donate Blood
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">
                Search Blood Banks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/call-to-action">
                Call to Action
              </Link>
            </li>
          </ul>

          {/* Search bar with Blood Group Dropdown */}
          <form className="d-flex align-items-center" onSubmit={handleSearchSubmit}>
            <input
              className="form-control me-2"
              type="text"
              placeholder="Search by location"
              aria-label="Search"
              value={query}
              onChange={handleSearchChange}
            />

            {/* Blood Group Dropdown */}
            <select
              className="form-select me-2"
              aria-label="Blood Group"
              value={bloodGroup}
              onChange={handleBloodGroupChange}
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </select>

            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>

          {/* Sign In/Sign Up Buttons */}
          <div className="d-flex ms-3">
            <Link to="/signin" className="btn btn-outline-light me-2">
              Sign In
            </Link>
            <Link to="/signup" className="btn btn-light">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
