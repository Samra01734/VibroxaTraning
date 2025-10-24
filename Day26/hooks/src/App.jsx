import React from "react";
import counterReducer from "./components/CounterReducer";
import ThemeContextDemo from "./components/ThemeContextDemo";
import TodoContextDemo from "./components/TodoContextDemo";

export default function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>React useReducer & Context Practice</h1>

      {/* 🟢 Basic Example */}
      <section style={{ marginTop: "40px" }}>
        <h2>1️⃣ Counter with useReducer</h2>
        <counterReducer />
      </section>

      {/* 🟡 Intermediate Example */}
      <section style={{ marginTop: "60px" }}>
        <h2>2️⃣ Theme Toggle with Context</h2>
        <ThemeContextDemo />
      </section>

      {/* 🔴 Advanced Example */}
      <section style={{ marginTop: "60px" }}>
        <h2>3️⃣ Global Todo App (Context + useReducer)</h2>
        <TodoContextDemo />
      </section>
    </div>
  );
}
