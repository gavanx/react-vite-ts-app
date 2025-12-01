var isMatch = function (s, p) {
  const m = s.length
  const n = p.length
  const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(-1))
  const dfs = (i, j) => {
    if (i < 0 && j < 0) {
      return true
    }
    if (j < 0) {
      return false
    }
    if (i < 0) {
      if (p[j] === '*') {
        return dfs(i, j - 1)
      } else {
        return false
      }
    }
    if (memo[i][j] != -1) {
      return memo[i][j]
    }
    if (p[j] === '*') {
      return (memo[i][j] = dfs(i, j - 1) || dfs(i - 1, j))
    } else if (p[j] === '?' || s[i] === p[j]) {
      return (memo[i][j] = dfs(i - 1, j - 1))
    } else {
      return (memo[i][j] = false)
    }
  }
  return dfs(m - 1, n - 1)
}

console.log(isMatch('aa', 'a'))
console.log(isMatch('aa', '*'))
console.log(isMatch('cb', '?a'))
