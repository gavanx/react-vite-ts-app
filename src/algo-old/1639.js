var numWays = function (words, target) {
  const m = words.length
  const n = words[0].length
  const t = target.length
  const mod = 1e9 + 7
  const f = new Array(t + 1).fill(0).map(() => new Array(n + 1).fill(-1))
  const dfs = (i, j) => {
    if (i == t) {
      return 1
    }
    if (j == n) {
      return 0
    }
    if (f[i][j] != -1) {
      return f[i][j]
    }
    let res = dfs(i, j + 1)
    const c = target[i]
    for (let k = 0; k < m; ++k) {
      if (words[k][j] == c) {
        res += dfs(i + 1, j + 1)
      }
    }
    return (f[i][j] = res % mod)
  }
  return dfs(0, 0)
}

console.log(numWays(['acca', 'bbbb', 'caca'], 'aba'))
console.log(numWays(['abba', 'baab'], 'bab'))
console.log(numWays(['abcd'], 'abcd'))
console.log(numWays(['abab', 'baba', 'abba', 'baab'], 'abba'))
