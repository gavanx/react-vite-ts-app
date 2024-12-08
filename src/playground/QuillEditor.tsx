import Quill from "quill";
import QuillMarkdown from "quill-markdown";
import { useEffect } from "react";

Quill.register("modules/QuillMarkdown", QuillMarkdown, true);

const options = {
  theme: "snow",
  modules: {
    toolbar: false,
    QuillMarkdown: {},
  },
};

export default () => {
  useEffect(() => {
    new Quill("#editor", options);
  }, []);
  return <div id="editor">xxxxxxxxxxx</div>;
};
