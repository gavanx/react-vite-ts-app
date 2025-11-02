var hasValidPath = function (grid) {
  const m = grid.length
  const n = grid[0].length
  if (grid[m - 1][n - 1] === '(') return false
  const map = new Map()
  const dfs = (i, j, count) => {
    if (i < 0 || i >= m || j < 0 || j >= n || count < 0) return false
    if (i === m - 1 && j === n - 1 && count === 1) {
      return true
    }
    const key = `${i},${j},${count}`
    if (map.has(key)) return map.get(key)
    let res = false
    if (grid[i][j] === '(') {
      res = dfs(i + 1, j, count + 1) || dfs(i, j + 1, count + 1)
    } else if (grid[i][j] === ')') {
      res = dfs(i + 1, j, count - 1) || dfs(i, j + 1, count - 1)
    }
    map.set(key, res)
    return res
  }
  return dfs(0, 0, 0)
}

console.log(
  hasValidPath([
    ['(', '(', '('],
    [')', '(', ')'],
    ['(', '(', ')'],
    ['(', '(', ')'],
  ])
)
console.log(
  hasValidPath([
    [')', ')'],
    ['(', '('],
  ])
)
console.log(
  hasValidPath([
    ['(', ')'],
    ['(', ')'],
  ])
)
