/**
 * @param {number} n
 * @param {number[][]} meetings
 * @param {number} firstPerson
 * @return {number[]}
 */
var findAllPeople = function (n, meetings, firstPerson) {
  meetings.sort((a, b) => a[2] - b[2])

  const haveSecret = new Set([0, firstPerson])

  const m = meetings.length
  let i = 0

  while (i < m) {
    const graph = new Map()
    const time = meetings[i][2]

    while (i < m && meetings[i][2] === time) {
      const [x, y] = meetings[i]
      if (!graph.has(x)) graph.set(x, [])
      if (!graph.has(y)) graph.set(y, [])
      graph.get(x).push(y)
      graph.get(y).push(x)
      i++
    }

    const visited = new Set()

    const dfs = (node) => {
      visited.add(node)
      haveSecret.add(node)
      const neighbors = graph.get(node) || []
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor)
        }
      }
    }

    for (const node of graph.keys()) {
      if (haveSecret.has(node) && !visited.has(node)) {
        dfs(node)
      }
    }
  }

  return Array.from(haveSecret)
}

console.log(
  findAllPeople(
    6,
    [
      [1, 2, 5],
      [2, 3, 8],
      [1, 5, 10],
    ],
    1
  )
)
console.log(
  findAllPeople(
    4,
    [
      [3, 1, 3],
      [1, 2, 2],
      [0, 3, 3],
    ],
    3
  )
)
