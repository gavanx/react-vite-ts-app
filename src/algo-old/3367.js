var maxFrequency = function (nums, k, numOperations) {
  const cnt = new Map()
  const diff = new Map()
  for (let n of nums) {
    cnt.set(n, (cnt.get(n) || 0) + 1)
    if (!diff.has(n)) {
      diff.set(n, 0)
    }
    diff.set(n - k, (diff.get(n - k) || 0) + 1)
    diff.set(n + k + 1, (diff.get(n + k + 1) || 0) - 1)
  }
  let res = 0
  let sum = 0
  for (let [k, v] of Array.from(diff).sort((a, b) => a[0] - b[0])) {
    sum += v
    res = Math.max(res, Math.min(sum, (cnt.get(k) || 0) + numOperations))
  }
  return res
}

console.log(maxFrequency([1, 4, 5], 1, 2))
console.log(maxFrequency([5, 11, 20, 20], 5, 1))
