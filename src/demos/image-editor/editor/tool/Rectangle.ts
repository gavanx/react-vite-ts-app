import Konva from 'konva'
import { Base, Context } from './Base'

class Rectangle extends Base {
  isEditing = false

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    super.mouseDown()
    const { x, y } = this.getMousePosition()
    this.shape = new Konva.Rect({
      x,
      y,
      width: 0,
      height: 0,
      stroke: this.context.strokeColor,
      strokeWidth: this.context.strokeWidth,
    })
    this.layer.add(this.shape)
    this.isEditing = true
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
      this.layer.draw()
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Rectangle
