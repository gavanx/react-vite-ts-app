var specialNodes = function (n, edges, x, y, z) {
  const graph = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    graph[u].push(v)
    graph[v].push(u)
  }
  const cache = Array.from({ length: n }, () => Array(n).fill(-2))
  function distance(start, end) {
    if (start === end) {
      return 0
    }
    if (cache[start][end] !== -2) {
      return cache[start][end]
    }
    if (cache[end][start] !== -2) {
      return cache[end][start]
    }
    const queue = [[start, 0]]
    const visited = new Set([start])
    while (queue.length > 0) {
      const [node, dist] = queue.shift()
      if (node === end) {
        return cache[start][end] = cache[end][start] = dist
      }
      for (const neighbor of graph[node] || []) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          cache[start][neighbor] = cache[neighbor][start] = dist + 1
          queue.push([neighbor, dist + 1])
        }
      }
    }
    return cache[start][end] = cache[end][start] = -1
  }
  let ans = 0
  for (let i = 0; i < n; i++) {
    const distX = distance(i, x)
    const distY = distance(i, y)
    const distZ = distance(i, z)
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
