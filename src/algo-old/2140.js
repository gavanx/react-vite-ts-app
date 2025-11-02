var mostPoints = function (questions) {
  const n = questions.length
  const c = new Map()
  const dfs = (i) => {
    if (i >= n) {
      return 0
    }
    if (c.has(i)) {
      return c.get(i)
    }
    const [p, b] = questions[i]
    const ret = Math.max(dfs(i + 1), p + dfs(i + b + 1))
    c.set(i, ret)
    return ret
  }
  return dfs(0)
}

console.log(
  mostPoints([
    [3, 2],
    [4, 3],
    [4, 4],
    [2, 5],
  ]) === 5
)
console.log(
  mostPoints([
    [1, 1],
    [2, 2],
    [3, 3],
    [4, 4],
    [5, 5],
  ]) === 7
)
