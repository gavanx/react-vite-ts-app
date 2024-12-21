import { usePageLeave } from "react-use";

export default () => {
  usePageLeave(() => {
    console.log("PageLeave");
  });
  return <div>PageLeave</div>;
};
