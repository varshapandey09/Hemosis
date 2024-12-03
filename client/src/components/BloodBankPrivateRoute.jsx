import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const BloodBankPrivateRoute = ({ element, ...rest }) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated'); // Check if user is authenticated
  const userType = localStorage.getItem('userType'); // Check if user is a blood bank

  // If not authenticated as a blood bank, redirect to login page
  if (!isAuthenticated || userType !== 'bloodBank') {
    return <Navigate to="/login" replace />;
  }

  return element; // If authenticated as blood bank, render the element
};

export default BloodBankPrivateRoute;
