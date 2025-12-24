function treeSumDistances(n, edges, group) {
  const adj = Array.from({ length: n }, () => [])
  for (const [u, v] of edges) {
    adj[u].push(v)
    adj[v].push(u)
  }

  const totalCount = new Map()
  for (const g of group) {
    totalCount.set(g, (totalCount.get(g) || 0) + 1)
  }

  const parent = Array(n).fill(-1)
  const order = []
  const stack = [0]
  parent[0] = -2

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

  const maps = Array(n).fill(null)
  let ans = 0

  for (let i = order.length - 1; i >= 0; i--) {
    const u = order[i]
    let myMap = new Map()
    myMap.set(group[u], 1)

    for (const v of adj[u]) {
      if (parent[v] !== u) continue
      let childMap = maps[v]

      if (childMap.size > myMap.size) {
        ;[myMap, childMap] = [childMap, myMap]
      }

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

console.log(
  treeSumDistances(
    4,
    [
      [2, 3], [0, 1], [1, 2]
    ],
    [4, 4, 1, 2]
  )
)