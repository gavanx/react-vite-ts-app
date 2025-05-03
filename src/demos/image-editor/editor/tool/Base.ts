import Konva from 'konva'

class Context {
  strokeWidth = 2
  strokeColor = 'red'
}

abstract class Base {
  shape: Konva.Shape | null = null
  layer: Konva.Layer
  context: Context
  startX: number
  startY: number

  constructor(layer: Konva.Layer, context: Context) {
    this.layer = layer
    this.context = context
    this.startX = 0
    this.startY = 0
  }

  getMousePosition() {
    return this.layer.getStage().getPointerPosition()!
  }

  mouseDown() {
    const p = this.getMousePosition()
    this.startX = p.x
    this.startY = p.y
  }
  abstract mouseMove(): void
  mouseUp() {}
}

export { Base, Context }
