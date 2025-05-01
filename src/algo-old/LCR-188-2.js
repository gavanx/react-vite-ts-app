var bestTiming = function (prices) {
  const n = prices.length
  let ans = 0
  let minPrice = prices[0]
  for (let i = 1; i < n; i++) {
    ans = Math.max(ans, prices[i] - minPrice)
    minPrice = Math.min(minPrice, prices[i])
  }
  return ans
}

console.log(bestTiming([3, 6, 2, 9, 8, 5]))
console.log(bestTiming([8, 12, 15, 7, 3, 10]))
