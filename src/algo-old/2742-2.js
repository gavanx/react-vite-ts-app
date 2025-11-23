var paintWalls = function (cost, time) {
  const n = cost.length
  let res = Infinity
  const dfs = (i, c, t) => {
    if (c >= res) {
      return
    }
    if (i === n) {
      if (t >= 0) {
        res = Math.min(res, c)
      }
      return
    }
    dfs(i + 1, c, t - 1)
    dfs(i + 1, c + cost[i], t + time[i])
  }
  dfs(0, 0, 0)
  return res
}

console.log(paintWalls([1, 2, 3, 2], [1, 2, 3, 2]))
console.log(paintWalls([2, 3, 4, 2], [1, 1, 1, 1]))

console.log(
  paintWalls(
    [
      937, 252, 716, 781, 319, 198, 273, 554, 140, 68, 694, 583, 1080, 16, 450, 229, 710, 1003,
      1117, 1036, 398, 874, 289, 664, 600, 588, 372, 1066, 375, 532, 984, 328, 1067, 746,
    ],
    [
      5, 3, 1, 3, 2, 1, 3, 3, 5, 3, 5, 5, 4, 1, 3, 1, 4, 4, 4, 1, 5, 1, 2, 3, 2, 3, 3, 4, 1, 3, 4,
      1, 1, 5,
    ]
  )
)

console.log(paintWalls())
