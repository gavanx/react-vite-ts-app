var findCoins = function (numWays) {
  const n = numWays.length
  const dp = new Array(n + 1).fill(0)
  dp[0] = 1
  const ans = []
  for (let i = 0; i < n; ++i) {
    if (numWays[i] === dp[i + 1]) {
      continue
    } else if (numWays[i] === dp[i + 1] + 1) {
      ans.push(i + 1)
      for (let j = 1; j <= n; ++j) {
        if (j < i + 1) {
          continue
        }
        dp[j] += dp[j - i - 1]
      }
    } else {
      return []
    }
  }
  return ans
}

console.log(findCoins([0, 1, 0, 2, 0, 3, 0, 4, 0, 5]))
console.log(findCoins([1, 2, 2, 3, 4]))
console.log(findCoins([1, 2, 3, 4, 15]))
