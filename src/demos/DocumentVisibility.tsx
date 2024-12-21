import { useDocumentVisibility } from "ahooks";
import { useEffect, useRef } from "react";

export default () => {
  const visiblity = useDocumentVisibility();
  const ref = useRef(false);
  useEffect(() => {
    const handleVisibilityChange = () => {
      ref.current = document.visibilityState === "visible";
      console.log("visibilitychange", ref.current);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return <div>useDocumentVisibility: {visiblity}</div>;
};
