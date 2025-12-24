var getDescentPeriods = function (prices) {
  let ans = 0,
    dec = 0
  for (let i = 0; i < prices.length; i++) {
    if (i > 0 && prices[i] === prices[i - 1] - 1) {
      dec++
    } else {
      dec = 1
    }
    ans += dec 
  }
  return ans
}
