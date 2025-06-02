import { createFromIconfontCN } from '@ant-design/icons'

const IconFont = createFromIconfontCN({
  // IconFont网页提示：在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。
  // 但目前看稳定性还好，只影响首次打开加载不到的情况
  scriptUrl: [
    '//at.alicdn.com/t/c/font_4836233_1uym89o4et.js', // 二期导航需求涉及的图标
  ],
})

export default IconFont
