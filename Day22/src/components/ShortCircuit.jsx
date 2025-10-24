import React, { useState } from 'react'
import './Event.css';

const ShortCircuit = () => {
  // States
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div>
      <section className='container short-container'>
        <h1>Welcome to short circuit Evaluation!</h1>

        {/* && operator -> agar true hoga to render karega */}
        {isLoggedIn && <p>You are logged in!</p>}

        {/* || operator -> agar user empty hai to "Guest" show karega */}
        <p>User: {user || "Guest"}</p>

        <div className="grid-three-cols">
          {/* Toggle login state */}
          <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Toggle LogInState
          </button>

          {/* Set user */}
          <button onClick={() => setUser("Samra")}>
            Set User
          </button>

          {/* Clear user */}
          <button onClick={() => setUser("")}>
            Clear User
          </button>
        </div>
      </section>
    </div>
  )
}

export default ShortCircuit;
