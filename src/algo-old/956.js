var tallestBillboard = function (rods) {
  const n = rods.length
  const NINF = -1e9
  const memo = Array.from({ length: n }, () => Array(10001).fill(null))
  const dp = function (rods, i, s) {
    if (i == rods.length) {
      return s == 5000 ? 0 : NINF
    } else if (memo[i][s] != null) {
      return memo[i][s]
    } else {
      let ans = dp(rods, i + 1, s)
      ans = Math.max(ans, dp(rods, i + 1, s - rods[i]))
      ans = Math.max(ans, rods[i] + dp(rods, i + 1, s + rods[i]))
      memo[i][s] = ans
      return ans
    }
  }

  return dp(rods, 0, 5000)
}

console.log(tallestBillboard([1, 2, 3, 6]))
