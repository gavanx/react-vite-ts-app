var findMaxForm = function (strs, m, n) {
  const len = strs.length
  const a = []
  let z, o
  for (const s of strs) {
    z = 0
    o = 0
    for (const c of s) {
      if (c === '0') {
        z++
      } else {
        o++
      }
    }
    a.push([z, o])
  }
  const dfs = (i, m, n) => {
    if (i >= len) {
      return 0
    }
    const [z, o] = a[i]
    let res = dfs(i + 1, m, n)
    if (z <= m && o <= n) {
      res = Math.max(res, 1 + dfs(i + 1, m - z, n - o))
    }
    return res
  }
  return dfs(0, m, n)
}
console.log(findMaxForm(['10', '0001', '111001', '1', '0'], 5, 3))
console.log(findMaxForm(['10', '0', '1'], 1, 1))
