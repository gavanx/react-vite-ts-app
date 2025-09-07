import React, { useState, useEffect, useRef } from 'react'
import { Input, Button, Tooltip } from 'antd'
import { ClockCircleOutlined, RedditCircleFilled, QuestionCircleOutlined } from '@ant-design/icons'

// 时间格式常量和配置
const TIME_FORMAT = 'YYYY-MM-DD HH:mm'
const PART_DEFINITIONS = [
  { id: 'year', start: 0, end: 4, min: 1970, max: 2100 },
  { id: 'month', start: 5, end: 7, min: 1, max: 12 },
  { id: 'day', start: 8, end: 10, min: 1, max: 31 },
  { id: 'hour', start: 11, end: 13, min: 0, max: 23 },
  { id: 'minute', start: 14, end: 16, min: 0, max: 59 },
]
const SEPARATORS = ['-', '-', ' ', ':']

const SingleInputTimePicker = () => {
  // 初始化时间值为当前时间
  const now = new Date()
  const [timeParts, setTimeParts] = useState([
    { id: 'year', value: now.getFullYear() },
    { id: 'month', value: now.getMonth() + 1 },
    { id: 'day', value: now.getDate() },
    { id: 'hour', value: now.getHours() },
    { id: 'minute', value: now.getMinutes() },
  ])
  const [inputValue, setInputValue] = useState(formatTimeParts(timeParts))
  const [activePartIndex, setActivePartIndex] = useState(0)
  const inputRef = useRef(null)

  // 根据月份更新最大天数
  useEffect(() => {
    const year = timeParts.find((p) => p.id === 'year').value
    const month = timeParts.find((p) => p.id === 'month').value
    const maxDay = new Date(year, month, 0).getDate()

    setTimeParts((prev) =>
      prev.map((part) => {
        if (part.id !== 'day') return part

        // 如果当前天数超过最大天数，调整为最大天数
        const newValue = Math.min(part.value, maxDay)
        return { ...part, value: newValue, max: maxDay }
      })
    )
  }, [
    timeParts.find((p) => p.id === 'year')?.value,
    timeParts.find((p) => p.id === 'month')?.value,
  ])

  // 当时间部分变化时更新输入框值
  useEffect(() => {
    setInputValue(formatTimeParts(timeParts))
  }, [timeParts])

  // 格式化时间部分为字符串
  function formatTimeParts(parts) {
    let result = ''

    parts.forEach((part, index) => {
      // 添加时间部分（补零）
      if (part.id === 'year') {
        result += part.value.toString()
      } else {
        result += part.value.toString().padStart(2, '0')
      }

      // 添加分隔符
      if (index < SEPARATORS.length) {
        result += SEPARATORS[index]
      }
    })

    return result
  }

  // 解析输入值到时间部分
  function parseInputValue(value) {
    // 移除所有非数字字符
    const numericValue = value.replace(/\D/g, '')
    if (numericValue.length < 8) return null // 至少需要年月日

    // 提取各个部分
    const year = parseInt(numericValue.substring(0, 4), 10)
    const month = parseInt(numericValue.substring(4, 6), 10) || 1
    const day = parseInt(numericValue.substring(6, 8), 10) || 1
    const hour = numericValue.length >= 10 ? parseInt(numericValue.substring(8, 10), 10) : 0
    const minute = numericValue.length >= 12 ? parseInt(numericValue.substring(10, 12), 10) : 0

    return [
      { id: 'year', value: isNaN(year) ? timeParts[0].value : year },
      { id: 'month', value: isNaN(month) ? timeParts[1].value : month },
      { id: 'day', value: isNaN(day) ? timeParts[2].value : day },
      { id: 'hour', value: isNaN(hour) ? timeParts[3].value : hour },
      { id: 'minute', value: isNaN(minute) ? timeParts[4].value : minute },
    ]
  }

  // 根据光标位置确定当前激活的部分
  function getPartIndexFromCursorPosition(pos) {
    for (let i = 0; i < PART_DEFINITIONS.length; i++) {
      const part = PART_DEFINITIONS[i]
      if (pos >= part.start && pos < part.end) {
        return i
      }
    }
    return activePartIndex // 默认返回当前激活的部分
  }

  // 设置光标位置到指定部分
  function setCursorToPart(partIndex) {
    if (!inputRef.current) return

    const part = PART_DEFINITIONS[partIndex]
    const input = inputRef.current

    // 设置光标位置到该部分的起始位置
    setTimeout(() => {
      input.setSelectionRange(part.start, part.end)
    }, 0)
  }

  // 处理输入变化
  const handleInputChange = (e) => {
    const newValue = e.target.value
    setInputValue(newValue)

    // 解析并更新时间部分
    const parsedParts = parseInputValue(newValue)
    if (parsedParts) {
      // 验证每个部分的值
      const validatedParts = parsedParts.map((part, index) => {
        const def = PART_DEFINITIONS[index]
        let value = part.value

        // 确保在有效范围内
        if (value < def.min) value = def.min
        if (value > def.max) value = def.max

        return { ...part, value }
      })

      setTimeParts(validatedParts)
    }
  }

  // 处理输入框获得焦点
  const handleFocus = () => {
    if (inputRef.current) {
      const cursorPos = inputRef.current.selectionStart
      const partIndex = getPartIndexFromCursorPosition(cursorPos)
      setActivePartIndex(partIndex)
      setCursorToPart(partIndex)
    }
  }

  // 切换到下一个部分
  const selectNextPart = () => {
    const nextIndex = (activePartIndex + 1) % PART_DEFINITIONS.length
    setActivePartIndex(nextIndex)
    setCursorToPart(nextIndex)
  }

  // 切换到上一个部分
  const selectPrevPart = () => {
    const prevIndex = (activePartIndex - 1 + PART_DEFINITIONS.length) % PART_DEFINITIONS.length
    setActivePartIndex(prevIndex)
    setCursorToPart(prevIndex)
  }

  // 增加当前部分的值
  const incrementValue = () => {
    setTimeParts((prev) =>
      prev.map((part, index) => {
        if (index !== activePartIndex) return part

        const def = PART_DEFINITIONS[index]
        let newValue = part.value + 1

        // 处理边界
        if (newValue > def.max) {
          newValue = def.min
        }

        return { ...part, value: newValue }
      })
    )

    // 保持光标位置
    setCursorToPart(activePartIndex)
  }

  // 减少当前部分的值
  const decrementValue = () => {
    setTimeParts((prev) =>
      prev.map((part, index) => {
        if (index !== activePartIndex) return part

        const def = PART_DEFINITIONS[index]
        let newValue = part.value - 1

        // 处理边界
        if (newValue < def.min) {
          newValue = def.max
        }

        return { ...part, value: newValue }
      })
    )

    // 保持光标位置
    setCursorToPart(activePartIndex)
  }

  // 重置为当前时间
  const resetToNow = () => {
    const newNow = new Date()
    setTimeParts([
      { id: 'year', value: newNow.getFullYear() },
      { id: 'month', value: newNow.getMonth() + 1 },
      { id: 'day', value: newNow.getDate() },
      { id: 'hour', value: newNow.getHours() },
      { id: 'minute', value: newNow.getMinutes() },
    ])
    setActivePartIndex(0)

    // 设置光标位置
    setTimeout(() => {
      setCursorToPart(0)
    }, 0)
  }

  // 处理键盘事件
  const handleKeyDown = (e) => {
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault()
        selectNextPart()
        break
      case 'ArrowLeft':
        e.preventDefault()
        selectPrevPart()
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
        e.shiftKey ? selectPrevPart() : selectNextPart()
        break
    }
  }

  return (
    <div className='bg-white p-6 rounded-lg shadow-md max-w-md w-full'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='text-lg font-semibold text-gray-800'>时间选择器</h3>
        <Tooltip title='使用左右键切换时间部分，上下键调整数值'>
          <QuestionCircleOutlined className='text-gray-400' />
        </Tooltip>
      </div>

      <div className='mb-6'>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          size='large'
          placeholder={TIME_FORMAT}
          className='text-center text-lg h-12'
        />
      </div>

      <div className='flex justify-center space-x-3'>
        <Button icon={<RedditCircleFilled />} onClick={resetToNow} variant='default'>
          重置
        </Button>
        <Button icon={<ClockCircleOutlined />} onClick={resetToNow} type='primary'>
          当前时间
        </Button>
      </div>

      <p className='text-xs text-gray-500 mt-4 text-center'>
        格式: {TIME_FORMAT} | 支持键盘导航和直接输入
      </p>
    </div>
  )
}

export default SingleInputTimePicker
