var minZeroArray = function (nums, queries) {
  const n = queries.length
  const f = (x, i) => {
    const dp = Array.from({ length: n + 1 }, () => Array.from({ length: x + 1 }, () => Infinity))
    dp[0][0] = true
    let res = Infinity
    for (let j = 1; j <= n; j++) {
      const [l, r, k] = queries[j - 1]
      if (i >= l && i <= r) {
        for (let m = 0; m <= x; m++) {
          if (x >= m) {
            dp[j][m] = dp[j - 1][m] || dp[j - 1][x - m]
          } else {
            dp[j][m] = dp[j - 1][m]
          }
        }
      } else {
        for (let m = 0; m <= x; m++) {
          dp[j][m] = dp[j - 1][m]
        }
      }
      for (let m = 0; m <= x; m++) {}
      if (dp[j][x] === true) {
        res = Math.min(res, j)
      }
    }
    return res
  }
  let res = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      res = Math.max(res, f(nums[i], i))
      if (res === Infinity) {
        return -1
      }
    }
  }
  return res
}

console.log(
  minZeroArray(
    [2, 0, 2],
    [
      [0, 2, 1],
      [0, 2, 1],
      [1, 1, 3],
    ]
  )
)

console.log(
  minZeroArray(
    [4, 3, 2, 1],
    [
      [1, 3, 2],
      [0, 2, 1],
    ]
  )
)

console.log(
  minZeroArray(
    [1, 2, 3, 2, 1],
    [
      [0, 1, 1],
      [1, 2, 1],
      [2, 3, 2],
      [3, 4, 1],
      [4, 4, 1],
    ]
  )
)

console.log(
  minZeroArray(
    [1, 2, 3, 2, 6],
    [
      [0, 1, 1],
      [0, 2, 1],
      [1, 4, 2],
      [4, 4, 4],
      [3, 4, 1],
      [4, 4, 5],
    ]
  )
)

console.log(
  minZeroArray(
    [8],
    [
      [0, 0, 9],
      [0, 0, 9],
      [0, 0, 1],
      [0, 0, 6],
      [0, 0, 1],
    ]
  )
)
