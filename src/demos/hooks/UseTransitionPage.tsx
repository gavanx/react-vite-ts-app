/*
Suspense处理异步接口演示 
 */
import React, { Suspense, useState, useTransition } from "react";
import { createResource } from "./CreateResource";
/* mock一个异步请求 */
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id, name: "用户名" + id });
    }, 1000 * Number(id));
  });
}
/* 创建一个异步resource供组件调用 */
const userResource = createResource(fetchUser);
/*
 子组件中直接从resource中取值，而不是把他当作promise处理
 */
function User({ id }) {
  let user = userResource.read(id);
  return (
    <div>
      {user.id}:{user.name}
    </div>
  );
}
function UseTransitionPage() {
  const [userId, setUserId] = useState(1);
  const [isPending, startTransition] = useTransition({ timeoutMs: 1 });
  const changeToUser5 = () => {
    //setUserId(3);
    startTransition(() => {
      setUserId(3);
    });
  };
  return (
    <>
      <Suspense fallback={<div>loading user....</div>}>
        <User id={userId} />
      </Suspense>
      <button onClick={changeToUser5}>切换到用户3</button>
      <div>id:{userId}</div>
      <div>{isPending && <div>loading</div>}</div>
    </>
  );
}

export default UseTransitionPage;
