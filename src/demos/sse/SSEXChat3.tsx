import { UserOutlined } from '@ant-design/icons'
import { Bubble, Sender, useXAgent, useXChat } from '@ant-design/x'
import { Button, Flex, type GetProp } from 'antd'
import React, { useState } from 'react'
import html2canvas from 'html2canvas'
import ImageTool from '../image-editor/ImageEditor'

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

const serverUrl = 'http://localhost:3001/sse'
const App = () => {
  const [content, setContent] = React.useState('')

  // Agent for request
  const [agent] = useXAgent<string, { message: string }, string>({ baseURL: serverUrl })

  // Chat messages
  const { onRequest, messages } = useXChat({
    agent,
    transformStream: new TransformStream<string, any>({
      transform(chunk, controller) {
        console.log('xxxxxxxxxx transform', chunk)
        const DEFAULT_KV_SEPARATOR = 'data: '
        const separatorIndex = chunk.lastIndexOf(DEFAULT_KV_SEPARATOR)
        const value = chunk.slice(separatorIndex + DEFAULT_KV_SEPARATOR.length)
        try {
          const modalMessage = JSON.parse(value)
          const content = modalMessage?.message
          controller.enqueue(content)
        } catch (error) {
          controller.enqueue('')
        }
      },
    })
  })
  console.log('xxxxxxxxxx ', messages)
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: 500 }}>
      <ImageTool canvasElement={canvasElement} />
      <Bubble.List
        roles={roles}
        style={{ maxHeight: 300 }}
        items={messages.map(({ id, message, status }) => ({
          key: id,
          role: status === 'local' ? 'local' : 'ai',
          content: message.data ? JSON.parse(message.data).message : message,
        }))}
      />
      <div>
        {new Array(20).fill(0).map((_, index) => (
          <div>
            {index} - {Math.random()}
          </div>
        ))}
      </div>
      <Sender
        loading={agent.isRequesting()}
        value={content}
        onChange={setContent}
        onSubmit={(nextContent) => {
          onRequest(nextContent)
          setContent('')
        }}
      />
      {/* <iframe src='http://www.baidu.com' style={{ width: 500, height: 700 }}></iframe> */}
      <Button
        onClick={() =>
          html2canvas(document.body, { useCORS: true }).then((canvas) => {
            console.log(canvas)
            // document.body.appendChild(canvas)
            setCanvasElement(canvas)
          })
        }
      >
        截图
      </Button>
    </div>
  )
}

export default App
