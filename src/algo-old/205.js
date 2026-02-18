var isIsomorphic = function (s, t) {
  const n = s.length
  const map = new Map()
  const map2 = new Map()
  for (let i = 0; i < n; i++) {
    if (!map.has(s[i])) {
      map.set(s[i], t[i])
      if (map2.has(t[i])) return false
      map2.set(t[i], s[i])
    } else {
      if (map.get(s[i]) !== t[i]) return false
    }
  }
  return true
}

console.log(isIsomorphic('egg', 'add')) // true
console.log(isIsomorphic('f11', 'b23')) // false
console.log(isIsomorphic('paper', 'title')) // true
console.log(isIsomorphic('badc', 'baba')) // false
