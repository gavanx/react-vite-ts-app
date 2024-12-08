import { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Click me</button>

      <button onClick={() => setCount((v) => v + 1)}>Click me</button>
    </div>
  );
};
