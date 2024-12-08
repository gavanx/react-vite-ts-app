/*
演示时间切片解决视图卡顿问题
当点击long render时讲开启一个耗时很久的更新任务，此时点击change a试图改变a时会没有响应，直到render结束后才会恢复。这是
显然这是由于js线程被阻塞导致。当使用startTransition调度高耗时的render任务时，再次点击change a可以看到是正常响应的。
 */
import React, { useState, useRef, useTransition } from "react";

import requestIdle from "./requestIdle";

const Text = () => {
  const start = performance.now();
  while (performance.now() - start < 50) {}
  return <div>111111</div>;
};

export default () => {
  const [b, setB] = useState(0);
  const testRef = useRef(null);
  const [isPending, startTransition] = useTransition({ timeoutMs: 1000 });
  return (
    <div>
      <button
        onClick={() => {
          testRef.current.innerText = `${Math.random()}`;
        }}
      >
        change a
      </button>
      <button
        onClick={() => {
          setB(100);
          // startTransition(() => setB(100));
        }}
      >
        long render
      </button>
      <button
        onClick={() => {
          requestIdle()
        }}
      >
        requestIdle
      </button>
      <div>isPending: {isPending ? "true" : "false"}</div>
      <div ref={testRef}>a</div>
      <div style={{ height: "300px", overflow: "auto" }}>
        {Array(b)
          .fill(0)
          .map((_, i) => {
            return <Text />;
          })}
      </div>
    </div>
  );
};
