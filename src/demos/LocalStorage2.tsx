import { useLocalStorage } from 'react-use'

const Demo = () => {
  const [value, setValue, remove] = useLocalStorage('my-key', false)
  console.log('xxxxxxxxx', value)
  return (
    <div>
      <div>Value: {`${value}`}</div>
      <button onClick={() => setValue(true)}>true</button>
      <button onClick={() => setValue(false)}>false</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  )
}

export default Demo
