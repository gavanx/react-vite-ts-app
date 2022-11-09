import React from "react";
import Loadable from "react-loadable";
import UseReactiveDemo from "./hooks/custom/demo/UseReactiveDemo";

const LoadingComponent = () => <div>loading</div>;

const modules = [
  "./hooks/State",
  "./hooks/Effect",
  "./hooks/Effect2",
  "./hooks/Context",
  "./hooks/CounterTimeout",
  "./hooks/Memo",
  "./hooks/Callback",
  "./hooks/Ref",
  "./hooks/Ref2",
  "./hooks/useImperativeHandle",
  "./hooks/LayoutEffect",
  "./hooks/LayoutEffect2",
  "./hooks/DebugValue",
  "./hooks/useFriendStatus",
  "./wrap/memo",
].map((m) => {
  return Loadable({
    loader: () => import(m + ".js"),
    loading: LoadingComponent,
  });
});

export default () => {
  return (
    <div>
      <h2>Demo:</h2>
      <UseReactiveDemo />
      {/* <AutoBatchUpdate/> */}
      {/* {modules.map((Module, i) => <Module key={i} />)} */}
    </div>
  );
};
