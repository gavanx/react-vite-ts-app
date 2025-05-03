import Konva from 'konva'
import { Base, Context } from './Base'

class Arrow extends Base {
  shape: Konva.Arrow | null = null
  isEditing = false

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    super.mouseDown()
    const { x, y } = this.getMousePosition()
    this.shape = new Konva.Arrow({
      fill: this.context.strokeColor,
      stroke: this.context.strokeColor,
      strokeWidth: this.context.strokeWidth,
      points: [x, y, x, y],
    })
    this.layer.add(this.shape)
    this.isEditing = true
  }

  mouseMove() {
    if (this.isEditing) {
      const pos = this.getMousePosition()
      this.shape!.setAttrs({
        points: [this.startX, this.startY, pos.x, pos.y],
      })
      this.layer.draw()
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Arrow
