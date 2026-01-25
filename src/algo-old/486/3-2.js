var specialNodes = function (n, edges, x, y, z) {
  const graph = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }

  const adjMatrix = Array(n)
    .fill()
    .map(() => Array(n).fill(Infinity))

  for (let i = 0; i < n; i++) {
    adjMatrix[i][i] = 0
    for (const neighbor of graph[i] || []) {
      adjMatrix[i][neighbor] = 1
    }
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (adjMatrix[i][k] + adjMatrix[k][j] < adjMatrix[i][j]) {
          adjMatrix[i][j] = adjMatrix[i][k] + adjMatrix[k][j]
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (adjMatrix[i][j] === Infinity) {
        adjMatrix[i][j] = -1
      }
    }
  }

  let ans = 0
  for (let i = 0; i < n; i++) {
    const distX = adjMatrix[i][x]
    const distY = adjMatrix[i][y]
    const distZ = adjMatrix[i][z]
    const arr = [distX, distY, distZ].sort((a, b) => a - b)
    if (arr[0] > -1 && arr[0] * arr[0] + arr[1] * arr[1] === arr[2] * arr[2]) {
      ans++
    }
  }
  return ans
}

console.log(
  specialNodes(
    4,
    [
      [0, 1],
      [0, 2],
      [0, 3],
    ],
    1,
    2,
    3
  )
) // []©leetcode
console.log(
  specialNodes(
    4,
    [
      [0, 1],
      [1, 2],
      [2, 3],
    ],
    0,
    3,
    2
  )
)

console.log(
  specialNodes(
    4,
    [
      [0, 1],
      [1, 2],
      [1, 3],
    ],
    1,
    3,
    0
  )
)
