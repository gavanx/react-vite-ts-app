import Konva from 'konva'
import { Base, Context } from './Base'

class Ellipse extends Base {
  shape: Konva.Ellipse | null = null
  isEditing = false

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    super.mouseDown()
    const { x, y } = this.getMousePosition()
    this.shape = new Konva.Ellipse({
      x,
      y,
      radiusX: 0,
      radiusY: 0,
      width: 0,
      height: 0,
      stroke: this.context.strokeColor,
      strokeWidth: this.context.strokeWidth,
      draggable: true,
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
        x: this.startX + width / 2,
        y: this.startY + height / 2,
        radiusX: Math.abs(width / 2),
        radiusY: Math.abs(height / 2),
        width: Math.abs(width),
        height: Math.abs(height),
      })
      this.layer.draw()
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Ellipse
