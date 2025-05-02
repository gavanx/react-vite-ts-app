import React, { useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Menu, Modal, Select } from 'antd'
import SubMenu from 'antd/lib/menu/SubMenu'
import { Project } from '@mi/iam-web-react'

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

const App: React.FC = () => {
  const [current, setCurrent] = useState('v1')

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e)
    setCurrent(e.key)
  }

  return (
    <div style={{ display: 'flex' }}>
      <Menu
        mode='horizontal'
        items={items}
        style={{ width: '300px' }}
        selectedKeys={[current]}
        onClick={onClick}
      ></Menu>
      <Menu onClick={onClick} mode='horizontal'>
        {current !== 'v3' ? (
          <div>
            tree select {current}
            {/* <DemoProject /> */}
            <Project
              theme={{
                token: {
                  borderRadius: 0,
                  fontSize: 15,
                  size: 18,
                  controlHeight: 38,
                },
              }}
              type='select'
              mode='global'
              onChange={(...args) => console.log('project onchange', args)}
              hasUrlParams={false}
              autoOpenModal={false}
              defaultTabKey='all'
            />
          </div>
        ) : null}
        <div>menu content</div>
        <SubMenu title='avatar' key='sub'>
          <Menu>
            <Menu.Item key='/profile'>
              <div
                className='xbox-second-title'
                to='/profile'
                style={{ fontSize: '13px', color: '#31708f' }}
              >
                Profile
              </div>
            </Menu.Item>
            <Menu.Item key='/#'>
              <div
                style={{ fontSize: '13px', color: '#31708f' }}
                onClick={(e) => {
                  this.handleLogout(e)
                }}
              >
                Logout
              </div>
            </Menu.Item>
          </Menu>
        </SubMenu>
      </Menu>
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
