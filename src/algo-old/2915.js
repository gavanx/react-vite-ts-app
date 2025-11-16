var lengthOfLongestSubsequence = function (nums, target) {
  const n = nums.length
  const map = new Map()
  const dfs = (i, t) => {
    const key = `${i},${t}`
    if (map.has(key)) return map.get(key)
    if (t === 0) {
      map.set(key, 0)
      return 0
    }
    if (i === n || t < 0) {
      map.set(key, -Infinity)
      return -Infinity
    }
    const res = Math.max(dfs(i + 1, t), dfs(i + 1, t - nums[i]) + 1)
    map.set(key, res)
    return res
  }
  return Math.max(dfs(0, target), -1)
}

console.log(lengthOfLongestSubsequence([1, 2, 3, 4, 5], 9))

console.log(lengthOfLongestSubsequence([4, 1, 3, 2, 1, 5], 7))

console.log(lengthOfLongestSubsequence([71, 1, 5, 4, 5], 3))
