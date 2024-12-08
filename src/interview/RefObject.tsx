import { useEffect } from "react";

export default () => {
  const obj = {};

  useEffect(() => {
    console.log(obj);
  }, [obj]);

  return (
    <div>
      <button onClick={() => (obj.a = 1)}>Click me</button>
    </div>
  );
};
