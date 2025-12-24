function countTrapezoids(points) {
  const cnt = new Map()
  const cnt2 = new Map()

  const n = points.length

  for (let i = 1; i < n; i++) {
    const [x, y] = points[i]
    for (let j = 0; j < i; j++) {
      const [x2, y2] = points[j]
      const dy = y - y2
      const dx = x - x2

      let k
      if (dx === 0) {
        k = Infinity
      } else {
        k = dy / dx
      }

      let b
      if (dx === 0) {
        b = x
      } else {
        b = (y * dx - x * dy) / dx
      }

      if (!cnt.has(k)) {
        cnt.set(k, new Map())
      }
      const innerMap = cnt.get(k)
      innerMap.set(b, (innerMap.get(b) || 0) + 1)

      const midPoint = [x + x2, y + y2]
      const midKey = midPoint.join(',')

      if (!cnt2.has(midKey)) {
        cnt2.set(midKey, new Map())
      }
      const innerMap2 = cnt2.get(midKey)
      innerMap2.set(k, (innerMap2.get(k) || 0) + 1)
    }
  }

  let ans = 0

  for (const innerMap of cnt.values()) {
    let s = 0
    for (const c of innerMap.values()) {
      ans += s * c
      s += c
    }
  }

  for (const innerMap of cnt2.values()) {
    let s = 0
    for (const c of innerMap.values()) {
      ans -= s * c
      s += c
    }
  }

  return ans
}

console.log(
  countTrapezoids([
    [-3, 2],
    [3, 0],
    [2, 3],
    [3, 2],
    [2, -3],
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
