var numWays = function (words, target) {
  const m = words[0].length
  const n = target.length
  const kk = words.length
  const f = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(-1))
  const dfs = (i, j) => {
    if (j == -1) {
      return 1
    }
    if (i == -1) {
      return 0
    }
    if (f[i][j] != -1) {
      return f[i][j]
    }
    let res = dfs(i - 1, j)
    const c = target[j]
    let count = 0
    for (let k = 0; k < kk; ++k) {
      if (words[k][i] == c) {
        count++
      }
    }

    res += (dfs(i - 1, j - 1) * count) % 1000000007
    return (f[i][j] = res % 1000000007)
  }
  return dfs(m - 1, n - 1)
}

console.log(numWays(['acca', 'bbbb', 'caca'], 'aba'))
console.log(numWays(['abba', 'baab'], 'bab'))
console.log(numWays(['abcd'], 'abcd'))
console.log(numWays(['abab', 'baba', 'abba', 'baab'], 'abba'))
