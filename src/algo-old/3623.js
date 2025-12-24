var countTrapezoids = function (points) {
  const mod = BigInt(1e9 + 7)
  const n = points.length
  const map = new Map()
  for (const p of points) {
    map.set(p[1], (map.get(p[1]) || 0) + 1)
  }
  let ans = BigInt(0)
  let s = BigInt(0)
  let k
  for (const [y, c] of map) {
    k = BigInt((c * (c - 1)) / 2)
    ans = (ans + s * k) % mod
    s += k
  }
  return Number(ans)
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
