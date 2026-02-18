var longestBalanced = function (s) {
  s = s.split('').map(c => c.charCodeAt(0) - 97)
  const n = s.length
  let ans = 1
  for (let i = 0; i < n; i++) {
    if (ans > n - i + 1) {
      break
    }
    for (let j = n - 1; j > i; j--) {
      if (ans > j - i + 1) {
        break
      }
      let a = new Array(26).fill(0)
      for (let k = i; k <= j; k++) {
        a[s[k]] += 1
      }
      const set = new Set(a)
      set.delete(0)
      if (set.size === 1) {
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
