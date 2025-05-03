import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())

const handler = (req, res) => {
  let id = 1
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')

  res.write(`data: ${JSON.stringify({ message: 'Welcome to SSE' })}\n\n`)

  const intervalId = setInterval(() => {
    const now = new Date().toLocaleTimeString()

    res.write(`id: ${id++}\n`)
    res.write(Math.random() > 0.5 ? `event: foo\n` : '') // 随机发送foo事件
    res.write(`data: ${JSON.stringify({ message: `Current time: ${now}` })}\n\n`)

    if (id > 10) {
      clearInterval(intervalId)
      id = 1
      res.write(`data: ${JSON.stringify({ message: `Finished: ${now}` })}\n\n`)
      res.end()
    }
  }, 1000)

  req.on('close', () => {
    console.log('Client disconnected')
    clearInterval(intervalId)
    res.end()
  })
}

app.get('/sse', handler)
app.post('/sse', handler)

app.listen(port, () => {
  console.log(`SSE Server listening on port ${port}`)
})
