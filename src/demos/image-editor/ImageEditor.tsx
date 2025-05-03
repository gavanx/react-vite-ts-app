import { useEffect, useRef, useState } from 'react'
import { createEditor } from './editor'
import ToolManager from './editor/tool/ToolManager'
import { Button, Select } from 'antd'

const { Option } = Select

export default ({ screenshot, onCancel }: { screenshot: boolean; onCancel: () => void }) => {
  const editorRef = useRef<ToolManager>()
  const [position, setPosition] = useState([0, -100])
  useEffect(() => {
    if (screenshot) {
      createEditor('xxxx', {
        onShowTools: (x, y) => {
          setPosition([x, y])
        },
      }).then((editor) => {
        editorRef.current = editor
      })
    } else {
      editorRef.current = undefined
      setPosition([0, -100])
    }
  }, [screenshot])

  if (!screenshot) {
    return null
  }
  const tools = [
    {
      name: 'Rectangle',
      label: '矩形',
    },
    {
      name: 'Ellipse',
      label: '椭圆',
    },
    {
      name: 'Arrow',
      label: '箭头',
    },
    {
      name: 'Pen',
      label: '画笔',
    },
    {
      name: 'Text',
      label: '文字',
    },
    {
      name: 'Undo',
      label: '撤销',
      onClick: () => {
        editorRef.current?.undo()
      },
    },
    {
      name: 'Cancel',
      label: '取消',
      onClick: onCancel,
    },
    {
      name: 'Save',
      label: '保存',
      onClick: async () => {
        const blob = await editorRef.current?.save()
        console.log('xxxxxxxxxx save', blob)
        if (blob) {
          var clipboardItem = new ClipboardItem({
            [blob.type]: blob,
          })

          await navigator.clipboard.write([clipboardItem])
          console.log('内容已成功保存到剪贴板')
          onCancel()
        }
      },
    },
  ]
  const widths = [2, 4, 6, 10]
  const colors = ['red', 'black', 'blue', 'green', 'yellow']
  return (
    <>
      <div style={{ position: 'absolute', zIndex: 9, left: position[0], top: position[1] }}>
        <Select
          defaultValue={widths[0]}
          onChange={(value) => editorRef.current?.setStrokeWidth(value)}
        >
          {widths.map((v) => (
            <Option value={v}>{v}</Option>
          ))}
        </Select>
        <Select
          defaultValue={colors[0]}
          onChange={(value) => editorRef.current?.setStrokeColor(value)}
        >
          {colors.map((v) => (
            <Option value={v}>{v}</Option>
          ))}
        </Select>
        {tools.map((tool) => {
          return (
            <Button
              key={tool.name}
              onClick={() => {
                if (tool.onClick) {
                  tool.onClick()
                  return
                }
                editorRef.current?.setTool(tool.name)
              }}
            >
              {tool.label}
            </Button>
          )
        })}
      </div>
      <div style={{ background: '#eee' }} id='xxxx'></div>
    </>
  )
}
