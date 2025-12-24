var maxProfit = function (prices) {
  const n = prices.length
  let min = prices[0]
  let ans = 0
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, prices[i] - min)
    min = Math.min(min, prices[i])
  }
  return ans
}
console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 5
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
