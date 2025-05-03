import Konva from 'konva'
import { Base, Context } from './Base'

class Pen extends Base {
  shape: Konva.Line | null = null
  isEditing = false

  constructor(layer: Konva.Layer, context: Context) {
    super(layer, context)
  }

  mouseDown() {
    super.mouseDown()
    const { x, y } = this.getMousePosition()
    this.shape = new Konva.Line({
      points: [x, y],
      stroke: this.context.strokeColor,
      strokeWidth: this.context.strokeWidth,
      lineCap: 'round',
      lineJoin: 'round',
      draggable: true,
    })
    this.layer.add(this.shape)
    this.isEditing = true
  }

  mouseMove() {
    if (this.isEditing) {
      const { x, y } = this.getMousePosition()
      const pointsPen = this.shape!.points()
      pointsPen.push(x, y)
      this.shape!.points(pointsPen)
      this.layer.draw()
    }
  }

  mouseUp() {
    this.isEditing = false
  }
}

export default Pen
