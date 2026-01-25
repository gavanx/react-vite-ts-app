/**
 * 将正方形分割成面积相等的两部分
 * @param {number[][]} squares - 正方形数组，每个元素为 [x, y, l]
 * @return {number} 分割线的 y 坐标
 */
var separateSquares = function (squares) {
  let totArea = 0
  const diff = new Map()
  for (const [, y, l] of squares) {
    const area = l * l
    totArea += area
    diff.set(y, (diff.get(y) || 0) + l)
    diff.set(y + l, (diff.get(y + l) || 0) - l)
  }
  const sortedEntries = Array.from(diff.entries()).sort((a, b) => a[0] - b[0])
  let currentArea = 0
  let sumL = 0
  for (let i = 0; i < sortedEntries.length - 1; i++) {
    const [y, diffY] = sortedEntries[i]
    const [nextY] = sortedEntries[i + 1]
    sumL += diffY
    const height = nextY - y
    const segmentArea = sumL * height
    currentArea += segmentArea
    if (currentArea * 2 >= totArea) {
      const excessArea = currentArea * 2 - totArea
      return nextY - excessArea / (sumL * 2)
    }
  }
  return 0
}
