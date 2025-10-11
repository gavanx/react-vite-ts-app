var minTime = function (skill, mana) {
  const n = skill.length
  const m = mana.length
  const dp = new Array(n).fill(0)
  let max = 0
  for (let j = 0; j < m; j++) {
    max = 0
    for (let i = 0; i < n; i++) {
      max = Math.max(max, dp[i]) + mana[j] * skill[i]
    }
    dp[n - 1] = max
    for (let i = n - 1; i > 0; i--) {
      dp[i - 1] = dp[i] - skill[i] * mana[j]
    }
  }
  return dp[n - 1]
}

console.log(minTime([1, 5, 2, 4], [5, 1, 4, 2]))
console.log(minTime([1, 1, 1], [1, 1, 1]))
console.log(minTime([1, 2, 3, 4], [1, 2]))
