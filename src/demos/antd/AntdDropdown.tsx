import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Dropdown, Button, Menu, Modal, Select } from 'antd'

type MenuItem = Required<MenuProps>['items'][number]

const items: MenuItem[] = [
  {
    label: 'v1',
    key: 'v1',
    icon: <MailOutlined />,
  },
  {
    label: 'v2',
    key: 'v2',
    icon: <AppstoreOutlined />,
  },
  {
    label: 'v3',
    key: 'v3',
    icon: <SettingOutlined />,
  },
]

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.alipay.com/'>
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.taobao.com/'>
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' rel='noopener noreferrer' href='http://www.tmall.com/'>
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
)
const App: React.FC = () => {
  const [current, setCurrent] = useState('v1')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Dropdown open overlay={menu} placement='bottomLeft'>
        <Button>bottomLeft</Button>
      </Dropdown>
    </div>
  )
}

const Option = Select.Option
const DemoProject = () => {
  const [visible, setVisible] = useState(false)
  return (
    <div>
      <Select defaultValue='lucy' style={{ width: 120 }} onClick={() => setVisible(true)}>
        <Option value='jack'>Jack</Option>
        <Option value='lucy'>Lucy</Option>
        <Option value='disabled' disabled>
          Disabled
        </Option>
      </Select>
      <SelectModal visible={visible} setVisible={setVisible} />
    </div>
  )
}

const SelectModal = ({ visible, setVisible }) => {
  const InnerComponent = () => {
    return <div>inner component {`${visible}`}</div>
  }
  return (
    <Modal title='Basic Modal' visible={visible} footer={null} onCancel={() => setVisible(false)}>
      <h1>Modal</h1>
      <p>Some contents...</p>
      <InnerComponent />
    </Modal>
  )
}

export default App
