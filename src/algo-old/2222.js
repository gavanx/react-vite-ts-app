var numberOfWays = function (s) {
  const n = s.length
  const dp = new Array(n + 1).fill(0).map(() => new Array(3).fill(0))

  let c
  for (let i = 1; i <= n; i++) {
    c = s[i - 1] - '0'
    dp[i][0] = dp[i - 1][0] + (c === 0 ? 1 : 0)
    dp[i][1] = dp[i - 1][1] + (c === 1 ? 1 : 0)
    dp[i][2] = dp[i - 1][2] + (c === 0 ? 1 : 0)
  }

  return dp[n][2]
}

console.log(numberOfWays('001101')) // 6
console.log(numberOfWays('11100')) // 0
