import { Button } from 'antd'
import html2canvas from 'html2canvas'
import IconFont from '../antd/IconFont'
import IconCloud from './icon_cloud.svg'

const src =
  'https://cnbj0.fds.api.xiaomi.com/b2c-mioa-res/fresh/f64c3b50-c34a-4a80-a647-4db6e1c5c2f0.jpg?x-fds-process=image/resize,w_200,q_50'

export default () => {
  return (
    <div>
      {/* <img src={src} /> */}
      {/* <img src={IconCloud} /> */}
      LoadImage
      <Button
        onClick={async () => {
          const img = await new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve(img)
            img.onerror = reject
            // img.crossOrigin = 'anonymous'
            img.src = src
            if (img.complete === true) {
              // Inline XML images may fail to parse, throwing an Error later on
              setTimeout(() => resolve(img), 500)
            }
          })
        }}
      >
        load Image
      </Button>
      <IconFont type='icon-speaker' />
      <Button
        onClick={async () => {
          const child = await html2canvas(document.querySelector('div[id="root"]')!, {
            logging: true,
            useCORS: true,
          })
          document.body.appendChild(child)
        }}
      >
        Screen shot
      </Button>
    </div>
  )
}
