var numMagicSquaresInside = function (grid) {
  const m = grid.length
  const n = grid[0].length
  let ans = 0

  for (let i = 0; i < m - 2; i++) {
    for (let j = 0; j < n - 2; j++) {
      if (grid[i + 1][j + 1] !== 5) {
        continue
      }

      let mask = 0
      const rSum = [0, 0, 0]
      const cSum = [0, 0, 0]
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          const x = grid[i + r][j + c]
          mask |= 1 << x
          rSum[r] += x
          cSum[c] += x
        }
      }

      if (
        mask === (1 << 10) - 2 &&
        rSum[0] === 15 &&
        rSum[1] === 15 &&
        cSum[0] === 15 &&
        cSum[1] === 15
      ) {
        ans++
      }
    }
  }

  return ans
}
