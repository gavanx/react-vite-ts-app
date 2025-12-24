/**
 * @param {number[]} prices
 * @return {number}
 */
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
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])) // 6
console.log(maxProfit([1, 2, 3, 4, 5])) // 4
console.log(maxProfit([7, 6, 4, 3, 1])) // 0
console.log(maxProfit([1])) // 0
