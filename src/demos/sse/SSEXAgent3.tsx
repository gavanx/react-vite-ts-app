import { LoadingOutlined, TagsOutlined } from '@ant-design/icons'
import { ThoughtChain, useXAgent } from '@ant-design/x'
import type { ThoughtChainItem } from '@ant-design/x'
import { Button, Descriptions, Flex, Input, Splitter, Typography } from 'antd'
import React, { useRef, useState } from 'react'

const { Paragraph } = Typography

/**
 * 🔔 Please replace the BASE_URL, PATH, MODEL, API_KEY with your own values.
 */

// const BASE_URL = 'https://api.siliconflow.cn/v1/chat/completions'
const BASE_URL = 'http://localhost:3001/sse'
const MODEL = 'deepseek-ai/DeepSeek-R1-Distill-Qwen-7B'
const API_KEY = 'Bearer sk-ravoadhrquyrkvaqsgyeufqdgphwxfheifujmaoscudjgldr'

interface YourMessageType {
  role: string
  content: string
}

const App = () => {
  const [status, setStatus] = useState<string>('')
  const [lines, setLines] = useState<any[]>([])
  const abortController = useRef<AbortController>(null)
  const [questionText, setQuestionText] = useState<string>('你是谁？')

  const [agent] = useXAgent<YourMessageType>({
    baseURL: BASE_URL,
    model: MODEL,
    dangerouslyApiKey: API_KEY,
  })

  const request = () => {
    setLines([])
    setStatus('pending')
    agent.request(
      {
        messages: [{ role: 'user', content: questionText }],
        stream: true,
      },
      {
        onSuccess: () => {
          setStatus('success')
        },
        onError: (error) => {
          if (error.name === 'AbortError') {
            setStatus('abort')
          }
        },
        onUpdate: (msg) => {
          console.log('xxxxxxxxxx onUpdate', msg)
          setLines((pre) => [msg])
        },
        onStream: (controller) => {
          console.log('xxxxxxxxxx onStream', controller)
          abortController.current = controller
        },
      },
      new TransformStream<string, any>({
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
    )
  }

  const abort = () => {
    abortController?.current?.abort?.()
  }

  return (
    <div style={{ width: '100%' }}>
      <Flex gap='large' vertical>
        <Input
          value={questionText}
          onChange={(e) => {
            setQuestionText(e.target.value)
          }}
        />
        <Flex gap='small'>
          <Button type='primary' disabled={status === 'pending'} onClick={request}>
            Agent Request
          </Button>
          <Button type='primary' disabled={status !== 'pending'} onClick={abort}>
            Agent Abort
          </Button>
        </Flex>
      </Flex>
      <Paragraph>{lines.length > 0 && lines.join('')}</Paragraph>
    </div>
  )
}

export default App
