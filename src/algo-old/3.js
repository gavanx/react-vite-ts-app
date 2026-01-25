var lengthOfLongestSubstring = function (s) {
  const set = new Set()
  let left = 0
  let right = 0
  let res = 0
  while (right < s.length) {
    if (!set.has(s[right])) {
      set.add(s[right])
      right++
      res = Math.max(res, set.size)
    } else {
      while (set.has(s[right])) {
        set.delete(s[left])
        left++
      }
    }
  }
  return res
}

console.log(lengthOfLongestSubstring('abcabcbb'))
