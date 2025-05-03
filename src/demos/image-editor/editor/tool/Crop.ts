import Konva from 'konva'
import { Base, Context } from './Base'

class Crop extends Base {
  isEditing = false
  mask: Konva.Group | null = null

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    super.mouseDown()
    const { x, y } = this.getMousePosition()
    if (this.shape) {
      if (this.isPointInRect({ x, y })) {
        return
      }
      this.isEditing = true
      this.mouseMove()
      return
    }
    this.shape = new Konva.Rect({
      x,
      y,
      width: 0,
      height: 0,
      stroke: 'blue',
      strokeWidth: 2,
      dash: [5, 5],
      draggable: true,
      custom: 'crop',
    })
    this.shape.on('dragmove', () => {
      console.log('xxxxxx')
      this.updateMask()
    })
    this.layer.add(this.shape)
    this.isEditing = true
    this.addMask()
  }

  isPointInRect(point: Konva.Vector2d) {
    const rect = this.shape!

    const x1 = rect.x()
    const y1 = rect.y()
    const x2 = x1 + rect.width()
    const y2 = y1 + rect.height()

    return (
      point.x >= Math.min(x1, x2) &&
      point.x <= Math.max(x1, x2) &&
      point.y >= Math.min(y1, y2) &&
      point.y <= Math.max(y1, y2)
    )
  }

  addMask() {
    if (this.mask) {
      return
    }
    const opacity = 0.5
    const rect = this.shape as Konva.Rect
    const width = this.layer.width()
    const height = this.layer.height()
    // 上半部分遮罩
    const maskGroup = new Konva.Group()
    const topMask = new Konva.Rect({
      x: 0,
      y: 0,
      width,
      height: rect.y(),
      fill: 'black',
      opacity,
      custom: 'mask',
    })
    maskGroup.add(topMask)

    // 下半部分遮罩
    const bottomMask = new Konva.Rect({
      x: 0,
      y: rect.y() + rect.height(),
      width,
      height: height - rect.y() - rect.height(),
      fill: 'black',
      opacity,
      custom: 'mask',
    })
    maskGroup.add(bottomMask)

    // 左半部分遮罩
    const leftMask = new Konva.Rect({
      x: 0,
      y: rect.y(),
      width: rect.x(),
      height: rect.height(),
      fill: 'black',
      opacity,
      custom: 'mask',
    })
    maskGroup.add(leftMask)

    // 右半部分遮罩
    const rightMask = new Konva.Rect({
      x: rect.x() + rect.width(),
      y: rect.y(),
      width: width - rect.x() - rect.width(),
      height: rect.height(),
      fill: 'black',
      opacity,
      custom: 'mask',
    })
    maskGroup.add(rightMask)
    this.layer.add(maskGroup)
    this.layer.draw()
    this.mask = maskGroup
  }

  updateMask() {
    if (!this.mask) {
      return
    }

    const rect = this.shape as Konva.Rect
    const width = this.layer.width()
    const height = this.layer.height()
    const children = this.mask.getChildren()
    console.log('xxxxxxx updateMask', rect.height())
    children[0].setAttrs({
      height: Math.min(rect.y(), rect.y() + rect.height()),
    })
    children[1].setAttrs({
      y: rect.y() + Math.max(rect.height(), 0),
      height: height - rect.y() - rect.height(),
    })
    children[2].setAttrs({
      y: rect.y(),
      width: Math.min(rect.x(), rect.x() + rect.width()),
      height: rect.height(),
    })
    children[3].setAttrs({
      x: rect.x() + Math.max(0, rect.width()),
      y: rect.y(),
      width: width - rect.x() - rect.width(),
      height: rect.height(),
    })
  }

  mouseMove() {
    if (this.isEditing) {
      const pos = this.getMousePosition()
      const width = pos.x - this.startX
      const height = pos.y - this.startY
      this.shape!.setAttrs({
        x: this.startX,
        y: this.startY,
        width: width,
        height: height,
      })
      this.updateMask()
      this.layer.draw()
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Crop
