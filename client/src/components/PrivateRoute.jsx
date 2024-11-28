import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthState } from "../features/authSlice";

const PrivateRoute = ({ children }) => {
  const { user } = useSelector(selectAuthState);

  return user ? children : <Navigate to="/signin" />;
};

export default PrivateRoute;
