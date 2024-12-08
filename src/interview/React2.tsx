import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("xxxxxxxxx", count);
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log('xxxxxxx clearInterval')
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}
