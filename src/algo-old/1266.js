var minTimeToVisitAllPoints = function (points) {
  let res = 0
  let pre = points[0]
  for (let i = 1; i < points.length; i++) {
    res += Math.max(Math.abs(points[i][0] - pre[0]), Math.abs(points[i][1] - pre[1]))
    pre = points[i]
  }
  return res
}

console.log(
  minTimeToVisitAllPoints([
    [1, 1],
    [3, 4],
    [-1, 0],
  ])
)

console.log(minTimeToVisitAllPoints([[3, 2], [-2, 2]]))