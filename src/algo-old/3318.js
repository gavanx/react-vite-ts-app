var findXSum = function (nums, k, x) {
  const n = nums.length
  const map = new Map()
  let end = k
  const res = []
  for (let i = 0; i < k; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
  }
  const fn = (map) => {
    let sum = 0
    if (map.size < x) {
      for (let entry of map.entries()) {
        sum += entry[0] * entry[1]
      }
      return sum
    }
    const arr = Array.from(map.entries()).sort((a, b) => b[1] - a[1] || b[0] - a[0])
    for (let i = 0; i < x; i++) {
      sum += arr[i][0] * arr[i][1]
    }
    return sum
  }
  res.push(fn(map))
  while (end < n) {
    map.set(nums[end], (map.get(nums[end]) || 0) + 1)
    map.set(nums[end - k], map.get(nums[end - k]) - 1)
    if (map.get(nums[end - k]) === 0) {
      map.delete(nums[end - k])
    }
    res.push(fn(map))
    end++
  }
  return res
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2))
console.log(findXSum([3, 8, 7, 8, 7, 5], 2, 2))
