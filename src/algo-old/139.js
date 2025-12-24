var wordBreak = function (s, wordDict) {
  const n = s.length
  const set = new Set(wordDict)
  const dp = new Array(n + 1).fill(false)
  dp[0] = true
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      if (dp[j] && set.has(s.substring(j, i))) {
        dp[i] = true
        break
      }
    }
  }
  return dp[n]
}

console.log(wordBreak('leetcode', ['leet', 'code']))
