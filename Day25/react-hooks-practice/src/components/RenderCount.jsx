import React, { useRef, useState, useEffect } from "react";

function RenderCount() {
  const [text, setText] = useState("");
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  return (
    <div className="card">
      <h2>Render Count Example</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
        className="input"
      />
      <p>Render Count: {renderCount.current}</p>
    </div>
  );
}

export default RenderCount;
