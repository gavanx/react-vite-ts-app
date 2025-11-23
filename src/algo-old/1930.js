var countPalindromicSubsequence = function (s) {
  const n = s.length
  const left = new Array(n).fill(0).map(() => new Set())
  const right = new Array(n + 1).fill(0).map(() => new Set())
  for (let i = 0; i < n; i++) {
    if (i > 0) left[i] = new Set([...left[i - 1], s[i]])
    right[n - i - 1] = new Set([...right[n - i], s[n - i - 1]])
  }
  const seen = new Set()
  for (let i = 1; i < n - 1; i++) {
    for (const l of left[i - 1]) {
      for (const r of right[i + 1]) {
        if (l === r) seen.add(l + s[i] + r)
      }
    }
  }
  return seen.size
}

console.log(countPalindromicSubsequence('aabca'))
