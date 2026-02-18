function longestBalanced(s) {
  let ans = 0
  const n = s.length
  for (let i = 0; i < n; i++) {
    const cnt = new Map()
    for (let j = i; j < n; j++) {
      const char = s[j]
      cnt.set(char, (cnt.get(char) || 0) + 1)
      const values = Array.from(cnt.values())
      const uniqueValues = new Set(values)
      if (uniqueValues.size === 1) {
        ans = Math.max(ans, j - i + 1)
      }
    }
  }
  return ans
}
console.log(longestBalanced('abbac'))
console.log(longestBalanced('zzabccy'))
console.log(longestBalanced('aba'))
console.log(longestBalanced('zz'))
