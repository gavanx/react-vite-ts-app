/**
 * @param {number[][]} grid
 * @return {number}
 */
function largestMagicSquare(grid) {
  const m = grid.length
  const n = grid[0].length

  const rowSum = new Array(m)
  for (let i = 0; i < m; i++) {
    rowSum[i] = new Array(n + 1).fill(0)
    for (let j = 0; j < n; j++) {
      rowSum[i][j + 1] = rowSum[i][j] + grid[i][j]
    }
  }

  const colSum = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    colSum[i] = new Array(n).fill(0)
  }
  for (let j = 0; j < n; j++) {
    for (let i = 0; i < m; i++) {
      colSum[i + 1][j] = colSum[i][j] + grid[i][j]
    }
  }

  const diagSum = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    diagSum[i] = new Array(n + 1).fill(0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      diagSum[i + 1][j + 1] = diagSum[i][j] + grid[i][j]
    }
  }

  const antiSum = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    antiSum[i] = new Array(n + 1).fill(0)
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      antiSum[i + 1][j] = antiSum[i][j + 1] + grid[i][j]
    }
  }

  for (let k = Math.min(m, n); k > 1; k--) {
    for (let i = k; i <= m; i++) {
      for (let j = k; j <= n; j++) {
        const s = diagSum[i][j] - diagSum[i - k][j - k]
        if (antiSum[i][j - k] - antiSum[i - k][j] !== s) {
          continue
        }
        let rowsValid = true
        for (let r = i - k; r < i; r++) {
          if (rowSum[r][j] - rowSum[r][j - k] !== s) {
            rowsValid = false
            break
          }
        }
        if (!rowsValid) continue

        let colsValid = true
        for (let c = j - k; c < j; c++) {
          if (colSum[i][c] - colSum[i - k][c] !== s) {
            colsValid = false
            break
          }
        }
        if (!colsValid) continue
        return k
      }
    }
  }

  return 1
}

console.log(
  largestMagicSquare([
    [7, 1, 4, 5, 6],
    [2, 5, 1, 6, 4],
    [1, 5, 4, 3, 2],
    [1, 2, 7, 3, 4],
  ])
)
