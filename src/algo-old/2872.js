var maxKDivisibleComponents = function (n, edges, values, k) {
  const g = Array.from({ length: n }, () => [])
  for (const [x, y] of edges) {
    g[x].push(y)
    g[y].push(x)
  }

  let ans = 0
  function dfs(x, fa) {
    let sum = values[x]
    for (const y of g[x]) {
      if (y !== fa) {
        sum += dfs(y, x)
      }
    }
    ans += sum % k === 0 ? 1 : 0
    return sum
  }

  dfs(0, -1)
  return ans
}

console.log(
  maxKDivisibleComponents(
    5,
    [
      [0, 2],
      [1, 2],
      [1, 3],
      [2, 4],
    ],
    [1, 8, 1, 4, 4],
    6
  )
)

console.log(
  maxKDivisibleComponents(
    7,
    [
      [0, 1],
      [0, 2],
      [1, 3],
      [1, 4],
      [2, 5],
      [2, 6],
    ],
    [3, 0, 6, 1, 5, 2, 1],
    3
  )
)
