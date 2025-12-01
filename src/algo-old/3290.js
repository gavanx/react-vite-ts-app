var maxScore = function (a, b) {
  let n = b.length
  let r = 3
  while (a[r] === 0) {
    r--
    n--
  }
  if (r === -1) {
    return 0
  }
  const memo = Array.from({ length: n }, () => Array(r + 1).fill(-1))
  const dfs = (i, r) => {
    if (r === -1) return 0
    if (i === -1 && r >= 0) return -Infinity
    if (r > i) return -Infinity
    if (memo[i][r] !== -1) return memo[i][r]
    const res = Math.max(dfs(i - 1, r), a[r] * b[i] + dfs(i - 1, r - 1))
    memo[i][r] = res
    return res
  }
  return dfs(n - 1, r)
}
console.log(maxScore([3, 2, 5, 6], [2, -6, 4, -5, -3, 2, -7]))
console.log(maxScore([-1, 4, 5, -2], [-5, -1, -3, -2, -4]))
