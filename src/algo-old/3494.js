var minTime = function (skill, mana) {
  const n = skill.length
  const m = mana.length
  const dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
  dp[0][0] = skill[0] * mana[0]
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + skill[0] * mana[j]
  }
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < m; j++) {
      dp[i][j] =
        Math.max(dp[i - 1][j], j === 0 ? dp[i - 1][m - 1] : dp[i][j - 1]) + skill[i] * mana[j]
    }
  }
  return dp[n - 1][m - 1]
}

console.log(minTime([1, 5, 2, 4], [5, 1, 4, 2]))
