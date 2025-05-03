import html2canvas from 'html2canvas'
import Konva from 'konva'
import ToolManager, { EditorCallback } from './tool/ToolManager'
import { canSelect } from './tool/SelectionDetect'

const getScale = (w1: number, h1: number, w2: number, h2: number) => Math.min(w2 / w1, h2 / h1)

const createScreenshotKonva = async (container: HTMLDivElement | string) => {
  const canvas = await html2canvas(document.body, { useCORS: true })
  console.log(canvas)
  const imageUrl = canvas.toDataURL()
  const image = new Image()
  image.src = imageUrl

  const stage = new Konva.Stage({
    container,
    width: window.innerWidth,
    height: window.innerHeight,
  })
  const layer = new Konva.Layer()
  stage.add(layer)

  image.onload = () => {
    try {
      const s = getScale(image.width, image.height, stage.width(), stage.height())
      console.log(s, image.width, image.height, stage.width(), stage.height())
      const konvaImage = new Konva.Image({
        image: image,
        x: 0,
        y: 0,
        width: image.width * s,
        height: image.height * s,
        // globalCompositeOperation: 'darken',
        opacity: 0.8,
      })
      layer.add(konvaImage)
      layer.draw()
    } catch (e) {
      console.error(e)
    }
  }
  return { stage, layer }
}

const highlightSelected = (last: Konva.Shape | null, toSelect: Konva.Shape | null) => {
  last?.draggable(false)
  last?.setAttr('dash', null)

  toSelect?.setAttr('dash', [10, 10])
  toSelect?.draggable(true)
  toSelect?.startDrag()
}

export type EditorCallback = EditorCallback

export const createEditor = async (
  container: HTMLDivElement | string,
  callback: EditorCallback
) => {
  const { stage, layer } = await createScreenshotKonva(container)

  const tool = new ToolManager(layer, callback)
  let lastSelectedShape: Konva.Shape | null
  stage.on('mousedown', function (e) {
    const pos = stage.getPointerPosition()!
    console.log('mousedown', e, e.target, e.target instanceof Konva.Rect)
    if (canSelect(pos, e.target as Konva.Shape)) {
      highlightSelected(lastSelectedShape, e.target as Konva.Shape)
      lastSelectedShape = e.target as Konva.Shape
      return
    }
    highlightSelected(lastSelectedShape, null)
    lastSelectedShape = null
    e.cancelBubble = true
    tool.mouseDown()
  })
  stage.on('mousemove', function () {
    tool.mouseMove()
  })
  stage.on('mouseup', function () {
    tool.mouseUp()
  })
  return tool
}
