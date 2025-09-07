import React, { useState, useEffect, useRef } from 'react'
import { Input, Space, Button, Tooltip } from 'antd'
import { ClockCircleOutlined, RedditCircleFilled, QuestionCircleOutlined } from '@ant-design/icons'

const TimeInput = () => {
  // 初始化时间值为当前时间
  const now = new Date()
  const [timeParts, setTimeParts] = useState([
    { id: 'year', value: now.getFullYear(), min: 1970, max: 2100, length: 4 },
    { id: 'month', value: now.getMonth() + 1, min: 1, max: 12, length: 2 },
    { id: 'day', value: now.getDate(), min: 1, max: 31, length: 2 },
    { id: 'hour', value: now.getHours(), min: 0, max: 23, length: 2 },
    { id: 'minute', value: now.getMinutes(), min: 0, max: 59, length: 2 },
  ])
  const [activeIndex, setActiveIndex] = useState(0)
  const inputRefs = useRef([])

  // 根据月份更新最大天数
  useEffect(() => {
    const year = timeParts.find((p) => p.id === 'year')!.value
    const month = timeParts.find((p) => p.id === 'month')!.value
    const maxDay = new Date(year, month, 0).getDate()

    setTimeParts((prev) =>
      prev.map((part) =>
        part.id === 'day' ? { ...part, max: maxDay, value: Math.min(part.value, maxDay) } : part
      )
    )
  }, [
    timeParts.find((p) => p.id === 'year')?.value,
    timeParts.find((p) => p.id === 'month')?.value,
  ])

  // 聚焦到当前激活的输入框
  useEffect(() => {
    if (inputRefs.current[activeIndex]) {
      inputRefs.current[activeIndex].focus()
    }
  }, [activeIndex])

  // 处理输入框值变化
  const handleInputChange = (index, value) => {
    // 移除所有非数字字符
    const numericValue = value.replace(/\D/g, '')
    if (numericValue === '') {
      return
    }

    // 转换为数字并检查边界
    let numValue = parseInt(numericValue, 10)
    const part = timeParts[index]

    // 限制在最小值和最大值之间
    if (numValue < part.min) numValue = part.min
    if (numValue > part.max) numValue = part.max

    // 更新时间部分
    setTimeParts((prev) => prev.map((p, i) => (i === index ? { ...p, value: numValue } : p)))
  }

  // 切换到下一个输入框
  const selectNext = () => {
    setActiveIndex((prev) => (prev + 1) % timeParts.length)
  }

  // 切换到上一个输入框
  const selectPrev = () => {
    setActiveIndex((prev) => (prev - 1 + timeParts.length) % timeParts.length)
  }

  // 增加当前值
  const incrementValue = () => {
    setTimeParts((prev) =>
      prev.map((part, i) => {
        if (i !== activeIndex) return part
        return {
          ...part,
          value: part.value < part.max ? part.value + 1 : part.min,
        }
      })
    )
  }

  // 减少当前值
  const decrementValue = () => {
    setTimeParts((prev) =>
      prev.map((part, i) => {
        if (i !== activeIndex) return part
        return {
          ...part,
          value: part.value > part.min ? part.value - 1 : part.max,
        }
      })
    )
  }

  // 重置为当前时间
  const resetToNow = () => {
    const newNow = new Date()
    setTimeParts([
      { id: 'year', value: newNow.getFullYear(), min: 1970, max: 2100, length: 4 },
      { id: 'month', value: newNow.getMonth() + 1, min: 1, max: 12, length: 2 },
      { id: 'day', value: newNow.getDate(), min: 1, max: 31, length: 2 },
      { id: 'hour', value: newNow.getHours(), min: 0, max: 23, length: 2 },
      { id: 'minute', value: newNow.getMinutes(), min: 0, max: 59, length: 2 },
    ])
    setActiveIndex(0)
  }

  // 处理键盘事件
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        selectNext()
        break
      case 'ArrowLeft':
        e.preventDefault()
        selectPrev()
        break
      case 'ArrowUp':
        e.preventDefault()
        incrementValue()
        break
      case 'ArrowDown':
        e.preventDefault()
        decrementValue()
        break
      case 'Tab':
        e.preventDefault()
        e.shiftKey ? selectPrev() : selectNext()
        break
    }
  }

  // 获取格式化后的值（补零）
  const getFormattedValue = (part) => {
    return part.value.toString().padStart(part.length, '0')
  }

  // 渲染时间输入框和分隔符
  const renderTimeInputs = () => {
    const elements = []
    const separators = ['-', '-', ' ', ':']

    timeParts.forEach((part, index) => {
      // 添加输入框
      elements.push(
        <Input
          key={part.id}
          ref={(el) => (inputRefs.current[index] = el)}
          value={getFormattedValue(part)}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={handleKeyDown}
          size='large'
          className={`w-[${part.length * 24}px] text-center ${
            activeIndex === index ? 'border-primary ring-2 ring-primary/20' : ''
          }`}
          aria-label={`${part.id} input`}
        />
      )

      // 添加分隔符
      if (index < separators.length) {
        elements.push(
          <span key={`sep-${index}`} className='mx-1 text-gray-500'>
            {separators[index]}
          </span>
        )
      }
    })

    return elements
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md max-w-md w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-lg font-semibold text-gray-800'>时间选择器</h3>
        <Tooltip title='使用左右键切换输入框，上下键调整数值'>
          <QuestionCircleOutlined className='text-gray-400' />
        </Tooltip>
      </div>

      <Space direction='horizontal' className='mb-6 w-full justify-center'>
        {renderTimeInputs()}
      </Space>

      <div className='flex justify-center space-x-3'>
        <Button icon={<RedditCircleFilled />} onClick={resetToNow} variant='default'>
          重置
        </Button>
        <Button icon={<ClockCircleOutlined />} onClick={resetToNow} type='primary'>
          当前时间
        </Button>
      </div>

      <p className='text-xs text-gray-500 mt-4 text-center'>支持手动输入数字或使用方向键调整</p>
    </div>
  )
}

export default TimeInput
