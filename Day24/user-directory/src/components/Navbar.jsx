// components/Navbar.jsx
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" end>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
    </nav>
  );
}

export default Navbar;
