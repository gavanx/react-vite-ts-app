var lastStoneWeightII = function (stones) {
  let sum = 0
  for (const w of stones) {
    sum += w
  }
  const m = Math.floor(sum / 2)
  const dp = new Array(m + 1).fill(false)
  dp[0] = true
  for (const w of stones) {
    for (let j = m; j >= w; --j) {
      dp[j] = dp[j] || dp[j - w]
    }
  }
  for (let j = m; ; --j) {
    if (dp[j]) {
      return sum - 2 * j
    }
  }
}
