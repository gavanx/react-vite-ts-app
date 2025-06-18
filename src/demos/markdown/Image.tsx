import markdownit from 'markdown-it'
import React from 'react'

const md = markdownit({
  html: true,
  breaks: true,
  linkify: true,
  typographer: true,
  langPrefix: 'language-',
})

const defaultRenderLink =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  tokens[idx].attrSet('target', '_blank')
  return defaultRenderLink(tokens, idx, options, env, self)
}
md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
  const inline = tokens[idx + 1].content
  if (inline.startsWith('![image](img_')) {
    tokens[idx + 1].content = '[...]'
  }
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.paragraph_close = (tokens, idx, options, env, self) => {
  const ret = self.renderToken(tokens, idx, options)
  console.log('xxxxxx', tokens[idx - 1], ret)
  return ret
}
// 插件：处理 @username 标记
const usernamePlugin = (md) => {
  // 解析规则
  md.inline.ruler.after('link', 'username', (state, silent) => {
    console.log('xxxxxx state', state.src.slice(state.pos))
    const match = /^@(\w+)/.exec(state.src.slice(state.pos))
    if (!match) return false

    if (silent) return true

    // 创建链接 token
    const token = state.push('link_open', 'a', 1)
    token.attrSet('href', `/user/${match[1]}`)
    token.attrSet('class', 'username')

    const textToken = state.push('text', '', 0)
    textToken.content = match[0]

    state.push('link_close', 'a', -1)

    state.pos += match[0].length
    return true
  })
}

md.use(usernamePlugin)

const imagePlugin = (md) => {
  // 解析规则
  md.inline.ruler.before('link', 'image', (state, silent) => {
    const content = state.src.slice(state.pos)
    const match = /^!\[.+\]\(img_[^)]+/.exec(content)
    console.log('xxxxxx content', content, match)
    if (!match || match[0] !== content) return false
    if (silent) return true

    const token = state.push('paragrah_open', 'div', 1)
    token.attrSet('style', 'height: 200px')

    const textToken = state.push('text', '', 0)
    textToken.content = '...'

    state.push('link_close', 'div', -1)

    state.pos += content.length
    return true
  })
}
md.use(imagePlugin)

const src = `请提供具体的主机名或IP地址，以便我们能够帮助您获取相关的主机详情。
请联系 @admin 获取帮助
例如：
![image](img_v3_02mh_879d3a1c-)abc
- 主机名：example-host
- IP地址：192.168.1.1

![image.png](img_v3_02mh_879d3a1c-`

export default () => {
  return (
    <div>
      <div>{src}</div>
      <hr />
      <div>{md.render(src)}</div>
      <hr />
      <div dangerouslySetInnerHTML={{ __html: md.render(src) }} />
    </div>
  )
}
