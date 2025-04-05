var maxIncreasingCells = function (mat) {
  const m = mat.length,
    n = mat[0].length
  const rowMax = Array.from({ length: m }, () => 0)
  const colMax = Array.from({ length: n }, () => 0)
  const mp = new Map()
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const key = mat[i][j]
      if (!mp.has(key)) mp.set(key, [])
      mp.get(key).push([i, j])
    }
  }
  const keys = [...mp.keys()].sort((a, b) => a - b)
  let res = 0
  for (const key of keys) {
    const list = mp.get(key)
    const len = list.length
    const dp = Array.from({ length: len }, () => 0)
    for (let i = 0; i < len; i++) {
      const [x, y] = list[i]
      dp[i] = Math.max(rowMax[x], colMax[y]) + 1
      res = Math.max(res, dp[i])
    }
    for (let i = 0; i < len; i++) {
      const [x, y] = list[i]
      rowMax[x] = Math.max(rowMax[x], dp[i])
      colMax[y] = Math.max(colMax[y], dp[i])
    }
  }
  return res
}
