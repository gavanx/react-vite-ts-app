/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} group
 * @return {number}
 */
var numberOfPairs = function (n, edges, group) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  const totalGroupCounts = new Map()
  for (const g of group) {
    totalGroupCounts.set(g, (totalGroupCounts.get(g) || 0) + 1)
  }

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
  const nodeMaps = new Array(n)

  for (let i = n - 1; i >= 0; i--) {
    const u = order[i]
    let myMap = new Map()
    myMap.set(group[u], 1)

    for (const v of adj[u]) {
      if (v === parent[u]) continue

      const childMap = nodeMaps[v]

      for (const [g, count] of childMap) {
        const total = totalGroupCounts.get(g)
        totalInteractionCost += count * (total - count)
      }

      if (childMap.size > myMap.size) {
        const temp = myMap
        myMap = childMap
        for (const [g, count] of temp) {
          myMap.set(g, (myMap.get(g) || 0) + count)
        }
      } else {
        for (const [g, count] of childMap) {
          myMap.set(g, (myMap.get(g) || 0) + count)
        }
      }
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
