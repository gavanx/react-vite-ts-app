import { useState } from 'react'

const Child = ({ screenshot }: { screenshot: boolean }) => {
  const [loading, setLoading] = useState(screenshot)
  console.log('xxxxxxxxxx render', screenshot, loading)

  return (
    <div>
      <h1>Child</h1>
      <h2>screenshot: {screenshot + ''}</h2>
      <h2>loading: {loading + ''}</h2>
    </div>
  )
}

export default () => {
  const [screenshot, setScreenshot] = useState(false)

  return (
    <div>
      <Child screenshot={screenshot} />
      <button onClick={() => setScreenshot(!screenshot)}>toggle</button>
    </div>
  )
}
