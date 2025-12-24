var minimumMountainRemovals = function (nums) {
  const n = nums.length
  const suf = Array(n).fill(0)
  const g = []

  var lowerBound = function (nums, target) {
    let left = -1,
      right = nums.length
    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2)
      if (nums[mid] < target) {
        left = mid
      } else {
        right = mid
      }
    }
    return right
  }

  for (let i = n - 1; i > 0; i--) {
    const x = nums[i]
    const j = lowerBound(g, x)
    if (j === g.length) {
      g.push(x)
    } else {
      g[j] = x
    }
    suf[i] = j + 1
  }

  let mx = 0
  g.length = 0
  for (let i = 0; i < n - 1; i++) {
    const x = nums[i]
    const j = lowerBound(g, x)
    if (j === g.length) {
      g.push(x)
    } else {
      g[j] = x
    }
    const pre = j + 1
    if (pre >= 2 && suf[i] >= 2) {
      mx = Math.max(mx, pre + suf[i] - 1)
    }
  }
  return n - mx
}

console.log(minimumMountainRemovals([1, 3, 1]))
console.log(minimumMountainRemovals([2, 1, 1, 5, 6, 2, 3, 1]))
console.log(minimumMountainRemovals([4, 3, 2, 1, 1, 2, 3, 1]))
