import { createContext, useContext, useState } from 'react'

const MyContext = createContext({ value: 'default', update: (value: number) => {} })

const ChildComponent = ({ v }: { v: number }) => {
  const context = useContext(MyContext)
  return (
    <div>
      当前值: {context.value} - {v}
      <button
        onClick={() => {
          context.value = '' + Math.random()
          context.update(Math.random())
        }}
      >
        set
      </button>
    </div>
  )
}

const ParentComponent = () => {
  const [value, setValue] = useState(Math.random())
  const [value2, setValue2] = useState(Math.random())
  return (
    <MyContext.Provider value={{ value: '外层值' + value, update: setValue }}>
      <div>
        <ChildComponent v={value} />
        <ChildComponent v={value} />
        <hr />
        <MyContext.Provider value={{ value: '内层值' + value2, update: setValue2 }}>
          <ChildComponent v={value2} />
          <ChildComponent v={value2} />
        </MyContext.Provider>
      </div>
    </MyContext.Provider>
  )
}

const App = () => {
  return (
    <div>
      <ParentComponent />
    </div>
  )
}

export default App
