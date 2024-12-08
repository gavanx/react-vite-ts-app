import React, { useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);
  console.log("组件渲染，count：", count);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          setTimeout(() => {
            console.log("setTimeout 回调，count：", count);
          }, 0);
        }}
      >
        + 1
      </button>
    </div>
  );
}
