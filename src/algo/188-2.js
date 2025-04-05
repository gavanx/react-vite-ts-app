var maxProfit = function (k, prices) {
  const n = prices.length
  const b = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => 0))
  const s = Array.from({ length: n }, () => Array.from({ length: k + 1 }, () => 0))
  b[0][0] = -prices[0]
  s[0][0] = 0
  for (let i = 1; i <= k; i++) {
    b[0][i] = -Number.MAX_SAFE_INTEGER
    s[0][i] = -Number.MAX_SAFE_INTEGER
  }
  for (let i = 1; i < n; i++) {
    b[i][0] = Math.max(b[i - 1][0], s[i - 1][0] - prices[i])
    for (let j = 1; j <= k; j++) {
      b[i][j] = Math.max(b[i - 1][j], s[i - 1][j] - prices[i])
      s[i][j] = Math.max(s[i - 1][j], b[i - 1][j - 1] + prices[i])
    }
  }
  return Math.max(...s[n - 1])
}

console.log(maxProfit(2, [2, 4, 1]))
console.log(maxProfit(2, [3, 2, 6, 5, 0, 3]))
