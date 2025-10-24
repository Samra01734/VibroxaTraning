// components/Navbar.jsx
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "1rem", padding: "1rem", background: "#333" }}>
      <NavLink
        to="/"
        style={({ isActive }) => ({ color: isActive ? "yellow" : "white" })}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => ({ color: isActive ? "yellow" : "white" })}
      >
        About
      </NavLink>
      <NavLink
        to="/dashboard"
        style={({ isActive }) => ({ color: isActive ? "yellow" : "white" })}
      >
        Dashboard
      </NavLink>
    </nav>
  );
}

export default Navbar;
