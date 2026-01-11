var knightDialer = function (n) {
  const next = new Array(10)
  next[0] = [4, 6]
  next[1] = [6, 8]
  next[2] = [7, 9]
  next[3] = [4, 8]
  next[4] = [0, 3, 9]
  next[5] = []
  next[6] = [0, 1, 7]
  next[7] = [2, 6]
  next[8] = [1, 3]
  next[9] = [2, 4]
  const mod = 1e9 + 7
  const dp = new Array(n + 1).fill(0).map(() => new Array(10).fill(0))
  for (let i = 0; i < 10; i++) {
    dp[1][i] = 1
  }
  for (let j = 2; j <= n; j++) {
    for (let i = 0; i < 10; i++) {
      for (const x of next[i]) {
        dp[j][i] = (dp[j][i] + dp[j - 1][x]) % mod
      }
    }
  }
  return dp[n].reduce((a, b) => (a + b) % mod)
}

console.log(knightDialer(1))
console.log(knightDialer(2))
console.log(knightDialer(3))
console.log(knightDialer(4))
