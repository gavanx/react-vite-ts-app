var maxDistinctElements = function (nums, k) {
  const n = nums.length
  if (2 * k + 1 > n) {
    return n
  }
  let pre = Number.MIN_SAFE_INTEGER
  let res = 0
  const a = nums.sort((a, b) => a - b)
  for (let x of a) {
    x = Math.min(Math.max(x - k, pre + 1), x + k)
    if (x > pre) {
      res++
      pre = x
    }
  }
  return res
}

console.log(maxDistinctElements([1, 2, 2, 3, 3, 4], 2))
console.log(maxDistinctElements([4, 4, 4, 4], 1))
