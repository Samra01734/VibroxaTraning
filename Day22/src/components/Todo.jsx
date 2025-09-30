import React, { useState } from "react";
import "./TodoList.css";  // <-- external CSS import

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Add new todo
  const addTodo = () => {
    if (task.trim() === "") return; // empty input ignore
    const newTodo = {
      id: Date.now(), // unique key
      text: task,
      completed: false,
    };
    setTodos([...todos, newTodo]);
    setTask(""); // clear input
  };

  // Delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>

      {/* Input + Add button */}
      <div className="input-container">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Conditional Rendering */}
      {todos.length === 0 ? (<p className="no-task">No tasks yet!</p>) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>

              <div className="btn-group">
                <button
                  className={todo.completed ? "undo-btn" : "complete-btn"}
                  onClick={() => toggleComplete(todo.id)}
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
