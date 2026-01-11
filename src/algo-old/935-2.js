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

  const memo = Array.from({ length: n + 1 }).map(() => new Array(10).fill(0))

  const dfs = (i, x) => {
    if (i === n) return 1
    if (memo[i][x] !== 0) return memo[i][x]
    let res = 0
    for (let j of next[x]) {
      res += dfs(i + 1, j)
    }
    return memo[i][x] = res % mod
  }
  let res = 0
  for (let i = 0; i < 10; i++) {
    res = (res + dfs(1, i)) % mod
  }
  return res
}

console.log(knightDialer(1))
console.log(knightDialer(2))
console.log(knightDialer(3))
console.log(knightDialer(4))
