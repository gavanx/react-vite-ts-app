var minMoves = function (classroom, energy) {
  const m = classroom.length
  const n = classroom[0].length
  const dfs = (i, j, e, todos, s) => {
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return Infinity
    }
    let todos2 = new Set(todos)
    switch (classroom[i][j]) {
      case 'S':
        e--
        break
      case '.':
        e--
        break
      case 'L':
        todos2.delete(i * m + j)
        e--
        break
      case 'R':
        e = energy
        break
      case 'X':
        return Infinity
    }
    if (todos2.size === 0) {
      return s
    }
    if (e < -1) {
      return Infinity
    }
    return Math.min(
      dfs(i + 1, j, e, todos2, s + 1),
      dfs(i - 1, j, e, todos2, s + 1),
      dfs(i, j + 1, e, todos2, s + 1),
      dfs(i, j - 1, e, todos2, s + 1)
    )
  }
  let todos = new Set()
  let si, sj
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      switch (classroom[i][j]) {
        case 'S':
          si = i
          sj = j
          break
        case 'L':
          todos.add(i * m + j)
          break
        case 'R':
          break
        case 'X':
          break
      }
    }
  }
  return dfs(si, sj, energy, todos, 0)
}

// console.log(minMoves(['S.', 'XL'], 2))
console.log(minMoves(['LS', 'RL'], 4))
