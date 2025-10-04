// components/Dashboard/Dashboard.jsx
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="settings">Settings</Link>
      </nav>
      <hr />
      <Outlet /> {/* Nested route content */}
    </div>
  );
}

export default Dashboard;
