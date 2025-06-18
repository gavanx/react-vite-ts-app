import React, { useState } from 'react'
import { Routes, Route, Outlet, Link, BrowserRouter } from 'react-router-dom'
import { Table, Tooltip } from 'antd'

export default function App() {
  return (
    <div>
      <h3>Tooltip Example</h3>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>Bad Tooltip</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

const Tip: React.FC<{ value: React.ReactNode }> = ({ value }) => {
  const [flag, setFlag] = useState(true)
  if (!flag) {
    return <div onMouseEnter={() => setFlag(true)}>{value}</div>
  }
  return (
    <Tooltip placement='top' title={value} destroyTooltipOnHide arrow={false}>
      {value}
    </Tooltip>
  )
}

function About() {
  const ellipsisTableTooltip = {
    ellipsis: true,
    render: (v) => <Tip value={v} />,
  }

  const columns2 = Array.from({ length: 5 }).map((_, index) => ({
    title: 'LongColumn' + index,
    dataIndex: 'LongColumn' + index,
    key: 'LongColumn' + index,
    ...ellipsisTableTooltip, // 注释掉这里用于是否取消ellipsis
  }))

  const data2 = Array.from({ length: 18 }).map((_, index) => ({
    key: 'key' + index,
    ...columns2
      .map((col) => col.dataIndex)
      .reduce((total, current, j) => {
        total[current] = current + j
        return total
      }, {}),
  }))
  return (
    <Table
      columns={columns2}
      dataSource={data2}
      scroll={{ x: 1000 }}
      pagination={{ defaultPageSize: 50 }}
    />
  )
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to='/'>Go to the home page</Link>
      </p>
    </div>
  )
}
