var maxEnergyBoost = function (energyDrinkA, energyDrinkB) {
  const n = energyDrinkA.length
  const dp = Array.from({ length: n + 1 }, () => [-Infinity, -Infinity, -Infinity])
  dp[0] = [0, 0, 0]
  for (let i = 1; i <= n; i++) {
    const a = energyDrinkA[i - 1]
    const b = energyDrinkB[i - 1]
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2])
    dp[i][1] = Math.max(dp[i - 1][0] + a, dp[i - 1][1] + a)
    dp[i][2] = Math.max(dp[i - 1][0] + b, dp[i - 1][2] + b)
  }
  return Math.max(dp[n][0], dp[n][1], dp[n][2])
}

console.log(maxEnergyBoost([1, 3, 1], [3, 1, 1]))
console.log(maxEnergyBoost([4, 1, 1], [1, 1, 3]))
console.log(maxEnergyBoost([2, 7, 1, 5], [3, 1, 4, 2]))
