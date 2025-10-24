import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

const Posts = lazy(() => import("./pages/Posts"));
const About = lazy(() => import("./pages/About"));
const Tasks = lazy(() => import("./pages/Tasks"));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/posts">Posts</Link> | 
        <Link to="/tasks">Tasks</Link> | 
        <Link to="/about">About</Link>
      </nav>

      <Suspense fallback={<div>Loading page...</div>}>
        <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
