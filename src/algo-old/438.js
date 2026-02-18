var findAnagrams = function (s, p) {
  const n = s.length,
    m = p.length
  const res = []
  const cnt = new Array(26).fill(0)
  for (let i = 0; i < m; i++) {
    cnt[p.charCodeAt(i) - 'a'.charCodeAt(0)]++
  }
  const cnt2 = new Array(26).fill(0)
  for (let i = 0; i < n; i++) {
    cnt2[s.charCodeAt(i) - 'a'.charCodeAt(0)]++
    if (i >= m) {
      cnt2[s.charCodeAt(i - m) - 'a'.charCodeAt(0)]--
    }
    if (i >= m - 1 && cnt.toString() === cnt2.toString()) {
      res.push(i - m + 1)
    }
  }
  return res
}

console.log(findAnagrams('cbaebabacd', 'abc'))
console.log(findAnagrams('abab', 'ab'))
