var longestConsecutive = function (nums) {
  const s = new Set(nums)
  let ans = 0
  for (const num of s) {
    if (!s.has(num - 1)) {
      let cur = num
      while (s.has(cur + 1)) {
        cur++
      }
      ans = Math.max(ans, cur - num + 1)
    }
  }
  return ans
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([1, 2, 0, 1]))
