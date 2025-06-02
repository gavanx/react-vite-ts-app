import copy from 'modern-copy-to-clipboard'
import ReactIcon from '../../assets/react.svg'
// Copy html

// Copy custom MIME-type data

// Copy image

export default () => {
  return (
    <div>
      CopyToClipboard
      <button onClick={() => copy('Hello World!' + Math.random())}>Text</button>
      <button
        onClick={() =>
          copy({
            'text/plain': 'Hello World!' + Math.random(),
            'text/html': '<p>Hello World!</p>' + Math.random(),
          })
        }
      >
        HTML
      </button>
      <button
        onClick={() =>
          copy({
            'text/plain': 'Hello World!',
            'text/html': '<p>Hello World!</p>',
            'custom-data': '{"data":"Hello World!"}',
          })
        }
      >
        Custom Data
      </button>
      <button
        onClick={() => {
          try {
            copy({
              'image/svg+xml': fetch('/vite.svg').then((response) => response.blob()),
            })
          } catch (e) {
            console.log('xxxxx')
          }
        }}
      >
        Image
      </button>
      <button
        onClick={() => {
          try {
            copy({
              'image/png': ReactIcon,
            })
          } catch (e) {
            console.log('xxxxx', e)
          }
        }}
      >
        Image 2
      </button>
      <button
        onClick={() => {
          try {
            const clipboardItem = new ClipboardItem({
              ['text/plain']: 'xxx',
            })

            navigator.clipboard.write([clipboardItem])
          } catch (e) {
            console.log('xxxxx', e)
          }
        }}
      >
        RAW
      </button>
    </div>
  )
}
