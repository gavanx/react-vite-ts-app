/* useTransition
useTransition hook返回的isPenging用来标记过渡任务是否完成，可以看到列表完成之前
isPending一直为true。

很好的示例：这里里面中断后是如何执行的
当低优先级任务一直未执行而超过时期时间时该任务会被视为过期任务，其优先级会被提升为同步优先级，会立即执行。
 */
import React, { useState, useTransition } from "react";
export default () => {
  const [a, setA] = useState(0);
  const [isPending, startTransition] = useTransition();
  return (
    <div>
      <input
        onChange={(e) => {
          startTransition(() => setA(e.target.value));
        }}
      />
      <h2>isPending:{isPending ? "true" : "false"}</h2>
      <div style={{ height: "300px", overflow: "auto" }}>
        {Array(10000)
          .fill(0)
          .map((_, i) => {
            return <div key={i}>{a}</div>;
          })}
      </div>
    </div>
  );
};
