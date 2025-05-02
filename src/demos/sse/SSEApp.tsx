import React from 'react'

const serverUrl = 'http://localhost:3000/sse'

const App = () => {
  const doSSE = () => {
    const eventSource = new EventSource(serverUrl)
    eventSource.addEventListener('message', (event) => {
      console.log('[message]', event.data)
    })
    eventSource.addEventListener('foo', (event) => {
      console.log('[foo]', event.data)
    })
  }

  const doFetch = () => {
    fetch(serverUrl).then(async (res) => {
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader()
      while (true) {
        // eslint-disable-next-line no-await-in-loop -- x
        const { done, value } = await reader.read()
        if (done) {
          break
        }
        console.log('[fetch]', value)
      }
    })
  }

  return (
    <div>
      <button type='button' onClick={doSSE}>
        通过EventSource发起SSE请求1
      </button>
      <button type='button' onClick={doFetch}>
        通过Fetch发起SSE请求
      </button>
    </div>
  )
}

export default App
