var maxHeight = function (cuboids) {
  cuboids.forEach((c) => c.sort((a, b) => a - b))
  cuboids.sort((a, b) => {
    if (a[0] === b[0]) {
      if (a[1] === b[1]) {
        return a[2] - b[2]
      } else {
        return a[1] - b[1]
      }
    } else {
      return a[0] - b[0]
    }
  })
  const n = cuboids.length
  const f = new Array(n).fill(0)
  let ans = 0
  for (let i = 0; i < n; i++) {
    f[i] = cuboids[i][2]
    for (let j = 0; j < i; j++) {
      if (
        cuboids[j][0] <= cuboids[i][0] &&
        cuboids[j][1] <= cuboids[i][1] &&
        cuboids[j][2] <= cuboids[i][2]
      ) {
        f[i] = Math.max(f[i], f[j] + cuboids[i][2])
      }
    }
    ans = Math.max(ans, f[i])
  }
  return ans
}

console.log(
  maxHeight([
    [50, 45, 20],
    [95, 37, 53],
    [45, 23, 12],
  ])
)
