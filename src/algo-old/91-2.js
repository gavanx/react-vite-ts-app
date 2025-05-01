var numDecodings = function (s) {
  const n = s.length
  const dp = Array.from({ length: n }, () => 0)
  dp[0] = s[0] !== '0' ? 1 : 0
  dp[1] = s[0] !== '0' ? (s[1] !== '0' ? 2 : 1) : 0
  for (let i = 2; i < n; i++) {
    if (s[i] !== '0') {
      dp[i] += dp[i - 1]
    }
    if (s[i - 1] !== '0' && parseInt(s[i - 1] + s[i]) <= 26) {
      dp[i] += dp[i - 2]
    }
  }
  return dp[n - 1]
}

console.log(numDecodings('12') === 2)
console.log(numDecodings('226') === 3)
console.log(numDecodings('06') === 0)
