import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";

// Child
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} className="input" placeholder="Custom input..." />;
});

// Parent
function ImperativeHandleDemo() {
  const childRef = useRef();

  return (
    <div className="card">
      <h2>useImperativeHandle + forwardRef</h2>
      <CustomInput ref={childRef} />
      <button onClick={() => childRef.current.focusInput()} className="btn">
        Focus Input
      </button>
    </div>
  );
}

export default ImperativeHandleDemo;
