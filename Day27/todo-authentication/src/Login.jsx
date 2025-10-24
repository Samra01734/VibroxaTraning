// ✅ Simple fake login component

import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple check — if both fields filled, we login
    if (email && password) {
      // Save fake token in localStorage
      localStorage.setItem("token", "fakeAuthToken123");
      // Trigger parent state update
      onLogin();
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Login</h2>
      <input
        style={inputStyle}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        style={inputStyle}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" style={btnStyle}>
        Login
      </button>
    </form>
  );
}

// ✅ Simple inline styles
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  alignItems: "center",
  width: "250px",
  margin: "auto",
  padding: "20px",
  background: "#333",
  color: "#fff",
  borderRadius: "10px",
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #777",
};

const btnStyle = {
  background: "#4caf50",
  color: "#fff",
  border: "none",
  padding: "8px 15px",
  borderRadius: "5px",
  cursor: "pointer",
};
