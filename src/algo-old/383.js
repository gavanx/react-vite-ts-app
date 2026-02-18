var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (const c of magazine) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (const c of ransomNote) {
    if (map.has(c)) {
      const cnt = map.get(c)
      if (cnt > 1) {
        map.set(c, cnt - 1)
      } else {
        map.delete(c)
      }
    } else {
      return false
    }
  }
  return true
}

console.log(canConstruct('a', 'b'))
console.log(canConstruct('aa', 'ab'))
console.log(canConstruct('aa', 'aab'))
