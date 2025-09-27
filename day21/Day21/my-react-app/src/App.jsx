// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase</button>
//     </div>
//   );
// }
// export default Counter;
/************Form*/
// import { useState } from "react";

// function App() {
//   const [name, setName] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault(); // stops page reload
//     alert("Form submitted! Name: " + name);
//   };

//   return (
//     <div>
//       <h2>React onSubmit Example</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           placeholder="Enter your name"
//           onChange={(e) => setName(e.target.value)}
//         />
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;




//******Toggle btn */
// import { useState } from "react";

// function ToggleButton() {
//   const [isOn, setIsOn] = useState(false);

//   const handleClick = () => {
//     setIsOn(!isOn); // toggle the state (true ↔ false)
//   };

//   return (
//     <button
//       onClick={handleClick}
//       style={{
//         backgroundColor: isOn ? "green" : "red",
//         color: "white",
//         padding: "10px 20px",
//         border: "none",
//         borderRadius: "8px",
//         cursor: "pointer",
//       }}
//     >
//       {isOn ? "ON" : "OFF"}
//     </button>
//   );
// }

// export default ToggleButton;




/*********To do  */
import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // input change handle
  const handleChange = (e) => {
    setTask(e.target.value);
  };

  // add task
  const handleAdd = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]); // add new task
      setTask(""); // clear input
    }
  };

  // remove task (by index)
  const handleRemove = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2> To-Do App</h2>
      <input
        type="text"
        value={task}
        onChange={handleChange}
        placeholder="Enter task"
      />
      <button onClick={handleAdd}>Add Task</button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {tasks.map((t, index) => (
          <li key={index}>
            {t}{" "}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;


