function treeSumDistances(n, edges, group) {
  // Build adjacency list
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  // Count total nodes per group
  const totalCount = new Map()
  for (const g of group) {
    totalCount.set(g, (totalCount.get(g) || 0) + 1)
  }

  // Prepare parent array and processing order (iterative DFS)
  const parent = Array(n).fill(-1)
  const order = []
  const stack = [0]
  parent[0] = -2 // mark root

  while (stack.length) {
    const u = stack.pop()
    order.push(u)
    for (const v of adj[u]) {
      if (parent[v] === -1) {
        parent[v] = u
        stack.push(v)
      }
    }
  }

  // Process nodes in reverse order (post-order)
  const maps = Array(n).fill(null)
  let ans = 0

  for (let i = order.length - 1; i >= 0; i--) {
    const u = order[i]
    let myMap = new Map()
    myMap.set(group[u], 1)

    // Merge children maps
    for (const v of adj[u]) {
      if (parent[v] !== u) continue // only children
      let childMap = maps[v]

      // Small-to-large merging
      if (childMap.size > myMap.size) {
        ;[myMap, childMap] = [childMap, myMap]
      }

      // Add contributions and merge
      for (const [g, cnt] of childMap) {
        const total = totalCount.get(g)
        const inMy = myMap.get(g) || 0
        ans += cnt * (total - cnt)
        myMap.set(g, inMy + cnt)
      }
    }

    maps[u] = myMap
  }

  return ans
}
console.log(
  treeSumDistances(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    [1, 1, 1]
  )
) //4

console.log(
  treeSumDistances(
    3,
    [
      [0, 1],
      [1, 2],
    ],
    [3, 2, 3]
  )
) //2
