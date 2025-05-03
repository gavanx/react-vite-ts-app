import Konva from 'konva'
import { Base, Context } from './Base'

class Text extends Base {
  shape: Konva.Text | null = null
  isEditing = false

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    // https://konvajs.org/docs/sandbox/Editable_Text.html
    super.mouseDown()
    if (this.shape) {
      return
    }
    const { x, y } = this.getMousePosition()
    this.shape = new Konva.Text({
      x,
      y,
      fontSize: 20,
      text: 'xxxx',
      fill: this.context.strokeColor,
      draggable: true,
    })
    this.layer.add(this.shape)
    this.layer.draw()
    this.isEditing = true

    const textNode = this.shape

    const tr = new Konva.Transformer({
      node: textNode,
      enabledAnchors: ['middle-left', 'middle-right'],
      boundBoxFunc: function (oldBox, newBox) {
        newBox.width = Math.max(30, newBox.width)
        return newBox
      },
    })
    textNode.on('transform', function () {
      textNode.setAttrs({
        width: textNode.width() * textNode.scaleX(),
        scaleX: 1,
      })
    })
    this.layer.add(tr)

    textNode.on('dblclick dbltap', () => {
      textNode.hide()
      tr.hide()

      const textPosition = textNode.absolutePosition()
      const stageBox = this.layer.getStage().container().getBoundingClientRect()

      const areaPosition = {
        x: stageBox.left + textPosition.x,
        y: stageBox.top + textPosition.y,
      }

      const textarea = document.createElement('textarea')
      document.body.appendChild(textarea)

      textarea.value = textNode.text()
      textarea.style.position = 'absolute'
      textarea.style.zIndex = '99999'
      textarea.style.top = areaPosition.y + 'px'
      textarea.style.left = areaPosition.x + 'px'
      textarea.style.width = textNode.width() - textNode.padding() * 2 + 'px'
      textarea.style.height = textNode.height() - textNode.padding() * 2 + 5 + 'px'
      textarea.style.fontSize = textNode.fontSize() + 'px'
      textarea.style.border = 'none'
      textarea.style.padding = '0px'
      textarea.style.margin = '0px'
      textarea.style.overflow = 'hidden'
      textarea.style.background = 'none'
      textarea.style.outline = 'none'
      textarea.style.resize = 'none'
      textarea.style.lineHeight = textNode.lineHeight()
      textarea.style.fontFamily = textNode.fontFamily()
      textarea.style.transformOrigin = 'left top'
      textarea.style.textAlign = textNode.align()
      textarea.style.color = textNode.fill()

      const rotation = textNode.rotation()
      let transform = ''
      if (rotation) {
        transform += 'rotateZ(' + rotation + 'deg)'
      }
      transform += 'translateY(-' + 2 + 'px)'
      textarea.style.transform = transform

      textarea.style.height = 'auto'
      textarea.style.height = textarea.scrollHeight + 3 + 'px'

      textarea.focus()

      function removeTextarea() {
        textarea.parentNode.removeChild(textarea)
        window.removeEventListener('click', handleOutsideClick)
        textNode.show()
        tr.show()
        tr.forceUpdate()
      }

      function setTextareaWidth(newWidth) {
        if (!newWidth) {
          newWidth = textNode.placeholder.length * textNode.fontSize()
        }
        textarea.style.width = newWidth + 'px'
      }

      textarea.addEventListener('keydown', function (e) {
        if (e.keyCode === 13 && !e.shiftKey) {
          textNode.text(textarea.value)
          removeTextarea()
        }
        if (e.keyCode === 27) {
          removeTextarea()
        }
      })

      textarea.addEventListener('keydown', function () {
        const scale = textNode.getAbsoluteScale().x
        setTextareaWidth(textNode.width() * scale)
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + textNode.fontSize() + 'px'
      })

      function handleOutsideClick(e) {
        if (e.target !== textarea) {
          textNode.text(textarea.value)
          removeTextarea()
        }
      }
      setTimeout(() => {
        window.addEventListener('click', handleOutsideClick)
      })
    })
  }

  mouseMove() {
    if (this.isEditing) {
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Text
