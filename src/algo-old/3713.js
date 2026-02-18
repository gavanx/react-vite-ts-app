var longestBalanced = function (s) {
  const n = s.length
  let ans = 1
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      let a = new Array(26).fill(0)
      for (let k = i; k <= j; k++) {
        a[s.charCodeAt(k) - 97] += 1
      }
      a = a.filter(x => x > 0)
      if (a.every(c => c === a[0])) {
        ans = Math.max(ans, j - i + 1)
      }
    }
  }
  return ans
}

console.log(longestBalanced('abbac'))
console.log(longestBalanced('zzabccy'))
console.log(longestBalanced('aba'))
