var shortestCommonSupersequence = function (str1, str2) {
  const m = str1.length
  const n = str2.length
  const memo = Array.from({ length: m }, () => Array.from({ length: n }, () => -1))
  const dfs = (i, j) => {
    if (i < 0) {
      return str2.slice(0, j + 1)
    }
    if (j < 0) {
      return str1.slice(0, i + 1)
    }
    if (memo[i][j] != -1) {
      return memo[i][j]
    }
    if (str1[i] == str2[j]) {
      return (memo[i][j] = dfs(i - 1, j - 1) + str1[i])
    } else {
      const a = dfs(i - 1, j) + str1[i]
      const b = dfs(i, j - 1) + str2[j]
      let res = a.length < b.length ? a : b
      return (memo[i][j] = res)
    }
  }
  return dfs(m - 1, n - 1)
}

console.log(shortestCommonSupersequence('abac', 'cab'))
console.log(shortestCommonSupersequence('aaaaaaaa', 'aaaaaaaa'))
