import { useEffect, useState } from "react";

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("xxxxxxxxx", count);
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log("xxxxxxx clearTimeout");
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        onClick={() =>
          fetch("www.baidu.com")
            .then((res) => {
              console.log("1");
            })
            .then((res) => {
              console.log(2);
            })
        }
      >
        fetch
      </button>
    </div>
  );
}
