function maxCollectedFruits(fruits) {
  const n = fruits.length
  let ans = 0

  for (let i = 0; i < n; i++) {
    ans += fruits[i][i]
  }

  ans += dp(fruits)

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      fruits[j][i] = fruits[i][j]
    }
  }

  return ans + dp(fruits)
}

function dp(fruits) {
  const n = fruits.length
  const f = Array.from({ length: n - 1 }, () => new Array(n + 1).fill(0))

  f[0][n - 1] = fruits[0][n - 1]

  for (let i = 1; i < n - 1; i++) {
    const startJ = Math.max(n - 1 - i, i + 1)
    for (let j = startJ; j < n; j++) {
      const maxPrev = Math.max(f[i - 1][j - 1], f[i - 1][j], f[i - 1][j + 1])
      f[i][j] = maxPrev + fruits[i][j]
    }
  }

  return f[n - 2][n - 1]
}

console.log(
  maxCollectedFruits([
    [1, 2, 3, 4],
    [5, 6, 8, 7],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
)

console.log(
  maxCollectedFruits([
    [1, 1],
    [1, 1],
  ])
)
