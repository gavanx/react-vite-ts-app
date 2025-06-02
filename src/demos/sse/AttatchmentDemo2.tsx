import { CloudUploadOutlined, LinkOutlined } from '@ant-design/icons'
import { Attachments, AttachmentsProps, Sender } from '@ant-design/x'
import { App, Badge, Button, Flex, type GetProp, type GetRef, Typography } from 'antd'
import React, { useRef } from 'react'
import { useImmer } from 'use-immer'

const Demo = () => {
  const [open, setOpen] = React.useState(true)
  const [items, setItems] = useImmer<GetProp<AttachmentsProps, 'items'>>([])
  const [text, setText] = React.useState('')

  const { notification } = App.useApp()

  const senderRef = React.useRef<GetRef<typeof Sender>>(null)
  const attachmentsRef = useRef<GetRef<typeof Attachments>>(null)

  const senderHeader = (
    <Sender.Header
      title='Attachments'
      open={items.length > 0}
      onOpenChange={setOpen}
      styles={{
        content: {
          padding: 0,
        },
      }}
      forceRender
      closable={false}
    >
      <Attachments
        ref={attachmentsRef}
        beforeUpload={() => false}
        items={items}
        onChange={({ fileList }) => setItems(fileList)}
        getDropContainer={() => senderRef.current?.nativeElement}
      />
    </Sender.Header>
  )

  return (
    <Flex style={{ minHeight: 250 }} align='flex-end'>
      <Sender
        ref={senderRef}
        header={senderHeader}
        prefix={
          <Badge dot={items.length > 0 && !open}>
            <Button onClick={() => setOpen(!open)} icon={<LinkOutlined />} />
          </Badge>
        }
        value={text}
        onChange={setText}
        onPasteFile={(_, files) => {
          for (const file of files) {
            attachmentsRef.current?.upload(file)
          }
        }}
        onSubmit={() => {
          notification.info({
            message: 'Mock Submit',
            description: (
              <Typography>
                <ul>
                  <li>You said: {text}</li>
                  <li>
                    Attachments count: {items.length}
                    <ul>
                      {items.map((item) => (
                        <li key={item.uid}>{item.name}</li>
                      ))}
                    </ul>
                  </li>
                </ul>
              </Typography>
            ),
          })

          setItems([])
          setText('')
        }}
      />
    </Flex>
  )
}

export default () => (
  <App>
    <Demo />
  </App>
)
