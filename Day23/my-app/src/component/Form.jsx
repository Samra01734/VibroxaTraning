import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [name, setName] = useState("Sam");  // initial state as string
  const[myFullName, setFullName] = useState();

  const inputEvent = (event) => {
    setName(event.target.value);  
  };
  const onSubmit = () => {
    setFullName(name);
  };

  return (
    <div>
      <h1>Hello {myFullName}</h1>
      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={inputEvent}
      />
      <br />
      <button onClick={onSubmit}>Click Me</button>
    </div>
  );
};

export default Form;
