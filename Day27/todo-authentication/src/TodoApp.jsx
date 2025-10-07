// ✅ Todo App connected to API (with axios, optimistic update, error/loading handling)

import { useEffect, useState } from "react";
import axios from "axios";

export default function TodoApp() {
  // State variables
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [adding, setAdding] = useState(false); // for disabling button
  const [success, setSuccess] = useState(""); // for success message

  // ✅ Fetch todos on mount using useEffect
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => setTodos(res.data)) // success → save todos
      .catch(() => setError("Failed to fetch todos")) // error message
      .finally(() => setLoading(false)); // hide loader
  }, []);

  // ✅ Add new todo (POST request)
  const addTodo = async () => {
    if (!text.trim()) return;
    setAdding(true);
    setSuccess("");

    // Optimistic update → instantly show todo
    const newTodo = { title: text, completed: false };
    setTodos([...todos, newTodo]);
    setText("");

    try {
      await axios.post("https://jsonplaceholder.typicode.com/todos", newTodo);
      setSuccess("✅ Todo added successfully!");
    } catch {
      setError("Failed to add todo");
    } finally {
      setAdding(false);
    }
  };

  // ✅ Logout function
  const logout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  // ✅ Loading / error handling UI
  if (loading) return <p>Loading todos...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo List</h2>

      {/* Input field */}
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo..."
        style={inputStyle}
      />

      {/* Add button — disabled while submitting */}
      <button onClick={addTodo} disabled={adding} style={btnStyle}>
        {adding ? "Adding..." : "Add"}
      </button>

      {/* Success message */}
      {success && <p style={{ color: "lime" }}>{success}</p>}

      {/* Render list */}
      <ul style={ulStyle}>
        {todos.map((t, index) => (
          <li key={index}>{t.title}</li>
        ))}
      </ul>

      {/* Logout button */}
      <button onClick={logout} style={{ ...btnStyle, background: "#e91e63" }}>
        Logout
      </button>
    </div>
  );
}

// ✅ Styling
const inputStyle = {
  padding: "8px",
  marginRight: "10px",
  borderRadius: "5px",
  border: "1px solid gray",
};

const btnStyle = {
  padding: "8px 15px",
  background: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

const ulStyle = {
  listStyle: "none",
  padding: "0",
  maxWidth: "400px",
  margin: "20px auto",
  textAlign: "left",
};
