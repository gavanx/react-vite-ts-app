var canPartition = function (nums) {
  let sum = 0
  for (let x of nums) {
    sum += x
  }
  if (sum % 2 !== 0) {
    return false
  }
  const n = nums.length
  const map = new Map()
  const dfs = (i, t) => {
    const key = `${i},${t}`
    if (map.has(key)) {
      return map.get(key)
    }
    if (i >= n || t < 0) {
      map.set(key, false)
      return false
    }
    if (t === 0) {
      map.set(key, true)
      return true
    }
    const res = dfs(i + 1, t) || dfs(i + 1, t - nums[i])
    map.set(key, res)
    return res
  }
  return dfs(0, sum / 2)
}

// console.log(canPartition([1, 5, 11, 5]))
// console.log(canPartition([1, 2, 3, 5]))

console.log(canPartition([1, 1]))
