var maxValueOfCoins = function (piles, k) {
  const n = piles.length
  const dp = Array(k + 1).fill(0)
  for (let i = 0; i < n; i++) {
    const pile = piles[i]
    for (let j = k; j >= 0; j--) {
      let cur = 0
      for (let x = 0; x < pile.length && x < j; x++) {
        cur += pile[x]
        dp[j] = Math.max(dp[j], dp[j - x - 1] + cur)
      }
    }
  }
  return dp[k]
}

console.log(
  maxValueOfCoins(
    [
      [1, 100, 3],
      [7, 8, 9],
    ],
    2
  )
)
console.log(maxValueOfCoins([[100], [100], [100], [100], [100], [100], [1, 1, 1, 1, 1, 1, 700]], 7))
