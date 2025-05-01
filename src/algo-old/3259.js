var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length
  const dp = new Array(n).fill(0).map(() => new Array(3).fill(0))
  dp[0] = [0, energyDrinkA[0], energyDrinkB[0]]
  dp[1] = [
    Math.max(dp[0][1], Math.max(dp[0][2])),
    energyDrinkA[0] + energyDrinkA[1],
    energyDrinkB[0] + energyDrinkB[1],
  ]
  for (let i = 2; i < n; i++) {
    dp[i][0] = Math.max(dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 2][2]) + energyDrinkA[i]
    dp[i][2] = Math.max(dp[i - 1][0], dp[i - 2][1], dp[i - 1][2]) + energyDrinkB[i]
  }
  return Math.max(dp[n - 1][0], dp[n - 1][1], dp[n - 1][2])
}
