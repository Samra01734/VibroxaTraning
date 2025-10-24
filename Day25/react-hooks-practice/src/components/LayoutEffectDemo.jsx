import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutEffectDemo() {
  const boxRef = useRef();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const measuredHeight = boxRef.current.getBoundingClientRect().height;
    console.log("Measured height before paint:", measuredHeight);
    setHeight(measuredHeight);
  }, []);

  return (
    <div className="card">
      <h2>useLayoutEffect Demo</h2>
      <div ref={boxRef} className="box">Measure this box</div>
      <p>Measured Height: {height}px</p>
    </div>
  );
}

export default LayoutEffectDemo;
