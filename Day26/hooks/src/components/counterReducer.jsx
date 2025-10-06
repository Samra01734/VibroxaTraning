import React, { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
}

export default function counterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>−</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}
