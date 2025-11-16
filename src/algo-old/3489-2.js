var minZeroArray = function (nums, queries) {
  const n = queries.length
  const dfs = (x, i, j) => {
    if (x === 0) {
      return j
    }
    if (j === n) {
      return Infinity
    }
    const [l, r, k] = queries[j]

    if (i >= l && i <= r && x >= k) {
      return Math.min(dfs(x - k, i, j + 1), dfs(x, i, j + 1))
    } else {
      return dfs(x, i, j + 1)
    }
  }
  let res = -1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      res = Math.max(res, dfs(nums[i], i, 0))
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
