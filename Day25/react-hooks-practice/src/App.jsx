import { Routes, Route, NavLink } from "react-router-dom";
import RefExample from "./components/RefExample";
import RenderCount from "./components/RenderCount";
import LayoutEffectDemo from "./components/LayoutEffectDemo";
import ImperativeHandleDemo from "./components/ImperativeHandleDemo";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Hooks Practice</h1>

      <nav className="navbar">
        <NavLink to="/ref" className="link">useRef Focus</NavLink>
        <NavLink to="/render" className="link">Render Count</NavLink>
        <NavLink to="/layout" className="link">LayoutEffect</NavLink>
        <NavLink to="/imperative" className="link">ImperativeHandle</NavLink>
      </nav>

      <div className="content">
        <Routes>
          <Route path="/ref" element={<RefExample />} />
          <Route path="/render" element={<RenderCount />} />
          <Route path="/layout" element={<LayoutEffectDemo />} />
          <Route path="/imperative" element={<ImperativeHandleDemo />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
