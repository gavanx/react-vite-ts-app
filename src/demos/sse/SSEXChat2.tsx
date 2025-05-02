import { UserOutlined } from '@ant-design/icons'
import { Bubble, Sender, useXAgent, useXChat } from '@ant-design/x'
import { Flex, type GetProp } from 'antd'
import React from 'react'

const roles: GetProp<typeof Bubble.List, 'roles'> = {
  ai: {
    placement: 'start',
    avatar: { icon: <UserOutlined />, style: { background: '#fde3cf' } },
  },
  local: {
    placement: 'end',
    avatar: { icon: <UserOutlined />, style: { background: '#87d068' } },
  },
}

const serverUrl = 'http://localhost:3000/sse'
const App = () => {
  const [content, setContent] = React.useState('')

  // Agent for request
  const [agent] = useXAgent<string, { message: string }, string>({ baseURL: serverUrl })

  // Chat messages
  const { onRequest, messages } = useXChat({
    agent,
  })
  console.log('xxxxxxxxxx ', messages)

  return (
    <Flex vertical gap='middle' style={{ width: 500 }}>
      <Bubble.List
        roles={roles}
        style={{ maxHeight: 300 }}
        items={messages.map(({ id, message, status }) => ({
          key: id,
          role: status === 'local' ? 'local' : 'ai',
          content: message.data ? JSON.parse(message.data).message : message,
        }))}
      />
      <Sender
        loading={agent.isRequesting()}
        value={content}
        onChange={setContent}
        onSubmit={(nextContent) => {
          onRequest(nextContent)
          setContent('')
        }}
      />
    </Flex>
  )
}

export default App
