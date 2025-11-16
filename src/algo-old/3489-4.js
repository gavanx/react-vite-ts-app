var minZeroArray = function (nums, queries) {
  const n = nums.length
  const m = queries.length
  let ans = 0
  let x
  for (let i = 0; i < n; i++) {
    x = nums[i]
    if (x === 0) {
      continue
    }
    const dp = Array.from({ length: x + 1 }, () => false)
    dp[0] = true
    for (let j = 0; j < m; j++) {
      const [l, r, v] = queries[j]
      if (i >= l && i <= r && x >= v) {
        for (let k = x; k >= v; k--) {
          dp[k] = dp[k] || dp[k - v]
        }
      }
      if (dp[x]) {
        ans = Math.max(ans, j + 1)
        break
      }
    }
    if (!dp[x]) {
      return -1
    }
  }
  return ans
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
console.log(minZeroArray([0], [[0, 0, 1]]))
