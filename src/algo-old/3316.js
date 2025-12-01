var maxRemovals = function (source, pattern, targetIndices) {
  const n = source.length
  const m = pattern.length
  const set = new Set(targetIndices)
  const memo = Array.from({ length: n }, () => Array.from({ length: m + 1 }, () => -1))
  const dfs = (i, j) => {
    if (i < j) {
      return -Infinity
    }
    if (i < 0) {
      return 0
    }
    if (memo[i][j + 1] !== -1) {
      return memo[i][j + 1]
    }
    let res = dfs(i - 1, j) + (set.has(i) ? 1 : 0)
    if (source[i] == pattern[j]) {
      res = Math.max(res, dfs(i - 1, j - 1))
    }
    memo[i][j + 1] = res
    return res
  }
  return dfs(n - 1, m - 1)
}

console.log(maxRemovals('abbaa', 'aba', [0, 1, 2]))

console.log(maxRemovals('bcda', 'd', [0, 3]))
console.log(maxRemovals('dda', 'dda', [0, 1, 2]))

console.log(maxRemovals('yeyeykyded', 'yeyyd', [0, 2, 3, 4]))
