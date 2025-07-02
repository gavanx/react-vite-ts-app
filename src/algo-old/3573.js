var maximumProfit = function (prices, k) {
  let n = prices.length
  let f = new Array(n + 1)
    .fill(0)
    .map(() => new Array(k + 1).fill(0).map(() => new Array(3).fill(0)))
  for (let j = 0; j <= k; j++) {
    f[0][j][0] = 0
  }
  let p
  for (let i = 0; i < n; i++) {
    p = prices[i]
    for (let j = 1; j <= k; j++) {
      f[i + 1][j][0] = Math.max(f[i][j][0], Math.max(f[i][j][1] + p, f[i][j][2] - p))
      f[i + 1][j][1] = Math.max(f[i][j][1], f[i][j - 1][0] - p)
      f[i + 1][j][2] = Math.max(f[i][j][2], f[i][j - 1][0] + p)
    }
  }
  return f[n][k][0]
}

console.log(maximumProfit([1, 7, 9, 8, 2], 2))
