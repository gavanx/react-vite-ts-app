var maxVowels = function (s, k) {
  const vowels = new Set(['a', 'e', 'i', 'o', 'u'])
  let ans = 0
  let cnt = 0
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      cnt++
      if (cnt === k) {
        return k
      }
    }
  }
  ans = cnt
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) {
      cnt++
    }
    if (vowels.has(s[i - k])) {
      cnt--
    }
    ans = Math.max(ans, cnt)
  }
  return ans
}

console.log(maxVowels('abciiidef', 3))
console.log(maxVowels('aeiou', 2))
console.log(maxVowels('leetcode', 3))