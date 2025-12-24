var countCoveredBuildings = function (n, buildings) {
  const rows = new Array(n + 2).fill([n + 1, 0])
  const cols = new Array(n + 2).fill([n + 1, 0])
  for (const [x, y] of buildings) {
    rows[x][0] = Math.min(rows[x][0], y)
    rows[x][1] = Math.max(rows[x][1], y)
    cols[y][0] = Math.min(cols[y][0], x)
    cols[y][1] = Math.max(cols[y][1], x)
  }
  let ans = 0
  for (const [x, y] of buildings) {
    if (cols[y][0] < x && x < cols[y][1] && rows[x][0] < y && y < rows[x][1]) {
      ans++
    }
  }
  return ans
}

console.log(
  countCoveredBuildings(3, [
    [1, 2],
    [2, 2],
    [3, 2],
    [2, 1],
    [2, 3],
  ])
)

console.log(
  countCoveredBuildings(3, [
    [1, 1],
    [1, 2],
    [2, 1],
    [2, 2],
  ])
)

console.log(
  countCoveredBuildings(5, [
    [1, 3],
    [3, 2],
    [3, 3],
    [3, 5],
    [5, 3],
  ])
)

console.log(
  countCoveredBuildings(3, [
    [1, 1],
    [2, 3],
    [3, 3],
    [2, 2],
    [1, 3],
  ])
)
