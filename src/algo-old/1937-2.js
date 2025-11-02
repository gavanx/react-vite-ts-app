function maxPoints(points) {
  let ans = 0
  const n = points[0].length
  let f = new Array(n).fill(0).map(() => [0, 0])
  let sufMax = new Array(n).fill(0)

  for (let i = 0; i < points.length; i++) {
    const row = points[i]
    if (i === 0) {
      for (let j = 0; j < n; j++) {
        const v = row[j]
        ans = Math.max(ans, v)
        f[j][0] = v + j
        f[j][1] = v - j
      }
    } else {
      let preMax = -Infinity
      for (let j = 0; j < n; j++) {
        const v = row[j]
        preMax = Math.max(preMax, f[j][0])
        const res = Math.max(v - j + preMax, v + j + sufMax[j])
        ans = Math.max(ans, res)
        f[j][0] = res + j
        f[j][1] = res - j
      }
    }
    sufMax[n - 1] = f[n - 1][1]
    for (let j = n - 2; j >= 0; j--) {
      sufMax[j] = Math.max(sufMax[j + 1], f[j][1])
    }
  }

  return ans
}
