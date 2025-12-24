var maxEnvelopes = function (envelopes) {
  const lowerBound = function (g, target) {
    let left = -1,
      right = g.length
    while (left + 1 < right) {
      let mid = (left + right) >>> 1
      if (g[mid] >= target) {
        right = mid
      } else {
        left = mid
      }
    }
    return right
  }
  envelopes.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1]
    } else {
      return a[0] - b[0]
    }
  })
  const n = envelopes.length
  const g = []
  for (let i = 0; i < n; i++) {
    const x = envelopes[i][1]
    let j = lowerBound(g, x)
    if (j === g.length) {
      g.push(x)
    } else {
      g[j] = x
    }
  }
  return g.length
}

console.log(
  maxEnvelopes([
    [5, 4],
    [6, 4],
    [6, 7],
    [2, 3],
  ])
)

console.log(
  maxEnvelopes([
    [1, 1],
    [1, 1],
    [1, 1],
  ])
)
