import React, { createContext, useReducer, useContext, useState } from "react";

const TodoContext = createContext();

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload }];
    case "REMOVE":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

function TodoProvider({ children }) {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}

function TodoList() {
  const { todos, dispatch } = useContext(TodoContext);
  const [text, setText] = useState("");

  const addTodo = () => {
    if (text.trim() !== "") {
      dispatch({ type: "ADD", payload: text });
      setText("");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Global Todo App</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
      />
      <button onClick={addTodo}>Add</button>

      <ul style={{ listStyle: "none", marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function TodoContextDemo() {
  return (
    <TodoProvider>
      <TodoList />
    </TodoProvider>
  );
}
