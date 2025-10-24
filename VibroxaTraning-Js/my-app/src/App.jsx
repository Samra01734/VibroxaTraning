import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/************Wellcome component */
// function Welcome() {
//   return (
//     <>
//       <h2>Welcome to React</h2>
//     </>
//   )
// }

// export default Welcome

/************Student component */
// import Student from "./Student";

// function App() {
//   return (
//     <div>
//       <Student name="Ali" age={20} />
//     </div>
//   );
// }

// export default App;

/************Message component */
// import Message from "./Message";

// function App() {
//   return (
//     <div>
//       <Message text="Hello, this is my first React prop!" />
//     </div>
//   );
// }

// export default App;

/************ProfileCard component */
import React from "react";
import ProfileCard from "./ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard name="John Doe" age={30} email="john@example.com" rollNo={12345} />
      <ProfileCard name="Jane Smith" age={25} email="jane@example.com" rollNo={67890} />
      <ProfileCard name="Alice Johnson" age={28} email="alice@example.com" rollNo={11223} />
    </div>
  );
};

export default App;

