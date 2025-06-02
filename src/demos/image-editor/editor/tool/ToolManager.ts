import Konva from 'konva'
import { Base, Context } from './Base'
import Crop from './Crop'
import Rectangle from './Rectangle'
import Ellipse from './Ellipse'
import Arrow from './Arrow'
import Pen from './Pen'
import Text from './Text'

export type EditorCallback = {
  onShowTools?: (x: number, y: number) => void
}

class ToolManager extends Base {
  crop: Base
  tool: Base
  callbacks: EditorCallback
  constructor(layer: Konva.Layer, callbacks: EditorCallback) {
    super(layer, { strokeWidth: 2, strokeColor: 'red' })
    this.callbacks = callbacks
    this.crop = this.tool = new Crop(layer, this.context)
  }
  mouseDown(): void {
    this.tool.mouseDown()
    this.toggleToolsVisibility(false)
  }
  mouseMove(): void {
    this.tool.mouseMove()
  }
  mouseUp(): void {
    this.tool.mouseUp()
    this.toggleToolsVisibility(true)
  }

  toggleToolsVisibility(visible: boolean) {
    if (this.tool === this.crop && this.callbacks.onShowTools) {
      const s = this.crop.shape!
      this.callbacks.onShowTools(
        Math.min(s.x(), s.x() + s.width()),
        visible ? Math.max(s.y(), s.y() + s.height()) : -100
      )
    }
  }

  tools: { [name: string]: () => Base } = {
    Rectangle: () => new Rectangle(this.layer, this.context),
    Ellipse: () => new Ellipse(this.layer, this.context),
    Arrow: () => new Arrow(this.layer, this.context),
    Pen: () => new Pen(this.layer, this.context),
    Text: () => new Text(this.layer, this.context),
  }

  setTool(name: string) {
    this.crop.shape?.setAttrs({
      draggable: false,
      opacity: 0,
    })
    this.tool = this.tools[name]()
  }

  undo() {
    const children = this.layer.getChildren()
    if (children.length > 3) {
      children[children.length - 1].remove()
    }
  }

  canUndo() {
    return this.layer.getChildren().length > 3
  }

  setStrokeWidth(width: number) {
    this.context.strokeWidth = width
  }

  setStrokeColor(color: string) {
    this.context.strokeColor = color
  }

  async save(): Promise<Blob> {
    const r = this.crop.shape!
    const data = await this.layer.toBlob({
      x: r.x(),
      y: r.y(),
      width: r.width(),
      height: r.height(),
    })
    return data as Blob
  }
}
export default ToolManager
