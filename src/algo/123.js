var maxProfit = function (prices) {
  const n = prices.length
  let b1 = -prices[0]
  let s1 = 0
  let b2 = -prices[0]
  let s2 = 0
  for (let i = 1; i < n; i++) {
    b1 = Math.max(b1, -prices[i])
    s1 = Math.max(s1, b1 + prices[i])
    b2 = Math.max(b2, s1 - prices[i])
    s2 = Math.max(s2, b2 + prices[i])
  }
  return s2
}
