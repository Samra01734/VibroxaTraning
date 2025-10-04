import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navigation Bar */}
      <nav style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <Link to="/">Home</Link>
        <NavLink
          to="/About"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About
        </NavLink>
        <NavLink to="/user/101">User 101</NavLink>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/user/:id" element={<User />} />

        {/* Nested Routes */}
        <Route path="/Dashboard" element={<Dashboard />}>
          <Route path="Profile" element={<Profile />} />

        </Route>

        {/* Not Found Route */}
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
