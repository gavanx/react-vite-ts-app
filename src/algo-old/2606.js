var maximumCostSubstring = function (s, chars, vals) {
  let map = new Map()
  for (let i = 0; i < 26; i++) {
    map.set(String.fromCharCode(i + 97), i + 1)
  }
  for (let i = 0; i < chars.length; i++) {
    map.set(chars[i], vals[i])
  }
  let max = Math.max(0, map.get(s[0]))
  let sum = map.get(s[0])
  let v
  for (let i = 1; i < s.length; i++) {
    v = map.get(s[i])
    if (sum < 0) {
      sum = v
    } else {
      sum += v
    }
    max = Math.max(max, sum)
  }
  return max
}

console.log(maximumCostSubstring('adaa', 'd', [-1000]))
console.log(maximumCostSubstring('abc', 'abc', [-1, -1, -1]))
console.log(maximumCostSubstring('zox', 'zoxr', [2, -5, -4, -5]))
