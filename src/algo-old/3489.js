var minZeroArray = function (nums, queries) {
  const len = nums.length
  const res = []
  for (const [l, r, x] of queries) {
    let count = 0
    for (let i = l; i <= r; i++) {
      if (nums[i] === 0) count++
    }
    if (count >= x) {
      res.push(0)
    } else {
      res.push(x - count)
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
