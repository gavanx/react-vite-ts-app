import Konva from 'konva'

const threshold = 10

const canSelectRect = (point: Konva.Vector2d, rect: Konva.Rect) => {
  var rectX = rect.x()
  var rectY = rect.y()
  var rectWidth = rect.width()
  var rectHeight = rect.height()

  var minX = Math.min(rectX, rectX + rectWidth)
  var maxX = Math.max(rectX, rectX + rectWidth)
  var minY = Math.min(rectY, rectY + rectHeight)
  var maxY = Math.max(rectY, rectY + rectHeight)

  return (
    (point.x >= minX &&
      point.x <= maxX &&
      (Math.abs(point.y - minY) <= threshold || Math.abs(point.y - maxY) <= threshold)) ||
    (point.y >= minY &&
      point.y <= maxY &&
      (Math.abs(point.x - minX) <= threshold || Math.abs(point.x - maxX) <= threshold))
  )
}

const canSelectEllipse = (point: Konva.Vector2d, ellipse: Konva.Ellipse) => {
  var centerX = ellipse.x()
  var centerY = ellipse.y()
  var radiusX = Math.abs(ellipse.radiusX())
  var radiusY = Math.abs(ellipse.radiusY())

  var dx = point.x - centerX
  var dy = point.y - centerY

  var distance = Math.abs((dx * dx) / (radiusX * radiusX) + (dy * dy) / (radiusY * radiusY) - 1)

  return distance <= 0.05
}
const canSelectArrow = (point: Konva.Vector2d, arrow: Konva.Arrow) => {
  const shape = arrow.getLayer()?.getStage().getIntersection(point)
  return shape === arrow
}
const canSelectLine = (point: Konva.Vector2d, line: Konva.Line) => {
  const points = line.points()
  for (let i = 0; i < points.length - 2; i += 2) {
    const x1 = points[i]
    const y1 = points[i + 1]
    const x2 = points[i + 2]
    const y2 = points[i + 3]

    // 计算点到线段的距离
    const numerator = Math.abs((y2 - y1) * point.x - (x2 - x1) * point.y + x2 * y1 - y2 * x1)
    const denominator = Math.sqrt((y2 - y1) ** 2 + (x2 - x1) ** 2)
    const distance = numerator / denominator

    if (distance <= threshold) {
      return true
    }
  }
  return false
}
export const canSelect = (point: Konva.Vector2d, shape: Konva.Shape) => {
  if (shape instanceof Konva.Rect) {
    if (shape.getAttr('custom') === 'mask') {
      return false
    }
    if (shape.getAttr('custom') === 'crop') {
      return false
    }
    return canSelectRect(point, shape)
  } else if (shape instanceof Konva.Ellipse) {
    return canSelectEllipse(point, shape)
  } else if (shape instanceof Konva.Arrow) {
    return canSelectArrow(point, shape)
  } else if (shape instanceof Konva.Line) {
    return canSelectLine(point, shape)
  }
  return false
}
