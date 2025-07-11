import { snapdom } from '@zumer/snapdom'
import { Button } from 'antd'

export default () => {
  return (
    <div>
      hello world
      <Button
        onClick={async () => {
          const card = document.querySelector('#root') as HTMLElement
          const image = await snapdom.toPng(card)
          document.body.appendChild(image)
        }}
      >
        shot
      </Button>
    </div>
  )
}
