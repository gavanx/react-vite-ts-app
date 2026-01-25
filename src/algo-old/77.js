var combine = function (n, k) {
  const dfs = (i, c, prefix) => {
    if (c === 0) {
      res.push(prefix)
      return
    }
    if (i > n) {
      return
    }
    dfs(i + 1, c - 1, [...prefix, i])
    dfs(i + 1, c, prefix)
  }
  const res = []
  dfs(1, k, [])
  return res
}

console.log(combine(4, 2).join(' '))
