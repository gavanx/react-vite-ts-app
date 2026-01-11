import React, { useState, useEffect } from 'react'
import { Select, Space } from 'antd'

// 您的数据
const regionData = {
  code: 200,
  msg: 'success',
  data: [
    {
      label: '全球',
      value: 'glo-glo',
    },
    {
      label: '国内',
      value: 'chn-chn',
      children: [
        {
          label: '中国-智驾专区',
          value: 'chn-evad',
        },
        {
          label: '中国-北京',
          value: 'chn-beijing',
          children: [
            {
              label: 'rent',
              value: 'rent',
              children: [
                {
                  label: 'p5',
                  value: 'p5',
                },
                {
                  label: '安康机房',
                  value: 'ak',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: '海外',
      value: 'abd-abd',
      children: [
        {
          label: '美国-硅谷',
          value: 'usa-siliconvalley',
        },
        {
          label: '新加坡-新加坡',
          value: 'sgp-singapore',
          children: [
            {
              label: 'cloud',
              value: 'cloud',
              children: [
                {
                  label: '金山云新加坡',
                  value: 'ksysgp',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// 三级级联选择器组件
const RegionCascadeSelect = () => {
  const [regions] = useState(regionData.data)
  const [selectedLevel1, setSelectedLevel1] = useState(null)
  const [selectedLevel2, setSelectedLevel2] = useState(null)
  const [selectedLevel3, setSelectedLevel3] = useState(null)
  const [level2Options, setLevel2Options] = useState([])
  const [level3Options, setLevel3Options] = useState([])
  const [level4Options, setLevel4Options] = useState([])

  // 当第一级选择变化时
  const handleLevel1Change = (value) => {
    setSelectedLevel1(value)
    setSelectedLevel2(null)
    setSelectedLevel3(null)
    setLevel3Options([])
    setLevel4Options([])

    if (value) {
      const selectedRegion = regions.find((r) => r.value === value)
      setLevel2Options(selectedRegion?.children || [])
    } else {
      setLevel2Options([])
    }
  }

  // 当第二级选择变化时
  const handleLevel2Change = (value) => {
    setSelectedLevel2(value)
    setSelectedLevel3(null)
    setLevel4Options([])

    if (value && selectedLevel1) {
      const selectedRegion = regions.find((r) => r.value === selectedLevel1)
      if (selectedRegion?.children) {
        const selectedSubRegion = selectedRegion.children.find((c) => c.value === value)
        setLevel3Options(selectedSubRegion?.children || [])
      }
    } else {
      setLevel3Options([])
    }
  }

  // 当第三级选择变化时
  const handleLevel3Change = (value) => {
    setSelectedLevel3(value)

    if (value && selectedLevel1 && selectedLevel2) {
      const selectedRegion = regions.find((r) => r.value === selectedLevel1)
      if (selectedRegion?.children) {
        const selectedSubRegion = selectedRegion.children.find((c) => c.value === selectedLevel2)
        if (selectedSubRegion?.children) {
          const selectedSubSubRegion = selectedSubRegion.children.find((c) => c.value === value)
          setLevel4Options(selectedSubSubRegion?.children || [])
        }
      }
    } else {
      setLevel4Options([])
    }
  }

  // 当第四级选择变化时
  const handleLevel4Change = (value) => {
    console.log('已选择:', {
      一级: selectedLevel1,
      二级: selectedLevel2,
      三级: selectedLevel3,
      四级: value,
    })
  }

  // 获取完整的层级路径
  const getFullPath = () => {
    let path = ''
    if (selectedLevel1) {
      const level1 = regions.find((r) => r.value === selectedLevel1)
      path += level1?.label || ''
    }
    if (selectedLevel2) {
      const level2 = level2Options.find((r) => r.value === selectedLevel2)
      path += level2 ? ` / ${level2.label}` : ''
    }
    if (selectedLevel3) {
      const level3 = level3Options.find((r) => r.value === selectedLevel3)
      path += level3 ? ` / ${level3.label}` : ''
    }
    return path
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>地区选择器</h2>

      <Space direction='vertical' style={{ width: '100%' }} size='large'>
        <div>
          <h4>当前选择: {getFullPath() || '未选择'}</h4>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            第一级: 大区
          </label>
          <Select
            style={{ width: '100%' }}
            placeholder='请选择大区'
            value={selectedLevel1}
            onChange={handleLevel1Change}
            options={regions.map((region) => ({
              label: region.label,
              value: region.value,
            }))}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            第二级: 地区/城市
          </label>
          <Select
            style={{ width: '100%' }}
            placeholder={selectedLevel1 ? '请选择地区/城市' : '请先选择大区'}
            value={selectedLevel2}
            onChange={handleLevel2Change}
            disabled={!selectedLevel1}
            options={level2Options.map((region) => ({
              label: region.label,
              value: region.value,
            }))}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            第三级: 类型
          </label>
          <Select
            style={{ width: '100%' }}
            placeholder={selectedLevel2 ? '请选择类型' : '请先选择地区'}
            value={selectedLevel3}
            onChange={handleLevel3Change}
            disabled={!selectedLevel2}
            options={level3Options.map((region) => ({
              label: region.label,
              value: region.value,
            }))}
            showSearch
            filterOption={(input, option) =>
              (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
          />
        </div>

        {level4Options.length > 0 && (
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              第四级: 具体选项
            </label>
            <Select
              style={{ width: '100%' }}
              placeholder='请选择具体选项'
              onChange={handleLevel4Change}
              options={level4Options.map((region) => ({
                label: region.label,
                value: region.value,
              }))}
              showSearch
              filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
              }
            />
          </div>
        )}

        {/* 显示当前选中值 */}
        {(selectedLevel1 || selectedLevel2 || selectedLevel3) && (
          <div
            style={{
              marginTop: '20px',
              padding: '15px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
            }}
          >
            <h4>当前选中值:</h4>
            <p>一级: {selectedLevel1 || '未选择'}</p>
            <p>二级: {selectedLevel2 || '未选择'}</p>
            <p>三级: {selectedLevel3 || '未选择'}</p>
          </div>
        )}
      </Space>
    </div>
  )
}

// 使用Cascader组件的简化版本
const RegionCascader = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h2>地区级联选择器 (Cascader组件)</h2>
      <Cascader
        style={{ width: '100%' }}
        placeholder='请选择地区'
        options={regionData.data}
        expandTrigger='hover'
        showSearch={{
          filter: (inputValue, path) => {
            return path.some(
              (option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
            )
          },
        }}
        displayRender={(labels) => labels.join(' / ')}
        onChange={(value, selectedOptions) => {
          console.log('选中值:', value)
          console.log('选中选项:', selectedOptions)
        }}
      />
    </div>
  )
}

// 主应用组件
const App = () => {
  return (
    <div>
      <RegionCascadeSelect />
      {/* 如果要使用Cascader组件，取消下面这行的注释 */}
      {/* <RegionCascader /> */}
    </div>
  )
}

export default App
