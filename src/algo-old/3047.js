var largestSquareArea = function (bottomLeft, topRight) {
  let maxSide = 0
  for (let i = 0; i < bottomLeft.length; i++) {
    const [bx, by] = bottomLeft[i]
    const [tx, ty] = topRight[i]
    for (let j = 0; j < i; j++) {
      const [bx2, by2] = bottomLeft[j]
      const [tx2, ty2] = topRight[j]
      const width = Math.min(tx, tx2) - Math.max(bx, bx2)
      const height = Math.min(ty, ty2) - Math.max(by, by2)
      const side = Math.min(width, height)
      maxSide = Math.max(maxSide, side)
    }
  }
  return maxSide * maxSide
}
