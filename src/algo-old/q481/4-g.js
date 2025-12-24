/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} group
 * @return {number}
 */
var numberOfPairs = function (n, edges, group) {
  // Build adjacency list
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  // Count total nodes for each group
  const totalGroupCounts = new Map()
  for (const g of group) {
    totalGroupCounts.set(g, (totalGroupCounts.get(g) || 0) + 1)
  }

  // BFS to determine processing order (post-order equivalent) and parents
  const parent = new Int32Array(n).fill(-1)
  const order = []
  const queue = [0]
  const visited = new Uint8Array(n)
  visited[0] = 1

  while (queue.length > 0) {
    const u = queue.shift()
    order.push(u)
    for (const v of adj[u]) {
      if (!visited[v]) {
        visited[v] = 1
        parent[v] = u
        queue.push(v)
      }
    }
  }

  let totalInteractionCost = 0
  // Store maps for each node: group -> count in subtree
  // We can use an array of Maps.
  // Optimization: To save memory, we can nullify maps after merging.
  const nodeMaps = new Array(n)

  // Process in reverse topological order (leaves to root)
  for (let i = n - 1; i >= 0; i--) {
    const u = order[i]
    let myMap = new Map()
    myMap.set(group[u], 1)

    // Iterate over neighbors, but only process children (where parent[v] == u)
    // Since we have parent array, we can check.
    // Or better: we know children are neighbors except parent.

    for (const v of adj[u]) {
      if (v === parent[u]) continue

      const childMap = nodeMaps[v]

      // Calculate contribution of edge (u, v)
      // For each group g in childMap, the edge is traversed
      // count * (total - count) times.
      for (const [g, count] of childMap) {
        const total = totalGroupCounts.get(g)
        totalInteractionCost += count * (total - count)
      }

      // Merge childMap into myMap (Small-to-Large heuristic)
      if (childMap.size > myMap.size) {
        // Swap
        const temp = myMap
        myMap = childMap
        // Add temp into myMap
        for (const [g, count] of temp) {
          myMap.set(g, (myMap.get(g) || 0) + count)
        }
      } else {
        // Add childMap into myMap
        for (const [g, count] of childMap) {
          myMap.set(g, (myMap.get(g) || 0) + count)
        }
      }
      // Free memory
      nodeMaps[v] = null
    }
    nodeMaps[u] = myMap
  }

  return totalInteractionCost
}

// Test cases
console.log(
  numberOfPairs(
    5,
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
    ],
    [0, 0, 0, 0, 0]
  )
)
// All same group. Tree is 0-1, 0-2, 1-3, 1-4.
// Distances:
// 0-1: 1
// 0-2: 1
// 0-3: 2
// 0-4: 2
// 1-2: 2
// 1-3: 1
// 1-4: 1
// 2-3: 3
// 2-4: 3
// 3-4: 2
// Sum = 1+1+2+2+2+1+1+3+3+2 = 18.

console.log(
  numberOfPairs(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    [0, 1, 0]
  )
)
// Group 0 at 0, 2. Group 1 at 1.
// Pair (0, 2) has distance 2.
// Sum = 2.

console.log(
  numberOfPairs(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    [1, 1, 1]
  )
) //4

console.log(
  numberOfPairs(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    [3, 2, 3]
  )
) //2

console.log(
  numberOfPairs(
    4,
    [
      [2, 3], [0, 1], [1, 2]
    ],
    [4, 4, 1, 2]
  )
)
