import React from "react";
import { useSelector } from "react-redux";
import { selectAuthState } from "../features/authSlice";

const Dashboard = () => {
  const { user } = useSelector(selectAuthState);

  return (
    <div className="container mt-5">
      <h2>Welcome, {user.name}!</h2>
      <p>Role: {user.role}</p>
      <p>This is your dashboard. Manage your activities here.</p>
    </div>
  );
};

export default Dashboard;
