// ✅ Main app that controls Login / TodoApp based on token

import { useState } from "react";
import Login from "./Login";
import TodoApp from "./TodoApp";

export default function App() {
  // Check if token exists in localStorage (means logged in)
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      {/* If logged in → show TodoApp, else show Login form */}
      {isLoggedIn ? (
        <TodoApp />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}
