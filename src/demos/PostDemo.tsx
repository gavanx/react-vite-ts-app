import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const markdown =
`
询前表单信息
--------
产品名称: matrix
模块名称: 公共模块
部署空间: 22
部署单元: cluster01
描述: 2323

- xx
- yy
  `;

export default () => (
  <Markdown rehypePlugins={[]}>{markdown}</Markdown>
);
