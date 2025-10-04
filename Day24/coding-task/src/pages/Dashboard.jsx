import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Dashboard</h2>

      <nav style={{ marginBottom: "15px" }}>
        <Link to="profile">Profile</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested Routes Render Here */}
      <Outlet />

      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default Dashboard;
