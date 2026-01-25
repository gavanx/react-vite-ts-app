/**
 * 将正方形分割成面积相等的两部分
 * @param {number[][]} squares - 正方形数组，每个元素为 [x, y, l]
 * @return {number} 分割线的 y 坐标
 */
var separateSquares = function (squares) {
  let totArea = 0
  const diff = new Map() // 使用 Map 替代 defaultdict

  // 第一遍扫描：计算总面积，记录差分数组
  for (const [, y, l] of squares) {
    const area = l * l
    totArea += area

    // 更新差分数组
    diff.set(y, (diff.get(y) || 0) + l)
    diff.set(y + l, (diff.get(y + l) || 0) - l)
  }

  // 将 Map 转换为数组并按键排序
  const sortedEntries = Array.from(diff.entries()).sort((a, b) => a[0] - b[0])

  let currentArea = 0
  let sumL = 0

  // 第二遍扫描：扫描线算法计算面积
  for (let i = 0; i < sortedEntries.length - 1; i++) {
    const [y, diffY] = sortedEntries[i]
    const [nextY] = sortedEntries[i + 1]

    sumL += diffY // 当前高度的矩形底边长度之和
    const height = nextY - y
    const segmentArea = sumL * height // 底边长 * 高 = 新增面积

    currentArea += segmentArea

    // 找到分割点
    if (currentArea * 2 >= totArea) {
      const excessArea = currentArea * 2 - totArea
      return nextY - excessArea / (sumL * 2)
    }
  }

  return 0 // 理论上不会执行到这里
}
