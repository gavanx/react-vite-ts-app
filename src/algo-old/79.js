var exist = function (board, word) {
  const m = board.length
  const n = board[0].length
  const dfs = (i, j, k) => {
    if (k === word.length) {
      return true
    }
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] !== word[k]) {
      return false
    }
    const c = board[i][j]
    board[i][j] = '#'
    const res =
      dfs(i + 1, j, k + 1) || dfs(i - 1, j, k + 1) || dfs(i, j + 1, k + 1) || dfs(i, j - 1, k + 1)
    board[i][j] = c
    return res
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0)) {
        return true
      }
    }
  }
  return false
}
