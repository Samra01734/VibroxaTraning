import { useState } from 'react'
import './App.css'
import Eventhandling from './components/Eventhandling'
import ShortCircuit from './components/ShortCircuit'
import KeyLogged from './components/KeyLogged'
import TodoList from './components/Todo'
import StudentDashboard from './components/StudentDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/*
<Eventhandling/>
   <ShortCircuit/>
      <KeyLogged/>
          <StudentDashboard/>

    <TodoList />
    */}
    <KeyLogged/>
    </>
  )
}

export default App
