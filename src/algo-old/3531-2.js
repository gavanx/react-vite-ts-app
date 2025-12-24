var countCoveredBuildings = function (n, buildings) {
  const rowMin = new Array(n + 1).fill(n + 1)
  const rowMax = new Array(n + 1).fill(0)
  const colMin = new Array(n + 1).fill(n + 1)
  const colMax = new Array(n + 1).fill(0)
  for (const [x, y] of buildings) {
    if (x < rowMin[y]) rowMin[y] = x
    if (x > rowMax[y]) rowMax[y] = x
    if (y < colMin[x]) colMin[x] = y
    if (y > colMax[x]) colMax[x] = y
  }
  let ans = 0
  for (const [x, y] of buildings) {
    if (rowMin[y] < x && x < rowMax[y] && colMin[x] < y && y < colMax[x]) {
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
