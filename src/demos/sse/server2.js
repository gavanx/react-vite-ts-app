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

  res.write(
    `data: ${JSON.stringify({ id, object: 'AnswerChunk', created: Date.now(), data: { content: `Welcome to SSE`, role: 'assistant' } })}\n\n`
  )

  const intervalId = setInterval(() => {
    const now = new Date().toLocaleTimeString()

    res.write(`id: ${id++}\n`)
    res.write(Math.random() > 0.5 ? `event: foo\n` : '') // 随机发送foo事件
    res.write(
      `data: ${JSON.stringify({ id, object: 'AnswerChunk', created: now, data: { content: `Current time: ${now}`, role: 'assistant' } })}\n\n`
    )

    if (id > 10) {
      clearInterval(intervalId)
      id = 1
      res.write(
        `data: ${JSON.stringify({ id, object: 'AnswerChunk', created: now, data: { content: `Finished: ${now}`, role: 'assistant' } })}\n\n`
      )
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
