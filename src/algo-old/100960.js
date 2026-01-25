var bestTower = function (towers, center, radius) {
  const n = towers.length
  let res = [Infinity, Infinity]
  const [cx, cy] = center
  let max = 0
  for (let i = 0; i < n; i++) {
    if (Math.abs(towers[i][0] - cx) + Math.abs(towers[i][1] - cy) <= radius) {
      if (towers[i][2] > max) {
        res = towers[i]
        max = towers[i][2]
      } else if (towers[i][2] === max)
        if (towers[i][0] < res[0] || (towers[i][0] === res[0] && towers[i][1] < res[1])) {
          res = towers[i]
        }
    }
  }
  if (res[0] === Infinity || res[1] === Infinity) {
    return [-1, -1]
  }
  return [res[0], res[1]]
}

console.log(
  bestTower(
    [
      [1, 3, 4],
      [2, 2, 4],
      [4, 4, 7],
    ],
    [0, 0],
    5
  )
)
