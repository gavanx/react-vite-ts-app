var minCost = function (n, edges) {
  const graph = Array.from({ length: n }, () => [])
  for (const [u, v, cost] of edges) {
    graph[u].push([v, cost])
    graph[v].push([u, 2 * cost])
  }
  const visited = Array(n).fill(false)
  const queue = [[0, 0]]
  visited[0] = true
  let ans = Infinity
  while (queue.length) {
    const [node, cost] = queue.shift()
    for (const [neighbor, edgeCost] of graph[node]) {
      if (neighbor === n - 1) {
        ans = Math.min(ans, cost + edgeCost)
      } else if (!visited[neighbor]) {
        visited[neighbor] = true
        queue.push([neighbor, cost + edgeCost])
      }
    }
  }
  return ans
}

console.log(
  minCost(4, [
    [0, 1, 3],
    [3, 1, 1],
    [2, 3, 4],
    [0, 2, 2],
  ])
)
console.log(
  minCost(4, [
    [0, 2, 1],
    [2, 1, 1],
    [1, 3, 1],
    [2, 3, 3],
  ])
)

console.log(
  minCost(3, [
    [1, 2, 14],
    [0, 1, 17],
    [1, 0, 2],
    [2, 1, 10],
  ])
)
