var residuePrefixes = function (s) {
  let ans = 0
  const set = new Set()
  for (let i = 0; i < s.length; i++) {
    set.add(s[i])
    if (set.size === (i + 1) % 3) {
      ans++
    }
    if (set.size >= 3) {
      break
    }
  }
  return ans
}

console.log(residuePrefixes('abc'))
console.log(residuePrefixes('dd'))
console.log(residuePrefixes('bob'))
