/*
高优先级任务打断低优先级任务，导致组件重复render示例demo
可以看到子组件打印了两次render，但effect只执行了一次。
因此当使用concurrentAPI时需注意组件中是否有effect之外的特殊逻辑，即
每次render都会执行的逻辑。
 */
import React, {
  useState,
  startTransition,
  useEffect,
  useRef,
  memo,
} from "react";
const Child = memo(({ num }) => {
  console.log("child render", num, Date.now());
  useEffect(() => {
    console.log("child effect", Date.now());
  }, []);
  return (
    <div style={{ height: "300px", overflow: "auto" }}>
      {Array(num)
        .fill(0)
        .map((_, i) => {
          return <div key={i}>{i}</div>;
        })}
    </div>
  );
});
export default () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const BtnRef = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      startTransition(() => {
        console.log("setA");
        setA(5000);
      });
    }, 1000);
    setTimeout(() => {
      BtnRef.current.click();
    }, 1040);
  }, []);
  return (
    <div style={{ marginLeft: "100px" }}>
      <div
        ref={BtnRef}
        onClick={() => {
          console.log("setB");
          setB(6000);
        }}
      ></div>
      <div>a先低:{a}</div>
      <div>b后高:{b}</div>
      <Child num={a} />
    </div>
  );
};
