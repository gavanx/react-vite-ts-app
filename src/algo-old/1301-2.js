function pathsWithMaxScore(board) {
  const mod = 1e9 + 7
  const n = board.length
  const m = board[0].length

  const f = Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1e18))
  const g = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0))

  f[0][0] = 0
  g[0][0] = 1

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      const currChar = board[i - 1][j - 1]
      if (currChar === 'X') continue

      let val
      if ((i - 1 === 0 && j - 1 === 0) || (i - 1 === n - 1 && j - 1 === m - 1)) {
        val = 0
      } else {
        val = parseInt(currChar, 10)
      }

      const up = f[i - 1][j]
      const left = f[i][j - 1]
      const upLeft = f[i - 1][j - 1]
      const maxPrev = Math.max(up, left, upLeft)

      if (maxPrev === -1e18) continue

      f[i][j] = maxPrev + val

      let count = 0
      if (up === maxPrev) count += g[i - 1][j]
      if (left === maxPrev) count += g[i][j - 1]
      if (upLeft === maxPrev) count += g[i - 1][j - 1]
      g[i][j] = count % mod
    }
  }

  if (f[n][m] === -1e18) {
    return [0, 0]
  } else {
    return [f[n][m], g[n][m] % mod]
  }
}

console.log(pathsWithMaxScore(['E23', '2X2', '12S']))
console.log(pathsWithMaxScore(['E12', '1X1', '21S']))
console.log(pathsWithMaxScore(['E11', 'XXX', '11S']))
