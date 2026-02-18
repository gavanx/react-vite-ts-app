import { PriorityQueue } from 'datastructures-js'

var minCost = function (n, edges) {
  const graph = Array.from({ length: n }, () => [])
  for (const [u, v, cost] of edges) {
    graph[u].push([v, cost])
    graph[v].push([u, 2 * cost])
  }
  const heap = new PriorityQueue((a, b) => a[0] - b[0])
  heap.enqueue([0, 0]) // [cost, node]
  const dist = Array(n).fill(Infinity)
  dist[0] = 0
  while (!heap.isEmpty()) {
    const [cost, node] = heap.dequeue()
    if (cost > dist[node]) continue
    if (node === n - 1) return cost
    for (const [neighbor, edgeCost] of graph[node]) {
      const newCost = cost + edgeCost
      if (newCost < dist[neighbor]) {
        dist[neighbor] = newCost
        heap.enqueue([newCost, neighbor])
      }
    }
  }
  return -1
}
