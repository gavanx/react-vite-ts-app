var maxArea = function (coords) {
  const n = coords.length
  let ans = -1
  let xMap = new Map()
  let yMap = new Map()
  let xx = [coords[0][0], coords[0][0]]
  let yy = [coords[0][1], coords[0][1]]
  let v
  for (let i = 0; i < n; i++) {
    const [x, y] = coords[i]
    xx = [Math.min(xx[0], x), Math.max(xx[1], x)]
    yy = [Math.min(yy[0], y), Math.max(yy[1], y)]
    if (xMap.has(x)) {
      v = xMap.get(x)
      v[0] = Math.min(v[0], y)
      v[1] = Math.max(v[1], y)
    } else {
      xMap.set(x, [y, y])
    }
    if (yMap.has(y)) {
      v = yMap.get(y)
      v[0] = Math.min(v[0], x)
      v[1] = Math.max(v[1], x)
    } else {
      yMap.set(y, [x, x])
    }
  }
  for (let [x, ySet] of xMap) {
    if (ySet[1] - ySet[0] > 0) {
      let x2 = Math.max(Math.abs(xx[1] - x), Math.abs(xx[0] - x))
      if (x2 > 0) {
        ans = Math.max(ans, (ySet[1] - ySet[0]) * x2)
      }
    }
  }
  for (let [y, xSet] of yMap) {
    if (xSet[1] - xSet[0] > 0) {
      let y2 = Math.max(Math.abs(yy[1] - y), Math.abs(yy[0] - y))
      if (y2 > 0) {
        ans = Math.max(ans, (xSet[1] - xSet[0]) * y2)
      }
    }
  }
  return ans
}

console.log(
  maxArea([
    [1, 1],
    [1, 2],
    [3, 2],
    [3, 3],
  ])
)

console.log(
  maxArea([
    [1, 1],
    [2, 2],
    [3, 3],
  ])
)

console.log(
  maxArea([
    [2, 9],
    [2, 6],
    [2, 5],
  ])
)
