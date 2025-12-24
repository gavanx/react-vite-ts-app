var countTrapezoids = function (points) {
  const mod = 1e9 + 7
  const n = points.length
  const map = new Map()
  for (const p of points) {
    if (map.has(p[1])) {
      map.get(p[1]).add(p[0])
    } else {
      map.set(p[1], new Set([p[0]]))
    }
  }
  let ans = 0
  let s = 0
  let k, c
  for (const [y, set] of map) {
    c = set.size
    k = (c * (c - 1)) / 2
    ans = (ans + s * k) % mod
    s += k
  }
  return ans
}

console.log(
  countTrapezoids([
    [1, 0],
    [2, 0],
    [3, 0],
    [2, 2],
    [3, 2],
  ])
)

console.log(
  countTrapezoids([
    [0, 0],
    [1, 0],
    [0, 1],
    [2, 1],
  ])
)
