var mostPoints = function (questions) {
  const n = questions.length
  const dp = new Array(n).fill(0).map(() => [0, 0])
  dp[n - 1][0] = 0
  dp[n - 1][1] = questions[n - 1][0]
  let index
  for (let i = n - 2; i >= 0; i--) {
    const [p, b] = questions[i]
    dp[i][0] = Math.max(dp[i + 1][0], dp[i + 1][1])
    index = i + b + 1
    if (index >= n) {
      dp[i][1] = p
    } else {
      dp[i][1] = p + Math.max(dp[index][0], dp[index][1])
    }
  }
  return Math.max(dp[0][0], dp[0][1])
}

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ]) === 5
)
console.log(
  mostPoints([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ]) === 7
)
