var orangesRotting = function (grid) {
  const m = grid.length
  const n = grid[0].length
  const queue = []
  let freshCount = 0

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j])
      } else if (grid[i][j] === 1) {
        freshCount++
      }
    }
  }

  if (freshCount === 0) return 0

  let minutes = 0
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]

  while (queue.length > 0) {
    const size = queue.length
    let infectedThisMinute = false

    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift()

      for (const [dx, dy] of directions) {
        const nx = x + dx
        const ny = y + dy

        if (nx >= 0 && nx < m && ny >= 0 && ny < n && grid[nx][ny] === 1) {
          grid[nx][ny] = 2
          queue.push([nx, ny])
          freshCount--
          infectedThisMinute = true
        }
      }
    }

    if (infectedThisMinute) {
      minutes++
    }
  }

  return freshCount === 0 ? minutes : -1
}
