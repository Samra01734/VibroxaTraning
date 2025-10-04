import React, { useEffect, useRef } from "react";

function RefExample() {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="card">
      <h2>Auto Focus Input (useRef)</h2>
      <input ref={inputRef} placeholder="Type here..." className="input" />
    </div>
  );
}

export default RefExample;
